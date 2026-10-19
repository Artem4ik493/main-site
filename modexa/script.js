/* Modexa v7: animated platform field, product layout, and consent-gated Yandex Metrica. */
(function () {
  "use strict";

  var LANGUAGE_KEY = "modexa:language";
  var CONSENT_KEY = "cookie_accepted";
  var counterId = 113677294;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var translations = {
    ru: {
      navPlatform:"Платформа",navFeatures:"Возможности",navFlow:"Как начать",navIntegrations:"Интеграции",navServices:"Сервисы",navFaq:"Вопросы",
      heroEyebrow:"ОТКРЫТАЯ БЕТА · ИДЁТ РАЗРАБОТКА",heroTitleA:"Одно сообщество.",heroTitleB:"Две платформы.",
      heroCopy:"Modexa объединяет инструменты для Discord и Telegram: идентификацию участников, настройки сообщества и межплатформенные интеграции. Присоединяйтесь к открытой бете, пробуйте доступные функции и помогайте определить, что улучшать дальше.",
      openTelegram:"Открыть Telegram-бота",openDiscord:"Discord-приложение",betaOpen:"Открытое бета-тестирование",joinDiscord:"Сообщество в Discord",
      betaCaveat:"Это бета-версия: набор возможностей может меняться, возможны сбои и временные ограничения.",statusLink:"Статус сервисов",
      betaBadge:"ОТКРЫТАЯ БЕТА",telegramLabel:"БОТ · СООБЩЕСТВО",discordLabel:"ПРИЛОЖЕНИЕ · СООБЩЕСТВО",identityDivider:"ОБЩАЯ ОСНОВА · ПОДКЛЮЧАЕМЫЕ СЕРВИСЫ",
      identityDescription:"Инструменты для связанного сообщества",betaState:"БЕТА",tagIdentity:"ИДЕНТИЧНОСТЬ",tagMembers:"УЧАСТНИКИ",tagRoles:"РОЛИ",tagBridge:"МОСТ",
      previewStage:"ЭТАП / БЕТА",previewDisclaimer:"ВИЗУАЛЬНОЕ ПРЕВЬЮ",signalOneValue:"01 / ID",signalOneLabel:"Связывание поддерживаемых профилей",
      signalTwoValue:"02 / МОСТ",signalTwoLabel:"Интеграции при включённой настройке",signalThreeValue:"БЕТА",signalThreeLabel:"Функции развиваются поэтапно",
      platformKicker:"01 / ПЛАТФОРМА",platformTitleA:"Не два разрозненных бота.",platformTitleB:"Общая система.",
      platformCopy:"Modexa развивается как единая основа для сообществ, использующих Discord и Telegram. Доступность конкретных функций зависит от текущей версии, настроек и выданных разрешений.",
      featureIdentityTitle:"Связанные идентичности",featureIdentityCopy:"Поддерживаемые аккаунты могут связываться с внутренней идентичностью Modexa, чтобы разные платформы работали в общей логике.",featureIdentityTag:"СВЯЗЫВАНИЕ АККАУНТОВ",
      featureMembersTitle:"Участники и профили",featureMembersCopy:"Команды для доступа к необходимым сведениям об участнике и его сообществе — в рамках разрешений платформы.",featureMembersTag:"ИНСТРУМЕНТЫ СООБЩЕСТВА",
      featureRolesTitle:"Роли и настройки",featureRolesCopy:"Инструменты управления ролями и настройками там, где соответствующая функция реализована и разрешена администратором.",featureRolesTag:"УПРАВЛЕНИЕ ДОСТУПОМ",
      featureBridgeTitle:"Межплатформенный мост",featureBridgeCopy:"Передача сообщений между подключёнными площадками, если мост включён, настроен и имеет необходимые права.",featureBridgeTag:"НАСТРАИВАЕМАЯ ИНТЕГРАЦИЯ",
      featureCommandsTitle:"Команды и контроль",featureCommandsCopy:"Команды и параметры для работы с доступными функциями без необходимости вручную собирать отдельный набор инструментов.",featureCommandsTag:"ИНТЕРФЕЙС БОТА",
      featureRoadmapTitle:"Развитие по обратной связи",featureRoadmapCopy:"Результаты тестирования и реальные сценарии помогают расставлять приоритеты и исправлять подтверждённые проблемы.",featureRoadmapTag:"ПОЭТАПНЫЕ ОБНОВЛЕНИЯ",
      flowKicker:"02 / ПЕРВЫЕ ШАГИ",flowTitleA:"Подключиться просто.",flowTitleB:"Тестировать можно сейчас.",
      flowCopy:"Выберите платформу, проверьте доступные команды и сообщите, что можно сделать лучше. Не все запланированные функции обязательно доступны в бета-версии.",
      stepOneTitle:"Откройте бота",stepOneCopy:"Откройте приложение Modexa в Discord, проверьте запрашиваемые разрешения и добавьте его на подходящий сервер.",
      stepTwoTitle:"Попробуйте функции",stepTwoCopy:"Изучите команды и настройки, которые доступны в текущей сборке. Некоторые возможности могут отличаться на разных платформах.",
      stepThreeTitle:"Поделитесь обратной связью",stepThreeCopy:"Опишите ошибку, шаги её воспроизведения и ожидаемый результат в сообществе Discord.",
      integrationKicker:"03 / ИНТЕГРАЦИИ",integrationTitleA:"Сделано для двух площадок.",integrationTitleB:"Со своим характером.",
      integrationCopy:"Каждая интеграция остаётся частью своей платформы. Modexa использует доступные механизмы Discord и Telegram, а не заменяет их аккаунты или правила.",
      discordIntegrationLabel:"DISCORD / ПРИЛОЖЕНИЕ",discordIntegrationTitleStart:"Родной интерфейс.",telegramIntegrationTitleStart:"Быстрый вход.",discordIntegrationTitleAccent:"Связанные возможности.",
      discordIntegrationCopy:"Откройте страницу приложения и добавляйте его в нужные сообщества только с подходящими разрешениями. Макет ниже — визуальное превью, а не живой чат.",
      discordUiSubtitle:"Превью интерфейса · не live-чат",discordMessageOne:"Платформа подключена к этому примеру интерфейса.",bridgePreviewName:"Межплатформенный мост",
      discordMessageTwo:"Межплатформенные функции работают только при соответствующей настройке.",discordChipOne:"/help",discordChipTwo:"Идентичность",discordChipThree:"Сообщество",discordOpenButton:"Открыть приложение Discord",
      telegramIntegrationLabel:"TELEGRAM / БОТ",telegramIntegrationTitle:"Быстрый вход.",telegramIntegrationTitleStart:"Быстрый вход.",telegramIntegrationTitleAccent:"Команды под рукой.",
      telegramIntegrationCopy:"Запустите бота в Telegram, посмотрите список доступных команд и проверьте, какие сценарии уже готовы к тестированию.",
      telegramOpenButton:"Открыть Telegram-бота",telegramCaption:"Доступность команд зависит от версии бота.",
      servicesKicker:"04 / СЕРВИСЫ",servicesTitleA:"Важные ссылки.",servicesTitleB:"Без поиска по меню.",
      servicesCopy:"Переходите к ботам, проверяйте публичную страницу статуса или откройте панель. Ссылка на статус показывает информацию из внешней системы мониторинга.",
      serviceStatusLabel:"СТАТУС СИСТЕМЫ",serviceStatusTitle:"Статус системы",serviceStatusCopy:"Публичная страница состояния и инцидентов.",serviceOpenStatus:"Посмотреть статус",
      servicePanelLabel:"ПАНЕЛЬ УПРАВЛЕНИЯ",servicePanelTitle:"Панель бота",servicePanelCopy:"Веб-панель находится в разработке; отдельные функции могут быть недоступны.",serviceOpenPanel:"Открыть панель",
      serviceCommunityLabel:"СООБЩЕСТВО",serviceCommunityTitle:"Сообщество Discord",serviceCommunityCopy:"Вопросы, предложения, сообщения об ошибках и обсуждение беты.",serviceOpenCommunity:"Перейти в сообщество",
      faqKicker:"05 / ВОПРОСЫ",faqTitleA:"Без мелкого шрифта.",faqTitleB:"Что нужно знать.",faqCopy:"Основные условия тестирования, работы интеграций и обработки данных.",
      faqOneTitle:"Modexa уже полностью готова?",faqOneCopy:"Нет. Сейчас проект находится в открытой бете. Функции, интерфейсы и стабильность могут меняться без гарантии непрерывной работы.",
      faqTwoTitle:"Мост сам пересылает все сообщения?",faqTwoCopy:"Пересылка возможна только в рамках реализованной функции, если она включена и настроена в соответствующих сообществах. Администраторы должны уведомлять участников о выбранных настройках.",
      faqThreeTitle:"Какие данные использует бот?",faqThreeCopy:"В зависимости от функции — идентификаторы платформ и сообществ, отображаемые имена, аватары, настройки и необходимые технические логи. Подробности приведены в политике конфиденциальности.",
      faqFourTitle:"Где сообщать об ошибках?",faqFourCopy:"В Discord-сообществе Modexa. По возможности добавьте последовательность действий, время ошибки и ожидаемый результат, но не публикуйте токены или другие секреты.",
faqFiveTitle:"Как добавить Modexa на сервер?",faqFiveCopy:"Откройте страницу приложения Discord по ссылке на сайте, проверьте запрашиваемые разрешения и выберите сервер, где у вас есть право добавлять приложения.",
faqSixTitle:"Нужны ли права администратора?",faqSixCopy:"Для установки приложения обычно нужны соответствующие права на сервере. Доступные команды и действия дополнительно зависят от разрешений, которые выданы приложению и участнику.",
faqSevenTitle:"Какие ограничения есть у беты?",faqSevenCopy:"Возможности могут меняться, а отдельные функции — временно отсутствовать или работать нестабильно. Актуальные объявления публикуются в Discord-сообществе.",
faqEightTitle:"Как связать аккаунты разных платформ?",faqEightCopy:"Используйте только предусмотренные в текущей версии команды или настройки Modexa. Если функция связывания ещё недоступна в вашей сборке, следите за обновлениями в Discord-сообществе.",
faqNineTitle:"Где посмотреть состояние сервисов?",faqNineCopy:"Откройте публичную страницу статуса по ссылке в разделе «Сервисы». Там можно проверить опубликованные сведения об инцидентах и доступности.",
faqTenTitle:"Доступна ли панель управления?",faqTenCopy:"Ссылка на панель/API опубликована на сайте, но веб-панель может находиться в разработке, а часть функций — быть недоступна. Проверяйте актуальное состояние по официальным ссылкам.",
faqElevenTitle:"Как сообщить о проблеме правильно?",faqElevenCopy:"Укажите, что вы делали, что ожидали увидеть и что произошло на самом деле. Прикладывайте текст ошибки или скриншот, но скрывайте токены, личные данные и секреты.",
faqTwelveTitle:"Как обрабатываются мои данные?",faqTwelveCopy:"Обработка зависит от используемой функции и платформы. Перед использованием ознакомьтесь с политикой конфиденциальности; необязательная Яндекс.Метрика запускается только после согласия.",
badgeStatus:"ОТКРЫТАЯ БЕТА",badgeOverline:"ИНСТРУМЕНТЫ СООБЩЕСТВА · DISCORD",badgeDescription:"Инструменты сообщества. Родной опыт Discord. Развитие вместе с участниками.",badgeDiscord:"СОЗДАНО ДЛЯ DISCORD",badgeAppLink:"Приложение Discord",badgeCommunityLink:"Сообщество",integrationStatusLink:"Статус сервисов",integrationPanelLink:"Панель управления / API",integrationContactLink:"Связаться с разработчиком",ctaDiscordApp:"Открыть приложение Discord ↗",integrationTitleA:"Твой сервер.",integrationTitleB:"Больше возможностей.",discordIntegrationTitleStart:"Modexa для Discord.",discordIntegrationTitleAccent:"Всё сообщество — в одном месте.",discordIntegrationCopy:"Откройте приложение, ознакомьтесь с разрешениями и добавьте его в подходящее сообщество. Возможности зависят от текущей версии и настроек сервера.",faqCopy:"Ответы о подключении приложения, разрешениях, данных, доступности функций и тестировании.",
      supportServerSubtitle:"СЕРВЕР ПОДДЕРЖКИ",supportJoin:"Открыть сервер",supportLiveLabel:"ПРИМЕР ИНТЕРФЕЙСА",supportWelcomeTitle:"Добро пожаловать в поддержку Modexa",supportWelcomeCopy:"Выберите канал слева. Это макет, не подключённый к Discord.",supportBotMessage:"Привет! Здесь можно узнать о проекте, доступных командах и обратной связи.",supportMemberName:"Участник",supportMemberMessage:"Опишите шаги воспроизведения ошибки и ожидаемый результат. Не публикуйте токены.",supportDisclaimer:"Макет интерактивный; сообщения вымышлены и не поступают из Discord.",supportTryApp:"Попробовать Modexa ↗",supportHint:"Нажмите на канал слева, чтобы сменить пример",faqThirteenTitle:"Нужно ли выдавать все разрешения?",faqThirteenCopy:"Нет. Проверяйте разрешения перед установкой и выдавайте только необходимые для используемых функций.",faqFourteenTitle:"Почему команда не работает?",faqFourteenCopy:"Проверьте права приложения и доступность функции в текущей бета-версии. Если проблема повторяется, сообщите в Discord.",faqFifteenTitle:"Как отключить интеграцию?",faqFifteenCopy:"Отключите настройку интеграции или удалите приложение с сервера. По поводу удаления связанной записи аккаунта обратитесь к разработчику.",faqSixteenTitle:"Где следить за обновлениями?",faqSixteenCopy:"Следите за объявлениями в Discord-сообществе и проверяйте страницу статуса сервисов.",
ctaKicker:"ОТКРЫТАЯ БЕТА / ПРИСОЕДИНЯЙТЕСЬ",ctaTitleA:"Сообщества связаны.",ctaTitleB:"Пора попробовать.",
      ctaCopy:"Откройте приложение Modexa в Discord, подключайтесь к тестированию и расскажите, какой сценарий стоит улучшить следующим.",ctaTelegram:"Telegram ↗",ctaCommunity:"Сообщество ↗",
      footerRights:"Сообщество и инструменты в разработке.",footerPrivacy:"Конфиденциальность",footerTerms:"Условия использования",footerContact:"Связаться",
      cookieTitle:"Настройки аналитики",cookieCopy:"Яндекс.Метрика необязательна и запускается только после вашего согласия. Выбор можно изменить позднее через настройки браузера.",cookieLearnMore:"Политика конфиденциальности",cookieAccept:"Разрешить",cookieReject:"Не разрешать",
      menuOpen:"Открыть меню",menuClose:"Закрыть меню",mainNavLabel:"Основная навигация",footerNavLabel:"Правовая информация",discordPreviewAria:"Предпросмотр интерфейса Discord",switchLanguage:"Switch language",legalHome:"На главную",legalPrivacy:"Конфиденциальность",legalTerms:"Условия использования",legalFooter:"Правовая информация Modexa",analyticsSettings:"Настройки аналитики"
    },
    en: {
      navPlatform:"Platform",navFeatures:"Features",navFlow:"Get started",navIntegrations:"Integrations",navServices:"Services",navFaq:"FAQ",
      heroEyebrow:"OPEN BETA · DEVELOPMENT IN PROGRESS",heroTitleA:"One community.",heroTitleB:"Two platforms.",
      heroCopy:"Modexa brings Discord and Telegram community tools together: member identity, community settings, and cross-platform integrations. Join the open beta, try available features, and help shape what we improve next.",
      openTelegram:"Open Telegram bot",openDiscord:"Discord application",betaOpen:"Open beta testing",joinDiscord:"Discord community",
      betaCaveat:"This is a beta release: features may change, and interruptions or temporary limits are possible.",statusLink:"Service status",
      betaBadge:"PUBLIC BETA",telegramLabel:"BOT · COMMUNITY",discordLabel:"APP · COMMUNITY",identityDivider:"SHARED CORE · CONNECTED SERVICES",
      identityDescription:"Tools for connected communities",betaState:"BETA",tagIdentity:"IDENTITY",tagMembers:"MEMBERS",tagRoles:"ROLES",tagBridge:"BRIDGE",
      previewStage:"STAGE / BETA",previewDisclaimer:"INTERFACE PREVIEW",signalOneValue:"01 / ID",signalOneLabel:"Link supported profiles",
      signalTwoValue:"02 / BRIDGE",signalTwoLabel:"Integrations when enabled",signalThreeValue:"BETA",signalThreeLabel:"Features evolve in stages",
      platformKicker:"01 / PLATFORM",platformTitleA:"Not two isolated bots.",platformTitleB:"One shared system.",
      platformCopy:"Modexa is being developed as a shared foundation for communities using Discord and Telegram. Feature availability depends on the current version, configuration, and permissions granted.",
      featureIdentityTitle:"Linked identities",featureIdentityCopy:"Supported accounts can be linked to an internal Modexa identity so multiple platforms can work within a shared model.",featureIdentityTag:"ACCOUNT LINKING",
      featureMembersTitle:"Members and profiles",featureMembersCopy:"Commands for accessing the member and community details needed by a feature, within each platform's permissions.",featureMembersTag:"COMMUNITY TOOLS",
      featureRolesTitle:"Roles and settings",featureRolesCopy:"Role and configuration tools where the relevant capability is implemented and allowed by a community administrator.",featureRolesTag:"CONTROL LAYER",
      featureBridgeTitle:"Cross-platform bridge",featureBridgeCopy:"Messages can move between connected spaces when the bridge is implemented, enabled, configured, and authorized.",featureBridgeTag:"CONFIGURABLE INTEGRATION",
      featureCommandsTitle:"Commands and control",featureCommandsCopy:"Commands and settings for available features without manually assembling a separate toolbox.",featureCommandsTag:"BOT INTERFACE",
      featureRoadmapTitle:"Feedback-driven development",featureRoadmapCopy:"Test results and real use cases help prioritize improvements and fix confirmed issues.",featureRoadmapTag:"ITERATIVE RELEASES",
      flowKicker:"02 / FIRST STEPS",flowTitleA:"Easy to connect.",flowTitleB:"Ready to try in beta.",
      flowCopy:"Choose a platform, explore available commands, and share what could be better. Not every planned feature is necessarily available in the beta.",
      stepOneTitle:"Open the bot",stepOneCopy:"Open the Modexa application in Discord, review the requested permissions, and add it to the right server.",
      stepTwoTitle:"Explore the features",stepTwoCopy:"Try the commands and settings available in the current build. Capabilities may differ between platforms.",
      stepThreeTitle:"Share feedback",stepThreeCopy:"Describe the issue, reproduction steps, and expected result in the Discord community.",
      integrationKicker:"03 / INTEGRATIONS",integrationTitleA:"Built for two platforms.",integrationTitleB:"Each with its own feel.",
      integrationCopy:"Each integration remains part of its platform. Modexa uses the available Discord and Telegram mechanisms rather than replacing their accounts or rules.",
      discordIntegrationLabel:"DISCORD / APPLICATION",discordIntegrationTitleStart:"A familiar interface.",telegramIntegrationTitleStart:"Quick entry.",discordIntegrationTitleAccent:"Connected capabilities.",
      discordIntegrationCopy:"Open the application's page and add it to communities with only the appropriate permissions. The mockup below is a visual preview, not a live chat.",
      discordUiSubtitle:"Interface preview · not live",discordMessageOne:"The platform is connected to this interface preview.",bridgePreviewName:"Cross-platform bridge",
      discordMessageTwo:"Cross-platform features operate only when configured.",discordChipOne:"/help",discordChipTwo:"Identity",discordChipThree:"Community",discordOpenButton:"Open Discord application",
      telegramIntegrationLabel:"TELEGRAM / BOT",telegramIntegrationTitle:"Quick entry.",telegramIntegrationTitleStart:"Quick entry.",telegramIntegrationTitleAccent:"Commands at hand.",
      telegramIntegrationCopy:"Start the bot in Telegram, review the available commands, and see which scenarios are ready to test.",
      telegramOpenButton:"Open Telegram bot",telegramCaption:"Command availability depends on the bot version.",
      servicesKicker:"04 / SERVICES",servicesTitleA:"Useful links.",servicesTitleB:"No menu hunt required.",
      servicesCopy:"Open the bots, visit the public status page, or open the panel. The status link displays information from an external monitoring system.",
      serviceStatusLabel:"SYSTEM STATUS",serviceStatusTitle:"System status",serviceStatusCopy:"Public status and incident page.",serviceOpenStatus:"View status",
      servicePanelLabel:"CONTROL PANEL",servicePanelTitle:"Bot panel",servicePanelCopy:"The web panel is under development; some features may be unavailable.",serviceOpenPanel:"Open panel",
      serviceCommunityLabel:"COMMUNITY",serviceCommunityTitle:"Discord community",serviceCommunityCopy:"Questions, suggestions, bug reports, and beta discussion.",serviceOpenCommunity:"Join community",
      faqKicker:"05 / FAQ",faqTitleA:"No fine print.",faqTitleB:"What to know.",faqCopy:"The basics of beta testing, integrations, and data processing.",
      faqOneTitle:"Is Modexa fully finished?",faqOneCopy:"No. The project is in open beta. Features, interfaces, and reliability may change, and uninterrupted service is not guaranteed.",
      faqTwoTitle:"Does the bridge forward every message automatically?",faqTwoCopy:"Forwarding is available only where the relevant feature is implemented, enabled, and configured in the connected communities. Administrators should inform members about their settings.",
      faqThreeTitle:"What data does the bot use?",faqThreeCopy:"Depending on the feature, it may use platform and community IDs, display names, avatars, settings, and necessary technical logs. See the Privacy Policy for details.",
      faqFourTitle:"Where can I report an issue?",faqFourCopy:"Use the Modexa Discord community. Include the steps, approximate time, and expected result where possible, but never publish tokens or other secrets.",
faqFiveTitle:"How do I add Modexa to a server?",faqFiveCopy:"Open the Discord application page linked on this site, review the requested permissions, and select a server where you have permission to add applications.",
faqSixTitle:"Do I need administrator permissions?",faqSixCopy:"Installing an application generally requires the appropriate server permissions. Available commands and actions also depend on the permissions granted to the app and the member.",
faqSevenTitle:"What are the beta limitations?",faqSevenCopy:"Features may change, and some capabilities may be unavailable or unstable at times. Check the Discord community for current announcements.",
faqEightTitle:"How do I link accounts across platforms?",faqEightCopy:"Use only the commands or settings provided in your current Modexa version. If account linking is not available in your build yet, follow updates in the Discord community.",
faqNineTitle:"Where can I check service status?",faqNineCopy:"Open the public status page linked in the Services section to review published incidents and availability information.",
faqTenTitle:"Is the control panel available?",faqTenCopy:"A panel/API link is published on the site, but the web panel may still be in development and some functions may be unavailable. Check the official links for the latest status.",
faqElevenTitle:"How should I report an issue?",faqElevenCopy:"Describe what you did, what you expected, and what actually happened. Include an error message or screenshot if useful, but hide tokens, personal information, and secrets.",
faqTwelveTitle:"How is my data handled?",faqTwelveCopy:"Processing depends on the feature and platform. Read the privacy policy before use; optional Yandex Metrica is only loaded after consent.",
badgeStatus:"OPEN BETA",badgeOverline:"COMMUNITY TOOLS · DISCORD",badgeDescription:"Community tools. A native Discord experience. Built alongside the people who use it.",badgeDiscord:"BUILT FOR DISCORD",badgeAppLink:"Discord application",badgeCommunityLink:"Community",integrationStatusLink:"Service status",integrationPanelLink:"Control panel / API",integrationContactLink:"Contact the developer",ctaDiscordApp:"Open Discord application ↗",integrationTitleA:"Your server.",integrationTitleB:"More possibilities.",discordIntegrationTitleStart:"Modexa for Discord.",discordIntegrationTitleAccent:"Your community, better connected.",discordIntegrationCopy:"Open the application, review its permissions, and add it to the right community. Available features depend on the current version and server configuration.",faqCopy:"Answers about adding the app, permissions, data, feature availability, and beta testing.",
      supportServerSubtitle:"SUPPORT SERVER",supportJoin:"Open server",supportLiveLabel:"INTERFACE PREVIEW",supportWelcomeTitle:"Welcome to Modexa Support",supportWelcomeCopy:"Choose a channel on the left. This is a mockup, not connected to Discord.",supportBotMessage:"Hi! Learn about the project, available commands, and how to share feedback.",supportMemberName:"Member",supportMemberMessage:"Include reproduction steps and the expected result when reporting an issue. Never post tokens.",supportDisclaimer:"This is an interactive mockup; messages are fictional and are not pulled from Discord.",supportTryApp:"Try Modexa ↗",supportHint:"Select a channel on the left to change the example",faqThirteenTitle:"Should I grant every permission?",faqThirteenCopy:"No. Review permissions before installing and grant only what the features you use require.",faqFourteenTitle:"Why isn't a command working?",faqFourteenCopy:"Check app permissions and whether the feature is available in the current beta. If the issue persists, report it on Discord.",faqFifteenTitle:"How do I disable an integration?",faqFifteenCopy:"Disable the integration setting or remove the app from your server. Contact the developer to request deletion of a linked-account record.",faqSixteenTitle:"Where can I follow updates?",faqSixteenCopy:"Follow announcements in the Discord community and check the service status page.",
ctaKicker:"OPEN BETA / JOIN THE BUILD",ctaTitleA:"Communities connected.",ctaTitleB:"Give it a try.",
      ctaCopy:"Open the Modexa application in Discord, join the testing process, and tell us which workflow should be improved next.",ctaTelegram:"Telegram ↗",ctaCommunity:"Community ↗",
      footerRights:"Community tools are in development.",footerPrivacy:"Privacy",footerTerms:"Terms of use",footerContact:"Contact",
      cookieTitle:"Analytics preferences",cookieCopy:"Yandex Metrica is optional and starts only after you consent. You can change your choice later in your browser settings.",cookieLearnMore:"Privacy Policy",cookieAccept:"Allow analytics",cookieReject:"Do not allow",
      menuOpen:"Open menu",menuClose:"Close menu",mainNavLabel:"Main navigation",footerNavLabel:"Legal information",discordPreviewAria:"Discord interface preview",switchLanguage:"Switch language",legalHome:"Home",legalPrivacy:"Privacy",legalTerms:"Terms of use",legalFooter:"Modexa legal information",analyticsSettings:"Analytics settings"
    }
  };

  function safeStorageGet(key) {
    try { return window.localStorage.getItem(key); } catch (error) { return null; }
  }
  function safeStorageSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (error) { /* Storage can be disabled by browser settings. */ }
  }
  var savedLanguage = safeStorageGet(LANGUAGE_KEY);
  var defaultLanguage = document.body.getAttribute("data-default-language") === "en" ? "en" : "ru";
  var language = savedLanguage === "en" || savedLanguage === "ru" ? savedLanguage : defaultLanguage;

  function applyLanguage(nextLanguage) {
    language = nextLanguage === "en" ? "en" : "ru";
    safeStorageSet(LANGUAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
    var words = translations[language];
    document.querySelectorAll("[data-i]").forEach(function (node) {
      if (node.querySelector("[data-i]")) return;
      var key = node.getAttribute("data-i");
      if (Object.prototype.hasOwnProperty.call(words, key)) node.textContent = words[key];
    });
    document.querySelectorAll("[data-i-aria]").forEach(function (node) {
      var key = node.getAttribute("data-i-aria");
      if (Object.prototype.hasOwnProperty.call(words, key)) node.setAttribute("aria-label", words[key]);
    });
    document.querySelectorAll("[data-lang-block]").forEach(function (node) {
      node.hidden = node.getAttribute("data-lang-block") !== language;
    });
    var toggle = document.getElementById("languageToggle");
    if (toggle) {
      toggle.textContent = language === "ru" ? "EN" : "RU";
      toggle.setAttribute("aria-label", language === "ru" ? "Switch language to English" : "Переключить язык на русский");
      toggle.setAttribute("aria-pressed", language === "en" ? "true" : "false");
    }
    var menu = document.getElementById("menuToggle");
    if (menu) menu.setAttribute("aria-label", document.getElementById("siteHeader") && document.getElementById("siteHeader").classList.contains("is-open") ? words.menuClose : words.menuOpen);
    var pageKind = document.body.getAttribute("data-page") || "home";
    var pageTitles = {
      home: { ru: "Modexa — платформа для сообществ Discord и Telegram", en: "Modexa — community tools for Discord and Telegram" },
      privacy: { ru: "Политика конфиденциальности — Modexa", en: "Privacy Policy — Modexa" },
      terms: { ru: "Условия использования — Modexa", en: "Terms of Use — Modexa" },
      "discord-privacy": { ru: "Политика конфиденциальности — Modexa Discord", en: "Privacy Policy — Modexa Discord Application" },
      "discord-terms": { ru: "Условия использования — Modexa Discord", en: "Terms of Use — Modexa Discord Application" }
    };
    document.title = (pageTitles[pageKind] && pageTitles[pageKind][language]) || "Modexa";
    var descriptions = {
      home: { ru: "Modexa объединяет инструменты сообществ Discord и Telegram в развивающейся платформе.", en: "Modexa connects Discord and Telegram community tools in one evolving platform." },
      privacy: { ru: "Политика конфиденциальности Modexa для сервисов Discord и Telegram.", en: "Privacy Policy for Modexa services connected with Discord and Telegram." },
      terms: { ru: "Условия использования бета-сервисов Modexa для Discord и Telegram.", en: "Terms of Use for Modexa beta services for Discord and Telegram." },
      "discord-privacy": { ru: "Политика конфиденциальности приложения Modexa для Discord.", en: "Privacy Policy for the Modexa Discord application." },
      "discord-terms": { ru: "Условия использования приложения Modexa для Discord.", en: "Terms of Use for the Modexa Discord application." }
    };
    var description = document.querySelector('meta[name="description"]');
    if (description && descriptions[pageKind]) description.setAttribute("content", descriptions[pageKind][language]);
  }

  var languageToggle = document.getElementById("languageToggle");
  if (languageToggle) languageToggle.addEventListener("click", function () { applyLanguage(language === "ru" ? "en" : "ru"); });
  applyLanguage(language);

  var header = document.getElementById("siteHeader");
  var menuToggle = document.getElementById("menuToggle");
  if (header && menuToggle) {
    menuToggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      menuToggle.setAttribute("aria-label", open ? translations[language].menuClose : translations[language].menuOpen);
    });
    header.querySelectorAll(".header-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", translations[language].menuOpen);
      });
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var progressBar = document.getElementById("scrollProgress");
  var progressQueued = false;
  function updateScrollProgress() {
    if (!progressBar) return;
    var maximum = document.documentElement.scrollHeight - window.innerHeight;
    var fraction = maximum > 0 ? Math.max(0, Math.min(1, window.scrollY / maximum)) : 0;
    progressBar.style.transform = "scaleX(" + fraction + ")";
    progressQueued = false;
  }
  window.addEventListener("scroll", function () {
    if (!progressQueued) {
      progressQueued = true;
      window.requestAnimationFrame(updateScrollProgress);
    }
  }, { passive: true });
  window.addEventListener("resize", updateScrollProgress, { passive: true });
  updateScrollProgress();

  /* Smooth, continuously moving metaballs. The canvas is independent from page layout. */
  var canvas = document.getElementById("metaspheres");
  if (canvas && canvas.getContext) {
    var context = canvas.getContext("2d", { alpha: true });
    var viewportWidth = 0;
    var viewportHeight = 0;
    var pixelRatio = 1;
    var pointer = { x: 0.5, y: 0.45 };
    var pointerTarget = { x: 0.5, y: 0.45 };
    var lastFrame = 0;
    var visible = !document.hidden;
    var colors = ["88,101,242", "36,161,222"];
    var blobs = colors.map(function (color, index) {
      return {
        color: color,
        seed: (index + 1) * 1.731,
        anchorX: 0.12 + ((index * 0.217) % 0.78),
        anchorY: 0.12 + ((index * 0.319) % 0.78),
        radius: 190 + ((index * 83) % 170),
        speed: 0.00015 + ((index % 3) * 0.000045)
      };
    });

    function resizeCanvas() {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.35);
      viewportWidth = Math.max(window.innerWidth, 320);
      viewportHeight = Math.max(window.innerHeight, 320);
      canvas.width = Math.round(viewportWidth * pixelRatio);
      canvas.height = Math.round(viewportHeight * pixelRatio);
      canvas.style.width = viewportWidth + "px";
      canvas.style.height = viewportHeight + "px";
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      drawMetaspheres(performance.now(), false);
    }

    function drawMetaspheres(now, animate) {
      context.clearRect(0, 0, viewportWidth, viewportHeight);
      pointer.x += (pointerTarget.x - pointer.x) * 0.035;
      pointer.y += (pointerTarget.y - pointer.y) * 0.035;
      context.globalCompositeOperation = "screen";
      for (var i = 0; i < blobs.length; i++) {
        var blob = blobs[i];
        var t = animate ? now * blob.speed : 0.7;
        var x = blob.anchorX * viewportWidth + Math.sin(t + blob.seed) * viewportWidth * 0.14 + (pointer.x - 0.5) * (25 + i * 4);
        var y = blob.anchorY * viewportHeight + Math.cos(t * 0.83 + blob.seed * 1.3) * viewportHeight * 0.15 + (pointer.y - 0.5) * (18 + i * 3);
        var radius = blob.radius * Math.min(1.05, Math.max(.72, viewportWidth / 1180));
        var gradient = context.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, "rgba(" + blob.color + ",0.20)");
        gradient.addColorStop(0.28, "rgba(" + blob.color + ",0.12)");
        gradient.addColorStop(0.62, "rgba(" + blob.color + ",0.035)");
        gradient.addColorStop(1, "rgba(" + blob.color + ",0)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }
      context.globalCompositeOperation = "source-over";
    }

    function animateMetaspheres(now) {
      window.requestAnimationFrame(animateMetaspheres);
      if (!visible || document.hidden) return;
      if (reduceMotion) return;
      if (now - lastFrame < 28) return;
      lastFrame = now;
      drawMetaspheres(now, true);
    }
    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("pointermove", function (event) {
      pointerTarget.x = event.clientX / Math.max(window.innerWidth, 1);
      pointerTarget.y = event.clientY / Math.max(window.innerHeight, 1);
    }, { passive: true });
    document.addEventListener("visibilitychange", function () { visible = !document.hidden; });
    resizeCanvas();
    if (!reduceMotion) window.requestAnimationFrame(animateMetaspheres);
  }

  /* Scroll reveals are attached to text/content units rather than a single page-sized wrapper. */
  var revealSelector = "main h1, main h2, main .section-kicker, main .section-copy, main .feature-card, main .step-card, main .discord-card, main .telegram-card, main .service-card, main .faq-item, main .preview-panel, main .support-preview, main .support-preview-caption, main .signal-item, main .hero-copy, main .hero-actions, main .trust-line, main .hero-note, main .cta-panel, .legal-hero, .legal-content h2, .legal-content p, .legal-content li";
  var revealItems = Array.prototype.slice.call(document.querySelectorAll(revealSelector));
  revealItems.forEach(function (node, index) {
    node.classList.add("reveal");
    node.style.setProperty("--reveal-delay", (index % 4) * 45 + "ms");
  });
  if (!reduceMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -28px 0px" });
    revealItems.forEach(function (node) { observer.observe(node); });
  } else {
    revealItems.forEach(function (node) { node.classList.add("is-visible"); });
  }

  /* Small 3D tilt that resets cleanly and is disabled for coarse pointers/reduced motion. */
  if (!reduceMotion && window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll("[data-tilt], .feature-card, .step-card, .discord-card, .telegram-card, .service-card").forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var bounds = card.getBoundingClientRect();
        if (!bounds.width || !bounds.height) return;
        var x = (event.clientX - bounds.left) / bounds.width;
        var y = (event.clientY - bounds.top) / bounds.height;
        card.style.setProperty("--tilt-x", ((0.5 - y) * 4.2).toFixed(2) + "deg");
        card.style.setProperty("--tilt-y", ((x - 0.5) * 4.8).toFixed(2) + "deg");
        card.style.setProperty("--spot-x", (x * 100).toFixed(1) + "%");
        card.style.setProperty("--spot-y", (y * 100).toFixed(1) + "%");
        card.style.setProperty("--text-pull-x", ((0.5 - x) * -5).toFixed(2) + "px");
        card.style.setProperty("--text-pull-y", ((0.5 - y) * -5).toFixed(2) + "px");
      });
      card.addEventListener("pointerleave", function () {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
        card.style.setProperty("--text-pull-x", "0px");
        card.style.setProperty("--text-pull-y", "0px");
      });
    });
  }

  /* СЮДА ВСТАВИТЬ КОД ЯНДЕКС.МЕТРИКИ: загрузчик счётчика вызывается только при cookie_accepted === "true". */
  /* Yandex Metrica is not requested from the browser until analytics is explicitly accepted. */
  function loadMetrica() {
    if (window.__modexaMetricaLoaded) return;
    window.__modexaMetricaLoaded = true;
    (function (m, e, t, r, i, k, a) {
      m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
      m[i].l = 1 * new Date();
      for (var j = 0; j < e.scripts.length; j++) {
        if (e.scripts[j].src === r) return;
      }
      k = e.createElement(t);
      a = e.getElementsByTagName(t)[0];
      k.async = true;
      k.src = r;
      a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=" + counterId, "ym");
    window.ym(counterId, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      ecommerce: "dataLayer",
      referrer: document.referrer,
      url: window.location.href
    });
  }

  var cookieBanner = document.getElementById("cookieBanner");
  var acceptButton = document.getElementById("cookieAccept");
  var rejectButton = document.getElementById("cookieReject");
  var consent = safeStorageGet(CONSENT_KEY);

  function closeCookieBanner() {
    if (!cookieBanner) return;
    cookieBanner.classList.remove("visible");
    cookieBanner.setAttribute("aria-hidden", "true");
    window.setTimeout(function () { cookieBanner.hidden = true; }, 260);
  }
  function openCookieBanner() {
    if (!cookieBanner) return;
    cookieBanner.hidden = false;
    cookieBanner.setAttribute("aria-hidden", "false");
    window.requestAnimationFrame(function () { cookieBanner.classList.add("visible"); });
  }
  if (consent === "true") loadMetrica();
  if (cookieBanner && !consent) window.setTimeout(openCookieBanner, 450);
  if (acceptButton) acceptButton.addEventListener("click", function () {
    safeStorageSet(CONSENT_KEY, "true");
    closeCookieBanner();
    loadMetrica();
  });
  if (rejectButton) rejectButton.addEventListener("click", function () {
    safeStorageSet(CONSENT_KEY, "rejected");
    closeCookieBanner();
  });
  document.querySelectorAll("[data-open-cookie]").forEach(function (control) {
    control.addEventListener("click", function (event) {
      event.preventDefault();
      openCookieBanner();
    });
  });

/* Interactive local support preview; no live Discord messages are fetched. */
var sc=document.querySelectorAll("[data-support-channel]"),st=document.getElementById("supportChannelTitle"),sb=document.getElementById("supportChatBody");
var sx={"информация":{ru:["информация","Добро пожаловать в Modexa Support","Основные ссылки, правила и способы начать тестирование.","Modexa","Открой приложение Discord, проверь разрешения и попробуй доступные команды."],en:["information","Welcome to Modexa Support","Project links, rules, and ways to start testing.","Modexa","Open the Discord app, review permissions, and try available commands."]},"announcements":{ru:["announcements","Объявления проекта","Важные новости и изменения бета-версии.","Modexa","Следи за обновлениями и проверяй статус сервисов."],en:["announcements","Project announcements","Important beta updates and changes.","Modexa","Follow updates and check service status."]},"information":{ru:["information","Справка по Modexa","Информация о приложении и доступных функциях.","Modexa","Не все запланированные возможности доступны в текущей сборке."],en:["information","Modexa information","Information about the app and available features.","Modexa","Not every planned capability is available in the current build."]},"bug-reports":{ru:["bug-reports","Сообщить об ошибке","Опишите проблему, шаги воспроизведения и ожидаемое поведение.","Участник","Команда /help не отображает одну из доступных команд."],en:["bug-reports","Report a bug","Describe the issue, reproduction steps, and expected behavior.","Member","The /help command does not show an available command."]},"баг-репорты":{ru:["баг-репорты","Шаблон сообщения об ошибке","Добавьте версию, шаги воспроизведения и ожидаемый результат.","Участник","Ожидал ответ команды, но получил сообщение об ошибке."],en:["баг-репорты","Bug report template","Include version, reproduction steps, and expected result.","Member","Expected a command response but received an error."]},"объявления":{ru:["объявления","Новости Modexa","Анонсы обновлений и важных изменений проекта.","Modexa","Спасибо за участие в открытой бете — обратная связь помогает улучшать проект."],en:["объявления","Modexa updates","Announcements about releases and important changes.","Modexa","Thanks for joining the beta. Feedback helps improve the project."]}};
sc.forEach(function(b){b.addEventListener("click",function(){sc.forEach(function(x){x.classList.toggle("is-active",x===b)});var d=sx[b.getAttribute("data-support-channel")];if(!d||!st||!sb)return;var e=d[document.documentElement.lang==="en"?"en":"ru"]||d.ru;st.textContent=e[0];sb.innerHTML="";var w=document.createElement("div");w.className="support-welcome";var wi=document.createElement("span");wi.className="support-welcome-icon";wi.innerHTML='<i data-lucide="messages-square"></i>';var wh=document.createElement("h3");wh.textContent=e[1];var wp=document.createElement("p");wp.textContent=e[2];w.append(wi,wh,wp);var m=document.createElement("div");m.className="support-message";var a=document.createElement("span");a.className="support-avatar";a.textContent=e[3]==="Участник"||e[3]==="Member"?"A":"M";var co=document.createElement("div"),meta=document.createElement("div");meta.className="support-message-meta";var n=document.createElement("strong");n.textContent=e[3];var tag=document.createElement("span");tag.className="support-bot-tag";tag.textContent=e[3]==="Участник"||e[3]==="Member"?"COMMUNITY":"APP";meta.append(n,tag);var tx=document.createElement("p");tx.textContent=e[4];co.append(meta,tx);m.append(a,co);sb.append(w,m);if(window.lucide&&window.lucide.createIcons)window.lucide.createIcons()})});

  /* Lucide is optional: the site remains functional if the CDN is unavailable. */
  if (window.lucide && typeof window.lucide.createIcons === "function") window.lucide.createIcons();
})();