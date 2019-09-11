Lando Tandem Plugin
===================

[![Build Status](https://travis-ci.com/thinktandem/lando-tandem.svg?branch=master)](https://travis-ci.com/thinktandem/lando-tandem)

About Tandem Plugin
-------------------

The `lando-tandem` plugin provides automation commands for the Tandem agency.

ex.

* `lando welcome` // Welcome aboard new Tandemite!

Install
-------

Install from the internet:

Note to run this command you will need `yarn` installed.

```bash
curl -H 'Accept: application/vnd.github.v3.raw' -o /tmp/get-plugin.sh https://api.github.com/repos/thinktandem/lando-tandem/contents/scripts/get-plugin.sh && \
chmod +x /tmp/get-plugin.sh && \
/tmp/get-plugin.sh
```

Roadmap
-------

### MVP

The MVP of the `lando-tandem` plugin will lay the foundation on which most future improvements will be built. Generally it should follow the key points in this [doc](https://docs.google.com/document/d/1jJrs0cUK9gS_9TgtkxmX_I6tLylXeutUKdJyco2vMf4) and...

1. Provide a `lando init` plugin for extant Tandem sites
2. Provide a `lando new-project` command for new Tandem sites

Here are the MVP features for each

#### lando init

You should be able to run `lando init --tandem` and easily pull down an extant Tandem project. This should be similar to how our [Pantheon integration](https://docs.lando.dev/config/pantheon.html) works. This will reduce setup time and also allow us to begin to consolidate our platform.sh integration, helpers, etc.

Generally the flow here should be something like

1. `lando init --tandem` asks you to authenticate against the Tandem Hub
2. You get a list of Tandem sites and select one
3. Tandem hub returns relevant metadata and secrets for that site (eg GitHub repo location, platform.sh auth, etc)
4. Project is cloned down then `lando start`, `lando pull` and you are off and running
5. Project contains useful Tandem commands/automations we use across projects

#### New project

You should be able to run `lando new-project` and spin up a new Tandem project from one of our start states. This should

Generally the flow here should be something like

1. `lando new-project` asks you to authenticate against the Tandem Hub
2. You get a list of Tandem start states and can select one
3. You give the project a name
4. Lando clones the start state locally and modifies Landofiles as needed (eg changes the project name)
4. Lando forks the start state into a different GitHub repo in the Tandem org (option for private/public repo?)
5. Lando sets up the platform.sh site, GitHub integration and automatic backups
6. Lando adds the project to the Tandem Hub so that other users can now pull it down

1. Fork a start state into a different GitHub repo
2. Setup platform.sh

#### Considerations

A big consideration that will need to be figured out here is does Tandem Hub handle storage of relevant auth data for things like platform.sh/GitHub? If a user is starting from scratch they will need platform/github tokens, ssh keys posted to both, etc. Maybe on a first login Tandem hub asks the user for both tokens?

As a design principle it would be awesome to get things to "just work" as much as makes sense.

### Future things

Here is a list of future things we will want to start adding into the mix but _will not_ be part of the MVP

* Automatic population of GitHub issues https://github.com/thinktandem/tandem/issues/95
* Automatic population of GitHub labels https://github.com/thinktandem/tandem/issues/94
* Automatic setup of Travis, CircleCI etc,
* A fully fleshed out platform.sh integration
