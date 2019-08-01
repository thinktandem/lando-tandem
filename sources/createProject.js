'use strict';

const OktoKit = require('@octokit/rest');
const octokit = new OctoKit();

const repos = octokit.repos.listForOrg({
  org: 'thinktandem'
}).then(({ data }) => {
  console.log(data);
  return data;
});

module.exports = {
  sources: [{
    name: 'tandem-project',
    label: 'tandem-project',
    options: lando => ({
      'github-repo': {
        describe: 'GitHub git url',
        string: true,
        interactive: {
          type: 'autocomplete',
          message: 'Which Tandem start state?',
          source: (ansewers, input) => {
            return repos;
          },
        }
      }
    }),
  }],
};
