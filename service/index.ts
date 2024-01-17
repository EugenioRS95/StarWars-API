import dynamoClient from '../model/index';
import CharacterService from './character.service';
import PersonSwapiService from './personSwapi.service';

export const characterService = new CharacterService(dynamoClient());
export const personSwapiService = new PersonSwapiService();