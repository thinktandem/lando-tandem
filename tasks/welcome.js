'use strict';

module.exports = lando => ({
  command: 'welcome',
  describe: 'Welcome a new Tandemite.',
  level: 'app',
  run: options => {
    tandemWelcome();
  },
});

/**
 * Helper function to welcome a dev to Tandem!
 */
function tandemWelcome() {
  console.log('\n\t\tWelcome aboard new Tandemite!\n');
  console.table({
    'Tandem Docs': 'https://docs.thinktandem.io',
    'Lando Docs': 'https://docs.devwithlando.io',
  });
  console.log('\n');
}
