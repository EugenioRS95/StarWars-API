import {APIGatewayProxyHandler} from 'aws-lambda';
import {characterService} from '../../service';
//instanciamos el servicio

export const getCharacters: APIGatewayProxyHandler = async (event) => {
    try {
        const personajes = await characterService.getAllPersonajes();

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