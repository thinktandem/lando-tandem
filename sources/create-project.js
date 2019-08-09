'use strict';

const OctoKit = require('@octokit/rest');
const _ = require('lodash');

const octokit = new OctoKit();

const repos = (answers, Promise) => {
  return new Promise((res, rej) => {
    octokit.repos.listForOrg({
      org: 'thinktandem',
    });
  });
};

const getAutoCompleteRepos = (answers, Promise, input = null) => {
  if (!_.isEmpty(repos)) {
    return Promise.resolve(repos).filter(site => _.startsWith(site.name, input));
  } else {
    return repos(answers, Promise).then(sites => {
      repos = sites;
      return repos;
    });
  }
};

module.exports = {
  sources: [{
    name: 'tandem-create-project',
    label: 'tandem-create-project',
    options: lando => ({
      'github-repo': {
        describe: 'GitHub git url',
        string: true,
        interactive: {
          type: 'autocomplete',
          message: 'Which Tandem start state?',
          source: (answers, input) => {
            console.log('answers', answers);
            return getAutoCompleteRepos(answers, lando.Promise, input);
          },
          when: answers => answers.source === 'tandem-project',
          weight: 130,
        },
      },
    }),
  }],
};
