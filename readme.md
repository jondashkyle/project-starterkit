# starter kit

my take on a very small, very fast foundation for a web app.

- **very small**: kilobytes
- **server-side rendering**: yeah we’re isomorphic
- **basic**: npm scripts and browserify
- **extendable**: this is a starter kit, not a framework

## getting started

### structure

- `/app` for your application source and bundles
- `/server` to handle requests, build an api, and db
- `/static` for all of your content and assets

### app

your app lives in `app`, and has it’s own `package.json`. the server and api stuff sits in the root directory. the structure is sort of like electron best practices. keeping the two separate ensures you’re able to run your app as a simple static site without the need for server.

your build and watch scripts are little npm scrips, no webpack fuss. these are extremely expendable and simple. if you want you can stub them out into little bash scripts.

### server

merry is used to spin up the server and stub out an api. leveldb is used as a data store.

### static

sometimes large sites contain a lot of content. because of this, it’s not desirable to copy the entire static directory on build. your content is separate from your app.

## config

start by cloning `config.defaults.yaml` to `config.development.yaml`.

### options

- `port` to serve on
- `bundles` the location of your js and css bundles
- `content` the location of your static assets

## scripts

- `npm start` for production
- `npm run dev` for development
- `npm run build` to build bundles for production

## dependencies

it’s sometimes difficult to locate solid modules, so i’ve included a collection i tend to use in every build.

### `app/package.json`

- **autoprefixer** for css prefixing
- **brfs** for using `fs` in the browser
- **browserify** for building
- **choo** for the framework
- **choo-log** for logging
- **concurrently** for running scripts
- **gr8** for css utility class generation
- **nano-markdown** for small markdown formatting
- **postcss-clean** for css prefixing and uglifying
- **postcss-cli**
- **recsst** for a css reset
- **uglifyify** for minifying the bundle on build
- **watch** for watching the css for build
- **watchify** for live compiling js for dev
- **xtend** for merging objects
- **xhr** for requests

### `package.json`

- **create-html** for stubbing out an index file
- **js-yaml** to read out config file
- **level** for out database
- **level-sublevel** for splitting our db up
- **merry** for request handling
- **send** for static file serving
- **xtend** for merging objects

## questions

### why choo?

it’s very lightweight, and the architecture makes a lot of sense to me. the events are very useful, and state management is simple.

### why not hot reloading, live refresh, etc?

i find this a distraction when working, as i’m constantly saving. i’d rather work for a bit, saving as i go, then tab over and refresh.