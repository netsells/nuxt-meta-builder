"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Generate the vue-meta meta data
 */
var Meta =
/*#__PURE__*/
function () {
  /**
   * Construct our class and setup our class variables
   */
  function Meta() {
    _classCallCheck(this, Meta);

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


  _createClass(Meta, [{
    key: "setDescription",
    value: function setDescription(val) {
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

  }, {
    key: "addMeta",
    value: function addMeta(hid, content) {
      var _this = this;

      if (typeof hid === 'string') {
        hid = [hid];
      }

      hid.forEach(function (hid) {
        _this.meta.push({
          hid: hid,
          name: hid,
          content: content
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

  }, {
    key: "setTitle",
    value: function setTitle(val) {
      var raw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var title = raw ? val : this.limitWords(val);
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

  }, {
    key: "limitWords",
    value: function limitWords(val) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
      var words = (val || '').split(' ');
      var limited = words.concat().splice(0, count);
      var ellipsis = words.length !== limited.length ? '…' : '';
      return "".concat(limited.join(' ')).concat(ellipsis);
    }
    /**
     * Limit the amount of letters
     *
     * @param {String} val
     * @param {Number} count
     *
     * @return {String}
     */

  }, {
    key: "limitLetters",
    value: function limitLetters(val) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 155;
      var letters = (val || '').split('');
      var limited = letters.concat().splice(0, count);
      var ellipsis = letters.length !== limited.length ? '…' : '';
      return "".concat(limited.join('')).concat(ellipsis);
    }
    /**
     * Generate the meta object
     *
     * @return {{title: string, meta: Array}}
     */

  }, {
    key: "make",
    value: function make() {
      return {
        title: this.title,
        meta: this.meta
      };
    }
  }]);

  return Meta;
}();

var _default = Meta;
exports.default = _default;