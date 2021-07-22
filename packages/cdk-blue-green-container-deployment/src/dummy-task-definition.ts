import * as path from 'path';

import { NetworkMode } from '@aws-cdk/aws-ecs';
import { Role, ServicePrincipal, ManagedPolicy, PolicyStatement, Effect, IRole } from '@aws-cdk/aws-iam';
import { Construct, CustomResource, CustomResourceProvider, CustomResourceProviderRuntime } from '@aws-cdk/core';

export interface IDummyTaskDefinition {
  readonly executionRole: IRole;

  readonly family: string;

  readonly taskDefinitionArn: string;
}
export interface DummyTaskDefinitionProps {
  readonly family?: string;

  readonly image: string;

  readonly containerPort?: number;
}

export class DummyTaskDefinition extends Construct implements IDummyTaskDefinition {
  public readonly executionRole: IRole;

  public readonly family: string;

  public readonly taskDefinitionArn: string;

  public readonly containerPort: number;

  constructor(scope: Construct, id: string, props: DummyTaskDefinitionProps) {
    super(scope, id);

    this.executionRole = new Role(this, 'ExecutionRole', {
      assumedBy: new ServicePrincipal('ecs-tasks.amazonaws.com'),
      managedPolicies: [ManagedPolicy.fromAwsManagedPolicyName('service-role/AmazonECSTaskExecutionRolePolicy')],
    });

    const serviceToken = CustomResourceProvider.getOrCreate(this, 'Custom::DummyTaskDefinition', {
      codeDirectory: path.join(__dirname, 'lambdas', 'dummy-task-definition'),
      runtime: CustomResourceProviderRuntime.NODEJS_12_X,
      policyStatements: [
        {
          Effect: Effect.ALLOW,
          Action: ['ecs:RegisterTaskDefinition', 'ecs:DeregisterTaskDefinition'],
          Resource: '*',
        },
        {
          Effect: Effect.ALLOW,
          Action: ['iam:PassRole'],
          Resource: this.executionRole.roleArn,
        },
      ],
    });

    this.family = props.family || this.node.addr;
    this.containerPort = props.containerPort || 80;

    const taskDefinition = new CustomResource(this, 'CustomResource', {
      serviceToken,
      resourceType: 'Custom::DummyTaskDefinition',
      properties: {
        Family: this.family,
        Image: props.image,
        ExecutionRoleArn: this.executionRole.roleArn,
        NetworkMode: NetworkMode.AWS_VPC,
        ContainerPort: this.containerPort,
      },
    });

    this.taskDefinitionArn = taskDefinition.ref;
  }

  /**
   * Adds a policy statement to the task execution IAM role.
   */
  public addToExecutionRolePolicy(statement: PolicyStatement): void {
    this.executionRole.addToPrincipalPolicy(statement);
  }
}
