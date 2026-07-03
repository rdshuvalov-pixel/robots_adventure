const modules = {
  sorter: {
    id: "sorter",
    title: "Сортировщик",
    emoji: "🧺",
    idea: "Замечаем признаки и раскладываем похожие предметы по группам.",
    introTitle: "Помогаем роботу наводить порядок",
    introText: [
      "Сегодня мы будем помощниками маленького робота.",
      "Он видит много предметов сразу, но пока не понимает, какие из них похожи друг на друга.",
      "Наша задача — заметить важный признак и разложить предметы по местам."
    ],
    theoryText: [
      "Умные программы не делают все волшебством.",
      "Сначала они учатся замечать признаки.",
      "Если у предметов есть что-то общее, их можно объединить в одну группу."
    ],
    outroTitle: "Что мы поняли",
    outroText: [
      "Мы не просто раскладывали картинки.",
      "Мы искали признак, по которому предметы можно объединить.",
      "Так и умные программы учатся замечать, что похоже, а что отличается."
    ],
    rounds: [
      {
        id: "sorter-toys",
        title: "Игрушечный хаос",
        type: "sort",
        prompt: "Разложи игрушки на две группы: где есть колеса и где колес нет.",
        question: "Можно ли было разложить эти же игрушки по-другому?",
        feedback: [
          "Мы нашли очень заметный признак: колеса.",
          "Если у игрушек есть колеса, они похожи по важной детали."
        ],
        aiLink: "Так же и умная программа сначала замечает особенности, которые помогают различать предметы.",
        zones: [
          { id: "wheels", label: "Есть колеса" },
          { id: "no-wheels", label: "Нет колес" }
        ],
        cards: [
          { id: "car", label: "Машинка", icon: "🚗", zone: "wheels" },
          { id: "bus", label: "Автобус", icon: "🚌", zone: "wheels" },
          { id: "bike", label: "Велосипед", icon: "🚲", zone: "wheels" },
          { id: "bunny", label: "Плюшевый зайчик", icon: "🐰", zone: "no-wheels" },
          { id: "doll", label: "Кукла", icon: "🪆", zone: "no-wheels" },
          { id: "ball", label: "Мяч", icon: "⚽", zone: "no-wheels" }
        ]
      },
      {
        id: "sorter-kitchen",
        title: "Кухонная инспекция",
        type: "sort",
        prompt: "Разложи предметы по назначению: для питья, для еды или для готовки.",
        question: "Почему чашка и стакан оказались рядом?",
        feedback: [
          "Мы использовали признак назначения.",
          "Это уже более умный способ сортировки: не по виду, а по роли предмета."
        ],
        aiLink: "Машины тоже могут искать сходство не только по виду, но и по роли объекта.",
        zones: [
          { id: "drink", label: "Для питья" },
          { id: "eat", label: "Для еды" },
          { id: "cook", label: "Для готовки" }
        ],
        cards: [
          { id: "cup", label: "Чашка", icon: "☕", zone: "drink" },
          { id: "glass", label: "Стакан", icon: "🥛", zone: "drink" },
          { id: "plate", label: "Тарелка", icon: "🍽️", zone: "eat" },
          { id: "spoon", label: "Ложка", icon: "🥄", zone: "eat" },
          { id: "pot", label: "Кастрюля", icon: "🍲", zone: "cook" },
          { id: "pan", label: "Сковорода", icon: "🍳", zone: "cook" }
        ]
      },
      {
        id: "sorter-wardrobe",
        title: "Гардероб робота",
        type: "sort",
        prompt: "Разложи вещи по тому, куда их надевают: на голову, на ноги или на тело.",
        question: "Как можно было бы разложить эту одежду еще одним способом?",
        feedback: [
          "Один и тот же набор можно группировать по-разному.",
          "Сегодня мы выбрали признак места на теле."
        ],
        aiLink: "Один и тот же объект может попадать в разные группы в зависимости от выбранного признака.",
        zones: [
          { id: "head", label: "На голову" },
          { id: "legs", label: "На ноги" },
          { id: "body", label: "На тело" }
        ],
        cards: [
          { id: "hat", label: "Шапка", icon: "🧢", zone: "head" },
          { id: "boots", label: "Ботинки", icon: "🥾", zone: "legs" },
          { id: "socks", label: "Носки", icon: "🧦", zone: "legs" },
          { id: "shirt", label: "Футболка", icon: "👕", zone: "body" },
          { id: "scarf", label: "Шарф", icon: "🧣", zone: "body" },
          { id: "shorts", label: "Шорты", icon: "🩳", zone: "body" }
        ]
      }
    ]
  },
  bugHunt: {
    id: "bugHunt",
    title: "Поймай баг",
    emoji: "🛠️",
    idea: "Ищем место, где инструкция ломается, и учимся чинить ее.",
    introTitle: "Становимся ловцами ошибок",
    introText: [
      "Представь, что у нас есть робот-помощник.",
      "Он очень старается, но понимает команды слишком буквально.",
      "Если в инструкции чего-то не хватает или шаги стоят не по порядку, робот обязательно ошибется."
    ],
    theoryText: [
      "Компьютеры и роботы не умеют догадываться так, как люди.",
      "Им нужно объяснять все по шагам.",
      "Сейчас мы будем искать такие ошибки и чинить инструкции."
    ],
    outroTitle: "Что мы поняли",
    outroText: [
      "Мы проверяли, понятны ли команды для робота.",
      "Если инструкция неточная, неполная или стоит не в том порядке, появляется ошибка.",
      "Поэтому человеку важно проверять результат и уточнять шаги."
    ],
    rounds: [
      {
        id: "bug-socks",
        title: "Сборы на прогулку",
        type: "choice",
        prompt: "Посмотри на команды и найди, где робот запутается.",
        note: "Иногда в инструкции все шаги есть, но порядок у них неудачный.",
        steps: ["Надень кроссовки.", "Надень носки."],
        options: [
          "Шаги перепутаны местами.",
          "Здесь все правильно.",
          "Не хватает шапки."
        ],
        correctIndex: 0,
        feedback: [
          "Шаги даны не в том порядке.",
          "Робот выполнит их буквально и получит нелепый результат."
        ],
        question: "Что нужно поменять местами, чтобы все заработало?",
        aiLink: "Для алгоритма порядок действий бывает так же важен, как и сами действия."
      },
      {
        id: "bug-sandwich",
        title: "Идеальный бутерброд",
        type: "choice",
        prompt: "Какой важный шаг забыли сказать роботу?",
        note: "Люди часто мысленно добавляют недостающие мелочи. Робот этого не делает.",
        steps: ["Возьми хлеб.", "Положи сыр на хлеб."],
        options: [
          "Нужно снять упаковку с сыра.",
          "Нужно сначала съесть хлеб.",
          "Нужно сначала помыть стол два раза."
        ],
        correctIndex: 0,
        feedback: [
          "Нужно снять упаковку с сыра.",
          "Без этого инструкция формально выполнена, но результат плохой."
        ],
        question: "Какие еще маленькие шаги человек мог бы случайно забыть?",
        aiLink: "Если важная деталь пропущена, система не всегда восстановит ее сама."
      },
      {
        id: "bug-hide",
        title: "Игра в прятки",
        type: "choice",
        prompt: "Проверь, сможет ли робот безопасно выполнить эти команды.",
        note: "Иногда проблема в том, что в инструкции не хватает маленького, но решающего шага.",
        steps: ["Закрой глаза.", "Сосчитай до 10.", "Иди искать."],
        options: [
          "Забыли сказать: открой глаза.",
          "Нужно сначала подпрыгнуть.",
          "Нужно считать до 100."
        ],
        correctIndex: 0,
        feedback: [
          "Забыли сказать: открой глаза.",
          "Робот начнет искать с закрытыми глазами."
        ],
        question: "Почему этот шаг кажется людям очевидным, а роботу нет?",
        aiLink: "Если важный шаг не указан, система не обязана догадаться о нем сама."
      }
    ]
  }
};

