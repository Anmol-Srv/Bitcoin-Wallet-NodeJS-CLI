oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g bitcoin_wallet_cli
$ bitcoin_wallet_cli COMMAND
running command...
$ bitcoin_wallet_cli (--version)
bitcoin_wallet_cli/0.0.0 linux-x64 node-v18.18.2
$ bitcoin_wallet_cli --help [COMMAND]
USAGE
  $ bitcoin_wallet_cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bitcoin_wallet_cli hello PERSON`](#bitcoin_wallet_cli-hello-person)
* [`bitcoin_wallet_cli hello world`](#bitcoin_wallet_cli-hello-world)
* [`bitcoin_wallet_cli help [COMMANDS]`](#bitcoin_wallet_cli-help-commands)
* [`bitcoin_wallet_cli plugins`](#bitcoin_wallet_cli-plugins)
* [`bitcoin_wallet_cli plugins:install PLUGIN...`](#bitcoin_wallet_cli-pluginsinstall-plugin)
* [`bitcoin_wallet_cli plugins:inspect PLUGIN...`](#bitcoin_wallet_cli-pluginsinspect-plugin)
* [`bitcoin_wallet_cli plugins:install PLUGIN...`](#bitcoin_wallet_cli-pluginsinstall-plugin-1)
* [`bitcoin_wallet_cli plugins:link PLUGIN`](#bitcoin_wallet_cli-pluginslink-plugin)
* [`bitcoin_wallet_cli plugins:uninstall PLUGIN...`](#bitcoin_wallet_cli-pluginsuninstall-plugin)
* [`bitcoin_wallet_cli plugins reset`](#bitcoin_wallet_cli-plugins-reset)
* [`bitcoin_wallet_cli plugins:uninstall PLUGIN...`](#bitcoin_wallet_cli-pluginsuninstall-plugin-1)
* [`bitcoin_wallet_cli plugins:uninstall PLUGIN...`](#bitcoin_wallet_cli-pluginsuninstall-plugin-2)
* [`bitcoin_wallet_cli plugins update`](#bitcoin_wallet_cli-plugins-update)

## `bitcoin_wallet_cli hello PERSON`

Say hello

```
USAGE
  $ bitcoin_wallet_cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/Anmol-Srv/bitcoin_wallet_cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `bitcoin_wallet_cli hello world`

Say hello world

```
USAGE
  $ bitcoin_wallet_cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ bitcoin_wallet_cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/Anmol-Srv/bitcoin_wallet_cli/blob/v0.0.0/dist/commands/hello/world.ts)_

## `bitcoin_wallet_cli help [COMMANDS]`

Display help for bitcoin_wallet_cli.

```
USAGE
  $ bitcoin_wallet_cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for bitcoin_wallet_cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/lib/commands/help.ts)_

## `bitcoin_wallet_cli plugins`

List installed plugins.

```
USAGE
  $ bitcoin_wallet_cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ bitcoin_wallet_cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/lib/commands/plugins/index.ts)_

## `bitcoin_wallet_cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bitcoin_wallet_cli plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bitcoin_wallet_cli plugins add

EXAMPLES
  $ bitcoin_wallet_cli plugins add myplugin 

  $ bitcoin_wallet_cli plugins add https://github.com/someuser/someplugin

  $ bitcoin_wallet_cli plugins add someuser/someplugin
```

## `bitcoin_wallet_cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ bitcoin_wallet_cli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ bitcoin_wallet_cli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/lib/commands/plugins/inspect.ts)_

## `bitcoin_wallet_cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bitcoin_wallet_cli plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bitcoin_wallet_cli plugins add

EXAMPLES
  $ bitcoin_wallet_cli plugins install myplugin 

  $ bitcoin_wallet_cli plugins install https://github.com/someuser/someplugin

  $ bitcoin_wallet_cli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/lib/commands/plugins/install.ts)_

## `bitcoin_wallet_cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ bitcoin_wallet_cli plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ bitcoin_wallet_cli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/lib/commands/plugins/link.ts)_

## `bitcoin_wallet_cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bitcoin_wallet_cli plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bitcoin_wallet_cli plugins unlink
  $ bitcoin_wallet_cli plugins remove

EXAMPLES
  $ bitcoin_wallet_cli plugins remove myplugin
```

## `bitcoin_wallet_cli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ bitcoin_wallet_cli plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/lib/commands/plugins/reset.ts)_

## `bitcoin_wallet_cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bitcoin_wallet_cli plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bitcoin_wallet_cli plugins unlink
  $ bitcoin_wallet_cli plugins remove

EXAMPLES
  $ bitcoin_wallet_cli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/lib/commands/plugins/uninstall.ts)_

## `bitcoin_wallet_cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bitcoin_wallet_cli plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bitcoin_wallet_cli plugins unlink
  $ bitcoin_wallet_cli plugins remove

EXAMPLES
  $ bitcoin_wallet_cli plugins unlink myplugin
```

## `bitcoin_wallet_cli plugins update`

Update installed plugins.

```
USAGE
  $ bitcoin_wallet_cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.14/lib/commands/plugins/update.ts)_
<!-- commandsstop -->
