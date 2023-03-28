import { Lunch } from '../models/lunch';

export const meatDishes: Lunch[] = [
  {
    id: 11,
    name: 'Beef Stroganoff',
    description:
      'danie mięsne, składające się z cienko pokrojonego mięsa wołowego gotowanego w kremowym sosie z cebulą i czosnkiem',
    cost: 3,
    speed: 3,
    type: 'meet',
    ingredients: [
      {
        name: 'mięso wołowe',
        amount: 125,
        unit: 'g',
        prepareMethod: 'pokrojone w cienkie paski',
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
        name: 'bulion wołowy',
        amount: 0.5,
        unit: 'szklanka',
      },
      {
        name: 'śmietana',
        amount: 60,
        unit: 'ml',
      },
      {
        name: 'mąka przenka',
        amount: 1,
        unit: 'łyżeczka',
      },
      {
        name: 'masło',
        amount: 15.625,
        unit: 'g',
      },
      {
        name: 'sól i pieprz',
      },
      {
        name: 'słodka papryka',
        amount: 0.5,
        unit: 'łyżeczka',
      },
      {
        name: 'makaron świderki',
        amount: 100,
        unit: 'g',
      },
      {
        name: 'natka pietruszki',
        amount: 1,
        unit: 'łyżka',
        prepareMethod: 'posiekana',
      },
    ],
    recipe: [
      'Ugotuj makaron według instrukcji na opakowaniu. Odstaw na bok.',
      'Rozgrzej patelnię na średnim ogniu i dodaj masło. Gdy się rozpuści, dodaj cebulę i smaż, aż zmięknie.',
      'Dodaj mięso i smaż, aż zbrązowieje ze wszystkich stron. Przesuń mięso na bok patelni.',
      'Dodaj czosnek i smaż przez około 30 sekund, mieszając.',
      'Posyp mąką i wymieszaj, aż mięso i cebula zostaną pokryte mąką.',
      'Wlej bulion i mieszaj, aż sos zgęstnieje i zacznie bulgotać. Dodaj paprykę, sól i pieprz do smaku.',
      'Zmniejsz ogień i dodaj śmietanę. Mieszaj, aż wszystko się połączy i sos będzie gładki. Gotuj na wolnym ogniu przez kolejne 2-3 minuty, aż mięso będzie dobrze ugotowane i sos zgęstnieje.',
      'Podawaj z ugotowanym makaronem i posiekaną natką pietruszki na wierzchu (opcjonalnie).',
    ],
    portionWeight: { weight: 450, unit: 'g' },
  },
  { id: 12, name: "Shepherd's Pie", cost: 2, speed: 3, type: 'meet' },
  { id: 13, name: 'Chicken Fajitas', cost: 3, speed: 3, type: 'meet' },
  { id: 14, name: 'Pork Chops with Apples', cost: 3, speed: 3, type: 'meet' },
  { id: 15, name: 'Steak and Potatoes', cost: 4, speed: 4, type: 'meet' },
  { id: 16, name: 'Meatloaf', cost: 2, speed: 3, type: 'meet' },
  { id: 17, name: 'Spaghetti Bolognese', cost: 3, speed: 3, type: 'meet' },
  { id: 18, name: 'Beef Stir Fry', cost: 3, speed: 3, type: 'meet' },
  { id: 19, name: 'BBQ Ribs', cost: 4, speed: 5, type: 'meet' },
  { id: 20, name: 'Tacos', cost: 3, speed: 3, type: 'meet' },
  { id: 21, name: 'Chicken Parmesan', cost: 3, speed: 3, type: 'meet' },
  { id: 22, name: 'Moroccan Lamb Stew', cost: 4, speed: 4, type: 'meet' },
  { id: 23, name: 'Beef and Broccoli', cost: 3, speed: 3, type: 'meet' },
  { id: 24, name: 'Chili con Carne', cost: 3, speed: 4, type: 'meet' },
  { id: 25, name: 'Greek Gyros', cost: 3, speed: 3, type: 'meet' },
];
