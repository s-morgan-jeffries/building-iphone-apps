/* global jQuery: true */
/* global ga: true */
/* global console: true */
(function ($, ga) {
  'use strict';

  var goTo = function (path) {
    var protocol = location.protocol,
      host = location.host,
      url = protocol + '//' + host + path;
    location.href = url;
  };

  $(document).ready(function () {
    console.log(ga);
    $('#buy-it').on('click', function () {
      ga('send', 'event', 'buy', 'click');
      console.log('button clicked');
      goTo('/thank-you.html');
    });
  });
}(jQuery, ga));
