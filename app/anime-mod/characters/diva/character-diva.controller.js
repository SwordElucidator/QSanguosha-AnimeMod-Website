/**
 * Created by SwordElucidator on 16/10/08.
 */
(function() {
  'use strict';

  angular
      .module('app')
      .controller('DivaCharactersController', DivaCharactersController);

  /* @ngInject */
  function DivaCharactersController() {
    var vm = this;

    vm.charactersIndexes = function(){
      return Array.apply(null, {length: vm.characters.length}).map(Number.call, Number)
    };

    vm.characters = [
      {
        name: '高坂穂乃果',
        relative: "https://zh.moegirl.org/%E9%AB%98%E5%9D%82%E7%A9%97%E4%B9%83%E6%9E%9C",
        image: "assets/images/cards/characters/Honoka.jpg",
        maxHp: 3,
        subtitle: "果皇",
        from: "Love Live!",
        skills: [
          {
            name: "逆天「果皇之力」",
            text: "一名角色判定结束时，你可以弃置一张手牌，令其回复一点体力。延时锦囊进入弃牌堆时，若你的手牌数小于你的体力上限，你可以获得之，否则你摸一张牌。",
          },
          {
            name: "鼓舞「Fightだよ」",
            text: "每当一名角色离开濒死阶段时，你可以令其进行一次判定。若为红色，其回复一点体力，否则你和其各摸一张牌。",
          }
        ],
        designer: "Sword Elucidator",
        voice: "新田惠海",
        illustrator: "伍長",
      },

      {
        name: '南小鸟',
        relative: "https://zh.moegirl.org/%E5%8D%97%E5%B0%8F%E9%B8%9F",
        image: "assets/images/cards/characters/MKotori.jpg",
        maxHp: 3,
        subtitle: "小鸟神教主",
        from: "Love Live!",
        skills: [
          {
            name: "抢镜「抢镜头的大头小鸟」",
            text: "其他角色在摸牌阶段外摸牌时，你可以进行一次判定：若为♥，摸1~?（非平均且有大奖）张牌。",
          },
          {
            name: "制服 「服装制作」",
            text: "出牌阶段，你可以弃置一张手牌，然后从牌堆或弃牌堆中获得一张指定的防具，并令一名角色装备。",
          }
        ],
        designer: "Sword Elucidator",
        voice: "内田彩",
        illustrator: "りも",
      },
    ];
  }
})();