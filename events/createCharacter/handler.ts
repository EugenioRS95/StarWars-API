import {APIGatewayProxyHandler} from 'aws-lambda';
import { v4 } from 'uuid';
import {characterService} from '../../service';
import Character from '../../model/character.model';

export const setCharacter: APIGatewayProxyHandler = async (event, context) => {

    try {
        context.callbackWaitsForEmptyEventLoop = false;
        const characterBody = JSON.parse(event.body ?? '') as Character;
        const id = v4();
        const character = await characterService.createPersonaje({
            id,
            ...characterBody            
        });

        return {
            statusCode: 201,
            body: JSON.stringify(character)
        }
    } catch(error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}