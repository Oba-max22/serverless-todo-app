import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'

import { generateUploadUrl } from '../../helpers/todos'


export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  // TODO: Return a presigned URL to upload a file for a TODO item with the provided id
  console.log("Processing Event ", event);
  const todoId = event.pathParameters.todoId;

  const URL = await generateUploadUrl(todoId);

  return {
      statusCode: 200,
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({
          uploadUrl: URL,
      })
  };
};