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
    idea: "Берем один набор карточек и пробуем сортировать его по разным, все более хитрым признакам.",
    introTitle: "Помогаем роботу замечать признаки",
    introText: [
      "Сегодня мы будем помогать роботу смотреть на один и тот же набор карточек по-разному.",
      "Сначала признаки будут простыми, а потом станут чуть хитрее: назначение, сезон, среда, роль и свойства.",
      "Карточки останутся теми же, но группы будут меняться снова и снова."
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
        id: "sorter-transport",
        title: "Транспортная станция",
        type: "sort-sequence",
        note: "На транспорте особенно хорошо видно, как один и тот же набор можно раскладывать совсем по-разному.",
        cards: [
          { id: "bus", label: "Автобус", icon: "🚌" },
          { id: "truck", label: "Грузовик", icon: "🚚" },
          { id: "boat", label: "Корабль", icon: "🚢" },
          { id: "plane", label: "Самолет", icon: "✈️" },
          { id: "bike", label: "Велосипед", icon: "🚲" },
          { id: "helicopter", label: "Вертолет", icon: "🚁" }
        ],
        criteria: [
          {
            id: "by-place",
            title: "Сортировка 1",
            note: "Сначала смотрим, где транспорт передвигается.",
            prompt: "Разложи транспорт по среде: по земле, по воде и по воздуху.",
            zones: [
              { id: "land", label: "По земле" },
              { id: "water", label: "По воде" },
              { id: "air", label: "По воздуху" }
            ],
            assignments: {
              bus: "land",
              truck: "land",
              boat: "water",
              plane: "air",
              bike: "land",
              helicopter: "air"
            },
            feedback: [
              "Сейчас главным была среда передвижения.",
              "Мы не смотрели на размер и не думали, кого везет транспорт."
            ]
          },
          {
            id: "by-job",
            title: "Сортировка 2",
            note: "Теперь те же карточки, но новый вопрос: кого или что этот транспорт перевозит?",
            prompt: "Разложи транспорт на пассажирский и грузовой.",
            zones: [
              { id: "people", label: "Пассажирский" },
              { id: "cargo", label: "Грузовой" }
            ],
            assignments: {
              bus: "people",
              truck: "cargo",
              boat: "cargo",
              plane: "people",
              bike: "people",
              helicopter: "people"
            },
            feedback: [
              "Мы ничего не меняли в карточках, только стали смотреть на роль транспорта.",
              "Из-за этого группы стали совсем другими."
            ]
          },
          {
            id: "by-wheels",
            title: "Сортировка 3",
            note: "А теперь самый хитрый вопрос: есть ли у транспорта колеса?",
            prompt: "Разложи транспорт на тот, у которого есть колеса, и тот, у которого колес нет.",
            zones: [
              { id: "wheels", label: "Есть колеса" },
              { id: "no-wheels", label: "Нет колес" }
            ],
            assignments: {
              bus: "wheels",
              truck: "wheels",
              boat: "no-wheels",
              plane: "no-wheels",
              bike: "wheels",
              helicopter: "no-wheels"
            },
            feedback: [
              "Теперь главным стало устройство транспорта.",
              "Оказывается, и здесь тот же набор можно разделить по-новому."
            ]
          }
        ],
        feedback: [
          "Один и тот же транспорт можно описывать по месту, по роли и по устройству.",
          "Это и есть главный фокус сортировщика."
        ],
        question: "Какой из трех признаков здесь оказался самым неожиданным?",
        aiLink: "Когда мы меняем признак, меняется и то, как система видит сходство между предметами."
      },
      {
        id: "sorter-wardrobe",
        title: "Шкаф Милы",
        type: "sort-sequence",
        note: "Одежду можно сортировать не только по тому, что это за вещь, но и по сезону, месту и назначению.",
        cards: [
          { id: "hat", label: "Шапка", icon: "🧢" },
          { id: "boots", label: "Ботинки", icon: "🥾" },
          { id: "shirt", label: "Футболка", icon: "👕" },
          { id: "scarf", label: "Шарф", icon: "🧣" },
          { id: "shorts", label: "Шорты", icon: "🩳" },
          { id: "mittens", label: "Варежки", icon: "🧤" }
        ],
        criteria: [
          {
            id: "by-season",
            title: "Сортировка 1",
            note: "Сначала смотрим, для какого времени года эти вещи больше подходят.",
            prompt: "Разложи одежду на летнюю и теплую.",
            zones: [
              { id: "summer", label: "Летняя" },
              { id: "warm", label: "Теплая" }
            ],
            assignments: {
              hat: "warm",
              boots: "warm",
              shirt: "summer",
              scarf: "warm",
              shorts: "summer",
              mittens: "warm"
            },
            feedback: [
              "Сейчас мы смотрели на сезон.",
              "То есть на то, когда вещь особенно нужна."
            ]
          },
          {
            id: "by-place",
            title: "Сортировка 2",
            note: "Теперь тот же набор — по месту на теле.",
            prompt: "Разложи одежду на то, что надевают на голову, на руки, на ноги и на тело.",
            zones: [
              { id: "head", label: "На голову" },
              { id: "hands", label: "На руки" },
              { id: "legs", label: "На ноги" },
              { id: "body", label: "На тело" }
            ],
            assignments: {
              hat: "head",
              boots: "legs",
              shirt: "body",
              scarf: "body",
              shorts: "legs",
              mittens: "hands"
            },
            feedback: [
              "Здесь групп стало уже больше, потому что мест на теле тоже больше.",
              "Это более сложная сортировка, чем просто две корзины."
            ]
          },
          {
            id: "by-fast-walk",
            title: "Сортировка 3",
            note: "Последний вопрос чуть хитрее и связан уже с действием.",
            prompt: "Разложи вещи на те, без которых можно быстро выбежать летом, и на те, которые нужны в холодный день.",
            zones: [
              { id: "quick", label: "Быстро летом" },
              { id: "cold", label: "В холодный день" }
            ],
            assignments: {
              hat: "cold",
              boots: "cold",
              shirt: "quick",
              scarf: "cold",
              shorts: "quick",
              mittens: "cold"
            },
            feedback: [
              "Теперь мы уже смотрели не просто на вещь, а на ситуацию.",
              "Это еще один способ группировать тот же набор."
            ]
          }
        ],
        feedback: [
          "Одежду можно сортировать по сезону, по месту и даже по ситуации.",
          "Это уже более сложный уровень, потому что признаки стали менее очевидными."
        ],
        question: "Какой признак здесь был самым сложным: сезон, место или ситуация?",
        aiLink: "Иногда система замечает не внешний вид, а назначение предмета или ситуацию."
      },
      {
        id: "sorter-kitchen",
        title: "Кухонная миссия",
        type: "sort-sequence",
        note: "На кухне предметы можно делить уже не только по виду, а по роли в целом действии.",
        cards: [
          { id: "cup", label: "Чашка", icon: "☕" },
          { id: "plate", label: "Тарелка", icon: "🍽️" },
          { id: "pot", label: "Кастрюля", icon: "🍲" },
          { id: "pan", label: "Сковорода", icon: "🍳" },
          { id: "spoon", label: "Ложка", icon: "🥄" },
          { id: "glass", label: "Стакан", icon: "🥛" }
        ],
        criteria: [
          {
            id: "by-job",
            title: "Сортировка 1",
            note: "Сначала выберем самый логичный признак — назначение.",
            prompt: "Разложи предметы на те, что нужны для питья, еды и готовки.",
            zones: [
              { id: "drink", label: "Для питья" },
              { id: "eat", label: "Для еды" },
              { id: "cook", label: "Для готовки" }
            ],
            assignments: {
              cup: "drink",
              plate: "eat",
              pot: "cook",
              pan: "cook",
              spoon: "eat",
              glass: "drink"
            },
            feedback: [
              "Здесь мы использовали роль предмета на кухне.",
              "Это уже умнее, чем просто делить по цвету."
            ]
          },
          {
            id: "by-material",
            title: "Сортировка 2",
            note: "А теперь тот же набор, но смотрим на материал.",
            prompt: "Разложи предметы на металлические и стеклянные или керамические.",
            zones: [
              { id: "metal", label: "Металл" },
              { id: "other", label: "Стекло или керамика" }
            ],
            assignments: {
              cup: "other",
              plate: "other",
              pot: "metal",
              pan: "metal",
              spoon: "metal",
              glass: "other"
            },
            feedback: [
              "Назначение исчезло, а материал вышел на первое место.",
              "Тот же набор снова собрался иначе."
            ]
          },
          {
            id: "by-heat",
            title: "Сортировка 3",
            note: "Последний признак связан уже с действием на кухне.",
            prompt: "Разложи предметы на те, которые можно ставить на огонь, и те, которые нельзя.",
            zones: [
              { id: "fire", label: "Можно на огонь" },
              { id: "no-fire", label: "Нельзя на огонь" }
            ],
            assignments: {
              cup: "no-fire",
              plate: "no-fire",
              pot: "fire",
              pan: "fire",
              spoon: "no-fire",
              glass: "no-fire"
            },
            feedback: [
              "Здесь уже нужно представить настоящее действие, а не только посмотреть на предмет.",
              "Это делает сортировку сложнее и интереснее."
            ]
          }
        ],
        feedback: [
          "Кухонные предметы можно раскладывать по назначению, по материалу и по тому, как они участвуют в готовке.",
          "Это уже более логическая сортировка, чем просто видимые признаки."
        ],
        question: "Какой из трех признаков здесь требует уже не только смотреть, но и представлять действие?",
        aiLink: "Иногда система видит одни и те же объекты по-разному в зависимости от того, какой признак сейчас важнее."
      },
      {
        id: "sorter-creatures",
        title: "Обитатели планеты",
        type: "sort-sequence",
        note: "Животные хорошо подходят для более сложной сортировки: тут есть и внешний признак, и среда, и питание.",
        cards: [
          { id: "eagle", label: "Орел", icon: "🦅" },
          { id: "cow", label: "Корова", icon: "🐄" },
          { id: "shark", label: "Акула", icon: "🦈" },
          { id: "duck", label: "Утка", icon: "🦆" },
          { id: "wolf", label: "Волк", icon: "🐺" },
          { id: "butterfly", label: "Бабочка", icon: "🦋" }
        ],
        criteria: [
          {
            id: "by-wings",
            title: "Сортировка 1",
            note: "Сначала используем самый заметный внешний признак.",
            prompt: "Разложи животных на тех, у кого есть крылья, и тех, у кого их нет.",
            zones: [
              { id: "wings", label: "Есть крылья" },
              { id: "no-wings", label: "Нет крыльев" }
            ],
            assignments: {
              eagle: "wings",
              cow: "no-wings",
              shark: "no-wings",
              duck: "wings",
              wolf: "no-wings",
              butterfly: "wings"
            },
            feedback: [
              "Сейчас мы использовали внешний признак, который легко заметить.",
              "Это удобный первый шаг для сортировки животных."
            ]
          },
          {
            id: "by-home",
            title: "Сортировка 2",
            note: "Теперь признак уже сложнее: где животное в основном живет.",
            prompt: "Разложи животных по среде: суша, вода и воздух.",
            zones: [
              { id: "land", label: "Суша" },
              { id: "water", label: "Вода" },
              { id: "air", label: "Воздух" }
            ],
            assignments: {
              eagle: "air",
              cow: "land",
              shark: "water",
              duck: "water",
              wolf: "land",
              butterfly: "air"
            },
            feedback: [
              "Теперь внешний вид уже не был главным.",
              "Нужно было подумать про среду жизни каждого животного."
            ]
          },
          {
            id: "by-food",
            title: "Сортировка 3",
            note: "Последний признак самый логический: кто чем питается.",
            prompt: "Разложи животных на хищников и не хищников.",
            zones: [
              { id: "predator", label: "Хищники" },
              { id: "not-predator", label: "Не хищники" }
            ],
            assignments: {
              eagle: "predator",
              cow: "not-predator",
              shark: "predator",
              duck: "not-predator",
              wolf: "predator",
              butterfly: "not-predator"
            },
            feedback: [
              "Это уже не очень заметный признак глазами.",
              "Здесь пришлось вспоминать, как животное живет и чем питается."
            ]
          }
        ],
        feedback: [
          "Животных можно раскладывать по внешнему виду, по среде и по питанию.",
          "Это уже высокий уровень сортировки, потому что признаки становятся более смысловыми."
        ],
        question: "Какой признак здесь был самым сложным: крылья, среда или питание?",
        aiLink: "Некоторые признаки видны сразу, а некоторые требуют уже более глубокого понимания объекта."
      },
      {
        id: "sorter-market",
        title: "Продуктовая корзина",
        type: "sort-sequence",
        note: "Этот уровень сложнее, потому что здесь придется думать и про вкус, и про происхождение, и про способ еды.",
        cards: [
          { id: "apple", label: "Яблоко", icon: "🍎" },
          { id: "carrot", label: "Морковь", icon: "🥕" },
          { id: "cookie", label: "Печенье", icon: "🍪" },
          { id: "cucumber", label: "Огурец", icon: "🥒" },
          { id: "banana", label: "Банан", icon: "🍌" },
          { id: "potato", label: "Картошка", icon: "🥔" }
        ],
        criteria: [
          {
            id: "by-sweet",
            title: "Сортировка 1",
            note: "Сначала признак вкуса.",
            prompt: "Разложи продукты на сладкие и не сладкие.",
            zones: [
              { id: "sweet", label: "Сладкие" },
              { id: "not-sweet", label: "Не сладкие" }
            ],
            assignments: {
              apple: "sweet",
              carrot: "not-sweet",
              cookie: "sweet",
              cucumber: "not-sweet",
              banana: "sweet",
              potato: "not-sweet"
            },
            feedback: [
              "Сейчас главным был вкус.",
              "Это быстрый, но не всегда самый точный способ сортировки."
            ]
          },
          {
            id: "by-grow",
            title: "Сортировка 2",
            note: "Теперь думаем, где растет продукт.",
            prompt: "Разложи продукты на те, что растут на дереве, в земле и не растут сами.",
            zones: [
              { id: "tree", label: "На дереве" },
              { id: "ground", label: "В земле" },
              { id: "made", label: "Сделано людьми" }
            ],
            assignments: {
              apple: "tree",
              carrot: "ground",
              cookie: "made",
              cucumber: "ground",
              banana: "tree",
              potato: "ground"
            },
            feedback: [
              "Здесь уже нельзя полагаться только на вкус.",
              "Нужно подумать о происхождении каждого продукта."
            ]
          },
          {
            id: "by-raw",
            title: "Сортировка 3",
            note: "Последний признак связан уже со способом еды.",
            prompt: "Разложи продукты на те, что можно есть сырыми, и те, что обычно сначала готовят.",
            zones: [
              { id: "raw", label: "Можно сырым" },
              { id: "cook", label: "Обычно готовят" }
            ],
            assignments: {
              apple: "raw",
              carrot: "raw",
              cookie: "raw",
              cucumber: "raw",
              banana: "raw",
              potato: "cook"
            },
            feedback: [
              "Теперь нам пришлось подумать не о вкусе и не о месте роста, а о привычном действии.",
              "Это уже очень жизненный способ сортировки."
            ]
          }
        ],
        feedback: [
          "На продуктах особенно хорошо видно, как признаки могут быть совсем разного типа.",
          "Вкус, происхождение и способ еды дают три разных порядка."
        ],
        question: "Какой признак здесь оказался самым запутанным и почему?",
        aiLink: "Когда признаки становятся более смысловыми, системе тоже труднее, и ей нужны хорошие примеры."
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
        id: "bug-card",
        title: "Открытка для бабушки",
        type: "bug-hunt",
        note: "Иногда в плане все шаги есть, но они стоят в плохом порядке.",
        steps: ["Возьми фломастеры.", "Нарисуй цветок.", "Открой альбом.", "Подпиши открытку."],
        detectPrompt: "Посмотри на план и найди, где робот запутается.",
        detectOptions: [
          "Шаги перепутаны местами.",
          "Здесь все идеально.",
          "Не хватает холодильника."
        ],
        detectCorrectIndex: 0,
        fixPrompt: "Какой порядок шагов теперь будет правильным?",
        fixOptions: [
          "Открой альбом -> Возьми фломастеры -> Нарисуй цветок -> Подпиши открытку",
          "Возьми фломастеры -> Подпиши открытку -> Открой альбом -> Нарисуй цветок",
          "Нарисуй цветок -> Открой альбом -> Убери альбом"
        ],
        fixCorrectIndex: 0,
        feedback: [
          "Мы нашли ошибку в порядке шагов.",
          "Когда бумага появляется слишком поздно, робот начинает рисовать не там, где нужно."
        ],
        question: "Почему бумага должна появиться раньше рисунка?",
        aiLink: "Для алгоритма порядок действий бывает так же важен, как и сами действия."
      },
      {
        id: "bug-lunchbox",
        title: "Ланчбокс для пикника",
        type: "bug-hunt",
        note: "Иногда робот честно делает шаги, но план все равно ломается из-за одной лишней поспешности.",
        steps: ["Положи яблоко в ланчбокс.", "Закрой ланчбокс.", "Положи бутерброд в ланчбокс.", "Убери ланчбокс в рюкзак."],
        detectPrompt: "Что в этом плане пошло не так?",
        detectOptions: [
          "Ланчбокс закрыли слишком рано.",
          "Яблоко нельзя брать в парк.",
          "Нужно сначала надеть шапку."
        ],
        detectCorrectIndex: 0,
        fixPrompt: "Какой план теперь будет правильным?",
        fixOptions: [
          "Положи яблоко в ланчбокс -> Положи бутерброд в ланчбокс -> Закрой ланчбокс -> Убери его в рюкзак",
          "Закрой ланчбокс -> Убери его в рюкзак -> Потом положи бутерброд",
          "Положи яблоко в рюкзак -> Забудь про ланчбокс -> Иди гулять"
        ],
        fixCorrectIndex: 0,
        feedback: [
          "Мы поймали момент, где план сломался из-за неправильного порядка.",
          "Робот не сможет положить бутерброд в уже закрытый ланчбокс."
        ],
        question: "Почему иногда ошибка появляется не из-за пропущенного шага, а из-за слишком раннего действия?",
        aiLink: "Даже один неудачный шаг может испортить весь план, если он стоит не на своем месте."
      },
      {
        id: "bug-beans",
        title: "Сажаем фасоль",
        type: "bug-hunt",
        note: "Иногда короткий план кажется хорошим, но в нем не хватает важных подробностей.",
        steps: ["Насыпь землю в горшок.", "Положи фасолину.", "Полей.", "Поставь горшок на окно."],
        detectPrompt: "Чего в этом плане не хватает, чтобы фасольке было легче вырасти?",
        detectOptions: [
          "Не хватает ямки и понятного количества воды.",
          "Нужно сначала спрятать горшок.",
          "Все уже идеально."
        ],
        detectCorrectIndex: 0,
        fixPrompt: "Какой вариант плана лучше поможет роботу?",
        fixOptions: [
          "Насыпь землю в горшок -> Сделай маленькую ямку -> Положи фасолину -> Засыпь ее землей -> Полей немного -> Поставь на окно",
          "Полей весь горшок до краев -> Брось фасолину сверху -> Уходи",
          "Положи фасолину на стол -> Смотри на нее -> Не трогай землю"
        ],
        fixCorrectIndex: 0,
        feedback: [
          "Мы заметили, что роботу мало слов 'полей' и 'положи'.",
          "Хорошему плану иногда нужны маленькие, но очень точные детали."
        ],
        question: "Какие слова в этом плане сделали инструкцию точнее?",
        aiLink: "Если в задаче нет важных деталей, система может сделать что-то формально правильное, но не очень полезное."
      },
      {
        id: "bug-road",
        title: "Переход у школы",
        type: "bug-hunt",
        note: "Иногда одного простого правила мало, потому что в жизни бывают особые случаи.",
        steps: ["Подойди к переходу.", "Дождись зеленого света.", "Иди через дорогу.", "Беги скорее к качелям."],
        detectPrompt: "В каком месте этот план становится слишком опасным или слишком поспешным?",
        detectOptions: [
          "Здесь не хватает проверки на машины и не нужно бежать через дорогу.",
          "Здесь все очень правильно.",
          "Проблема только в том, что нет мороженого."
        ],
        detectCorrectIndex: 0,
        fixPrompt: "Какой план теперь будет осторожнее и умнее?",
        fixOptions: [
          "Подойди к переходу -> Дождись зеленого света -> Посмотри по сторонам -> Если машины остановились, спокойно иди через дорогу",
          "Подойди к переходу -> Сразу беги -> Потом смотри по сторонам",
          "Дождись любого света -> Закрой глаза -> Иди"
        ],
        fixCorrectIndex: 0,
        feedback: [
          "Мы увидели, что для важных дел иногда нужен не один шаг, а целое условие проверки.",
          "План стал умнее, потому что в нем появилась осторожность."
        ],
        question: "Почему в некоторых ситуациях нельзя просто выполнять одно правило без проверки?",
        aiLink: "Иногда системе мало одного общего правила, ей нужны условия и дополнительные проверки."
      },
      {
        id: "bug-icecream",
        title: "Мороженое в магазине",
        type: "bug-hunt",
        note: "Иногда робот выполняет главную задачу, но забывает важные маленькие дела вокруг нее.",
        steps: ["Выбери мороженое.", "Дай деньги.", "Развернись и уходи."],
        detectPrompt: "Что робот может забыть в таком плане?",
        detectOptions: [
          "Он может забыть взять мороженое, сдачу или чек.",
          "Он может забыть стать космонавтом.",
          "Он ничего не забудет."
        ],
        detectCorrectIndex: 0,
        fixPrompt: "Какой план теперь выглядит внимательнее?",
        fixOptions: [
          "Выбери мороженое -> Дай деньги -> Возьми мороженое -> Возьми сдачу и чек -> Потом уходи",
          "Дай деньги -> Уходи -> Потом вспомни про мороженое",
          "Выбери мороженое -> Закрой глаза -> Уходи"
        ],
        fixCorrectIndex: 0,
        feedback: [
          "Мы увидели, что после главной цели часто есть еще несколько важных действий.",
          "План стал полнее и поэтому надежнее."
        ],
        question: "Почему после оплаты тоже нужно внимательно продолжать план?",
        aiLink: "Даже если главная цель названа, система может упустить сопутствующие действия."
      },
      {
        id: "bug-lego",
        title: "Уборка лего",
        type: "bug-hunt",
        note: "Иногда шаги правильные, но они сработают только один раз, а задачи еще останутся.",
        steps: ["Возьми кубик лего.", "Положи его в коробку.", "Сядь на ковер.", "Смотри на комнату."],
        detectPrompt: "Почему этот план не уберет всю комнату?",
        detectOptions: [
          "Потому что он убирает только один кубик и не повторяет шаги.",
          "Потому что коробка слишком круглая.",
          "Потому что лего нельзя трогать."
        ],
        detectCorrectIndex: 0,
        fixPrompt: "Какой вариант плана поможет роботу убрать все лего?",
        fixOptions: [
          "Возьми кубик лего -> Положи его в коробку -> Повторяй, пока на полу не останется кубиков",
          "Возьми один кубик -> Сядь и жди чуда",
          "Спрячь коробку -> Оставь лего на полу"
        ],
        fixCorrectIndex: 0,
        feedback: [
          "Мы нашли особый тип бага: шаги сами по себе хорошие, но их нужно повторять.",
          "Когда задача большая, одного раза может быть мало."
        ],
        question: "Как понять, что задаче нужен повтор, а не один проход?",
        aiLink: "Некоторые задачи решаются не одним действием, а повторением по правилу."
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
  tutorialBackState: null,
  history: []
};

