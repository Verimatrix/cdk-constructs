import * as path from 'path';
import { aws_cloudfront, aws_lambda } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { EdgeFunction, CommonEdgeFunctionProps } from './edge-function';
import { LogLevel } from './with-configuration';

// Blacklisted headers aren't exposed and can't be added by Lambda@Edge functions:
// https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-requirements-limits.html#lambda-blacklisted-headers
const BLACKLISTED_HEADERS = [
  /^connection$/i,
  /^expect$/i,
  /^keep-alive$/i,
  /^proxy-authenticate$/i,
  /^proxy-authorization$/i,
  /^proxy-connection$/i,
  /^trailer$/i,
  /^upgrade$/i,
  /^x-accel-buffering$/i,
  /^x-accel-charset$/i,
  /^x-accel-limit-rate$/i,
  /^x-accel-redirect$/i,
  /^X-Amz-Cf-.*/i,
  /^X-Amzn-.*/i,
  /^X-Cache.*/i,
  /^X-Edge-.*/i,
  /^X-Forwarded-Proto.*/i,
  /^X-Real-IP$/i,
];

export interface HttpHeadersProps extends CommonEdgeFunctionProps {
  readonly logLevel?: LogLevel;
  readonly httpHeaders: Record<string, string>;
}

export class HttpHeaders extends EdgeFunction {
  constructor(scope: Construct, id: string, props: HttpHeadersProps) {
    super(scope, id, {
      name: 'http-headers',
      code: aws_lambda.Code.fromAsset(path.join(__dirname, 'lambdas', 'http-headers')),
      eventType: aws_cloudfront.LambdaEdgeEventType.ORIGIN_RESPONSE,
      edgeRole: props.edgeRole,
      configuration: {
        logLevel: props.logLevel ?? LogLevel.WARN,
        httpHeaders: props.httpHeaders,
      },
    });

    Object.keys(props.httpHeaders).forEach((header) => {
      if (BLACKLISTED_HEADERS.some((blheader) => blheader.test(header))) {
        throw new Error(`HttpHeader ${header} is blacklisted and can't be added by Lambda@Edge functions`);
      }
    });
  }
}
