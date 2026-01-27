import Resolver from '@forge/resolver';
import { requestJira } from '@forge/api';

const resolver = new Resolver();

resolver.define('cloneIssue', async ({ context }) => {
  const issueKey = context.extension.issue.key;

  const res = await requestJira(`/rest/api/3/issue/${issueKey}`);
  const issue = await res.json();

  return {
    original: issue.key,
    summary: issue.fields.summary
  };
});

export const handler = resolver.getDefinitions();