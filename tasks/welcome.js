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
  console.log("\n\t\tWelcome aboard new Tandemite!\n");
}
