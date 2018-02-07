/**
 * Created by SwordElucidator on 16/10/08.
 */
(function() {
  'use strict';

  angular
      .module('app')
      .controller('MagicCharactersController', MagicCharactersController);

  /* @ngInject */
  function MagicCharactersController() {
    var vm = this;

    vm.backgroundImage = "url('assets/images/elements/bg2.jpg')"

    vm.charactersIndexes = function(){
      return Array.apply(null, {length: vm.characters.length}).map(Number.call, Number)
    };

    vm.characters = [
      {
        name: '夏娜',
        relative: "https://zh.moegirl.org/zh/%E5%A4%8F%E5%A8%9C",
        image: "assets/images/cards/characters/夏娜.jpg",
        maxHp: 3,
        subtitle: "炎发灼眼的讨伐者",
        from: "灼眼的夏娜",
        skills: [
          {
            name: "遮那「贽殿遮那·天破壤碎」",
            text: "当你的装备区存在武器牌时：1、你使用【杀】没有回合次数限制；2、当你使用【杀】造成伤害时，你可以失去所有的体力值，令此伤害变为火属性并使其基数等于该角色的体力值。 若你未因此而死亡，你回复1点体力。",
          },
          {
            name: "天火「真红·飞焰」",
            text: "锁定技,你造成的火焰伤害+1；你防止你受到的属性伤害。",
            voice: "燃烧吧！！！",
          }
        ],
        designer: "Sword Elucidator",
        voice: "钉宫理惠",
        illustrator: "舘津テト",
      },
      {
        name: '露易丝',
        relative: "https://zh.moegirl.org/%E9%9C%B2%E6%98%93%E4%B8%9D%C2%B7%E6%B3%95%E5%85%B0%E8%A5%BF%E6%96%AF%C2%B7%E9%9C%B2%C2%B7%E5%B8%83%E6%9C%97%C2%B7%E6%9D%9C%C2%B7%E6%8B%89%C2%B7%E7%93%A6%E5%88%A9%E5%9F%83%E5%B0%94",
        image: "assets/images/cards/characters/露易丝.jpg",
        maxHp: 3,
        subtitle: "零之",
        from: "零之使魔",
        skills: [
          {
            name: "虚无「零成功率」",
            text: "锁定技，每当你使用非延时类锦囊牌时 ，若此牌不是【无懈可击】，你取消之并摸一张牌，然后将牌堆顶牌置于你的武将牌上，称为“魔力”；当其他角色与你计算距离时，始终+X（X为“魔力”数量的一半，向下取整）。",
          },
          {
            name: "才人「唤来才人」",
            text: "出牌阶段，若你拥有4枚或以上的“魔力”，你可以将一张“魔力”置入弃牌堆，然后变身为平贺才人并将手牌数补至5。",
            voice: "你们对露易丝做了些什么！！",
          },
          {
            name: "倍增「explosion」",
            text: "弃牌阶段开始时，你可以弃置2枚“守护”标记，指定一名角色并令其减1点体力上限并失去1点体力。",
          }
        ],
        designer: "Sword Elucidator",
        voice: "钉宫理惠",
        illustrator: "未知",
      },
      {
        name: '尤斯蒂娅',
        relative: "https://zh.moegirl.org/zh/%E5%B0%A4%E6%96%AF%E8%92%82%E5%A8%85%C2%B7%E9%98%BF%E6%96%AF%E6%89%98%E5%88%A9%E4%BA%9A",
        image: "assets/images/cards/characters/尤斯蒂娅.jpg",
        maxHp: 3,
        subtitle: "圣子",
        from: "秽翼的尤斯蒂娅",
        skills: [
          {
            name: "净化「天使·净化之力」",
            text: "回合开始前，你可以交给一名角色一张牌并令其选择一项：1、令你获得其判定区内的一张牌。2、令你和其各摸一张牌。3、令其回复一点体力。",
          },
          {
            name: "救赎「親愛なる世界へ」",
            text: "限定技，一名角色求桃阶段结束时，若该角色仍处于濒死状态，你可以使其回复体力至X，然后令其补充手牌至X张（X不超过8）。X为该角色的体力上限。",
          },
        ],
        designer: "Sword Elucidator",
        voice: "南條愛乃",
        illustrator: "瀬菜モナコ",
      },
      {   name: 'Saber',   relative: "https://zh.moegirl.org/%E9%98%BF%E5%B0%94%E6%89%98%E8%8E%89%E9%9B%85%C2%B7%E6%BD%98%E5%A4%9A%E6%8B%89%E8%B4%A1",   image: "assets/images/cards/characters/saber.png",   maxHp: 4,   subtitle: "吾王",   from: "Fate Zero",   skills: [     {       name: "圣剑「约束胜利之剑」",       text: "出牌阶段限一次，你可以将武将牌翻面，然后对一名角色造成X点伤害并将其装备区里的所有牌置入弃牌堆（X为你与其装备牌数的差的绝对值）。",  voice:"Ex...calibur！！！！！！"   },     {       name: "剑鞘「远离尘世的理想乡」",       text: "锁定技，每当你受到一次伤害时，有1/3概率防止此伤害。",     },   ],   designer: "Sword Elucidator",   voice: "川澄绫子",   illustrator: "しらび", },
      {   name: '言峰綺礼',   relative: "https://zh.moegirl.org/%E8%A8%80%E5%B3%B0%E7%BB%AE%E7%A4%BC",   image: "assets/images/cards/characters/言峰绮礼.jpg",   maxHp: 4,   subtitle: "麻婆神父",   from: "Fate Zero/Fate Stay Night",   skills: [     {       name: "愉悦「追求愉悦」",       text: "锁定技，每当一名角色造成一次伤害后 ，你摸等同于此伤害数量的牌。",   voice: "这样的毁灭！这样的悲鸣！居然是我的愉悦？"  },     {       name: "陷害「阴谋与剧本」",       text: "每当一名角色造成伤害时，若该伤害可以令目标进入濒死，你可以指定该伤害的来源。",   voice:"酒的味道...比想象中的还要善变..."  },   ],   designer: "Sword Elucidator",   voice: "中田讓治",   illustrator: "zihad", },


    ];
  }
})();
