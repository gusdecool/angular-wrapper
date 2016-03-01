/**
 * Angular Wrapper
 * @author Budi Arsana <gusdecool@gmail.com>
 * @version 1.0.0
 */
'use strict';

angular.module('angularWrapper', []).factory('jQuery', function() {
    return window.jQuery;
});

angular.module('angularWrapper', []).factory('_', function() {
    return window._;
});

angular.module('angularMoment', []).factory('moment', function() {
    return window.moment;
});