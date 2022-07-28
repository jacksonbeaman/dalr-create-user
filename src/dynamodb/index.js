const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient } = require('@aws-sdk/lib-dynamodb');

const ddbConfig = {
  region: 'us-west-2',
  accessKeyId: 'AKIAZIQ6344KLAP3KURK',
  secretAccessKey: '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',
};
const ddbClient = new DynamoDBClient({ ...ddbConfig });
const ddb = DynamoDBDocumentClient.from(ddbClient);

// export { ddb };
module.exports = ddb;
