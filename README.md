# Serverless Key-Value Service

This is a key-value service using DynamoDb, AWS Lambda and API Gateway and Serverless Framework. 

## Installation (Not mandatory - But can still do if you want)

1. Run `serverless install --url https://github.com/achalshahp/DKV.git` to install the service in your current working directory - This is assuming npm and serverless are already installed in your env. 
2. Next up cd into the service with `cd DKV`
3. Run `npm install`
4. Deploy with `serverless deploy`
5. If you dont want to do the installation, you can directly issue the CURL/POSTMAN commands that i have provided below. The endpoint, i can send it to you via email.

## How to use

Simply perform requests against the exposed endpoints:

### Create

```bash
curl -X POST https://XXXX.execute-api.region.amazonaws.com/dev/mydkv --data '{ ""key" : "value"" }'
```

### Read all


```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/mydkv
```

### Read a Specific record

```bash
curl https://XXXX.execute-api.region.amazonaws.com/dev/mydkv/<id>
```

### Update

```bash
curl -X PUT https://XXXX.execute-api.region.amazonaws.com/dev/mydkv/<id> --data '{ "key" : "newvalue" }'
```

### DELETE

```bash
curl -X DELETE https://XXXX.execute-api.region.amazonaws.com/dev/mydkv/<id>
```

## AWS services used

- Lambda
- API Gateway
- DynamoDB
