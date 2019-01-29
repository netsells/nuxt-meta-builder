# packages [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> meta builder class so that you can build the meta object up in a more fluent way

## Why?

Helps you build up your meta object in a more readable and fluent way.
You can replace the default meta in the nuxt.config.js file within your nuxt project. 

if you need to change the meta for any template it can be easily imported and used, below is an example of it's usage.


## Installation

```sh
yarn add @netsells/nuxt-meta-builder
```

## Usage

```js
// Pull the plugin in
<script>
    import MetaBuilder from '@netsells/nuxt-meta-builder';
    
    export default {
        // Basic usage
        head() {
            return (new Meta)
                .setTitle(nameOfTitle)
                .setDescription(Description)
                .make();
        },       
    }
</script>
```

```js

```
## License

MIT © [Martin Smith]()


[npm-image]: https://badge.fury.io/js/packages.svg
[npm-url]: https://npmjs.org/package/packages
[travis-image]: https://travis-ci.org/martin91s/packages.svg?branch=master
[travis-url]: https://travis-ci.org/martin91s/packages
[daviddm-image]: https://david-dm.org/martin91s/packages.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/martin91s/packages