const app = document.getElementById("app");
const homeButton = document.getElementById("home-button");
const backButton = document.getElementById("back-button");

homeButton.addEventListener("click", () => {
  resetToHome();
});

backButton.addEventListener("click", () => {
  goBack();
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

function pushHistory() {
  state.history.push(snapshotState());
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

function goBack() {
  if (state.history.length === 0) {
    return;
  }
  const previous = state.history.pop();
  restoreState(previous);
}

function openTutorial() {
  pushHistory();
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
  state.history = [];
  render();
}

function startModule(moduleId) {
  pushHistory();
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
  let didMove = false;

  if (state.stage === "intro") {
    pushHistory();
    state.stage = "theory";
    didMove = true;
  } else if (state.stage === "theory") {
    pushHistory();
    state.stage = "round";
    state.roundSubstage = round.type === "bug-hunt" ? "detect" : "play";
    state.criteriaIndex = 0;
    didMove = true;
  } else if (state.stage === "round" && round.type === "sort-sequence" && state.roundSubstage === "criteria-result") {
    pushHistory();
    state.criteriaIndex += 1;
    state.roundSubstage = "play";
    didMove = true;
  } else if (state.stage === "round-result") {
    pushHistory();
    if (state.roundIndex < module.rounds.length - 1) {
      state.roundIndex += 1;
      state.stage = "round";
      state.criteriaIndex = 0;
      state.roundSubstage = module.rounds[state.roundIndex].type === "bug-hunt" ? "detect" : "play";
    } else {
      state.stage = "outro";
    }
    didMove = true;
  } else if (state.stage === "outro") {
    resetToHome();
    return;
  }

  if (didMove) {
    render();
  }
}

function render() {
  syncChrome();
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

function syncChrome() {
  if (state.history.length > 0) {
    backButton.classList.remove("hidden");
  } else {
    backButton.classList.add("hidden");
  }
}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <h2>Небольшое приключение для взрослого и ребенка</h2>
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
    <div class="sticky-note">
      <h3>Как раскладывать карточки</h3>
      <p>На планшете: сначала тапни по карточке, потом тапни по нужной корзине. На компьютере можно и перетаскивать.</p>
    </div>
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
  let selectedCardId = null;

  function refreshCardSelection() {
    app.querySelectorAll(".card-tile").forEach((cardEl) => {
      cardEl.classList.toggle("selected", cardEl.dataset.card === selectedCardId);
    });
  }

  function placeCardInZone(cardId, zoneId) {
    const cardEl = app.querySelector(`[data-card="${cardId}"]`);
    const zoneEl = app.querySelector(`.drop-zone[data-zone="${zoneId}"]`);
    if (!cardEl || !zoneEl) {
      return;
    }
    zoneEl.appendChild(cardEl);
    zoneState[cardId] = zoneId;
    selectedCardId = null;
    refreshCardSelection();
  }

  app.querySelectorAll(".card-tile").forEach((cardEl) => {
    cardEl.addEventListener("dragstart", () => {
      draggedId = cardEl.dataset.card;
    });
    cardEl.addEventListener("click", () => {
      const clickedId = cardEl.dataset.card;
      selectedCardId = selectedCardId === clickedId ? null : clickedId;
      refreshCardSelection();
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
      placeCardInZone(draggedId, zoneEl.dataset.zone);
      draggedId = null;
    });
    zoneEl.addEventListener("click", () => {
      if (!selectedCardId) {
        return;
      }
      placeCardInZone(selectedCardId, zoneEl.dataset.zone);
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
      pushHistory();
      state.roundSubstage = "criteria-result";
      render();
      return;
    }

    pushHistory();
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
      pushHistory();
      state.roundSubstage = "fix";
      render();
      return;
    }

    pushHistory();
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
