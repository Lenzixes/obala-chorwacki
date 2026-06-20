// ============================================================
// OBALA — silnik aplikacji
// ============================================================

const STORAGE_KEY = "obala_progress_v1";

const ICONS = {
  abc: "🔤", wave: "👋", book: "📖", fork: "🍴", bed: "🛏️", ferry: "⛴️"
};

let state = {
  progress: {},      // { portId: { lessonsDone: [ids], quizDone: bool, quizScore: n } }
  streak: 0,
  lastVisit: null,
  xp: 0
};

let nav = { portId: null, lessonId: null, lessonIndex: 0 };
let quizState = { portId: null, index: 0, score: 0, answered: false };

// ---------- persistence ----------

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state = Object.assign(state, JSON.parse(raw));
  } catch (e) { /* ignore corrupt storage */ }
  updateStreak();
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (e) { /* storage unavailable, app still works in-memory */ }
}

function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastVisit === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (state.lastVisit === yesterday) {
    state.streak += 1;
  } else if (state.lastVisit !== null) {
    state.streak = 1;
  } else {
    state.streak = 1;
  }
  state.lastVisit = today;
  saveState();
}

function getPortProgress(portId) {
  if (!state.progress[portId]) {
    state.progress[portId] = { lessonsDone: [], quizDone: false, quizScore: 0 };
  }
  return state.progress[portId];
}

function isPortUnlocked(portIndex) {
  if (portIndex === 0) return true;
  const prevPort = COURSE.ports[portIndex - 1];
  return getPortProgress(prevPort.id).quizDone;
}

function addXp(amount) {
  state.xp += amount;
  saveState();
  const el = document.getElementById("xp-count");
  if (el) el.textContent = state.xp;
}

// ---------- screen routing ----------

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

function goHome() {
  renderHome();
  showScreen("screen-home");
}

function goPort(portId) {
  nav.portId = portId;
  renderPort(portId);
  showScreen("screen-port");
}

// ---------- TTS ----------

function speak(text, btnEl) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "hr-HR";
  utter.rate = 0.85;
  if (btnEl) {
    btnEl.classList.add("speaking");
    utter.onend = () => btnEl.classList.remove("speaking");
    utter.onerror = () => btnEl.classList.remove("speaking");
  }
  window.speechSynthesis.speak(utter);
}

// ---------- HOME ----------

function renderHome() {
  document.getElementById("streak-count").textContent = state.streak;
  document.getElementById("xp-count").textContent = state.xp;

  const list = document.getElementById("route-list");
  list.innerHTML = "";

  COURSE.ports.forEach((port, i) => {
    const unlocked = isPortUnlocked(i);
    const prog = getPortProgress(port.id);
    const totalLessons = port.lessons.length;
    const doneLessons = prog.lessonsDone.length;
    const completed = prog.quizDone;

    const card = document.createElement("button");
    card.className = "port-card" + (!unlocked ? " locked" : "") + (completed ? " completed" : "");
    card.disabled = !unlocked;
    card.innerHTML = `
      <div class="port-icon">${unlocked ? (ICONS[port.icon] || "📍") : "🔒"}</div>
      <div class="port-info">
        <h3>${port.name}</h3>
        <p>${port.subtitle}</p>
      </div>
      <div class="port-progress-ring">${completed ? "✓" : doneLessons + "/" + totalLessons}</div>
    `;
    if (unlocked) card.addEventListener("click", () => goPort(port.id));
    list.appendChild(card);
  });
}

// ---------- PORT (lesson list) ----------

