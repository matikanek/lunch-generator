import { Lunch } from '../models/lunch';

export const asianDishes: Lunch[] = [
  {
    name: 'Pad Thai',
    description: 'tajski makaron ryżowy z warzywami, kurczakiem, jajkiem i orzeszkami ziemnymi w sosie tamarindowym',
    cost: 3,
    speed: 4,
    type: 'asia',
    ingredients: [
      {
        name: 'makaron ryżowy',
        amount: 50,
        unit: 'g',
      },
      {
        name: 'olej roślinny',
        amount: 1,
        unit: 'łyżka',
      },
      {
        name: 'ząbek czosnku',
        amount: 1,
        prepareMethod: 'posiekać',
      },
      {
        name: 'pierś z kurczaka',
        amount: 50,
        unit: 'g',
        prepareMethod: 'pokrojony w kostkę',
      },
      {
        name: 'jajko',
        amount: 1,
      },
      {
        name: 'cebula',
        amount: 0.25,
        prepareMethod: 'posiekana',
      },
      {
        name: 'czerwona papryka',
        amount: 0.25,
        prepareMethod: 'pokrojona w paski',
      },
      {
        name: 'marchewka',
        amount: 0.25,
        prepareMethod: 'pokrojona w cienkie paski',
      },
      {
        name: 'sos sojowy',
        amount: 1,
        unit: 'łyżka',
      },
      {
        name: 'sos rybny',
        amount: 1,
        unit: 'łyżka',
      },
      {
        name: 'cukier brązowy',
        amount: 1,
        unit: 'łyżeczka',
      },
      {
        name: 'sok z ćwiartki limonki',
      },
      {
        name: 'kolendra',
        amount: 1,
        unit: 'łyżeczka',
        prepareMethod: 'posiekana',
      },
      {
        name: 'orzechy ziemne',
        amount: 5,
        unit: 'sztuk',
        prepareMethod: 'posiekane',
      },
    ],
    recipe: [
      'Gotuj makaron ryżowy według instrukcji na opakowaniu. Odcedź i odstaw na bok.',
      'W dużym rondlu lub woku rozgrzej olej na średnim ogniu. Dodaj czosnek i smaż przez kilka sekund, aż zacznie pachnieć.',
      'Dodaj kurczaka i smaż, aż mięso zbrązowieje.',
      'Ubij jajko/jajka w misce i wlej do rondla. Smaż na złoty kolor, mieszając.',
      'Dodaj cebulę, paprykę i marchewkę do rondla i smaż przez kilka minut, aż warzywa zmiękną.',
      'Dodaj ugotowany makaron ryżowy do rondla i dobrze wymieszaj z pozostałymi składnikami.',
      'Dodaj sos sojowy, sos rybny, cukier i sok z limonki. Mieszaj, aż wszystkie składniki dobrze się połączą.',
      'Przełóż Pad Thai na talerz i posyp posiekaną kolendrą i prażonymi orzeszkami ziemnymi.',
    ],
    portionWeight: { weight: 450, unit: 'g' },
  },
  {
    name: 'Kung Pao Chicken',
    description:
      'chińska potrawa z kurczakiem, orzeszkami ziemnymi, papryczkami chili, imbirem i cebulą w pikantnym sosie',
    cost: 3,
    speed: 3,
    type: 'asia',
    ingredients: [
      {
        name: 'pierś z kurczaka',
        amount: 150,
        unit: 'g',
        prepareMethod: 'pokrojony w kostkę',
      },
      {
        name: 'cebula',
        amount: 0.5,
        prepareMethod: 'pokrojona w kostkę',
      },
      {
        name: 'ząbek czosnku',
        amount: 1,
        prepareMethod: 'posiekany',
      },
      {
        name: 'czerwona papryka',
        amount: 0.5,
        prepareMethod: 'pokrojona w kostkę',
      },
      {
        name: 'zielona papryka',
        amount: 0.5,
        prepareMethod: 'pokrojona w kostkę',
      },
      {
        name: 'olej roślinny',
        amount: 1,
        unit: 'łyżka',
      },
      {
        name: 'sos sojowy',
        amount: 1,
        unit: 'łyżka',
      },
      {
        name: 'cukier',
        amount: 1,
        unit: 'łyżeczka',
      },
      {
        name: 'mąka kukurydziana',
        amount: 0.5,
        unit: 'łyżeczka',
      },
      {
        name: 'ocet ryżowy',
        amount: 1,
        unit: 'łyżeczka',
      },
      {
        name: 'sos chili',
        amount: 0.5,
        unit: 'łyżeczka',
      },
      {
        name: 'pieprz kajeński',
        amount: 1,
        unit: 'łyżeczka',
      },
      {
        name: 'orzechy ziemne',
        amount: 1,
        unit: 'łyżeczka',
      },
      {
        name: 'sól',
        amount: 1,
        unit: 'szczypta',
      },
      {
        name: 'ryż',
        amount: 100,
        unit: 'g',
        prepareMethod: 'ugotowany',
      },
    ],
    recipe: [
      'W małej misce wymieszaj sos sojowy, cukier, mąkę kukurydzianą, ocet ryżowy, sos chili i sól. Odstaw na bok.',
      'Na patelni rozgrzej olej roślinny na średnim ogniu. Dodaj kurczaka i smaż przez około 3-4 minuty, aż się zrumieni.',
      'Dodaj cebulę, czosnek, papryki i ziarna Sichuan. Smaż przez kolejne 2-3 minuty.',
      'Wymieszaj sos i dodaj go na patelnię. Gotuj przez 1-2 minuty, aż sos zgęstnieje i pokryje kurczaka i warzywa.',
      'Posyp danie orzeszkami ziemnymi i podawaj z ugotowanym ryżem.',
    ],
    portionWeight: { weight: 450, unit: 'g' },
  },
  {
    name: 'Pho',
    description: 'wietnamska zupa z wołowiną, ryżowymi makaronami, cebulą, imbirem i sosem rybnym.',
    cost: 2,
    speed: 2,
    type: 'asia',
    ingredients: [
      {
        name: 'bulion wołowy lub drobiowy',
        amount: 350,
        unit: 'ml',
      },
      {
        name: 'makaron ryżowy',
        amount: 50,
        unit: 'g',
      },
      {
        name: 'mięso wołowe',
        amount: 100,
        unit: 'g',
      },
      {
        name: 'cebula',
        amount: 0.5,
      },
      {
        name: 'imbir',
        amount: 0.5,
        unit: 'łyżka',
        prepareMethod: 'starty',
      },
      {
        name: 'sos rybny',
        amount: 0.5,
        unit: 'łyżeczka',
      },
      {
        name: 'cukier',
        amount: 0.5,
        unit: 'łyżeczka',
      },
      {
        name: 'sól',
        amount: 0.5,
        unit: 'łyżeczka',
      },
      {
        name: 'pieprz',
        amount: 0.25,
        unit: 'łyżeczka',
        prepareMethod: 'mielony',
      },
      {
        name: 'kolendra',
        amount: 3,
        unit: 'listki',
      },
      {
        name: 'papryka',
        amount: 3,
        unit: 'plasterki',
      },
      {
        name: 'limonka',
        amount: 3,
        unit: 'plasterki',
      },
    ],
    recipe: [
      'W garnku zagotuj bulion i gotuj na wolnym ogniu przez około 10 minut.',
      'Ugotuj makaron ryżowy zgodnie z instrukcją na opakowaniu, a następnie odcedź i odstaw na bok.',
      'Pokrój mięso na bardzo cienkie plasterki (możesz też zamrozić mięso na kilka minut, aby ułatwić sobie jego krojenie).',
      'Pokrój cebulę na cienkie piórka.',
      'Dodaj do bulionu starty imbir, sos rybny, cukier, sól i pieprz. Gotuj na wolnym ogniu przez kolejne 5 minut.',
      'Na dno miseczki włóż ugotowane ryżowe wstęgi, a na wierzch ułóż plasterki mięsa i posyp cebulką.',
      'Zalej gorącym bulionem (bulion powinien być bardzo gorący, aby ugotować mięso).',
      'Na wierzch dodaj kilka listków kolendry, plasterki papryki i limonkę (opcjonalnie).',
      'Podawaj od razu, mieszając składniki w miseczce przed jedzeniem.',
    ],
    portionWeight: { weight: 450, unit: 'g' },
  },
  { name: 'Sushi Rolls', cost: 4, speed: 5, type: 'asia' },
  { name: 'Miso Soup', cost: 2, speed: 1, type: 'asia' },
  { name: 'Bao Buns', cost: 3, speed: 4, type: 'asia' },
  { name: 'Bibimbap', cost: 3, speed: 4, type: 'asia' },
  { name: 'Teriyaki Salmon', cost: 4, speed: 3, type: 'asia' },
  { name: 'Ramen Soup', cost: 2, speed: 4, type: 'asia' },
  { name: 'Korean Fried Chicken', cost: 3, speed: 3, type: 'asia' },
];