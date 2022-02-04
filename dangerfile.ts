import darius from './src';
import { Severity } from './src/types';

(async function dangerReport() {
  await darius({
    prLint: {
      scoped: false,
    },
    jira: {
      severity: Severity.Disable,
    },
  });
})();