function renderPort(portId) {
  const port = COURSE.ports.find(p => p.id === portId);
  const prog = getPortProgress(portId);

  document.getElementById("port-eyebrow").textContent = "Port";
  document.getElementById("port-title").textContent = port.name;

  const list = document.getElementById("lesson-list");
  list.innerHTML = "";

  port.lessons.forEach((lesson, i) => {
    const done = prog.lessonsDone.includes(lesson.id);
    const card = document.createElement("button");
    card.className = "lesson-card" + (done ? " done" : "");
    card.innerHTML = `
      <span class="lesson-card-title">${lesson.title}</span>
      <span class="lesson-card-check">${done ? "✓" : "→"}</span>
    `;
    card.addEventListener("click", () => goLesson(portId, i));
    list.appendChild(card);
  });

  const quizBtn = document.getElementById("quiz-cta");
  const allLessonsDone = port.lessons.every(l => prog.lessonsDone.includes(l.id));
  quizBtn.textContent = prog.quizDone
    ? `Quiz zaliczony (${prog.quizScore}/${port.quiz.length}) — spróbuj ponownie →`
    : "Sprawdź się — quiz portu →";
  quizBtn.disabled = !allLessonsDone;
  quizBtn.style.opacity = allLessonsDone ? "1" : "0.4";
  quizBtn.onclick = () => goQuiz(portId);
}

// ---------- LESSON ----------

function goLesson(portId, lessonIndex) {
  nav.portId = portId;
  nav.lessonIndex = lessonIndex;
  renderLesson();
  showScreen("screen-lesson");
}

function renderLesson() {
  const port = COURSE.ports.find(p => p.id === nav.portId);
  const lesson = port.lessons[nav.lessonIndex];

  document.getElementById("lesson-progress-fill").style.width =
    Math.round(((nav.lessonIndex + 1) / port.lessons.length) * 100) + "%";

  const body = document.getElementById("lesson-body");
  let html = `<h2 class="lesson-title">${lesson.title}</h2>`;

  if (lesson.type === "alphabet") {
    html += `<div class="alpha-grid">`;
    lesson.items.forEach(it => {
      html += `
        <div class="alpha-card">
          <div class="alpha-letter">${it.hr}</div>
          <div class="alpha-info"><strong>${it.pl_sound}</strong><span>np. ${it.example}</span></div>
          <div class="alpha-example">${it.example_pl}</div>
        </div>`;
    });
    html += `</div>`;
  } else if (lesson.type === "info") {
    html += `<div class="info-card">${lesson.content}</div>`;
  } else if (lesson.type === "phrases") {
    html += `<div class="phrase-list">`;
    lesson.items.forEach((it, idx) => {
      html += `
        <div class="phrase-card">
          <div class="phrase-main">
            <span class="phrase-hr">${it.hr}</span>
            <span class="phrase-pl">${it.pl}</span>
            ${it.lit ? `<span class="phrase-lit">${it.lit}</span>` : ""}
          </div>
          <button class="speak-btn" data-text="${it.hr.replace(/"/g, '&quot;')}" aria-label="Odsłuchaj wymowę">🔊</button>
        </div>`;
    });
    html += `</div>`;
  } else if (lesson.type === "grammar") {
    html += `<p class="grammar-text">${lesson.content}</p>`;
    html += `<table class="grammar-table">`;
    lesson.table.forEach(row => {
      html += `<tr><td>${row.pl}</td><td>${row.hr}</td></tr>`;
    });
    html += `</table>`;
    if (lesson.note) html += `<div class="grammar-note">💡 ${lesson.note}</div>`;
  }

  const isLast = nav.lessonIndex === port.lessons.length - 1;
  html += `<button class="lesson-next-btn" id="lesson-next-btn">${isLast ? "Zakończ lekcję" : "Dalej →"}</button>`;

  body.innerHTML = html;

  body.querySelectorAll(".speak-btn").forEach(btn => {
    btn.addEventListener("click", () => speak(btn.dataset.text, btn));
  });

  document.getElementById("lesson-next-btn").addEventListener("click", () => {
    const prog = getPortProgress(nav.portId);
    if (!prog.lessonsDone.includes(lesson.id)) {
      prog.lessonsDone.push(lesson.id);
      addXp(10);
      saveState();
    }
    if (isLast) {
      goPort(nav.portId);
    } else {
      nav.lessonIndex += 1;
      renderLesson();
    }
  });
}

// ---------- QUIZ ----------

function goQuiz(portId) {
  quizState = { portId, index: 0, score: 0, answered: false };
  renderQuiz();
  showScreen("screen-quiz");
}

