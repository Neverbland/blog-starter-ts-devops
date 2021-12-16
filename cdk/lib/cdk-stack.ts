import * as cdk from '@aws-cdk/core';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3Deployment from '@aws-cdk/aws-s3-deployment';
import * as cloudfront from '@aws-cdk/aws-cloudfront';

export class CdkStack extends cdk.Stack {
	constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const bucket = new s3.Bucket(this, 'NeverBlandBucket', {
			publicReadAccess: true,
			removalPolicy: cdk.RemovalPolicy.DESTROY,
			websiteIndexDocument: 'index.html',
		});

		// Deployment
		const src = new s3Deployment.BucketDeployment(this, 'BucketDeployment', {
			sources: [s3Deployment.Source.asset('../out')],
			destinationBucket: bucket,
		});

		// Cloudfront
		const cf = new cloudfront.CloudFrontWebDistribution(
			this,
			'CloudFrontDeployment',
			{
				originConfigs: [
					{
						s3OriginSource: {
							s3BucketSource: bucket,
						},
						behaviors: [{ isDefaultBehavior: true }],
					},
				],
			}
		);
	}
}
