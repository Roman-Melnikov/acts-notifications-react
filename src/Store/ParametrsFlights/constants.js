import { AIR_LINES, FROM_WHERE } from "../../Constants/constants";

export const ADD_FLIGHT = "PARAMETRS_FLIGHTS::ADD_FLIGHT";

export const PARAMETRS_FLIGHTS = {
  airLines: [
    {
      name: AIR_LINES.SIBIRE,
      flights: [
        2505, 2507, 2509, 2511, 2513, 2515, 5336, 5018, 5002, 5004, 5006,
        5020, 5352, 5346, 5306, 5308, 5310, 5042, 5058, 5028, 5116, 5228, 5212,
        5312, 5262, 5264, 5266, 5268, 5272, 5274, 5276, 5280, 5348, 5256, 5220,
        5224, 5202, 5204, 5302, 5304, 5236, 5238, 5242, 5250, 5328, 5258, 5332,
        5050,
      ],
      contract: "АП-16-20 от 08.04.2020г",
    },
    {
      name: AIR_LINES.AEROFLOT,
      flights: [
        1306, 1460, 1462, 6541, 5642,
      ],
      contract: "29063984/Р25-18 от 14.01.2020г",
    },
    {
      name: AIR_LINES.URAL_AIRLINES,
      flights: [100],
      contract: "АП-19-20 от 16.06.2020г",
    },
    {
      name: AIR_LINES.YAKUTIA,
      flights: [465, 485, 484],
      contract: "АП-09-19 от 30.09.2019г",
    },
    {
      name: AIR_LINES.KRAS_AVIA,
      flights: [79],
      contract: "9804 от 31.12.2019г",
    },
    {
      name: AIR_LINES.UTAIR,
      flights: [137],
      contract: "9/19РБ от 31.12.2019г",
    },
    {
      name: AIR_LINES.ALROSA,
      flights: [525, 527, 529, 544],
      contract: "АП-21-20 от 14.07.2020г",
    },
    {
      name: AIR_LINES.REDWINGS,
      flights: [437],
      contract: "АП-04-19 от 30.09.2019г",
    },
    {
      name: AIR_LINES.NORD_AVIA,
      flights: [237],
      contract: "АП-20-20/433-Н19-19 от 16.06.2020г",
    },
    {
      name: AIR_LINES.AZIMUT,
      flights:[219],
      contract: "АП-02-19 от 30.09.2019г",
    }
  ],
  cities: [
    {
      fromWhere: FROM_WHERE.DOMODEDOVO,
      flights: [100, 237, 1237, 437, 544, 2501, 2505, 2507, 2509, 2511, 2513, 2515],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 102322 Домодедово АОПП",
    },
    {
      fromWhere: FROM_WHERE.SCHEREMETEVO,
      flights: [1306, 1460, 1462],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 104040 Шереметьево АОПП",
    },
    {
      fromWhere: FROM_WHERE.NEW_URENGOY,
      flights: [5336],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 629319 Новый Уренгой УОПП",
    },
    {
      fromWhere: FROM_WHERE.YAKUTSK,
      flights: [465, 485, 5262, 5264, 5266, 5268, 5272, 5274, 5276, 5280],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 677960 Якутск МСЦ",
    },
    {
      fromWhere: FROM_WHERE.EKATERINBURG,
      flights: [5018, 5020],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 620970 Екатеринбург АОПП",
    },
    {
      fromWhere: FROM_WHERE.TYUMEN,
      flights: [5352],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 625970 Тюмень АОПП",
    },
    {
      fromWhere: FROM_WHERE.OMSK,
      flights: [5346],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 644965 Омск МСЦ ЦОПО",
    },
    {
      fromWhere: FROM_WHERE.SAINT_PETERSBURG,
      flights: [5004, 5006, 6541],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 190970 Пулково АОПП",
    },
    {
      fromWhere: FROM_WHERE.KRASNOYARSK,
      flights: [5306, 5308, 5310],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 660965 АОПП Красноярского МСЦ",
    },
    {
      fromWhere: FROM_WHERE.PERMIAN,
      flights: [5042, 5058],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 614962 Цех обмена почтовыми отправлениями",
    },
    {
      fromWhere: FROM_WHERE.CHELYABINSK,
      flights: [5028],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 454970 Челябинск. Участок АОПП",
    },
    {
      fromWhere: FROM_WHERE.NERYUNGRI,
      flights: [484],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 678985 Нерюнгри УМСЦ",
    },
    {
      fromWhere: FROM_WHERE.KRASNODAR,
      flights: [5116],
      adress: "630970 Новосибирск-Толмачево АОПП из 350964 Краснодарский МСЦ",
    },
    {
      fromWhere: FROM_WHERE.KYZYL,
      flights: [79],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 667965 Кызыл МСЦ",
    },
    {
      fromWhere: FROM_WHERE.IRKUTSK,
      flights: [5228],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 664965 Иркутск АОПП",
    },
    {
      fromWhere: FROM_WHERE.BLAGOVESHCHENSK,
      flights: [5212],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 675962 Благовещенск МСЦ УОПП",
    },
    {
      fromWhere: FROM_WHERE.ABAKAN,
      flights: [5312],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 655965 Абакан МСО",
    },
    {
      fromWhere: FROM_WHERE.SURGUT,
      flights: [137, 5348],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 628429 Сургут УОСП УС и ОПО и П",
    },
    {
      fromWhere: FROM_WHERE.ULAN_UDE,
      flights: [5256],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 670960 Улан-Удинский МСЦ",
    },
    {
      fromWhere: FROM_WHERE.MAGADAN,
      flights: [5220],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 685960 Магадан МСЦ",
    },
    {
      fromWhere: FROM_WHERE.VLADIVOSTOK,
      flights:[5202, 5204],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 690965 Владивосток АОПП",
    },
    {
      fromWhere: FROM_WHERE.CHITA,
      flights: [5224],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 672960 Чита МСЦ УОП",
    },
    {
      fromWhere: FROM_WHERE.NORILSK,
      flights: [5302, 5304],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 663339 Норильск УООП",
    },
    {
      fromWhere: FROM_WHERE.KHABAROVSK,
      flights: [5236, 5238, 5642],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 680965 Хабаровск МСЦ АОПП",
    },
    {
      fromWhere: FROM_WHERE.MIRNYY,
      flights: [5242, 525, 527, 529],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 678179 Мирный ОП",
    },
    {
      fromWhere: FROM_WHERE.PETROPAVLOVSK_KAMCHATSKY,
      flights: [5250],
      adress: "630970 Новосибирск-Толмачево АОПП из 683962 Петропавловск-Камчатчкий МСЦ УООП",
    },
    {
      fromWhere: FROM_WHERE.NIZHNEVARTOVSK,
      flights: [5328],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 628629 Нижневартовск УОСП УС и ОПО и П",
    },
    {
      fromWhere: FROM_WHERE.YUZHNO_SAKHALINSK,
      flights: [5258],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 693960 Южно-Сахалинск МСЦ",
    },
    {
      fromWhere: FROM_WHERE.ROSTOV_NA_DONU,
      flights: [219],
      adress: "630960 Новосибирск МСЦ из 344965 детальная обработка отправлений-город",
    },
    {
      fromWhere: FROM_WHERE.NOYABRSK,
      flights: [5332],
      adress: "630302 Новосибирск ЛПЦ Цех Логистики из 629819 Ноябрьск УОПП",
    },
    {
      fromWhere: FROM_WHERE.VORONEZH,
      flights: [5050],
      adress: "630970 Новосибирск-Толмачево АОПП из 394964 Воронеж МСЦ УОПК",
    },
  ],
};
