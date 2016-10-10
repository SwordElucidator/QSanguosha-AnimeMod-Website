/**
 * Created by SwordElucidator on 16/10/08.
 */
(function() {
  'use strict';

  angular
      .module('app')
      .controller('KancolleCharactersController', KancolleCharactersController);

  /* @ngInject */
  function KancolleCharactersController() {
    var vm = this;

    vm.charactersIndexes = function(){
      return Array.apply(null, {length: vm.characters.length}).map(Number.call, Number)
    };

    vm.characters = [
      {
        name: '赤城',
        relative: "https://zh.moegirl.org/zh/%E8%88%B0%E9%98%9FCollection:%E8%B5%A4%E5%9F%8E",
        image: "assets/images/cards/characters/Akagi.jpg",
        maxHp: 4,
        subtitle: "一航战吃货",
        from: "艦隊collection",
        skills: [
          {
            name: "吃撑「铝是用来吃的」",
            text: "出牌阶段限一次，你可以将X张牌置于你的武将牌上，称为“铝”。若X不小于2，你回复一点体力。X为任意正整数。",
            voice: "烈风？不，不知道的孩子呢。"
          },
          {
            name: "制空「铝是用来喷的」",
            text: "若你的血量大于1，任意角色回合开始时，你可以弃置一张“铝”，该角色每在回合内使用【杀】造成的伤害有62%的概率+1，且在其回合内其他角色的防具失效。若该角色为舰娘，你摸一张牌。",
          }
        ],
        designer: "Sword Elucidator",
        voice: "藤田咲",
        illustrator: "未知",
      },
      {
        name: '夕立',
        relative: "https://zh.moegirl.org/%E8%88%B0%E9%98%9FCollection:%E5%A4%95%E7%AB%8B",
        image: "assets/images/cards/characters/Yuudachi.jpg",
        maxHp: 4,
        subtitle: "所罗门的噩梦",
        from: "艦隊collection",
        skills: [
          {
            name: "狂犬「咬死你poi」",
            text: "你对距离为1的角色使用【杀】造成伤害时，可以令目标失去失去一点体力上限。",
            voice: "随便找一个打了poi？"
          },
          {
            name: "噩梦「所罗门的噩梦poi」",
            text: "觉醒技，回合开始时，若你的体力值为1，你失去一点体力上限并获得技能【英姿】【咆哮】和【冲撞】（当你进入濒死时，移动到一名其他角色的左侧并视为对其使用一张【杀】。），你与所有角色计算距离时为1，其他角色与你计算距离时为1。",
            voice: "所罗门的噩梦，让你们见识一下！"
          },
          {
            name: "冲撞「风帆突击」",
            waked: true,
            text: "当你进入濒死时，移动到一名其他角色的左侧并视为对其使用一张【杀】。",
            voice: "即使是把打开船帆，也要继续战斗！"
          }
        ],
        designer: "Sword Elucidator",
        voice: "谷边由美",
        illustrator: "未知",
      },
    ];
  }
})();