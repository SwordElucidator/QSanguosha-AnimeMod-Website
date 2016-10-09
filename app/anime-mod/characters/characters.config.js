/**
 * Created by SwordElucidator on 16/10/08.
 */
(function() {
  'use strict';
  angular
      .module('app')
      .config(routeConfig);
  /* @ngInject */
  function routeConfig($stateProvider, triMenuProvider) {
    // first create a state that your menu will point to .
    $stateProvider
        .state('triangular.anime-mod-characters-science', {
          url: '/anime-mod/characters-science',
          templateUrl: 'app/anime-mod/characters/science/character-science.tmpl.html',
          controller: "ScienceCharactersController",
          controllerAs: "vm"
        })
        .state('triangular.anime-mod-characters-magic', {
          url: '/anime-mod/characters-magic',
          templateUrl: 'app/anime-mod/anime-mod/information.tmpl.html'
        })
        .state('triangular.anime-mod-characters-real', {
          url: '/anime-mod/characters-real',
          templateUrl: 'app/anime-mod/anime-mod/information.tmpl.html'
        })
        .state('triangular.anime-mod-characters-touhou', {
          url: '/anime-mod/characters-touhou',
          templateUrl: 'app/anime-mod/anime-mod/information.tmpl.html'
        })
        .state('triangular.anime-mod-characters-kancolle', {
          url: '/anime-mod/characters-kancolle',
          templateUrl: 'app/anime-mod/anime-mod/information.tmpl.html'
        })
        .state('triangular.anime-mod-characters-diva', {
          url: '/anime-mod/characters-diva',
          templateUrl: 'app/anime-mod/anime-mod/information.tmpl.html'
        });
    // next add the menu item that points to the above state.
    triMenuProvider.addMenu({
      name: 'Characters',
      icon: 'zmdi zmdi-face',
      type: 'dropdown',
      priority: 1.03,
      children: [{
        name: 'Science',
        type: 'link',
        state: 'triangular.anime-mod-characters-science'
      },
        {
          name: 'Magic',
          type: 'link',
          state: 'triangular.anime-mod-characters-magic'
        },
        {
          name: 'Real',
          type: 'link',
          state: 'triangular.anime-mod-characters-real'
        },
        {
          name: 'Touhou',
          type: 'link',
          state: 'triangular.anime-mod-characters-touhou'
        },
        {
          name: 'Kancolle',
          type: 'link',
          state: 'triangular.anime-mod-characters-kancolle'
        },
        {
          name: 'Diva',
          type: 'link',
          state: 'triangular.anime-mod-characters-diva'
        }]
    });
  }
})();