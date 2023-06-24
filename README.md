# YAKW - Yet Another KOSS Website
This is the repository for development of (yet another) new and improved KOSS website. Currently deployed at https://beta.kossiitkgp.org and under heavy development.

This website is created using [Astro](https://astro.build).

## Table of Contents
- [Development]
	- [Setting Up Locally](#setting-up-locally)
	- [Yarn Commands](#yarn-commands)
- [Project Structure](#project-structure)
	- [File Structure](#file-structure)
	- [Routes](#routes)

## Development
### Setting Up Locally
- Install the latest verison of [NodeJS](https://nodejs.org/en).
- Install [Yarn](https://yarnpkg.com/) the package manager used in this project instead of `npm`. See the [Yarn docs](https://yarnpkg.com/getting-started/install) for installation instructions.
- Clone this repository.
- Run `yarn install` in a terminal to install all the dependencies.
- Run `yarn dev` to start a local development server at http://localhost:3000.
- Optional: Install the official [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) language extension in VSCode to enable syntax highlighting and intellisense for `.astro` files.

### Yarn Commands
All commands are run from the root of the project, from a terminal:
| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`         | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:3000`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |

### File Structure
```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

### Routes
- `/` (Index)
	- File: `src/pages/index.astro`.

****
> Please update this documentation if you make changes to the KOSS website. Future humans will praise you.