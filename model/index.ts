import * as AWS from 'aws-sdk';
import { DocumentClient} from 'aws-sdk/clients/dynamodb';

export default function dynamoClient(): DocumentClient {
    if(process.env.IS_OFFLINE) {
        return new AWS.DynamoDB.DocumentClient({
            region: 'localhost',
            endpoint: 'http://localhost:8000'
        });
    }
    return new AWS.DynamoDB.DocumentClient();
} 