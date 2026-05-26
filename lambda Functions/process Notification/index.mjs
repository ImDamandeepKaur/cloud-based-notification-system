import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const snsClient = new SNSClient({});
const dbClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dbClient);

export const handler = async (event) => {

    for (const record of event.Records) {

        const data = JSON.parse(record.body);

        if (data.type === 'email') {

            const emailParams = {
                TopicArn: 'arn:aws:sns:ap-south-1:xxxxxxxxx:alerts-topic',
                Message: data.message,
                Subject: 'Cloud Notification'
            };

            await snsClient.send(new PublishCommand(emailParams));
        }

        if (data.type === 'sms') {

            const smsParams = {
                Message: data.message,
                PhoneNumber: data.phone
            };

            await snsClient.send(new PublishCommand(smsParams));
        }

        const logParams = {
            TableName: 'NotificationLogs',
            Item: {
                id: Date.now().toString(),
                message: data.message,
                type: data.type,
                status: 'Delivered',
                timestamp: new Date().toISOString()
            }
        };

        await docClient.send(new PutCommand(logParams));
    }

    return {
        statusCode: 200
    };
};