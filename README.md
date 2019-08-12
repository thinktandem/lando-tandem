Lando Tandem Plugin
===================

[![Build Status](https://travis-ci.com/thinktandem/lando-tandem.svg?branch=master)](https://travis-ci.com/thinktandem/lando-tandem)

About Tandem Plugin
-------------------

The `lando-tandem` plugin provides automation commands for the Tandem agency.

ex.

* lando welcome // Welcome aboard new Tandemite!

Install
-------

Install from the internet:

Note to run this command you will need `yarn` installed.

```bash
curl -H 'Accept: application/vnd.github.v3.raw' -o /tmp/get-plugin.sh https://api.github.com/repos/thinktandem/lando-tandem/contents/scripts/get-plugin.sh && \
chmod +x /tmp/get-plugin.sh && \
/tmp/get-plugin.sh && \
yarn --cwd ~/.lando/plugins/lando-tandem
```

