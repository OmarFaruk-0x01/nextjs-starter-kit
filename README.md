# Next Js Project Starter Kit

## Tech Stacks:

### Core

- Next Js (Framework)
- [Mantine.dev](https://mantine.dev) (Ui Library)
- Next-Auth (Authentication Framework)
- Tailwind (CSS Utility Library)

### Dev

- Prettier (Code Formatter)
- ESLint (Code Linter)
- CommitLint (Git Commit Linter - to follow conventional commits)
- Husky (Git Hooks)
- PNPM (Package Manager)

## Setup

- Install Dependency

  `pnpm i`

- Create Env File

  `cp example.env .env`

- Start Dev Server

  `pnpm start:dev`

## Add New Git Hooks

`npx husky add <hook> [CMD]`

## Follow Commit Convention

- **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci:** Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs:** Documentation only changes
- **feat:** A new feature
- **fix:** A bug fix
- **perf:** A code change that improves performance
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **style:** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test:** Adding missing tests or correcting existing tests

### Example

`git commit -m "fix: some bug"`
