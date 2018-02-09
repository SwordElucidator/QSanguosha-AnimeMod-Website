/**
 * Created by SwordElucidator on 16/10/08.
 */
(function() {
  'use strict';

  angular
      .module('app')
      .controller('RealCharactersController', RealCharactersController);

  /* @ngInject */
  function RealCharactersController() {
    var vm = this;

    vm.backgroundImage = "url('assets/images/elements/bg3.jpg')"

    vm.charactersIndexes = function(){
      return Array.apply(null, {length: vm.characters.length}).map(Number.call, Number)
    };

    vm.characters = [
      {
        name: '古河渚',
        relative: "https://zh.moegirl.org/zh/%E5%8F%A4%E6%B2%B3%E6%B8%9A",
        image: "assets/images/cards/characters/nagisa.jpg",
        maxHp: 3,
        subtitle: "小镇之光",
        from: "Clannad",
        skills: [
          {
            name: "光玉",
            text: "每当你的红色牌因弃置而进入弃牌堆时，你可以将其当做【键】使用。判定区有【键】的角色的判定阶段开始时，你可以令其获得判定区里的所有牌。",
            voice: "让我带您去吧，这个小镇愿望实现的地方"
          },
          {
            name: "汐愿",
            text: "限定技，你死亡时，令一名角色的副将变为“冈崎汐”。",
            voice:"汐，这个名字怎么样？"
          }
        ],
        designer: "OmnisReen; Sword Elucidator",
        voice: "中原麻衣",
        illustrator: "ミステア",
      },
      {
        name: '赤座灯里',
        relative: "https://zh.moegirl.org/%E8%B5%A4%E5%BA%A7%E7%81%AF%E9%87%8C",
        image: "assets/images/cards/characters/akari.jpg",
        maxHp: 3,
        subtitle: "存在感的铁壁",
        from: "摇曳百合",
        skills: [
          {
            name: "透明",
            text: "弃牌阶段结束时，若你此阶段手牌数无变化，你可以消失并摸X张牌，你的回合开始时，你解除消失状态。X为场上存活角色数的一半，向上取整。",
            voice: "即使变为空气，主角之位也绝对不会让给你！"
          },
          {
            name: "团子",
            text: "每当你使用或打出的一张基本牌或黑色锦囊牌结算完毕后，你可以将之置于牌堆顶。",
          }
        ],
        designer: "黑猫roy",
        voice: "三上枝织",
        illustrator: "未知",
      },
      {   name: '逢坂大河',   relative: "https://zh.moegirl.org/zh/%E9%80%A2%E5%9D%82%E5%A4%A7%E6%B2%B3",   image: "assets/images/cards/characters/taiga.jpg",   maxHp: 3,   subtitle: "掌中萌虎",   from: "龙与虎",   skills: [     {       name: "竹刀「萌虎必杀」",       text: "每当你失去一张装备区里的牌时，可以将场上的一张牌移动到另一名角色区域里的相应位置，并将你的武将牌翻回正面。",     },     {       name: "思绪「私奔·出走」",       text: "出牌阶段结束时，你可以将场上的两张牌依次移动到另一名角色区域里的相应位置，然后跳过你的弃牌阶段并将武将牌翻面。每当你受到一次伤害时，若你的武将牌背面朝上且此伤害为1，你防止此伤害。",  voice: "那个...我们...打算私奔！"    },   ],   designer: "Sword Elucidator",   voice: "钉宫理惠",   illustrator: "画楽多", },
      {   name: '平沢唯',   relative: "https://zh.moegirl.org/zh/%E5%B9%B3%E6%B3%BD%E5%94%AF",   image: "assets/images/cards/characters/yui.jpg",   maxHp: 3,   subtitle: "呆唯",   from: "轻音少女",   skills: [     {       name: "呆  「天然呆」",       text: "每当你使用或打出一张【闪】或打出一张【杀】后，你可以进行一次判定：若结果为黑色，你获得1枚“呆唯”标记；若结果为红色，你指定一名角色回复1点体力。每当其他角色于濒死状态未被救回，你可以弃置2枚“呆唯”标记，令其体力回复至1点。",     },     {       name: "主唱「治愈系声线」",       text: "每当一名角色回复一次体力时，你可以令其额外回复1点体力。",     },   ],   designer: "Sword Elucidator",   voice: "豊崎爱生",   illustrator: "らぐほのえりか", },
      {   name: '立华奏',   relative: "https://zh.moegirl.org/zh/%E7%AB%8B%E5%8D%8E%E5%A5%8F",   image: "assets/images/cards/characters/kanade.jpg",   maxHp: 3,   subtitle: "天使",   from: "Angel Beats!",   skills: [     {       name: "祈愿「死后战线解放」",       text: "限定技，出牌阶段，你可以指定一名已死亡的角色，令其复活并失去所有技能，然后摸三张牌并加入你的阵营。",     },     {       name: "力场「Distortion“扭曲力场”」",       text: "每当你需使用或打出一张【闪】时，若你的当前体力值不为全场最大，可以视为你使用或打出一张【闪】。",     },  {       name: "手刃「Handsonic “音速手刃”」",       text: "出牌阶段限一次，你可以指定一名角色，令其失去1点体力。若如此做且该角色的当前体力值为0，你令其将武将牌翻面。",     },  ],   designer: "Sword Elucidator",   voice: "花泽香菜",   illustrator: "Na-Ga", },
      {   name: '龙宫礼奈',   relative: "https://zh.moegirl.org/zh/%E9%BE%99%E5%AE%AB%E7%A4%BC%E5%A5%88",   image: "assets/images/cards/characters/rena.png",   maxHp: 3,   subtitle: "柴刀女",   from: "寒蝉鸣泣之时",   skills: [     {       name: "自主「自行摆脱L5」",       text: "转化技，通常状态下，你拥有标记“普通”并拥有技能“可爱”。每当你受到一次后，你须将你的标记翻面为“黑化”，将“可爱”转化为“柴刀”。回合开始前，若你的标记为“黑化”且你的判定区里有牌，你可以弃置判定区里的牌；回合结束后，你须将标记翻回“普通”。",     },     {       name: "可爱「好想带回家！」",       text: "每当其他角色的♥锦囊牌或装备牌因弃置、使用、打出或判定置入弃牌堆时，你可以获得之。",  waked: true , voice: "啊呜~~这个真棒啊！好想带回家！~~"  },  {       name: "柴刀「黑化暴走」",       text: "每当其他角色的黑色牌因弃置、使用、打出或判定置入弃牌堆时，你可以获得之。",   waked: true, voice: "你骗人！！..."  },  ],   designer: "Sword Elucidator",   voice: "中原麻衣",   illustrator: "Studio DEEN", },
      {   name: '柊司',   relative: "https://zh.moegirl.org/%E6%9F%8A%E5%8F%B8",   image: "assets/images/cards/characters/tsukasa.jpg",   maxHp: 3,   subtitle: "天然",   from: "Lucky Star!",   skills: [     {       name: "冒失",       text: "每当你的一张♥牌因拼点、获得或于你的弃牌阶段外的弃置移动到你的区域外时，你可以回复1点体力；每当你的一张装备牌因拼点、获得或于你的弃牌阶段外的弃置移动到你的区域外时，你可以摸一张牌。每当一张牌置入你的装备区时，你将之置入弃牌堆。",     },     {       name: "料理",       text: "出牌阶段限一次，可以弃置一张牌并指定一名角色，该角色的回合开始时，弃置其判定区里的所有牌，然后其摸X张牌，你获得牌堆中第一张装备牌并摸X-1张牌（X为弃置的牌数且至少为1）。",     }, {       name: "治愈",       text: "出牌阶段，你可以将任意数量的♥牌或装备牌交给一名其他角色。",     },  ],   designer: "yxl88205",   voice: "福原香织",   illustrator: "竜胆", },
      {   name: '五更琉璃',   relative: "https://zh.moegirl.org/%E4%BA%94%E6%9B%B4%E7%90%89%E7%92%83",   image: "assets/images/cards/characters/kuroneko.jpg",   maxHp: 3,   subtitle: "堕天圣黑猫",   from: "我的妹妹不可能这么可爱！",   skills: [     {       name: "仪式「命运记录」",       text: "回合开始时，你可以选择一项：1.令体力不大于其体力上限+3一名男性角色回复1点体力，若该角色的体力多于你，你摸X张牌（X为你与其体力之差且至多为6）；2.摸一张牌。",     },     {       name: "毒舌「“诅杀你哦！”」",       text: "出牌阶段，你可以与一名其他角色拼点：若你赢，你获得该角色一张手牌并选择一项：弃置一张黑色手牌并弃置其装备区里的所有牌，或弃置一张红色手牌，令该角色对其造成1点伤害；若你没赢，该角色摸一张牌，你失去“毒舌”直到回合结束。",   voice: "明明能和妹妹一起玩色情游戏，却不能和我玩文字游戏么？"  },   ],   designer: "黑猫roy",   voice: "花泽香菜",   illustrator: "AIC", },
      {   name: '杉崎鍵',   relative: "http://baike.baidu.com/view/2820151.htm",   image: "assets/images/cards/characters/key.jpg",   maxHp: 3,   subtitle: "KEY君",   from: "学生会的一己之见",   skills: [     {       name: "粟梦",       text: "每当你于回合外失去一张♦牌时，你可以令你与一名其他角色各摸一张牌。",  voice:"她给了我改变的机会。"   },    {       name: "深夏",       text: "每当你于回合外失去一张♣牌时，你可以视为对一名角色使用一张火属性的【杀】（无距离限制）。",  voice:"她给了我发奋的动力。"   },  {       name: "知弦",       text: "每当你于回合外失去一张♥牌时，你可以令一名角色回复1点体力。",  voice:"她治愈了太过拼命的我。"   },    {       name: "真冬",       text: "每当你于回合外失去一张♠牌时，你可以令一名角色跳过其的下个出牌阶段。",  voice:"她让我下定决定，要做一个保护女孩子的男人。"   },  {       name: "后宫",       voice: "我...我...我是要成为后宫王的男人...",  text:"锁定技，你的手牌上限+X（X为场上的女性角色数量）。"   },    ],   designer: "黑猫roy",   voice: "近藤隆",   illustrator: "STUDIO DEEN/AIC", },
      {   name: '永瀬伊織',   relative: "https://zh.moegirl.org/zh/%E6%B0%B8%E6%BF%91%E4%BC%8A%E7%BB%87",   image: "assets/images/cards/characters/nagase.jpg",   maxHp: 3,   subtitle: "真正的自己",   from: "恋爱随意链接",   skills: [     {       name: "气氛「察言观色」",       text: "结束阶段结束时，你可以令所有角色各摸一张牌，若你已受伤，你分别从每名角色处获得1张牌。",     },     {       name: "迷失「低沉黑化」",       text: "每当一名角色进入濒死状态时，你可以展示你的所有手牌，然后令你与其各失去1点体力。若如此做且该角色于濒死状态被救回，你获得其一张牌。每阶段限一次。",     }, {       name: "祝福「最重要的伙伴们」",       text: "摸牌阶段开始时，你可以令一名其他角色将手牌补至X张（X为你的手牌数且至多为7）。",     },  ],   designer: "Sword Elucidator",   voice: "豊崎爱生",   illustrator: "れい", },


    ];
  }
})();
