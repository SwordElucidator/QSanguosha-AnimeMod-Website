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

    vm.backgroundImage = "url('assets/images/elements/bg5.jpg')"

    vm.charactersIndexes = function(){
      return Array.apply(null, {length: vm.characters.length}).map(Number.call, Number)
    };

    vm.characters = [
      {name: '赤城',
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
      {name: '夕立',
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
      {name: '朝潮',
        relative: "https://zh.moegirl.org/%E8%88%B0%E9%98%9FCollection:%E6%9C%9D%E6%BD%AE",
        image: "assets/images/cards/characters/朝潮.png",
        maxHp: 3,
        subtitle: "信守不渝",
        from: "艦隊collection",
        skills: [
          {
            name: "反潜",
            text: "出牌阶段，你的一张延时锦囊、【闪】、【金色宣言】以外的牌可以指定场上一名存活角色，然后视为你对其使用了这张牌。 ",
            voice: "司令官！请下令。"
          },
          {
            name: "不渝",
            text: "出牌阶段开始时，你可指定一名角色，若如此，你该阶段每有一张牌指定了该角色为目标，你可摸一张牌；反之，你需要弃置一张牌。 ",
            voice: "司令官…是的！那份约定…和司令官重要的约定，我绝对会守护到底的！"
          },
        ],
        designer: "钉子",
        voice: "宫川若菜",
        illustrator: "カット＠お仕事募集中",
      },
      {name: '最上',
        relative: "https://zh.moegirl.org/%E8%88%B0%E9%98%9FCollection:%E6%9C%80%E4%B8%8A",
        image: "assets/images/cards/characters/mogami.jpg",
        maxHp: 4,
        subtitle: "最爹",
        from: "艦隊collection",
        skills: [
          {
            name: "放火「烧甲板」",
            text: "你的【杀】造成伤害时，目标附加一个【着火】标记。着火：拥有【着火】标记的角色出牌阶段结束时，受到自身造成的一点伤害，然后有25%的概率失去一个【着火】标记。拥有【着火】标记时，舰载机类技能无法使用。  ",
            voice: "最上，出击了哟。"
          },
          {
            name: "舰魂",
            text: " 若场上「西村舰队（最上，时雨）」角色失去的总体力值不少于2，或你拥有【着火】标记，你可以将一张牌当做无视使用次数限制和距离的【杀】。  ",
            voice: " 要上的话就尽管来吧。"
          },
        ],
        designer: "Sword Elucidator",
        voice: "洲崎綾",
        illustrator: "ケースワベ【K-SUWABE】",
      },
      {name: '绫波',
        relative: "https://zh.moegirl.org/%E8%88%B0%E9%98%9FCollection:%E7%BB%AB%E6%B3%A2",
        image: "assets/images/cards/characters/ayanami.jpg",
        maxHp: 4,
        subtitle: "所罗门的鬼神",
        from: "戦艦少女R",
        skills: [
          {
            name: "踏险",
            text: "出牌阶段限一次，视为对攻击范围之内的任意名其他角色使用一张雷属性的【杀】，然后其中攻击范围有你的角色视为依次对你使用一张【杀】。（不计入回合限制）若你指定了至少3名角色，你的这张【杀】不可被闪避。  ",
          },
          {
            name: "鬼神",
            text: " 回合结束时，若你此回合你造成的伤害数不少于你的血量，你回复至你本回合造成的伤害数的血量值，然后摸你体力值数量的牌。   ",
          },
        ],
        designer: "Sword Elucidator",
        voice: "",
        illustrator: "Bison倉鼠",
      },
      {name: '北上',
        relative: "https://zh.moegirl.org/%E8%88%B0%E9%98%9FCollection:%E5%8C%97%E4%B8%8A",
        image: "assets/images/cards/characters/Kitagami.jpg",
        maxHp: 3,
        subtitle: "超级北上大人",
        from: "艦隊collection",
        skills: [
          {
            name: "雷幕 「开闭幕雷击」",
            text: " 游戏开始时，你可以对一名其他角色造成一点雷属性伤害；每当牌堆中牌数为0时，若你的血量大于1，你可以对一名其他角色造成一点雷属性伤害。",
            voice: "单装炮，总感觉它有些寂寞呢。"
          },
          {
            name: "夜斩「夜战斩杀」",
            text: " 锁定技,偶数轮（从你的偶数回合开始时到下个回合开始前），你造成属性伤害时，伤害+1；你的伤害若能造成濒死，伤害+1。",
            voice: " 给你“通通”的来几下吧！"
          },
          {
            name: "魔王「我不要裱船了」",
            text: " 当你进入濒死状态时，你可以失去两点体力上限，回复至一点体力，摸3张牌，然后获得技能“岭上”。 ",
            voice: " 来生的话，果然让我做战舰吧。"
          },
        ],
        designer: "Sword Elucidator",
        voice: "大坪由佳",
        illustrator: "custom",
      },
      {name: '岛风',
        relative: "https://zh.moegirl.org/%E8%88%B0%E9%98%9FCollection:%E5%B2%9B%E9%A3%8E",
        image: "assets/images/cards/characters/shimakaze.jpg",
        maxHp: 3,
        subtitle: "海路最速传说",
        from: "艦隊collection",
        skills: [
          {
            name: "疾风「疾如岛风」",
            text: " 你左侧第二名存活角色回合结束时，你可以向左移动一个位置。 ",
            voice: "疾如岛风，de-su！"
          },
          {
            name: "回避「谁也追不上我哦」",
            text: " 每当你使用或打出【闪】时，你可以向左移动一个位置，并永久增加20%在你需要使用或打出【闪】时，你可以视为打出一张【闪】。 ",
            voice: " 想赛跑吗？我不会输的哦。"
          },
        ],
        designer: "Sword Elucidator",
        voice: "佐仓绫音",
        illustrator: "悠久ポン酢",
      },
      {name: '吹雪',
        relative: "https://zh.moegirl.org/%E8%88%B0%E9%98%9FCollection:%E5%90%B9%E9%9B%AA",
        image: "assets/images/cards/characters/fubuki.jpg",
        maxHp: 3,
        subtitle: "伪·阿卡林2号机",
        from: "艦隊collection",
        skills: [
          {
            name: "欠雷「逆天改命雷」",
            text: " 当一名角色受到伤害进入濒死时，你可以1.将一张牌交给濒死角色，然后视为你对来源使用了一张【杀】。2.观看濒死角色的手牌，并弃置其中所有红色的牌。 ",
            voice: "要、要由我来守护大家！"
          },
          {
            name: "刷存「怒刷存在感」",
            text: " 其他角色出牌阶段若未指定你为目标，其出牌阶段结束时，你可以弃置一半的手牌（向下取整），然后摸取等同你手牌数目的手牌。  ",
            voice: " 您辛苦了，我叫吹雪。是，我会努力！"
          },
        ],
        designer: "Sword Elucidator",
        voice: "上坂すみれ",
        illustrator: "",
      },
      {name: '欧根亲王',
        relative: "https://zh.moegirl.org/%E8%88%B0%E9%98%9FCollection:%E6%AC%A7%E6%A0%B9%E4%BA%B2%E7%8E%8B",
        image: "assets/images/cards/characters/eugen.jpg",
        maxHp: 3,
        subtitle: "月刊重巡",
        from: "艦隊collection",
        skills: [
          {
            name: "辅炮「援护火力」",
            text: " 每当一名其他角色使用【杀】时，你可以视为对相同目标使用一张【杀】。若该【杀】造成伤害后，你需摸一张牌并变身为佐仓千代，然后将受到这张【杀】的伤害的角色的武器移动到这名角色的武器区。  ",
            voice: "开火！开火！"
          },
          {
            name: "脱队「全身而退」",
            text: " 锁定技,你成为AOE目标时，将你从目标中排除。当你受到伤害时，你取消之，然后变身为佐仓千代。   ",
            voice: " 诶，你说我是幸运女孩？完全没这回事哦！浅海什么的都不在行啦…"
          },
        ],
        designer: "Sword Elucidator",
        voice: "小澤亞李",
        illustrator: "Hiten◆三日目A08a",
      },
      {name: '加贺',
        relative: "https://zh.moegirl.org/%E8%88%B0%E9%98%9FCollection:%E5%8A%A0%E8%B4%BA",
        image: "assets/images/cards/characters/Kaga.jpg",
        maxHp: 4,
        subtitle: "一航战的前辈",
        from: "艦隊collection",
        skills: [
          {
            name: "喂食",
            text: " 出牌阶段结束时，你可以将一张手牌置于一名角色的任意牌堆中，然后该角色回复一点体力。若你指定自己为目标，你可以将该牌视为“舰载机”。  ",
            voice: "喜欢甜食就吃吧。"
          },
          {
            name: "轰炸",
            text: " 出牌阶段限一次，若你的体力值不小于2，你可以将一张牌视为对X名角色使用一张无视距离的【杀】。X至多为你的“舰载机”数量。 ",
            voice: " 小菜一碟。不必担心。"
          },
        ],
        designer: "Sword Elucidator",
        voice: "井口裕香",
        illustrator: "LuZi",
      },
      {name: '金剛',
        relative: "https://zh.moegirl.org/%E8%88%B0%E9%98%9FCollection:%E9%87%91%E5%88%9A",
        image: "assets/images/cards/characters/kongo.jpg",
        maxHp: 4,
        subtitle: "大傻",
        from: "艦隊collection",
        skills: [
          {
            name: "杀驱「傻级只会打驱逐舰吧？」",
            text: " 出牌阶段限一次，你可以将一张手牌视为对场上体力最少的一名角色使用一张火属性的【杀】。该【杀】不计入出牌阶段次数限制。 ",
            voice: "射击！Fire～！"
          },
          {
            name: "Burning Love！",
            text: " 锁定技,每当你使用火属性的【杀】造成伤害时，你需要选择一项：1，令该伤害改为回复一点体力。2，令该伤害+1。  ",
            voice: " Burning Love！！"
          },
        ],
        designer: "Sword Elucidator",
        voice: "東山奈央",
        illustrator: "",
      },
      {name: '瑞鶴',
        relative: "https://zh.moegirl.org/%E8%88%B0%E9%98%9FCollection:%E7%91%9E%E9%B9%A4",
        image: "assets/images/cards/characters/zuikaku.jpg",
        maxHp: 3,
        subtitle: "最后的正规空母",
        from: "艦隊collection",
        skills: [
          {
            name: "二羽",
            text: " 出牌阶段限一次，若你未拥有“羽”标记，你可以与一名女性角色各获得一个“羽”标记。若如此做，你或该角色的牌因使用从各自的区域离开时，对方获得之。 ",
            voice: "翔鹤姐，要上了！舰首迎风，攻击队，开始起飞！"
          },
          {
            name: "折翼",
            text: " 觉醒技，拥有“羽”标记的角色进入濒死状态时，你回复一点体力上限和体力，失去技能“二羽”并获得技能“诱敌”  ",
            voice: " 翔鹤姐，没事吗？总觉得，有点担心…"
          },
          {
            name: "诱敌",
            waked: true,
            text: "回合开始时，你可以令一名攻击范围内有你的角色立即进行一个额外的回合，但该回合内其仅能对你造成伤害。你在该回合受到伤害时，令一名其他角色摸一张牌。该回合结束时，将其角色牌翻面。",
            voice: "第二波攻击编队，全体作战飞机，出击！"
          },
        ],
        designer: "Sword Elucidator",
        voice: "野水伊織",
        illustrator: "わだつみ",
      },
    ];
  }
})();
