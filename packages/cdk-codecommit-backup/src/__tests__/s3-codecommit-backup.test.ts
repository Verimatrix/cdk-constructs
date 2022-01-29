import 'jest-cdk-snapshot';
import { Stack } from 'aws-cdk-lib';
import { Repository } from 'aws-cdk-lib/aws-codecommit';
import { Schedule } from 'aws-cdk-lib/aws-events';
import { SnsTopic } from 'aws-cdk-lib/aws-events-targets';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { BackupBucket } from '../backup-bucket';
import { S3CodeCommitBackup } from '../s3-codecommit-backup';

test('default setup', (): void => {
  const stack = new Stack();

  const repository = Repository.fromRepositoryName(stack, 'Repository', 'repo1');

  const backupBucket = new BackupBucket(stack, 'BackupBucket');

  // The following example runs a task every day at 4am
  new S3CodeCommitBackup(stack, 'S3CodeCommitBackup', {
    backupBucket,
    repository,
    schedule: Schedule.cron({ minute: '0', hour: '4' }),
  });

  expect(stack).toMatchCdkSnapshot();
});

test('events', (): void => {
  const stack = new Stack();

  const topic = new Topic(stack, 'Topic');

  const repository = Repository.fromRepositoryName(stack, 'Repository', 'repo1');

  const backupBucket = new BackupBucket(stack, 'BackupBucket');

  // The following example runs a task every day at 4am
  const backup = new S3CodeCommitBackup(stack, 'S3CodeCommitBackup', {
    backupBucket,
    repository,
    schedule: Schedule.cron({ minute: '0', hour: '4' }),
  });

  backup.onBackupStarted('started', { target: new SnsTopic(topic) });

  backup.onBackupSucceeded('succeeded', { target: new SnsTopic(topic) });

  backup.onBackupFailed('failed', { target: new SnsTopic(topic) });

  expect(stack).toMatchCdkSnapshot();
});
