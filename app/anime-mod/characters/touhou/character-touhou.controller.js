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

    vm.backgroundImage = "url('assets/images/elements/bg4.jpg')"

    vm.charactersIndexes = function(){
      return Array.apply(null, {length: vm.characters.length}).map(Number.call, Number)
    };

    vm.characters = [
      {name: '博麗霊夢',
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
      {name: '霧雨魔理沙',
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
      {name: '东风谷早苗',
        relative: "https://zh.moegirl.org/%E4%B8%9C%E9%A3%8E%E8%B0%B7%E6%97%A9%E8%8B%97",
        image: "assets/images/cards/characters/sanae.jpg",
        maxHp: 3,
        subtitle: "祭祀风的人类",
        from: "東方project",
        skills: [
          {
            name: "信仰",
            text: "每当场上有一名角色展示了一张手牌，你可将牌顶一张牌置于武将牌上；每当一名角色需要进行一次判定，你可将武将牌上一张牌置于牌堆顶。 ",
          },
          {
            name: "风祝",
            text: "一名角色回合内限一次，当你需要使用或打出一张基本牌时，你可以展示一张手牌，然后进行一次判定。若判定牌与展示牌为同一花色，则视为你使用或打出了该基本牌，反之，你获得该判定牌。",
          }
        ],
        designer: "钉子",
        voice: "",
        illustrator: "An2A",
      },
      {name: '古明地恋',
        relative: "https://zh.moegirl.org/%E5%8F%A4%E6%98%8E%E5%9C%B0%E6%81%8B",
        image: "assets/images/cards/characters/Koishi.jpg",
        maxHp: 8,
        subtitle: "紧闭的恋之瞳",
        from: "東方project",
        skills: [
          {
            name: "遗忘「完全遗忘的存在」",
            text: "锁定技,你与其他角色计算距离时+99，其他角色与你计算距离时+99。 ",
          },
          {
            name: "无意「无意识的花火」",
            text: "锁定技,回合结束时你的最大血量随机变为1-10，以此法失去体力时，你令一名角色摸等同于失去的体力值*2的牌。以此法失去体力上限时，你令一名角色失去一点体力；以此法增长体力上限时，你令一名角色回复一点体力。 ",
          }
        ],
        designer: "Sword Elucidator",
        voice: "",
        illustrator: "tecoyuke",
      },
      {name: '古明地觉',
        relative: "https://zh.moegirl.org/%E5%8F%A4%E6%98%8E%E5%9C%B0%E8%A7%89",
        image: "assets/images/cards/characters/satori.jpg",
        maxHp: 4,
        subtitle: "地底的读心少女",
        from: "東方project",
        skills: [
          {
            name: "窥心",
            text: "锁定技,你与其他角色计算距离时+99，其他角色与你计算距离时+99。 ",
          },
          {
            name: "回想",
            text: "锁定技,回合结束时你的最大血量随机变为1-10，以此法失去体力时，你令一名角色摸等同于失去的体力值*2的牌。以此法失去体力上限时，你令一名角色失去一点体力；以此法增长体力上限时，你令一名角色回复一点体力。 ",
          },
		  {
            name: "赋职",
            text: "主公技，你可以跳过你的出牌阶段，若你手牌数大于你当前体力值，你可指定一名东方势力角色，将手牌数与体力值之差的手牌交给该角色。若如此做，回合结束时，该角色执行一个额外的出牌阶段。  ",
          }
        ],
        designer: "夜华",
        voice: "",
        illustrator: "夜华提供",
      },

    ];
  }
})();
