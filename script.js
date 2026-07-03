const aiTutorial = {
  title: "Что нужно знать про AI",
  intro: [
    "AI — это не волшебство и не живой мозг.",
    "Умная программа учится замечать признаки, выполнять шаги и искать подходящие ответы.",
    "Но она не понимает мир так, как человек."
  ],
  points: [
    {
      title: "AI замечает признаки",
      text: "Иногда умная программа смотрит на предметы и ищет, чем они похожи и чем отличаются."
    },
    {
      title: "Роботу нужны понятные шаги",
      text: "Если шаги неполные, перепутанные или неясные, появляется ошибка."
    },
    {
      title: "Человек очень важен",
      text: "Человек задает вопрос, проверяет ответ и замечает, когда что-то пошло не так."
    }
  ],
  outro:
    "Умная программа умеет многое, но ей все равно нужны понятные признаки, хорошие шаги и внимательный человек рядом."
};

const modules = {
  sorter: {
    id: "sorter",
    title: "Сортировщик",
    emoji: "🧺",
    idea: "Берем один набор карточек и пробуем сортировать его по разным признакам.",
    introTitle: "Помогаем роботу замечать признаки",
    introText: [
      "Сегодня мы будем помогать роботу смотреть на один и тот же набор карточек по-разному.",
      "Иногда мы заметим цвет, иногда размер, а иногда — живое перед нами или неживое.",
      "Карточки останутся теми же, но группы будут меняться."
    ],
    theoryText: [
      "Умные программы не делают все волшебством.",
      "Сначала они учатся замечать признаки.",
      "Если мы смотрим на тот же набор по новому признаку, порядок тоже меняется."
    ],
    outroTitle: "Что мы поняли",
    outroText: [
      "Мы сортировали одни и те же карточки по разным признакам.",
      "Значит, важен не только сам предмет, но и то, на что именно мы смотрим.",
      "Так и умные программы учатся замечать разные особенности одного и того же мира."
    ],
    rounds: [
      {
        id: "sorter-discovery",
        title: "Набор исследователя",
        type: "sort-sequence",
        note: "Один и тот же набор можно раскладывать по-разному. Давай проверим это на практике.",
        cards: [
          { id: "bus", label: "Красный автобус", icon: "🚌" },
          { id: "bike", label: "Синий велосипед", icon: "🚲" },
          { id: "tree", label: "Зеленое дерево", icon: "🌳" },
          { id: "cat", label: "Рыжий кот", icon: "🐈" },
          { id: "apple", label: "Красное яблоко", icon: "🍎" },
          { id: "spoon", label: "Металлическая ложка", icon: "🥄" }
        ],
        criteria: [
          {
            id: "red",
            title: "Сортировка 1",
            note: "Сейчас мы смотрим только на цвет.",
            prompt: "Разложи карточки на две группы: красное и не красное.",
            zones: [
              { id: "red", label: "Красное" },
              { id: "not-red", label: "Не красное" }
            ],
            assignments: {
              bus: "red",
              bike: "not-red",
              tree: "not-red",
              cat: "not-red",
              apple: "red",
              spoon: "not-red"
            },
            feedback: [
              "Мы выбрали только один признак — цвет.",
              "Хотя карточки разные, сейчас нас интересовало только, что красное, а что нет."
            ]
          },
          {
            id: "size",
            title: "Сортировка 2",
            note: "Карточки те же. Теперь меняем признак.",
            prompt: "Разложи карточки на группы: больше Милы и меньше Милы.",
            zones: [
              { id: "bigger", label: "Больше Милы" },
              { id: "smaller", label: "Меньше Милы" }
            ],
            assignments: {
              bus: "bigger",
              bike: "bigger",
              tree: "bigger",
              cat: "smaller",
              apple: "smaller",
              spoon: "smaller"
            },
            feedback: [
              "Мы ничего не меняли в карточках, только стали смотреть на размер.",
              "Из-за этого группы стали совсем другими."
            ]
          },
          {
            id: "living",
            title: "Сортировка 3",
            note: "Последний признак в этом наборе — живое или неживое.",
            prompt: "Разложи карточки на группы: живое и неживое.",
            zones: [
              { id: "living", label: "Живое" },
              { id: "not-living", label: "Неживое" }
            ],
            assignments: {
              bus: "not-living",
              bike: "not-living",
              tree: "living",
              cat: "living",
              apple: "living",
              spoon: "not-living"
            },
            feedback: [
              "Теперь мы уже не смотрели на цвет и не сравнивали размер.",
              "Мы искали другой смысловой признак: живое это или неживое."
            ]
          }
        ],
        feedback: [
          "Мы увидели самую важную вещь в этой игре: один и тот же набор можно разложить по-разному.",
          "Все зависит от того, какой признак мы выбрали."
        ],
        question: "Какой признак больше всего менял группы?",
        aiLink:
          "Когда мы меняем признак, меняется и то, как система видит сходство между предметами."
      },
      {
        id: "sorter-home",
        title: "Комната открытий",
        type: "sort-sequence",
        note: "Теперь попробуем то же самое на предметах дома.",
        cards: [
          { id: "pillow", label: "Подушка", icon: "🛏️" },
          { id: "scarf", label: "Шарф", icon: "🧣" },
          { id: "cup", label: "Чашка", icon: "☕" },
          { id: "boots", label: "Ботинки", icon: "🥾" },
          { id: "spoon2", label: "Ложка", icon: "🥄" },
          { id: "bear", label: "Плюшевый мишка", icon: "🧸" }
        ],
        criteria: [
          {
            id: "soft",
            title: "Сортировка 1",
            note: "Сначала проверим свойства предметов.",
            prompt: "Разложи предметы на мягкие и твердые.",
            zones: [
              { id: "soft", label: "Мягкое" },
              { id: "hard", label: "Твердое" }
            ],
            assignments: {
              pillow: "soft",
              scarf: "soft",
              cup: "hard",
              boots: "hard",
              spoon2: "hard",
              bear: "soft"
            },
            feedback: [
              "Сейчас мы смотрели не на назначение, а на свойство предмета.",
              "Это тоже важный признак для сортировки."
            ]
          },
          {
            id: "wear",
            title: "Сортировка 2",
            note: "А теперь тот же набор — по новому вопросу.",
            prompt: "Разложи предметы на те, которые можно надеть, и те, которые нельзя.",
            zones: [
              { id: "wear", label: "Можно надеть" },
              { id: "no-wear", label: "Нельзя надеть" }
            ],
            assignments: {
              pillow: "no-wear",
              scarf: "wear",
              cup: "no-wear",
              boots: "wear",
              spoon2: "no-wear",
              bear: "no-wear"
            },
            feedback: [
              "Карточки остались теми же, но вопрос изменился.",
              "Из-за этого предметы собрались уже в другие группы."
            ]
          }
        ],
        feedback: [
          "Мы снова увидели, что предмет можно описывать разными способами.",
          "Один и тот же набор меняет порядок, когда меняется признак."
        ],
        question: "Почему шарф и ботинки оказались вместе только во второй сортировке?",
        aiLink: "Иногда система замечает не внешний вид, а назначение предмета."
      }
    ]
  },
  bugHunt: {
    id: "bugHunt",
    title: "Поймай баг",
    emoji: "🛠️",
    idea: "Сначала находим ошибку, а потом помогаем роботу починить инструкцию.",
    introTitle: "Становимся ловцами ошибок",
    introText: [
      "У нас есть робот-помощник. Он старается, но понимает команды слишком буквально.",
      "Если что-то забыть, перепутать или сказать неясно, инструкция ломается.",
      "Наша задача — сначала заметить ошибку, а потом починить план."
    ],
    theoryText: [
      "Компьютеры и роботы не умеют догадываться так, как люди.",
      "Им нужны понятные шаги.",
      "Поэтому в этой игре мы будем не только ловить баг, но и чинить алгоритм."
    ],
    outroTitle: "Что мы поняли",
    outroText: [
      "Мы сегодня не только искали ошибки, но и исправляли инструкции.",
      "Значит, хороший алгоритм — это понятные, полные и аккуратно расположенные шаги.",
      "Даже умной системе нужна помощь человека, чтобы задача была описана хорошо."
    ],
    rounds: [
      {
        id: "bug-socks",
        title: "Сборы на прогулку",
        type: "bug-hunt",
        note: "Иногда в инструкции все шаги есть, но порядок у них неудачный.",
        steps: ["Надень кроссовки.", "Надень носки."],
        detectPrompt: "Посмотри на команды и найди, где робот запутается.",
        detectOptions: [
          "Шаги перепутаны местами.",
          "Здесь все правильно.",
          "Не хватает шапки."
        ],
        detectCorrectIndex: 0,
        fixPrompt: "Какой порядок шагов теперь будет правильным?",
        fixOptions: [
          "Надень носки -> Надень кроссовки",
          "Надень кроссовки -> Надень носки",
          "Сначала подпрыгни -> Потом надень носки"
        ],
        fixCorrectIndex: 0,
        feedback: [
          "Мы нашли ошибку в порядке шагов.",
          "Потом мы починили инструкцию, и робот уже не запутался бы."
        ],
        question: "Почему порядок шагов оказался таким важным?",
        aiLink: "Для алгоритма порядок действий бывает так же важен, как и сами действия."
      },
      {
        id: "bug-sandwich",
        title: "Идеальный бутерброд",
        type: "bug-hunt",
        note: "Люди часто мысленно добавляют недостающие мелочи. Робот этого не делает.",
        steps: ["Возьми хлеб.", "Положи сыр на хлеб."],
        detectPrompt: "Какой важный шаг забыли сказать роботу?",
        detectOptions: [
          "Нужно снять упаковку с сыра.",
          "Нужно сначала съесть хлеб.",
          "Нужно сначала помыть стол два раза."
        ],
        detectCorrectIndex: 0,
        fixPrompt: "Какую версию инструкции лучше дать роботу?",
        fixOptions: [
          "Возьми хлеб -> Сними упаковку с сыра -> Положи сыр на хлеб",
          "Возьми хлеб -> Положи сыр на хлеб -> Спрячь сыр",
          "Съешь хлеб -> Возьми сыр -> Уходи"
        ],
        fixCorrectIndex: 0,
        feedback: [
          "Мы заметили пропущенный шаг.",
          "Когда мы добавили его, инструкция стала полной и понятной."
        ],
        question: "Почему человеку легко догадаться про упаковку, а роботу нет?",
        aiLink: "Если важная деталь пропущена, система не всегда восстановит ее сама."
      },
      {
        id: "bug-hide",
        title: "Игра в прятки",
        type: "bug-hunt",
        note: "Иногда проблема в том, что в инструкции не хватает маленького, но решающего шага.",
        steps: ["Закрой глаза.", "Сосчитай до 10.", "Иди искать."],
        detectPrompt: "Проверь, сможет ли робот безопасно выполнить эти команды.",
        detectOptions: [
          "Забыли сказать: открой глаза.",
          "Нужно сначала подпрыгнуть.",
          "Нужно считать до 100."
        ],
        detectCorrectIndex: 0,
        fixPrompt: "Какую версию инструкции теперь выберем?",
        fixOptions: [
          "Закрой глаза -> Сосчитай до 10 -> Открой глаза -> Иди искать",
          "Закрой глаза -> Иди искать -> Сосчитай до 10",
          "Открой глаза -> Иди домой -> Сосчитай до 10"
        ],
        fixCorrectIndex: 0,
        feedback: [
          "Мы поймали баг: в инструкции не хватало важного шага.",
          "После исправления робот уже смог бы искать безопасно."
        ],
        question: "Какой шаг оказался самым важным в этом исправлении?",
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
  criteriaIndex: 0,
  roundSubstage: "play",
  answers: {},
  sorterPlacements: {},
  tutorialBackState: null
};

const app = document.getElementById("app");
const homeButton = document.getElementById("home-button");

homeButton.addEventListener("click", () => {
  resetToHome();
});

function snapshotState() {
  return {
    screen: state.screen,
    moduleId: state.moduleId,
    roundIndex: state.roundIndex,
    stage: state.stage,
    criteriaIndex: state.criteriaIndex,
    roundSubstage: state.roundSubstage
  };
}

function restoreState(snapshot) {
  state.screen = snapshot.screen;
  state.moduleId = snapshot.moduleId;
  state.roundIndex = snapshot.roundIndex;
  state.stage = snapshot.stage;
  state.criteriaIndex = snapshot.criteriaIndex;
  state.roundSubstage = snapshot.roundSubstage;
  render();
}

function openTutorial() {
  state.tutorialBackState = snapshotState();
  state.screen = "tutorial";
  render();
}

function closeTutorial() {
  if (state.tutorialBackState) {
    const back = state.tutorialBackState;
    state.tutorialBackState = null;
    restoreState(back);
    return;
  }
  resetToHome();
}

function resetToHome() {
  state.screen = "home";
  state.moduleId = null;
  state.roundIndex = 0;
  state.stage = "intro";
  state.criteriaIndex = 0;
  state.roundSubstage = "play";
  render();
}

function startModule(moduleId) {
  state.screen = "module";
  state.moduleId = moduleId;
  state.roundIndex = 0;
  state.stage = "intro";
  state.criteriaIndex = 0;
  state.roundSubstage = "play";
  render();
}

function currentModule() {
  return modules[state.moduleId];
}

function currentRound() {
  const module = currentModule();
  return module.rounds[state.roundIndex];
}

function currentCriterion(round) {
  return round.criteria[state.criteriaIndex];
}

function nextStep() {
  const module = currentModule();
  const round = currentRound();

  if (state.stage === "intro") {
    state.stage = "theory";
  } else if (state.stage === "theory") {
    state.stage = "round";
    state.roundSubstage = round.type === "bug-hunt" ? "detect" : "play";
    state.criteriaIndex = 0;
  } else if (state.stage === "round" && round.type === "sort-sequence" && state.roundSubstage === "criteria-result") {
    state.criteriaIndex += 1;
    state.roundSubstage = "play";
  } else if (state.stage === "round-result") {
    if (state.roundIndex < module.rounds.length - 1) {
      state.roundIndex += 1;
      state.stage = "round";
      state.criteriaIndex = 0;
      state.roundSubstage = module.rounds[state.roundIndex].type === "bug-hunt" ? "detect" : "play";
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

  if (state.screen === "tutorial") {
    renderTutorial();
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
        <span class="module-chip">Фаза 2</span>
        <h2>Небольшое приключение для взрослого и ребенка</h2>
        <p>Здесь теория не живет отдельно. Сначала мы читаем короткую подводку, потом выполняем задание, а в конце обсуждаем, что заметили и как это связано с AI.</p>
        <div class="hero-callout">
          <div class="companion-inline">
            <div class="companion-face">🤖</div>
            <div>
              <strong>Маленький робот Милы ждет помощи.</strong>
              <p>Теперь он умеет не только учиться, но и смотреть на один и тот же набор карточек под разными углами.</p>
            </div>
          </div>
        </div>
        <div class="action-row">
          <button class="secondary-button" type="button" id="open-tutorial">Что нужно знать про AI</button>
        </div>
        <div class="module-grid">
          <button class="module-tile primary" type="button" data-start="sorter">
            <div class="tile-top">
              <small class="module-chip">Игра 1</small>
              <span class="tile-emoji">🧺</span>
            </div>
            <div class="tile-body">
              <h3>Сортировщик</h3>
              <p>Один набор карточек можно раскладывать по разным признакам. В этом и есть фокус игры.</p>
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
              <p>Сначала находим ошибку, потом чиним инструкцию и помогаем роботу сделать все правильно.</p>
            </div>
            <span class="tile-footer">Играть</span>
          </button>
        </div>
      </div>
    </section>
  `;

  document.getElementById("open-tutorial").addEventListener("click", openTutorial);
  app.querySelectorAll("[data-start]").forEach((button) => {
    button.addEventListener("click", () => startModule(button.dataset.start));
  });
}

function renderTutorial() {
  app.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <span class="module-chip">AI tutorial</span>
          <h2>${aiTutorial.title}</h2>
        </div>
      </div>
      <div class="sticky-note">
        <p>${aiTutorial.intro.join("</p><p>")}</p>
      </div>
      <div class="tutorial-grid">
        ${aiTutorial.points
          .map(
            (point) => `
              <div class="tutorial-card">
                <h3>${point.title}</h3>
                <p>${point.text}</p>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="sticky-note">
        <p>${aiTutorial.outro}</p>
      </div>
      <div class="button-row">
        <button class="primary-button" type="button" id="close-tutorial">Вернуться</button>
      </div>
    </section>
  `;

  document.getElementById("close-tutorial").addEventListener("click", closeTutorial);
}

function renderModuleIntro(module) {
  app.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <span class="module-chip">${module.emoji} ${module.title}</span>
          <h2>${module.introTitle}</h2>
        </div>
        <span class="round-chip">${module.rounds.length} раунда</span>
      </div>
      <div class="round-layout">
        <div class="plain-block">
          <p>${module.introText.join("</p><p>")}</p>
        </div>
        <div class="sticky-note">
          <h3>Что мы будем делать</h3>
          <p>${module.idea}</p>
          <ul class="bullet-list">
            <li>Сначала слушаем короткую подводку</li>
            <li>Потом выполняем задание</li>
            <li>И обязательно обсуждаем результат</li>
          </ul>
        </div>
      </div>
      <div class="button-row">
        <button class="secondary-button" type="button" id="open-tutorial">Вспомнить про AI</button>
        <button class="primary-button" type="button" id="next-step">Дальше</button>
      </div>
    </section>
  `;
  document.getElementById("open-tutorial").addEventListener("click", openTutorial);
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
        <button class="secondary-button" type="button" id="open-tutorial">Что надо помнить про AI</button>
        <button class="primary-button" type="button" id="next-step">Начать первый раунд</button>
      </div>
    </section>
  `;
  document.getElementById("open-tutorial").addEventListener("click", openTutorial);
  document.getElementById("next-step").addEventListener("click", nextStep);
}

function renderRound(module, round) {
  if (round.type === "sort-sequence") {
    renderSortSequenceRound(module, round);
    return;
  }

  renderBugHuntRound(module, round);
}

function renderSortSequenceRound(module, round) {
  const criterion = currentCriterion(round);
  const criteriaTotal = round.criteria.length;

  if (state.roundSubstage === "criteria-result") {
    app.innerHTML = `
      <section class="result-panel">
        <span class="success-badge">✨ Сортировка ${state.criteriaIndex + 1} из ${criteriaTotal} готова</span>
        <div>
          <span class="round-chip">${round.title}</span>
          <h2>${criterion.title}</h2>
        </div>
        <p>${criterion.feedback.join("</p><p>")}</p>
        <div class="sticky-note">
          <h3>Что изменилось</h3>
          <p>Карточки остались теми же, но мы выбрали новый признак и поэтому получили другой порядок.</p>
        </div>
        <div class="button-row">
          <button class="primary-button" type="button" id="next-step">Следующий признак</button>
        </div>
      </section>
    `;
    document.getElementById("next-step").addEventListener("click", nextStep);
    return;
  }

  app.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <span class="module-chip">${module.emoji} ${module.title}</span>
          <h2>${round.title}</h2>
        </div>
        <span class="round-chip">Раунд ${state.roundIndex + 1} из ${module.rounds.length}</span>
      </div>
      <div class="stage-banner">
        <span class="stage-chip">${criterion.title}</span>
        <p>Признак ${state.criteriaIndex + 1} из ${criteriaTotal}</p>
      </div>
      <div class="round-layout">
        <div class="stage-column">
          <div class="plain-block">
            <p class="round-instruction">${criterion.note}</p>
          </div>
          <div class="sticky-note">
            <h3>Задание</h3>
            <p class="round-instruction">${criterion.prompt}</p>
          </div>
        </div>
        <div class="stage-column">
          ${renderSortPlay(round.cards, criterion)}
        </div>
      </div>
    </section>
  `;

  wireSortRound(round, criterion);
}

function renderSortPlay(cards, criterion) {
  const colsClass = criterion.zones.length === 2 ? "two" : "three";
  return `
    <div class="drop-zone-grid ${colsClass}">
      ${criterion.zones
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
        ${cards
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

function wireSortRound(round, criterion) {
  const placementKey = `${round.id}:${criterion.id}`;
  state.sorterPlacements[placementKey] = {};
  const zoneState = state.sorterPlacements[placementKey];
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

    const isCorrect = round.cards.every((card) => zoneState[card.id] === criterion.assignments[card.id]);
    if (!isCorrect) {
      window.alert("Почти получилось. Давай посмотрим еще раз на выбранный признак.");
      return;
    }

    if (state.criteriaIndex < round.criteria.length - 1) {
      state.roundSubstage = "criteria-result";
      render();
      return;
    }

    state.stage = "round-result";
    render();
  });
}

function renderBugHuntRound(module, round) {
  const isDetect = state.roundSubstage === "detect";
  const prompt = isDetect ? round.detectPrompt : round.fixPrompt;
  const options = isDetect ? round.detectOptions : round.fixOptions;
  const note = isDetect ? round.note : "Отлично, баг найден. Теперь давай поможем роботу исправить инструкцию.";
  const buttonLabel = isDetect ? "Найти баг" : "Починить план";

  app.innerHTML = `
    <section class="panel">
      <div class="panel-header">
        <div>
          <span class="module-chip">${module.emoji} ${module.title}</span>
          <h2>${round.title}</h2>
        </div>
        <span class="round-chip">Раунд ${state.roundIndex + 1} из ${module.rounds.length}</span>
      </div>
      <div class="stage-banner">
        <span class="stage-chip">${isDetect ? "Шаг 1" : "Шаг 2"}</span>
        <p>${isDetect ? "Сначала замечаем ошибку" : "Теперь чиним инструкцию"}</p>
      </div>
      <div class="round-layout">
        <div class="stage-column">
          <div class="plain-block">
            <p class="round-instruction">${note}</p>
          </div>
          <div class="steps-box">
            <ol>
              ${round.steps.map((step) => `<li>${step}</li>`).join("")}
            </ol>
          </div>
          <div class="sticky-note">
            <h3>${isDetect ? "Найди баг" : "Почини инструкцию"}</h3>
            <p class="round-instruction">${prompt}</p>
          </div>
        </div>
        <div class="stage-column">
          <div class="choice-grid">
            ${options
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
            <button class="primary-button" type="button" id="check-choice">${buttonLabel}</button>
          </div>
        </div>
      </div>
    </section>
  `;

  wireBugHuntRound(round, isDetect);
}

function wireBugHuntRound(round, isDetect) {
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

    const correctIndex = isDetect ? round.detectCorrectIndex : round.fixCorrectIndex;
    if (selectedIndex !== correctIndex) {
      window.alert(isDetect ? "Хорошая попытка. Давай перечитаем шаги и попробуем еще раз." : "Почти. Давай подумаем, какая версия плана действительно чинит ошибку.");
      return;
    }

    if (isDetect) {
      state.roundSubstage = "fix";
      render();
      return;
    }

    state.stage = "round-result";
    render();
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
      <div class="sticky-note">
        <h3>Можно обсудить вместе</h3>
        <ul class="bullet-list">
          <li>Что оказалось самым интересным?</li>
          <li>Где группы менялись сильнее всего?</li>
          <li>Какой баг было легче всего починить?</li>
        </ul>
      </div>
      <div class="button-row">
        <button class="secondary-button" type="button" id="open-tutorial">Вернуться к tutorial</button>
        <button class="primary-button" type="button" id="next-step">Вернуться в меню</button>
      </div>
    </section>
  `;

  document.getElementById("open-tutorial").addEventListener("click", openTutorial);
  document.getElementById("next-step").addEventListener("click", nextStep);
}

render();
