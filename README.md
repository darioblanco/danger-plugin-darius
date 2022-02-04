# danger-plugin-darius

Set of Danger rules used to check personal PRs.
This repository serves as an example to set up company specific rules for PR checking.

## Usage

Install:

```sh
yarn add danger-plugin-darius --dev
```

At a glance:

```js
// dangerfile.js
import darius from 'danger-plugin-darius';

(async function dangerReport() {
  const commitlintConfig = {
    severity: 'warn',
  };
  await darius();
})();
```

To override some default parameters:

```js
// dangerfile.js
import configLernaScopes from '@commitlint/config-lerna-scopes';
import darius from 'danger-plugin-darius';

(async function dangerReport() {
  await darius({
    branchSize: {
      maxCommits: 20,
      maxFiles: 200,
      severity: 'fail',
    },
    conventional: {
      rules: configLernaScopes.rules,
      severity: 'warn',
    },
    prLint: {
      severity: 'message',
      scoped: false,
    },
    jira: {
      severity: 'disabled',
    },
  });
})();
```

## Parameters

| Config       | Name          | Default                                 | Description                                    |
| ------------ | ------------- | --------------------------------------- | ---------------------------------------------- |
| branchSize   | maxCommits    | `10`                                    | maximum number of commits                      |
| branchSize   | maxLines      | `2000`                                  | maximum number of line additions and deletions |
| branchSize   | maxFiles      | `100`                                   | maximum number of changed files                |
| branchSize   | severity      | `warn`                                  | danger event type                              |
| conventional | rules         | `@commitlint/config-conventional` rules | conventional commit rules to lint              |
| conventional | severity      | `fail`                                  | danger event type                              |
| prLint       | minBodyLength | `warn`                                  | minimum number of characters in the PR body    |
| prLint       | severity      | `fail`                                  | danger event type                              |
| jira         | severity      | `warn`                                  | danger event type                              |

## Changelog

See the GitHub [release history](https://github.com/darioblanco/danger-plugin-darius/releases).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
