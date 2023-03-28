import { Ingredient } from './ingredient';
import { Level } from './level';
import { LunchType } from './lunch-type';
import { PortionWeight } from './portion-weight';

export interface Lunch {
  name: string;
  description?: string;
  image?: string;
  ingredients?: Ingredient[];
  recipe?: string[];
  cost: Level;
  speed: Level;
  portionWeight?: PortionWeight;
  type: LunchType;
}
