/**
 * Angular Wrapper
 * @author Budi Arsana <gusdecool@gmail.com>
 */
(function() {
    'use strict';

    angular.module('angularWrapper', [])
        .factory('jQuery', function() { return window.jQuery; })
        .factory('_', function() { return window._; })
        .factory('moment', function() { return window.moment; })
    ;
})();