const state = {
  screen: "home",
  moduleId: null,
  roundIndex: 0,
  stage: "intro",
  answers: {},
  sorterPlacements: {}
};

const app = document.getElementById("app");
const homeButton = document.getElementById("home-button");

homeButton.addEventListener("click", () => {
  resetToHome();
});

function resetToHome() {
  state.screen = "home";
  state.moduleId = null;
  state.roundIndex = 0;
  state.stage = "intro";
  render();
}

function startModule(moduleId) {
  state.screen = "module";
  state.moduleId = moduleId;
  state.roundIndex = 0;
  state.stage = "intro";
  state.answers[moduleId] = {};
  state.sorterPlacements[moduleId] = {};
  render();
}

function currentModule() {
  return modules[state.moduleId];
}

function currentRound() {
  const module = currentModule();
  return module.rounds[state.roundIndex];
}

function goToRound(index) {
  state.roundIndex = index;
  state.stage = "round";
  render();
}

function showRoundResult() {
  state.stage = "round-result";
  render();
}

function nextStep() {
  const module = currentModule();
  if (state.stage === "intro") {
    state.stage = "theory";
  } else if (state.stage === "theory") {
    state.stage = "round";
  } else if (state.stage === "round-result") {
    if (state.roundIndex < module.rounds.length - 1) {
      state.roundIndex += 1;
      state.stage = "round";
    } else {
      state.stage = "outro";
    }
  } else if (state.stage === "outro") {
    resetToHome();
    return;
  }
  render();
}

