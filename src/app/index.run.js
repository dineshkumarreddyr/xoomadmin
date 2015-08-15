(function() {
  'use strict';

  angular
    .module('xoomadmin')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
