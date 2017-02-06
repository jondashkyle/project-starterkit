## starter kit

**NOTE: THIS IS A WORK IN PROGRESS**

this my personal starter kit for web projects. it’s not the best, but it’s mine, and it’s here for you see/use if you want.

- it’s lightweight and opinionated
- it’s not going to work in every situation
- it’s not going to stay the same

## rambling

at the begining of 2016 i took a step back to see what was happening w/ front-end web. a lot of people were using react. it introduced me to unfamiliar ideas about tooling, structuring and concepts like state and morphing.

i found the process of learning it to be kind of a drag, though… it felt very heavy, so i began looking into alternatives. i ran across [cycle](https://cycle.js.org/), [vue.js](https://vuejs.org/) and some more forward thinking projects like [elm](http://elm-lang.org/).

these felt better to use, but didn’t click w/ my way of understanding (this isn’t a critisism, but an observation.) then i came across yo-yo, a lightweight module which handles element morphing using vanilla dom elements (nothing virtual here.) it linked to a higher-level framework called [choo](https://github.com/yoshuawuyts/choo), which clicked in that way the others didn’t.

## core dependencies

### choo

choo is used for rendering, state management, event binding and routing. it’s super small (5kb), requires minimal tooling, isomorphic and extremely understandable. [cache-element](https://github.com/yoshuawuyts/cache-element) makes it easy to use arbitrary js modules which manipulate the DOM.

### gr8

gr8 provides configurable css utility classes to rapidly layout content. it includes support for breakpoints, so you can easily accomidate mobile adjustements without introducing layers of complexity. for development i use the `attach` method for css-in-js. production usually involves generating a css file which is then minified, gzipped, etc…

### browserify

webpack is the stuff nightmares are made of. the browserify cli is focused, and does everything i need to do when paired with [npm scripts](https://gist.github.com/substack/7819530). [budo](https://github.com/mattdesl/budo) is used to get a little static server running rapidly with live refresh.

## structure

there isn’t a need to stick to any specific structuring, but i find this setup to work well.

### `/`

the root directory contains three directories:

- **source** contains all your js.
- **public** is what ends up on your server.
- **documents** contains any non-public files related to the project, such as assets from the client, design files, invoices, etc…

### `/source`

the source directory contains a few directories, too:

- **components** are stateless functional ui elements.
- **containers** require components and pass them state.
- **views** connect directly to the router
- **model** contains your state, reducers, etc…
- **design** is anything global to design, such as gr8, webfonts, etc…

### `/public`

this is all static. if there is anything which needs to be dynamic, i’ll create a JSON endpoint to populate state spererately from this build, most oftentimes using an installation of [kirby](https://getkirby.com/).

### `/bin`

these are tiny build scripts used within the scripts section of `package.json`. also handy to throw additional scripts in here, such as data parsing or image resizing utils.

## installation

- run `npm install` to add dependencies
- run `npm run watch` to spin up internal http server
- run `npm run build` to bundle the js into `public/bundles`

