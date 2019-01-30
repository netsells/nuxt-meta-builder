"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Generate the vue-meta meta data
 */
class Meta {
  /**
   * Construct our class and setup our class variables
   */
  constructor() {
    this.meta = [];
    this.title = '';
  }
  /**
   * Set the page description
   *
   * @param {String} val
   *
   * @return {Meta}
   */


  setDescription(val) {
    this.addMeta(['description', 'og:description'], this.limitLetters(val));
    return this;
  }
  /**
   * Add a meta item
   *
   * @param {String|Array} hid
   * @param {String} content
   *
   * @return {Meta}
   */


  addMeta(hid, content) {
    if (typeof hid === 'string') {
      hid = [hid];
    }

    hid.forEach(hid => {
      this.meta.push({
        hid,
        name: hid,
        content
      });
    });
    return this;
  }
  /**
   * Set the page title
   *
   * @param {String} val
   * @param {Boolean} raw
   *
   * @return {Meta}
   */


  setTitle(val, raw = false) {
    const title = raw ? val : this.limitWords(val);
    this.title = title;
    this.addMeta(['title', 'og:title'], title);
    return this;
  }
  /**
   * Limit the amount of words
   *
   * @param {String} val
   * @param {Number} count
   *
   * @return {String}
   */


  limitWords(val, count = 5) {
    const words = (val || '').split(' ');
    const limited = words.concat().splice(0, count);
    const ellipsis = words.length !== limited.length ? '…' : '';
    return `${limited.join(' ')}${ellipsis}`;
  }
  /**
   * Limit the amount of letters
   *
   * @param {String} val
   * @param {Number} count
   *
   * @return {String}
   */


  limitLetters(val, count = 155) {
    const letters = (val || '').split('');
    const limited = letters.concat().splice(0, count);
    const ellipsis = letters.length !== limited.length ? '…' : '';
    return `${limited.join('')}${ellipsis}`;
  }
  /**
   * Generate the meta object
   *
   * @return {{title: string, meta: Array}}
   */


  make() {
    return {
      title: this.title,
      meta: this.meta
    };
  }

}

var _default = Meta;
exports.default = _default;