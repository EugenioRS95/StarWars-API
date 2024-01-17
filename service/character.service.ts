import {DocumentClient} from 'aws-sdk/clients/dynamodb';
import Character from '../model/character.model';

export default class CharacterService {
    private TableName: string =process.env.CHARACTER_TABLE ?? '';

    constructor(private docClient: DocumentClient) {}

    async getAllPersonajes(): Promise<Character[]> {
        const personajes = await this.docClient.scan({
            TableName: this.TableName
        }).promise();
        return personajes.Items as Character[];
    }


    async createPersonaje(personaje: Character): Promise<Character>{
        const createdObj = await this.docClient.put({
            TableName: this.TableName,
            Item: personaje
        }).promise();

        return personaje as Character;
    }

}