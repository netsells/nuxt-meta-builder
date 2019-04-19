import MetaBuilder from '@netsells/nuxt-meta-builder/dist/index';
import Vue from 'vue';

Vue.prototype.$metaBuilder = () => new MetaBuilder;
