import { Lunch } from '../models/lunch';
import { asianDishes } from './asian-dishes';
import { meatDishes } from './meat-dishes';
import { pastaDishes } from './pasta-dishes';
import { vegetarianDishes } from './vegetarian-dishes';

export const lunches: Lunch[] = [...asianDishes, ...meatDishes, ...vegetarianDishes, ...pastaDishes];
