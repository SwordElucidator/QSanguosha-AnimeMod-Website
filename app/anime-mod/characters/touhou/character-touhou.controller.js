/**
 * Created by SwordElucidator on 16/10/08.
 */
(function() {
  'use strict';

  angular
      .module('app')
      .controller('TouhouCharactersController', TouhouCharactersController);

  /* @ngInject */
  function TouhouCharactersController() {
    var vm = this;

    vm.charactersIndexes = function(){
      return Array.apply(null, {length: vm.characters.length}).map(Number.call, Number)
    };

    vm.characters = [
      {
        name: '博麗霊夢',
        relative: "https://zh.moegirl.org/zh/%E5%8D%9A%E4%B8%BD%E7%81%B5%E6%A2%A6",
        image: "assets/images/cards/characters/博丽灵梦.jpg",
        maxHp: 3,
        subtitle: "無節操の巫女",
        from: "東方project",
        skills: [
          {
            name: "梦封「梦想封印」",
            text: "回合开始时，你可以进入结束阶段并指定一名角色，其于此回合结束后获得一个额外的回合，然后你选择一项：令其武将牌翻面，或令其失去1点体力。",
            voice: "隐藏于博丽的力量啊，绽放吧！"
          },
          {
            name: "纳贡「赛钱箱」",
            text: "其他角色的回合开始时，其可以交给你至多两张牌。若如此做且交给你的牌数量为2，该角色回复1点体力，若此回合为“梦封”效果获得的额外回合，你摸一张牌。",
            voice: "还给我赛钱箱！"
          }
        ],
        designer: "紅白無節操",
        voice: "中原麻衣",
        illustrator: "A-1",
      },
        {
        name: '霧雨魔理沙',
        relative: "https://zh.moegirl.org/%E9%9B%BE%E9%9B%A8%E9%AD%94%E7%90%86%E6%B2%99",
        image: "assets/images/cards/characters/Marisa.jpg",
        maxHp: 4,
        subtitle: "蘑菇大盗",
        from: "東方project",
        skills: [
          {
            name: "明窃「魔理沙偷走了重要的东西」",
            text: "每阶段每角色限一次，你指定一名其他角色为唯一目标时，若该角色有装备牌，你可以获得其一张装备区的牌或获得一张手牌并展示：若此牌为黑色，你获得一个P点。你的【过河拆桥】和【顺手牵羊】均视为无视距离限制的【顺手牵羊】。",
          },
          {
            name: "魔炮「终极火花」",
            text: "出牌阶段限一次，失去4个P点，指定方向和座位，对该路线上的所有角色造成1点伤害。若指定座位的角色装备区没有牌，额外造成2点伤害并将你的武将牌翻面。",
          }
        ],
        designer: "Sword Elucidator",
        voice: "",
        illustrator: "えふぇ",
      },
    ];
  }
})();