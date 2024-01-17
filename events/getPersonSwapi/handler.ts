import {APIGatewayProxyHandler} from 'aws-lambda';
import { personSwapiService } from '../../service';

export const getSwapiCharacters: APIGatewayProxyHandler = async (event) => {
    try {
        const personajes = await personSwapiService.getPersons();

        return {
            statusCode: 200,
            body: JSON.stringify(personajes)
        }
    } catch(error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
}