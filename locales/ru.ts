export default {
  email_sent: "Письмо отправлено",
  cant_send_email: "Не удается отправить письмо",
  logout: "Выйти",
  verify_email: "Подтвердите вашу электронную почту. ⚠️ Не забудьте проверить папку спам.",
  verify_email_subtitle: "Пожалуйста, подтвердите вашу электронную почту, чтобы продолжить.",
  resend_email: "Отправить письмо повторно",
  resend_email_countdown: "Отправить письмо повторно через {seconds} секунд",
  signin_error_subtitle: "Пожалуйста, проверьте ваши учетные данные и попробуйте снова.",
  register_title: "Создать аккаунт",
  register_description: "Введите ваши данные ниже, чтобы создать аккаунт",
  register_terms: "Регистрируясь, вы соглашаетесь с нашими",
  register_privacy: "Политикой конфиденциальности",
  register_privacy_link: "и нашей",
  register_privacy_link_2: "Политикой конфиденциальности",
  password_forgot_title: "Забыли пароль?",
  password_forgot_subtitle: "Введите ваш email для сброса пароля",
  new_password: "Новый пароль",
  new_password_placeholder: "Введите ваш новый пароль",
  current_password: "Текущий пароль",
  current_password_placeholder: "Введите ваш текущий пароль",
  confirm_password: "Подтвердить пароль",
  confirm_password_placeholder: "Подтвердите ваш пароль",

  success: {
    feedback_sent: "Отзыв отправлен",
    password_forgot_success: "Письмо отправлено",
    reset_password_success: "Пароль успешно сброшен",
    password_updated_successfully: "Пароль успешно обновлен",
  },

  error: {
    invalid_credentials: "Неверные учетные данные или аккаунт не существует",
    upload_failed: "Загрузка не удалась",
    generic_error: "Ошибка во время операции",
    sending_email: "Ошибка отправки письма",
  },

  backend_errors: {
    EMAIL_ALREADY_EXISTS: "Email уже существует",
    INVALID_FILE_TYPE: "Недопустимый тип файла",
    FILE_TOO_LARGE: "Файл слишком большой",
    NO_FILE_UPLOADED: "Файл не загружен",
    IMAGE_PROCESSING_ERROR: "Ошибка обработки изображения",
    upload_failed: "Загрузка не удалась",
  },

  profile: {
    new_workout: "Новая тренировка",
    alert: {
      title: "Ваш прогресс сохраняется в браузере.",
      create_account: "Создать аккаунт",
      log_in: "Войти",
      to_ensure_it_is_not_getting_lost: "чтобы не потерять его.",
    },
  },

  // Release Notes
  release_notes: {
    title: "Что нового",
    release_notes: "Заметки о выпуске",
    notes: {
      note_2025_06_23: {
        title: "🇵🇹 Поддержка Португальского & Баннер Пожертвований",
        content:
          "Приложение теперь поддерживает <strong>португальский язык</strong>! Мы также добавили <em>баннер пожертвований</em>, чтобы помочь покрыть расходы проекта через <a href='https://github.com/sponsors/snouzy' target='_blank' rel='noopener' class='text-blue-500 hover:underline'>GitHub Sponsors</a> или <a href='https://ko-fi.com/workoutcool' target='_blank' rel='noopener' class='text-blue-500 hover:underline'>Ko-fi</a>. 🙏",
      },
      note_2025_06_22: {
        title: "🌍 Новые языки и улучшение производительности!",
        content:
          "Приложение теперь доступно на китайском и русском языках! Мы также улучшили производительность перетаскивания для более плавного опыта. ⚡",
      },
      note_2025_06_19: {
        title: "📱 Теперь доступно как PWA!",
        content:
          "Workout.cool v1.2 теперь является прогрессивным веб-приложением! Установите его на ваш телефон для получения нативного опыта приложения с офлайн доступом. 🚀",
      },
      note_2025_06_18: {
        title:
          "🚀 #1 на <a href='https://news.ycombinator.com/item?id=44309320' target='_blank' rel='noopener' class='text-blue-500 hover:underline'>Hacker News</a>!",
        content:
          "Workout.cool достиг первого места на Hacker News! Спасибо всем за потрясающую поддержку и добро пожаловать всем новым пользователям! 💪",
      },
      note_2025_06_01: {
        title: "🎉 Новое: Диалог заметок о выпуске",
        content: "Теперь вы можете просматривать новости прямо из заголовка! Следите за обновлениями.",
      },
      note_2025_05_20: {
        title: "Улучшения интерфейса",
        content: "Улучшена отзывчивость на мобильных устройствах и добавлены тонкие эффекты наведения для кнопок.",
      },
    },
  },

  // Donation Alert
  donation_alert: {
    title: "Поддержите Workout.cool. Поддержите нас через",
    or: "или",
  },

  // Donation Modal
  donation_modal: {
    support_via: "Поддержать через...",
    title: "Поддержите проект",
    congrats: "Поздравляем с завершением тренировки! 🎉",
    subtitle: "Это приложение помогает вам бесплатно, но у меня есть реальные расходы...",
    costs_title: "Реальность расходов",
    costs_description:
      "В настоящее время пожертвования даже не покрывают базовые расходы: серверы, аутентификация, инфраструктура, база данных и т.д.",
    open_source_title: "100% с открытым исходным кодом",
    open_source_description:
      "Это приложение полностью бесплатное и с открытым исходным кодом. Никакой прибыли не получается - это проект из страсти, чтобы помочь сообществу и помочь людям заниматься спортом.",
    no_ads: "Без рекламы",
    no_tracking: "Без отслеживания",
    impact_title: "Ваше влияние",
    impact_3_euros: "• Даже €3 покрывают 1 неделю сервера",
    impact_support: "• Ваша поддержка делает приложение бесплатным для всех",
    impact_footer: "Каждое пожертвование, даже маленькое, имеет реальное значение! 🙏",
    later_button: "Позже",
    support_button: "Поддержать проект",
  },

  // Contact Support
  contact_support: "Связаться с поддержкой",
  contact_support_subtitle: "Опишите вашу проблему, и мы поможем вам как можно скорее. Вы также можете написать нам напрямую на",

  // Social Platforms
  social_platforms: {
    x: "X (Twitter)",
    facebook: "Facebook",
    email: "Email",
    whatsapp: "WhatsApp",
    website: "Веб-сайт",
    phone: "Телефон",
    youtube: "YouTube",
    linkedin: "LinkedIn",
    snapchat: "Snapchat",
    instagram: "Instagram",
    tiktok: "TikTok",
    threads: "Threads",
  },

  // Workout Builder
  workout_builder: {
    confirm_delete: "Вы уверены, что хотите удалить эту тренировочную сессию?",
    steps: {
      equipment: {
        title: "Оборудование",
        description: "Выберите ваше оборудование",
      },
      muscles: {
        title: "Мышцы",
        description: "Выберите вашу тренировку",
      },
      exercises: {
        title: "Упражнения",
        description: "Настройте вашу тренировку",
      },
    },
    muscles: {
      back: "Спина",
      abdominals: "Пресс",
      biceps: "Бицепс",
      triceps: "Трицепс",
      chest: "Грудь",
      shoulders: "Плечи",
      quadriceps: "Квадрицепс",
      hamstrings: "Задняя поверхность бедра",
      glutes: "Ягодицы",
      calves: "Икры",
      forearms: "Предплечья",
      traps: "Трапеции",
      obliques: "Косые мышцы",
    },
    exercise: {
      watch_video: "Смотреть видео",
      shuffle: "Перемешать",
      pick: "Выбрать",
      remove: "Удалить",
      no_video_available: "Видео недоступно.",
    },
    loading: {
      exercises: "Загрузка упражнений...",
    },
    error: {
      loading_exercises: "Ошибка загрузки упражнений",
    },
    no_exercises_found: "Упражнения не найдены. Попробуйте изменить выбор оборудования или мышц.",
    equipment: {
      bodyweight: {
        label: "Собственный вес",
        description: "Упражнения с использованием только веса тела",
      },
      dumbbell: {
        label: "Гантели",
        description: "Упражнения со свободными весами с гантелями",
      },
      barbell: {
        label: "Штанга",
        description: "Комплексные движения со штангой",
      },
      kettlebell: {
        label: "Гиря",
        description: "Динамичные упражнения с гирями",
      },
      band: {
        label: "Резинка",
        description: "Упражнения с эластичными лентами",
      },
      plate: {
        label: "Диски",
        description: "Упражнения с использованием дисков",
      },
      pullup_bar: {
        label: "Турник",
        description: "Упражнения для верхней части тела с турником",
      },
      bench: {
        label: "Скамья",
        description: "Упражнения на скамье и поддержка",
      },
    },
    navigation: {
      previous: "Назад",
      continue: "Продолжить",
      complete: "Завершить",
    },
    stats: {
      "muscle_selected#zero": "0 мышц выбрано",
      "muscle_selected#one": "1 мышца выбрана",
      "muscle_selected#other": "{count} мышц выбрано",
      "equipment_selected#zero": "0 оборудования выбрано",
      "equipment_selected#one": "1 оборудование выбрано",
      "equipment_selected#other": "{count} оборудования выбрано",
      selected: "Выбрано",
      total: "Всего",
      equipment_ready: "оборудование готово",
      equipment_ready_plural: "оборудования готово",
    },
    selection: {
      choose_your_arsenal: "Выберите ваш арсенал",
      select_equipment_description: "Выберите оборудование для разблокировки персонализированных тренировок",
      clear_all: "Очистить все",
      muscle_selection_coming_soon: "Выбор мышц (Скоро)",
      muscle_selection_description: "Выберите мышцы, которые вы хотите тренировать, нажав на них.",
      exercise_selection_coming_soon: "Выбор упражнений (Скоро)",
      exercise_selection_description: "Этот шаг покажет вам персонализированные рекомендации упражнений.",
    },
    session: {
      back_to_workout: "Вернуться к тренировке",
      congrats: "Поздравляем, тренировка завершена! 🎉",
      congrats_subtitle: "Вы справились!",
      see_instructions: "Смотреть инструкции",
      finish_set: "Завершить подход",
      finish_session: "Завершить сессию",
      bodyweight: "Собственный вес",
      weight: "Вес",
      reps: "Повторения",
      time: "Время",
      next_exercise: "Следующее упражнение",
      add_set: "Добавить подход",
      add_column: "Добавить колонку",
      add_row: "Добавить строку",
      remove_column: "Удалить колонку",
      set_number: "Подход {number}",
      set_number_plural: "Подходы {number}",
      set_number_singular: "Подход {number}",
      set_number_plural_singular: "Подходы {number}",
      workout_in_progress: "Тренировка в процессе",
      started_at: "Начато в",
      quit_workout: "Завершить тренировку",
      elapsed_time: "Прошедшее время",
      chronometer: "Хронометр",
      exercise_progress: "Прогресс упражнений",
      total_volume: "Общий объем",
      current_exercise: "Текущее упражнение",
      complete: "Завершено",
      active: "Активно",
      already_have_a_active_session: "У вас уже есть активная сессия. Невозможно повторить без завершения или выхода из тренировки.",
      no_exercise_selected: "Упражнение не выбрано",
      quit_workout_title: "Завершить тренировку?",
      progress: "Прогресс",
      quit_warning: "Вы уверены, что хотите выйти? Вы можете сохранить прогресс или потерять его полностью.",
      save_and_quit: "Сохранить и выйти",
      quit_without_save: "Выйти без сохранения",
      continue_workout: "Продолжить тренировку",
      history: "История тренировок [{count}]",
      no_workout_yet: "Пока нет тренировок.",
      start: "начало",
      end: "конец",
      exercise: "УПРАЖНЕНИЕ",
      repeat: "Повторить",
      delete: "Удалить",
    },
    attribute_value: {
      bodyweight: "Собственный вес",
      strength: "Сила",
      powerlifting: "Пауэрлифтинг",
      calisthenic: "Калистеника",
      plyometrics: "Плиометрика",
      stretching: "Растяжка",
      strongman: "Стронгмен",
      cardio: "Кардио",
      stabilization: "Стабилизация",
      power: "Мощность",
      resistance: "Сопротивление",
      crossfit: "CrossFit",
      weightlifting: "Тяжелая атлетика",
      neck: "Шея",
      lats: "Широчайшие",
      adductors: "Приводящие",
      abductors: "Отводящие",
      groin: "Пах",
      full_body: "Все тело",
      rotator_cuff: "Вращательная манжета",
      hip_flexor: "Сгибатель бедра",
      achilles_tendon: "Ахиллово сухожилие",
      fingers: "Пальцы",
      smith_machine: "Машина Смита",
      other: "Другое",
      ez_bar: "EZ штанга",
      machine: "Тренажер",
      desk: "Стол",
      none: "Нет",
      cable: "Трос",
      medicine_ball: "Медицинский мяч",
      swiss_ball: "Швейцарский мяч",
      foam_roll: "Пенный валик",
      trx: "TRX",
      box: "Бокс",
      ropes: "Канаты",
      spin_bike: "Спин-байк",
      step: "Степ",
      bosu: "BOSU",
      tyre: "Шина",
      sandbag: "Мешок с песком",
      pole: "Шест",
      wall: "Стена",
      bar: "Перекладина",
      rack: "Стойка",
      car: "Машина",
      sled: "Сани",
      chain: "Цепь",
      skierg: "SkiErg",
      rope: "Канат",
      na: "Н/Д",
      isolation: "Изоляция",
      compound: "Комплексное",
    },
  },
  commons: {
    signup_with: "Регистрация через {provider}",
    signin_with: "Вход через {provider}",
    signup: "Регистрация",
    login: "Вход",
    connecting: "Подключение...",
    login_to_your_account_title: "Войти в ваш аккаунт",
    login_to_your_account_subtitle: "Введите ваши данные ниже для входа",
    password_forgot: "Забыли пароль?",
    password_reset_success: "Пароль успешно сброшен",
    dont_have_account: "Нет аккаунта?",
    already_have_account: "Уже есть аккаунт?",
    or: "Или",
    add: "Добавить",
    your_feminine: "ваша",
    password: "Пароль",
    email: "Email",
    logout: "Выйти",
    first_name: "Имя",
    last_name: "Фамилия",
    verify_password: "Подтвердить пароль",
    submit: "Отправить",
    upload: "Загрузить",
    cancel: "Отмена",
    save_changes: "Сохранить изменения",
    change: "Изменить",
    subject: "Тема",
    message: "Сообщение",
    saving: "Сохранение...",
    edit: "Редактировать",
    more_options: "Больше опций",
    open_link: "Открыть ссылку",
    hide: "Скрыть",
    make_visible: "Сделать видимым",
    delete: "Удалить",
    share: "Поделиться",
    title: "Заголовок",
    subtitle: "Подзаголовок",
    content: "Контент",
    save: "Сохранить",
    button: "Кнопка",
    card: "Карточка",
    go_back: "Назад",
    next: "Далее",
    choose_image: "Выбрать изображение",
    soon: "Скоро",
    coming_soon_with_emoji: "Скоро 🤫",
    no_image: "Нет изображения",
    description: "Описание",
    price: "Цена",
    duration: "Продолжительность",
    location: "Местоположение",
    schedule: "Расписание",
    participants_info: "Информация об участниках",
    description_placeholder: "Введите описание",
    title_placeholder: "Введите заголовок",
    changes_saved: "Изменения сохранены",
    replace: "Замените",
    loading: "Загрузка...",
    image_deleted: "Изображение удалено",
    discover_workoutcool: "Откройте Workout Cool",
    received_just_now: "Получено только что",
    copied: "Скопировано",
    url_copied: "URL скопирован",
    copy_failed: "Копирование не удалось",
    accordion: "Аккордеон",
    image: "Изображение",
    other: "Другое",
    register: "Регистрация",
    instantly: "мгновенно",
    immediately: "немедленно",
    link: "Ссылка",
    accept: "Принять",
    deny: "Отклонить",
    invalid_input: "Недопустимый ввод. Пожалуйста, проверьте ошибки.",
    copy_url: "Скопировать URL",
    page_url: "URL страницы",
    saving_short: "Сохранение...",
    saved_short: "ОК",
    looks_like_you_are_lost: "Похоже, вы заблудились",
    the_page_you_are_looking_for_is_not_available: "Страница, которую вы ищете, недоступна",
    go_to_home: "На главную",
    go_to_profile: "В профиль",
    terms: "Условия обслуживания",
    privacy: "Политика конфиденциальности",
    sales_terms: "Условия продажи",
    consent_banner: "Мы используем cookie для улучшения вашего опыта. Нажимая «Принять», вы соглашаетесь на использование cookie.",
    about: "О нас",
    profile: "Профиль",
    donate: "Пожертвовать",
    my_account: "Мой аккаунт",
    dashboard: "Панель управления",
    home: "Главная",
    changelog: "Журнал изменений",
    stop_impersonation_button: "Остановить имитацию",
    impersonating_user_label: "Имитация пользователя",
    re_hello: "Привет снова",
    back_to_login: "Вернуться ко входу",
    sending: "Отправка...",
    send_me_link: "Отправить мне ссылку",
    extremely_dissatisfied: "Крайне неудовлетворен",
    somewhat_dissatisfied: "Несколько неудовлетворен",
    neutral: "Нейтрально",
    satisfied: "Удовлетворен",
    support: "Поддержка",
    change_language: "Изменить язык",
    in_progress: "В процессе",
  },
} as const;
