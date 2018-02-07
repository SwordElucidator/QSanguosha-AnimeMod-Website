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

    vm.backgroundImage = "url('assets/images/elements/bg6.jpg')"

    vm.charactersIndexes = function(){
      return Array.apply(null, {length: vm.characters.length}).map(Number.call, Number)
    };

    vm.characters = [
      {name: '高坂穂乃果',
        relative: "https://zh.moegirl.org/%E9%AB%98%E5%9D%82%E7%A9%97%E4%B9%83%E6%9E%9C",
        image: "assets/images/cards/characters/Honoka.jpg",
        maxHp: 3,
        subtitle: "果皇",
        from: "Love Live!",
        skills: [
          {
			  name: "逆天「果皇之力」",
            text: "一名角色判定结束时，你可以弃置一张手牌，令其回复一点体力。延时锦囊进入弃牌堆时，若你的手牌数小于你的体力上限，你可以获得之，否则你摸一张牌。",
            voice: "为了达成目标，只有向前！",
          },
          {
            name: "鼓舞「Fightだよ」",
            text: "每当一名角色离开濒死阶段时，你可以令其进行一次判定。若为红色，其回复一点体力，否则你和其各摸一张牌。",
            voice: "好的，就和穗乃果一起来唱歌吧！",
          }
        ],
        designer: "Sword Elucidator",
        voice: "新田惠海",
        illustrator: "伍長",
      },
      {name: '南小鸟',
        relative: "https://zh.moegirl.org/%E5%8D%97%E5%B0%8F%E9%B8%9F",
        image: "assets/images/cards/characters/MKotori.jpg",
        maxHp: 3,
        subtitle: "小鸟神教主",
        from: "Love Live!",
        skills: [
          {
            name: "抢镜「抢镜头的大头小鸟」",
            text: "其他角色在摸牌阶段外摸牌时，你可以进行一次判定：若为♥，摸1~?（非平均且有大奖）张牌。",
            voice: "哇，吓我一跳…",
          },
          {
            name: "制服 「服装制作」",
            text: "出牌阶段，你可以弃置一张手牌，然后从牌堆或弃牌堆中获得一张指定的防具，并令一名角色装备。",
            voice: "其实我的手还是非常巧的，所以也在做μ'ｓ的服装。",
          }
        ],
        designer: "Sword Elucidator",
        voice: "内田彩",
        illustrator: "りも",
      },
	  {name: '矢泽妮可',
        relative: "https://zh.moegirl.org/zh/%E7%9F%A2%E6%B3%BD%E5%A6%AE%E5%8F%AF",
        image: "assets/images/cards/characters/Nico.jpg",
        maxHp: 3,
        subtitle: "妮可妮可妮",
        from: "Love Live!",
        skills: [
          {
            name: "妮可 「大家的妮可」",
            text: "出牌阶段限一次，指定包括你在内的任意名角色各弃置X张牌，并回复一点体力。X为你指定的人数/2（向下取整）。 ",
            voice: "妮可妮可妮~",
          },
          {
            name: "颜艺 「恶意卖萌」",
            text: "锁定技,你每受到一点伤害后，需随机获得一个场上不存在的技能。你回复体力时，需选择一个技能失去。 ",
            voice: "来吧，让全世界都知道妮可的可爱！",
          }
        ],
        designer: "Sword Elucidator",
        voice: "德井青空",
        illustrator: "ゆらん@C88三日目東ノ04a",
      },
	  {name: '小木曾雪莱',
        relative: "https://zh.moegirl.org/%E5%B0%8F%E6%9C%A8%E6%9B%BE%E9%9B%AA%E8%8F%9C",
        image: "assets/images/cards/characters/小木曽雪菜.jpg",
        maxHp: 3,
        subtitle: "高岭之花",
        from: "白色相簿2",
        skills: [
          {
            name: "高岭",
            text: "每当你需要使用一张【金色宣言】或【闪】时，若你的手牌数为双数，你可以视为使用一张【金色宣言】或【闪】，然后摸一张牌。  ",
            voice: "听了这个以后，小木曽雪菜的秘密就一个不剩了。全部都被你知道了。",
          },
          {
            name: "圣母",
            text: "若你手牌数为单数，其他角色受到伤害后，你可以弃置一张牌，令其恢复1点体力，若你弃牌为红牌，该角色将手牌补至体力上限。（不超过5） ",
            voice: "明明昨天说过绝对不会过来，冬马同学已经没事了嘛？",
          }
        ],
        designer: "昂翼天使",
        voice: "米澤円",
        illustrator: "なかむらたけし",
      },
      {name: '兰花·李',
        relative: "https://zh.moegirl.org/%E5%85%B0%E8%8A%B1%C2%B7%E6%9D%8E",
        image: "",
        maxHp: 3,
        subtitle: "超时空灰姑娘",
        from: "超时空要塞F",
        skills: [
          {
            name: "星间飞行",
            text: "光环，出牌阶段开始时。代替条件：你的血量不多于原光环发动者。效果：所有其他角色于回合开始时，若装备区有牌，其需选择一项：你获得其一张装备，或获得你一张牌并跳过摸牌阶段。 ",
            voice: "各位，拥抱彼此吧，直到银河的尽头！",
          },
          {
            name: "沟通",
            text: "每当你获得其他角色的牌，或其他角色获得你的牌时，你可以令你和其各回复一点体力并各摸一张牌。  ",
            voice: "真是的，阿尔特和布雷拉，都不要打了！",
          }
        ],
        designer: "Sword Elucidator",
        voice: "中岛爱",
        illustrator: "deeple",
      },
      {name: '雪莉露·诺姆',
        relative: "https://zh.moegirl.org/%E9%9B%AA%E9%9C%B2%E8%AF%BA%E5%A7%86",
        image: "assets/images/cards/characters/sheryl.png",
        maxHp: 3,
        subtitle: "银河的妖精",
        from: "超时空要塞F",
        skills: [
          {
            name: "妖精",
            text: "出牌阶段，你可将一张手牌当【闪耀祭典】使用。  ",
            voice: "（啪！）来 听我的歌吧！",
          },
          {
            name: "共鸣",
            text: "你的回合内，每有一名角色回复体力，你可以令其摸X张牌，或你摸X张牌。（X为你已损失体力值）。   ",
            voice: "与你相逢 群星闪耀 赐我新生 去爱了才会… 拥有爱才会… ",
          }
        ],
        designer: "昂翼天使; OmnisReen",
        voice: "远藤绫 & May'n",
        illustrator: "BigWest",
      },
    ];
  }
})();