function render() {
  if (state.screen === "home") {
    renderHome();
    return;
  }

  const module = currentModule();
  if (state.stage === "intro") {
    renderModuleIntro(module);
  } else if (state.stage === "theory") {
    renderModuleTheory(module);
  } else if (state.stage === "round") {
    renderRound(module, currentRound());
  } else if (state.stage === "round-result") {
    renderRoundResult(module, currentRound());
  } else if (state.stage === "outro") {
    renderModuleOutro(module);
  }
}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <span class="module-chip">Версия MVP</span>
        <h2>Небольшое приключение для взрослого и ребенка</h2>
        <p>Здесь теория не живет отдельно. Сначала мы вместе читаем короткую подводку, потом выполняем задание, а в конце обсуждаем, что именно заметили и как это связано с AI.</p>
        <div class="hero-callout">
          <div class="companion-inline">
            <div class="companion-face">🤖</div>
            <div>
              <strong>Маленький робот Милы ждет помощи.</strong>
              <p>Ему нужно либо навести порядок, либо понять, где сломалась инструкция.</p>
            </div>
          </div>
        </div>
        <div class="module-grid">
          <button class="module-tile primary" type="button" data-start="sorter">
            <div class="tile-top">
              <small class="module-chip">Игра 1</small>
              <span class="tile-emoji">🧺</span>
            </div>
            <div class="tile-body">
              <h3>Сортировщик</h3>
              <p>Замечаем важный признак и раскладываем предметы по группам.</p>
            </div>
            <span class="tile-footer">Играть</span>
          </button>

          <button class="module-tile secondary" type="button" data-start="bugHunt">
            <div class="tile-top">
              <small class="module-chip">Игра 2</small>
              <span class="tile-emoji">🛠️</span>
            </div>
            <div class="tile-body">
              <h3>Поймай баг</h3>
              <p>Ищем место, где инструкция ломается, и помогаем роботу ее починить.</p>
            </div>
            <span class="tile-footer">Играть</span>
          </button>
        </div>
      </div>
    </section>
  `;

  app.querySelectorAll("[data-start]").forEach((button) => {
    button.addEventListener("click", () => startModule(button.dataset.start));
  });
}

function renderModuleIntro(module) {
  app.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <span class="module-chip">${module.emoji} ${module.title}</span>
          <h2>${module.introTitle}</h2>
        </div>
        <span class="round-chip">3 раунда</span>
      </div>
      <div class="round-layout">
        <div class="plain-block">
          <p>${module.introText.join("</p><p>")}</p>
        </div>
        <div class="sticky-note">
          <h3>Что мы будем делать</h3>
          <p>${module.idea}</p>
          <ul class="bullet-list">
            <li>Слушаем короткую подводку</li>
            <li>Делаем задание руками и глазами</li>
            <li>Обсуждаем, что заметили</li>
          </ul>
        </div>
      </div>
      <div class="button-row">
        <button class="primary-button" type="button" id="next-step">Дальше</button>
      </div>
    </section>
  `;
  document.getElementById("next-step").addEventListener("click", nextStep);
}

