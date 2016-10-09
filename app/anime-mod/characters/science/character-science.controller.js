/**
 * Created by SwordElucidator on 16/10/08.
 */
(function() {
  'use strict';

  angular
      .module('app')
      .controller('ScienceCharactersController', ScienceCharactersController);

  /* @ngInject */
  function ScienceCharactersController() {
    var vm = this;

    vm.charactersIndexes = function(){
      return Array.apply(null, {length: vm.characters.length}).map(Number.call, Number)
    };

    vm.characters = [
      {
        name: '御坂美琴',
        relative: "https://zh.moegirl.org/%E5%BE%A1%E5%9D%82%E7%BE%8E%E7%90%B4",
        image: "assets/images/cards/characters/御坂美琴.jpg",
        maxHp: 4,
        subtitle: "放电国中妹",
        from: "魔法禁书目录",
        skills: [
          {
            name: "硬币「电流突破：警告」",
            text: "锁定技，准备阶段开始时，你获得一个“硬币”标记；你摸牌阶段额外摸X张牌（X为你的“硬币”标记的数量且至多为2）。",
          },
            {
            name: "电磁「电磁炮发动准备」",
            text: "觉醒技，摸牌阶段开始时，若你的“硬币”数量大于或等于2，你需失去一点体力上限，并获得“炮击”。",
          },
            {
            name: "炮击「超电磁炮」",
            text: "出牌阶段限一次，你可以弃置X枚“硬币”，使一名角色进行一次判定：若结果为♠，则受到你造成的2^X点雷属性伤害，否则受到你造成的2^（X-1）点雷属性伤害。X至多为2。",
          }
        ],
        designer: "Sword Elucidator",
        voice: "佐藤利奈",
        illustrator: "りいちゅ＠2日目/東セ28b",
      },
      {
        name: '上条当麻',
        relative: "http://baike.baidu.com/view/1948885.htm",
        image: "assets/images/cards/characters/上条当麻.jpg",
        maxHp: 4,
        subtitle: "幻想杀手",
        from: "魔法禁书目录",
        skills: [
          {
            name: "幻杀「幻想杀手Imagine Breaker」",
            text: "每当一名角色受到一次属性伤害时，你可以与伤害来源进行拼点：若你赢，你取消该伤害并获得其一张牌；若你未赢，你承受与原伤害等值的普通伤害，对伤害来源造成一点伤害，然后取消原伤害。若无伤害来源或伤害来源没有手牌时，你可以防止此伤害。 ",
          },
            {
            name: "打破「友情破颜拳」",
            text: "锁定技，每当体力上限少于你的一名角色濒死时，若你为主公且你的体力为1，其将身份改变为忠臣；若你与其均不为主公且你的体力为1，其将身份改变为与你相同。",
          }
        ],
        designer: "Sword Elucidator",
        voice: "阿部敦",
        illustrator: "悠理なゆた",
      },
        {
        name: '岡部倫太郎',
        relative: "https://zh.moegirl.org/zh/%E5%86%88%E9%83%A8%E4%BC%A6%E5%A4%AA%E9%83%8E",
        image: "assets/images/cards/characters/冈部伦太郎.jpg",
        maxHp: 4,
        subtitle: "鳳凰院兇真",
        from: "命运石之门",
        skills: [
          {
            name: "时线「世界线1.41」",
            text: "游戏开始时，你获得三枚“时空”标记。出牌阶段，若你没有“时间点”标记，你可以将任意数量的牌放置于你的武将牌上，称为“时间碎片”，然后摸等量的牌并获得X枚“时间点”标记。当“时间碎片”的数量大于X时，你的手牌上限为“时间碎片”的数量。（X为你的当前体力值）",
          },
            {
            name: "跳跃「未来道具8号机」",
            text: "出牌阶段限一次，若你有“时间点”，你可以弃置1枚“时空”标记，然后你将体力回复至Y点并获得所有“时间碎片”（Y为“时间点”的数量）。",
          }
        ],
        designer: "Sword Elucidator",
        voice: "宫野真守",
        illustrator: "5pb",
      }

    ];
  }
})();