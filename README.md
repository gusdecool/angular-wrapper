Angular Wrapper
===============

Angular Wrapper is wrapper for well known library so you can inject it as angular service

Installation
------------

**Bower**

```shell
bower install angular-wrapper --save
```

Load the file

```html
<script src="bower_components/angular-wrapper/src/angular-wrapper.js"></script>
```

Add the module as your dependencies

```javascript
angular.module('app', ['angularWrapper']);
```

Inject the service in your service or directive

```javascript
(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name foo
     * @restrict E
     */
    angular.module('fooModule').directive('foo', foo);

    /**
     * @ngInject
     */
    function foo() {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: 'view/foo.html',
            controller: fooController
        };
    }

    /**
     * @ngInject
     */
    function fooController($scope, jQuery) {

        // we can use jquery code now
        jQuery.doSomething();
    }
})();
```

Supported library
-----------------

1. [jQuery](http://jquery.com/)
2. [lodash](https://lodash.com/)
3. [momentjs](http://momentjs.com/)