function renderQuiz() {
  const port = COURSE.ports.find(p => p.id === quizState.portId);
  const q = port.quiz[quizState.index];
  quizState.answered = false;

  document.getElementById("quiz-progress-fill").style.width =
    Math.round((quizState.index / port.quiz.length) * 100) + "%";

  const body = document.getElementById("quiz-body");
  body.innerHTML = `
    <p class="quiz-counter">Pytanie ${quizState.index + 1} z ${port.quiz.length}</p>
    <h2 class="quiz-question">${q.q}</h2>
    <div class="quiz-options" id="quiz-options"></div>
  `;

  const optsEl = document.getElementById("quiz-options");
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = opt;
    btn.addEventListener("click", () => selectAnswer(idx, q, optsEl));
    optsEl.appendChild(btn);
  });
}

function selectAnswer(idx, q, optsEl) {
  if (quizState.answered) return;
  quizState.answered = true;

  const buttons = optsEl.querySelectorAll(".quiz-option");
  buttons.forEach(b => b.classList.add("disabled"));

  const correct = idx === q.correct;
  if (correct) {
    quizState.score += 1;
    buttons[idx].classList.add("correct");
  } else {
    buttons[idx].classList.add("wrong");
    buttons[q.correct].classList.add("correct");
  }

  const body = document.getElementById("quiz-body");
  const feedback = document.createElement("p");
  feedback.className = "quiz-feedback" + (correct ? "" : " wrong");
  feedback.textContent = correct ? "Dobrze! 🎉" : "Nie tym razem — poprawna odpowiedź jest podświetlona.";
  body.appendChild(feedback);

  const port = COURSE.ports.find(p => p.id === quizState.portId);
  const isLast = quizState.index === port.quiz.length - 1;
  const nextBtn = document.createElement("button");
  nextBtn.className = "quiz-next-btn";
  nextBtn.textContent = isLast ? "Zobacz wynik" : "Następne pytanie →";
  nextBtn.addEventListener("click", () => {
    if (isLast) {
      finishQuiz();
    } else {
      quizState.index += 1;
      renderQuiz();
    }
  });
  body.appendChild(nextBtn);
}

function finishQuiz() {
  const port = COURSE.ports.find(p => p.id === quizState.portId);
  const prog = getPortProgress(quizState.portId);
  const passed = quizState.score >= Math.ceil(port.quiz.length * 0.6);

  if (passed) {
    prog.quizDone = true;
    prog.quizScore = quizState.score;
    addXp(25);
  }
  saveState();

  const body = document.getElementById("result-body");
  body.innerHTML = `
    <div class="result-emoji">${passed ? "🌊" : "💪"}</div>
    <h2 class="result-title">${passed ? "Port zdobyty!" : "Jeszcze trochę treningu"}</h2>
    <p class="result-sub">${passed ? "Możesz płynąć dalej wybrzeżem." : "Wróć do lekcji i spróbuj quizu jeszcze raz."}</p>
    <div class="result-score">${quizState.score}/${port.quiz.length}</div>
    <button class="result-btn" id="result-continue">Wróć do mapy portów</button>
    ${!passed ? `<button class="result-btn secondary" id="result-retry">Spróbuj quizu ponownie</button>` : ""}
  `;

  document.getElementById("result-continue").addEventListener("click", goHome);
  const retryBtn = document.getElementById("result-retry");
  if (retryBtn) retryBtn.addEventListener("click", () => goQuiz(quizState.portId));

  showScreen("screen-result");
}

// ---------- back buttons ----------

document.addEventListener("click", (e) => {
  const backBtn = e.target.closest("[data-back]");
  if (!backBtn) return;
  const target = backBtn.dataset.back;
  if (target === "home") goHome();
  else if (target === "port") goPort(nav.portId);
});

// ---------- PWA install ----------

let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const btn = document.getElementById("install-btn");
  btn.hidden = false;
  btn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    btn.hidden = true;
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {
      /* offline support unavailable, app still works online */
    });
  });
}

// ---------- init ----------

loadState();
goHome();
