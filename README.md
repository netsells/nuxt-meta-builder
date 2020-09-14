# Nuxt Meta Builder 

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> A fluent approach to building up the meta data object within a Nuxt project

## Why?

The standard approach to building up the meta content powered by [vue-meta](https://www.npmjs.com/package/vue-meta) is to manually create an object with keys and values and is often a repeated mess across pages. This approach makes this a bit more readable via fluent methods.

## Installation

```sh
yarn add @netsells/nuxt-meta-builder
```

## Usage

Add the module to your nuxt config's `modules` array:

```js
module.exports = {
    ...
    modules: [
        '@netsells/nuxt-meta-builder',
    ],
    ...
};
```

You can then access the `$metaBuilder` function on the Vue instance:

```vue
<script>
    export default {
        // Basic usage
        head() {
            return this.$metaBuilder()
                .setTitle('My page title')
                .setDescription('The description for the current page')
                .make();
        },       
    };
</script>
```

## Available API Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `setDescription` | Set both the `description` and the `og:description` meta data | `val` [required] - the description to set |
| `setTitle` | Set both the `title` and the `og:title` meta data | `hid` - the title to set<br><br> `content` [optional, default = false] - the title value to set |
| `addMeta` | Set specific meta values | `hid` [required] - the unique meta tag id to set. Can be a single `string` or an `array` of `string`s<br><br>`content` [required] - the meta value to set |
| `make` | Generate the resulting object | None. |

Note: All public API methods return the class instance and can be chained, other than the `make` command which returns the final meta object and should be called last.

## License

MIT © [Netsells](https://www.netsells.co.uk)


[npm-image]: https://badge.fury.io/js/%40netsells%2Fnuxt-meta-builder.svg
[npm-url]: https://npmjs.org/package/@netsells/nuxt-meta-builder
[travis-image]: https://travis-ci.org/netsells/nuxt-meta-builder.svg?branch=master
[travis-url]: https://travis-ci.org/netsells/nuxt-meta-builder
[daviddm-image]: https://david-dm.org/netsells/nuxt-meta-builder.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/netsells/nuxt-meta-builder
