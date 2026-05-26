import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const sqs = new SQSClient({ region: "ap-south-1" });

export const handler = async (event) => {

    const body = JSON.parse(event.body);

    const params = {
        QueueUrl: "https://sqs.ap-south-1.amazonaws.com/xxxxxxxxxxx/notification-queue",
        MessageBody: JSON.stringify(body)
    };

    try {

        await sqs.send(
            new SendMessageCommand(params)
        );

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "*"
            },
            body: JSON.stringify({
                message: "Notification added to queue"
            })
        };

    } catch (error) {

        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*", //Allowed all IAM Policies!!
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "*"
            },
            body: JSON.stringify({
                error: error.message
            })
        };

    }
};