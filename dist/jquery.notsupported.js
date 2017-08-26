/*!
 * jQuery.notSupported.js
 *
 * Copyright 2016, MONSTER DIVE Inc.
 * Released under the MIT license
 *
 * Date: 2016-11-19
 */
(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory(require("jquery"), window, document);
  } else {
    factory(jQuery, window, document);
  }
}(function ($, window, document, undefined) {
  return $.notSupported = function (options) {
    var ua = navigator.userAgent;
    var androidVersion = getAndroidVersion();
    var iosVersion = getIosVersion();

    // デフォルトの値を設定
    options = $.extend({
      android: 4,
      ios: 8,
      text: '大変申し訳ございませんが、お客様の端末は本サービスの非対応端末になります。',
      class: 'notsupported'
    }, options);

    if ((0 < androidVersion && androidVersion < options.android) || (0 < iosVersion && iosVersion < options.ios)) {
      $(document.body).prepend($('<div class="' + options.class + '"><p>' + options.text + '</p></div>'));
    }

    function getAndroidVersion() {
      if (ua.indexOf("Android") > 0) {
        return parseFloat(ua.slice(ua.indexOf("Android") + 8));
      }
    }

    function getIosVersion() {
      if (ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0 || ua.indexOf("iPod") > 0) {
        ua.match(/OS ([0-9_]+){1,3}/g)

        var versionList = RegExp.$1.split('_');

        var version = Number(versionList[0]);
        version += versionList[1] ? versionList[1] * .1 : 0;
        version += versionList[2] ? versionList[2] * .01 : 0;

        return version;
      }
    }
  };
}));