function renderModuleTheory(module) {
  app.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <span class="module-chip">${module.emoji} ${module.title}</span>
          <h2>Перед первым заданием</h2>
        </div>
      </div>
      <div class="sticky-note">
        <p>${module.theoryText.join("</p><p>")}</p>
      </div>
      <div class="button-row">
        <button class="primary-button" type="button" id="next-step">Начать первый раунд</button>
      </div>
    </section>
  `;
  document.getElementById("next-step").addEventListener("click", nextStep);
}

function renderRound(module, round) {
  app.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <span class="module-chip">${module.emoji} ${module.title}</span>
          <h2>${round.title}</h2>
        </div>
        <span class="round-chip">Раунд ${state.roundIndex + 1} из ${module.rounds.length}</span>
      </div>
      <div class="round-layout">
        <div class="stage-column">
          <div class="plain-block">
            <p class="round-instruction">${round.note || round.prompt}</p>
          </div>
          ${round.steps ? renderSteps(round.steps) : ""}
          <div class="sticky-note">
            <h3>Задание</h3>
            <p class="round-instruction">${round.prompt}</p>
          </div>
        </div>
        <div class="stage-column">
          ${round.type === "sort" ? renderSortRound(round) : renderChoiceRound(round)}
        </div>
      </div>
    </section>
  `;

  if (round.type === "sort") {
    wireSortRound(round);
  } else {
    wireChoiceRound(round);
  }
}

function renderSteps(steps) {
  return `
    <div class="steps-box">
      <ol>
        ${steps.map((step) => `<li>${step}</li>`).join("")}
      </ol>
    </div>
  `;
}

