# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)


## Tools

* Bun (via npm)
  * [NPM via nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
  * `nvm on`
  * `nvm install lts`
  * `nvm use 22.14.0` or whatever version number
  * `node --version`
  * `npm --version`
  * `npm` to see if there is a version to upgrade to
  * `npm install -g npm@11.2.0` or whatever version
  * `npm install -g bun`
  * `bun --version`
* [Rust, using Rustup](https://www.rust-lang.org/tools/install)
  * `rustup default stable-msvc`
  * `rustup update`
* [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)

Install all that and restart your computer.

## Installation

```bash
bun install
```

Development
```
bun run tauri dev
```

Production Build
```
bun run tauri build
```
