"use strict";
const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1"
});

exports.handler = async (event, context, callback) => {
    console.log(JSON.stringify(`Event: event`));
    const ddb = new AWS.DynamoDB({
        apiVersion: "2012-10-08"
    });
    const documentClient = new AWS.DynamoDB.DocumentClient({
        region: "us-east-1"
    });

    let responseBody = "";
    let statusCode = 0;

    const {
        id,
        correo,
        nombre,
        telefono
    } = JSON.parse(event.body);

    const params = {
        TableName: "usuarios",
        Item: {
            id: id,
            correo: correo,
            nombre: nombre,
            telefono: telefono
        }
    };

    try {
        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 201;
    } catch (error) {
        responseBody = "Unable to insert user data";
        statusCode = 403;
    }


    const response = {
        statusCode : statusCode,
        body : responseBody,
        headers: { "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token", "Access-Control-Allow-Origin": "*"}
    }
    return response;
};