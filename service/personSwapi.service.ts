import axios from 'axios';
import PersonSwapiEntity from '../model/personSwapi.model';
import { CharacterMapper } from '../mapper/personaje.mapper';
import Character from '../model/character.model';

export default class personSwapiService {
    constructor() {}

    async getPersons(): Promise<Character[]> {
        const url = process.env.SWAPI_URL ?? '';
        const result = (await axios.get(url)).data;

        return result.results.map((obj: PersonSwapiEntity) => {
            return CharacterMapper.characterEntityFromObject(obj);
        }) ;
    }
}