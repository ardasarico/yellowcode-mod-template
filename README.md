# YellowCode mod template

A starting point for a [YellowCode](https://github.com/ardasarico/YellowCode) mod. It adds one slash command,
`/hello [name]`, which shows `Hello: Hello, <name>` under the prompt.

The mod API is described in [Mod API](https://github.com/ardasarico/YellowCode/blob/main/docs/mod-api.md).

## Start

1. Click **Use this template** on GitHub and create your own repo from it.
2. Clone it and install the types: `bun install`.
3. Type-check with `bunx tsc`.

## Make it yours

Edit `yellowcode-mod.json`:

- `id`: lowercase letters and digits, words joined by single dashes, like `my-mod`. It must equal the name of the
  folder the mod sits in under the mods folder.
- `name`: the name shown in `/mods`.
- `version`: your mod's own version, like `0.1.0`.
- `description`: one line, shown in `/mods`.
- `api`: the range of mod API versions the mod works with. Leave it at `^0.2` until the API moves on.
- `agents`: `"any"`, or a list like `["claude"]` if the mod gives the agent tools or relies on one agent.
- `entry`: the file to load, here `index.tsx`.
- `screenshots`: up to 6 PNG or JPEG files in the repo, each at most 1 MB, shown on the
  [Marketplace](https://yellowcode.ardasari.co/marketplace). The first is the cover; use 16:10, at least 1280 pixels
  wide. Replace `screenshots/hello.png` with your own.

Also change `name` in `package.json`, and write your code in `index.tsx`.

`@yellowcode/mod` holds only the types. Keep its version at the YellowCode version you use: `bun add -d @yellowcode/mod@<version>`.

## Try it

Mods live in `~/.yellowcode/mods/<id>/` (under `$YELLOWCODE_HOME` when that is set). Link your working folder there,
named after the id:

```sh
ln -s ~/code/my-mod ~/.yellowcode/mods/hello
```

Restart YellowCode, type `/hello world`, and open `/mods` to see the mod. After editing the entry file, press Ctrl+R on
the mod in `/mods` to reload it.

## Get listed

See [Publishing](https://yellowcode.ardasari.co/docs/modding/publishing). In short, a listed mod:

- has `yellowcode-mod.json` at the root of a public GitHub repo,
- does not load code from the network and does not update itself,
- is not minified or obfuscated, and has no symlinks,
- has a `bun.lock` next to its `package.json`,
- has `@yellowcode/mod` only as a dev dependency, and `solid-js`, `@opentui/*` and `yellowcode` only as peer
  dependencies, since YellowCode gives every mod its own copies,
- runs only files inside the mod, or packages pinned to an exact version, in its `mcpServers`.
