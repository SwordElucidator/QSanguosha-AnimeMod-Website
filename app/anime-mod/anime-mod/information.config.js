(function() {
    'use strict';
    angular
        .module('app')
        .config(routeConfig);
    /* @ngInject */
    function routeConfig($stateProvider, triMenuProvider) {
        // first create a state that your menu will point to .
        $stateProvider
        .state('triangular.anime-mod-information', {
            url: '/anime-mod/information',
            templateUrl: 'app/anime-mod/anime-mod/information.tmpl.html'
        });
        // next add the menu item that points to the above state.
        triMenuProvider.addMenu({
            name: 'Anime Mod',
            icon: 'zmdi zmdi-home',
            type: 'dropdown',
            priority: 1,
            children: [{
                name: 'Information',
                type: 'link',
                state: 'triangular.anime-mod-information'
            }]
        });
    }
})();