function renderSortRound(round) {
  const colsClass = round.zones.length === 2 ? "two" : "three";
  return `
    <div class="drop-zone-grid ${colsClass}">
      ${round.zones
        .map(
          (zone) => `
            <div class="drop-zone" data-zone="${zone.id}">
              <div class="zone-title">${zone.label}</div>
            </div>
          `
        )
        .join("")}
    </div>
    <div>
      <h3>Карточки</h3>
      <div class="cards-grid">
        ${round.cards
          .map(
            (card) => `
              <div class="card-tile" draggable="true" data-card="${card.id}">
                <span class="icon">${card.icon}</span>
                <span>${card.label}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
    <div class="button-row">
      <button class="primary-button" type="button" id="check-sort">Проверить</button>
    </div>
  `;
}

function wireSortRound(round) {
  const zoneState = {};
  const cards = new Map(round.cards.map((card) => [card.id, card]));
  let draggedId = null;

  app.querySelectorAll(".card-tile").forEach((cardEl) => {
    cardEl.addEventListener("dragstart", () => {
      draggedId = cardEl.dataset.card;
    });
  });

  app.querySelectorAll(".drop-zone").forEach((zoneEl) => {
    zoneEl.addEventListener("dragover", (event) => {
      event.preventDefault();
      zoneEl.classList.add("active");
    });
    zoneEl.addEventListener("dragleave", () => {
      zoneEl.classList.remove("active");
    });
    zoneEl.addEventListener("drop", (event) => {
      event.preventDefault();
      zoneEl.classList.remove("active");
      if (!draggedId) {
        return;
      }
      const cardEl = app.querySelector(`[data-card="${draggedId}"]`);
      zoneEl.appendChild(cardEl);
      zoneState[draggedId] = zoneEl.dataset.zone;
    });
  });

  document.getElementById("check-sort").addEventListener("click", () => {
    const allPlaced = round.cards.every((card) => zoneState[card.id]);
    if (!allPlaced) {
      window.alert("Сначала разложи все карточки по местам.");
      return;
    }
    const isCorrect = round.cards.every((card) => zoneState[card.id] === cards.get(card.id).zone);
    if (!isCorrect) {
      window.alert("Почти получилось. Давай посмотрим еще раз внимательно.");
      return;
    }
    showRoundResult();
  });
}

function renderChoiceRound(round) {
  return `
    <div class="choice-grid">
      ${round.options
        .map(
          (option, index) => `
            <button class="choice-button" type="button" data-option="${index}">
              ${option}
            </button>
          `
        )
        .join("")}
    </div>
    <div class="button-row">
      <button class="primary-button" type="button" id="check-choice">Проверить</button>
    </div>
  `;
}

function wireChoiceRound(round) {
  let selectedIndex = null;

  app.querySelectorAll(".choice-button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedIndex = Number(button.dataset.option);
      app.querySelectorAll(".choice-button").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
    });
  });

  document.getElementById("check-choice").addEventListener("click", () => {
    if (selectedIndex === null) {
      window.alert("Сначала выбери ответ.");
      return;
    }
    if (selectedIndex !== round.correctIndex) {
      window.alert("Хорошая попытка. Давай перечитаем шаги и попробуем еще раз.");
      return;
    }
    showRoundResult();
  });
}

function renderRoundResult(module, round) {
  const isLast = state.roundIndex === module.rounds.length - 1;
  app.innerHTML = `
    <section class="result-panel">
      <span class="success-badge">✨ Раунд пройден</span>
      <div class="star-row" aria-hidden="true">⭐ ⭐ ⭐</div>
      <div>
        <span class="round-chip">${round.title}</span>
        <h2>Что мы заметили</h2>
      </div>
      <p>${round.feedback.join("</p><p>")}</p>
      <div class="sticky-note">
        <h3>Вопрос для разговора</h3>
        <p class="round-question">${round.question}</p>
      </div>
      <div class="sticky-note">
        <h3>Связка с AI</h3>
        <p>${round.aiLink}</p>
      </div>
      <div class="button-row">
        <button class="primary-button" type="button" id="next-step">${isLast ? "Перейти к итогу" : "Следующий раунд"}</button>
      </div>
    </section>
  `;

  document.getElementById("next-step").addEventListener("click", nextStep);
}

function renderModuleOutro(module) {
  app.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <span class="module-chip">${module.emoji} ${module.title}</span>
          <h2>${module.outroTitle}</h2>
        </div>
      </div>
      <div class="sticky-note">
        <p>${module.outroText.join("</p><p>")}</p>
      </div>
      <div class="companion-card">
        <h3>Можно обсудить вместе</h3>
        <ul class="bullet-list">
          <li>Что было самым легким?</li>
          <li>Что оказалось самым интересным?</li>
          <li>Что бы робот теперь понял лучше?</li>
        </ul>
      </div>
      <div class="button-row">
        <button class="primary-button" type="button" id="next-step">Вернуться в меню</button>
      </div>
    </section>
  `;

  document.getElementById("next-step").addEventListener("click", nextStep);
}

render();
