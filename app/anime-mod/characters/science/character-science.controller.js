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

    vm.backgroundImage = "url('assets/images/elements/bg1.jpg')"

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
            voice: "今天的我绝对不能输，所以你也拼死握紧双拳吧！",
          },
          {
            name: "电磁「电磁炮发动准备」",
            text: "觉醒技，摸牌阶段开始时，若你的“硬币”数量大于或等于2，你需失去一点体力上限，并获得“炮击”。",
            voice: "别叫我嗶哩嗶哩，我可是好好地有着御坂美琴这个名字啊！",
          },
          {
            name: "炮击「超电磁炮」",
            waked: true,
            text: "出牌阶段限一次，你可以弃置X枚“硬币”，使一名角色进行一次判定：若结果为♠，则受到你造成的2^X点雷属性伤害，否则受到你造成的2^（X-1）点雷属性伤害。X至多为2。",
            voice: "所以说！不想死的话就给我让开！"
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
            voice: "救人用不着什么理由吧。"
          },
          {
            name: "打破「友情破颜拳」",
            text: "锁定技，每当体力上限少于你的一名角色濒死时，若你为主公且你的体力为1，其将身份改变为忠臣；若你与其均不为主公且你的体力为1，其将身份改变为与你相同。",
            voice: "那就没办法了...我要杀掉啊...你那无聊的幻想！"
          }
        ],
        designer: "Sword Elucidator",
        voice: "阿部敦",
        illustrator: "悠理なゆた",
      },
      {   name: '白井黒子',   relative: "https://zh.moegirl.org/zh/%E7%99%BD%E4%BA%95%E9%BB%91%E5%AD%90",   image: "assets/images/cards/characters/白井黑子.jpg",   maxHp: 3,   subtitle: "空间移动能力者",   from: "魔法禁书目录",   skills: [     {       name: "瞬闪「空间移动能力」",       text: "出牌阶段限一次，你可以与一名角色交换位置，然后指定与你距离为1的一名角色，令其获得1枚“定身”标记。拥有“定身”标记的角色的手牌上限-X（X为其“定身”标记的数量且至多为3）；当其与除其外的角色计算距离时，始终+1。",   voice:"我是「风机委员」，我在这里的理由就没必要说明了吧。"  },     {       name: "憧憬「姐姐大人」",       text: "限定技，出牌阶段，你可以令一名其他女性角色获得1枚“お姉様”标记。每当拥有“お姉様”标记的角色造成或受到一次伤害时，其可以令其或对方获得1枚“定身”标记。若如此做且目标角色为御坂美琴，其额外获得1枚“定身”标记。此技能发动前，摸牌阶段，你额外摸一张牌。", voice:"お姉様!!!!!!!!!!!" },   {       name: "解束「解除束缚」",       text: "出牌阶段，你可以令一名其他角色弃置其所有“定身”标记。",    },   ],   designer: "Sword Elucidator",   voice: "新井里美",   illustrator: "厩戸王子", },
      {   name: '御坂妹',   relative: "https://zh.moegirl.org/%E5%BE%A1%E5%9D%82%E5%A6%B9",   image: "assets/images/cards/characters/御坂妹.jpg",   maxHp: 3,   subtitle: "活出自身",   from: "魔法禁书目录",   skills: [     {       name: "起电「电力驱动」",       text: "每当一名角色的判定牌生效前，你可以打出一张牌代替之，然后对一名角色造成1点雷电伤害。",     },     {       name: "妹妹们",       text: "锁定技，你的手牌上限+X；摸牌阶段，你随机额外摸1至X张牌（X为场上存活人数的一半且至少为2，向下取整）。",  voice:"御坂对自己的心理状态怀有疑问。为了我这个能随意制造替换，要多少有多少的仿制品，你想要做什么？御坂再三问道。"   },   ],   designer: "Sword Elucidator",   voice: "佐々木望",   illustrator: "Ogata", },
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
            voice: "给我跳啊！！..."
          }
        ],
        designer: "Sword Elucidator",
        voice: "宫野真守",
        illustrator: "5pb",
      },
      {
        name: '友利奈緒',
        relative: "https://zh.moegirl.org/zh/%E5%8F%8B%E5%88%A9%E5%A5%88%E7%B7%92",
        image: "assets/images/cards/characters/友利奈緒.jpg",
        maxHp: 3,
        subtitle: "无形的学生会长",
        from: "Charlotte",
        skills: [
          {
            name: "幻形",
            text: "当一名其他角色使用牌时，若目标仅有你，且你本轮未发动过“幻形”，你可以取消之并从该角色视野中消失直到你的下一回合结束。被“幻形”的角色不可响应你使用的【杀】和锦囊牌。当你使用“幻形”时，去除你对上一名角色的“幻形”效果。",
            voice: "用箭瞄准人，太差劲了...你没有一点武道精神么！"
          },
          {
            name: "抚伤",
            text: "一名角色受到伤害后，你可以令其获得一个“抚伤”标记并补充到2个“时间”标记。拥有“抚伤”标记的角色准备阶段失去1个“时间”标记，若因此失去了全部“时间”标记，其回复X点体力并弃置所有“抚伤”标记。X为其“抚伤”标记数。",
          }
        ],
        designer: "Sword Elucidator",
        voice: "佐仓绫音",
        illustrator: "ののの",
      },
      {
        name: '渡边早季',
        relative: "https://zh.moegirl.org/zh/%E6%B8%A1%E8%BE%B9%E6%97%A9%E5%AD%A3",
        image: "",
        maxHp: 3,
        subtitle: "伦理委员",
        from: "来自新世界",
        skills: [
          {
            name: "愧死",
            text: "一名角色杀死其他角色时，你可以令其失去体力至进入濒死阶段。",
          },
          {
            name: "诱饵",
            text: "你因伤害进入濒死阶段时，若你的体力上限至少为2，你可以失去一点体力上限，视为伤害来源杀死你。其发动愧死效果后你复活并回复至体力上限。",
          }
        ],
        designer: "Sword Elucidator",
        voice: "种田梨沙",
        illustrator: "ひとみ_子",
      },
      {
        name: '间宫明里',
        relative: "https://zh.moegirl.org/zh/%E9%97%B4%E5%AE%AB%E6%98%8E%E9%87%8C",
        image: "assets/images/cards/characters/明里.png",
        maxHp: 3,
        subtitle: "爆衣杀手",
        from: "绯弹的亚里亚AA",
        skills: [
          {
            name: "鷹捲",
            text: "每当你对一名角色造成了伤害后，你可展示牌顶一张牌，如为基本牌，你可获得之，并弃置该角色的一张装备牌。",
          },
          {
            name: "鳶穿",
            text: "每当你需要打出一张闪时，如你此时手牌数大于当前体力数，你可将手牌弃至X-1张，视为你打出一张闪（X为你当前体力数），然后获得任意角色区域或牌堆内的一张牌。",
          },
          {
            name: "悲忆",
            text: "一名角色回合结束时，如你于其回合内发动过鳶穿，你可对该角色造成一点伤害；如你于其回合内发动过鷹捲，你可以摸一张牌。",
          }
        ],
        designer: "钉子",
        voice: "佐倉綾音",
        illustrator: "竹久めい@旧名ジョン",
      },
      {
        name: '無名',
        relative: "https://zh.moegirl.org/zh/%E6%97%A0%E5%90%8D(%E7%94%B2%E9%93%81%E5%9F%8E%E7%9A%84%E5%8D%A1%E5%B7%B4%E5%86%85%E5%88%A9)",
        image: "assets/images/cards/characters/无名.png",
        maxHp: 3,
        subtitle: "待定",
        from: "甲铁城的卡巴内瑞",
        skills: [
          {
            name: "待定",
            text: "",
          },
        ],
        designer: "钉子",
        voice: "千本木彩花",
        illustrator: "刃天",
      },
      {   name: '桐人',   relative: "https://zh.moegirl.org/zh/%E6%A1%90%E5%AD%90",   image: "assets/images/cards/characters/桐谷和人.jpg",   maxHp: 3,   subtitle: "黑の剑士",   from: "刀剑神域",   skills: [     {       name: "二刀「星爆气流斩」",       text: "出牌阶段，你可以弃置两张武器牌并指定一名角色，视为你对其使用其当前体力值数目的【杀】（不计入回合次数限制），顺序依次为【杀】【火杀】【雷杀】的循环；出牌阶段限一次，每当你的一张单体锦囊牌结算后，你可以额外对目标角色使用此牌。",  voice:"星爆气流斩！！"   },     {       name: "夜空「夜空之剑·ReleaseRellection」",       text: "限定技，出牌阶段，直到你第三个回合开始前，你获得以下效果：1.你使用“二刀②”可以额外结算一次；2.你可以令“闪光”的获得牌数+1；3.你可以令“剑舞”的消耗减半；3.回合开始前，你可以指定至多两名角色，令他们回复共计2点体力。",   },   ],   designer: "Sword Elucidator",   voice: "松岡禎丞",   illustrator: "SL@原稿修羅場", },
      {   name: '亚丝娜',   relative: "https://zh.moegirl.org/%E7%BB%93%E5%9F%8E%E6%98%8E%E6%97%A5%E5%A5%88",   image: "assets/images/cards/characters/结城明日奈.jpg",   maxHp: 3,   subtitle: "白の闪光",   from: "刀剑神域",   skills: [     {       name: "闪光「细剑·闪烁之光」",       text: "每当你对一名角色造成一次无属性伤害时，你可以获得其X+1张牌（X为你已损失的体力）。",     },     {       name: "地陷「创世之神·丝提西亚」",       text: "每当你受到一次无属性伤害后，你可以对伤害来源造成1点伤害并进行一次判定，然后你令一名角色获得此判定牌并对其造成1点火焰伤害。",     },   ],   designer: "Sword Elucidator",   voice: "戶松遙",   illustrator: "なかじまゆか", },
      {   name: '爱丽丝',   relative: "https://zh.moegirl.org/%E7%88%B1%E4%B8%BD%E4%B8%9D%C2%B7%E6%BB%8B%E8%B4%9D%E9%B2%81%E5%BA%93",   image: "assets/images/cards/characters/爱丽丝30.jpg",   maxHp: 3,   subtitle: "金色の骑士",   from: "刀剑神域",   skills: [     {       name: "天命「天命运算」",       text: "游戏开始时，你获得100枚“天命”标记；回合开始前，你获得32枚“天命”标记。每当你需使用或打出一张【杀】时，你可以弃置12枚“天命”标记，视为你使用或打出一张【杀】；每当你需使用或打出一张【闪】时，你可以弃置17枚“天命”标记，视为你使用或打出一张【闪】；每当你需使用一张【无懈可击】时，你可以弃置23枚“天命”标记，视为你使用一张【无懈可击】。",     },     {       name: "剑舞「金木犀之剑·ReleaseRellection」",       text: "出牌阶段，你可以弃置130枚“天命”标记并指定至多三名角色，令他们各失去1点体力并将角色牌翻面。",     },   {       name: "看护「神圣术治疗」",       text: "出牌阶段限一次，你可以弃置20枚“天命”标记并指定一名已受伤的角色，令其回复1点体力。若目标角色为桐人，你令其额外回复1点体力。",     }, ],   designer: "Sword Elucidator",   voice: "",   illustrator: "未知", },
      {   name: '莉法',   relative: "https://zh.moegirl.org/%E6%A1%90%E8%B0%B7%E7%9B%B4%E5%8F%B6",   image: "assets/images/cards/characters/桐谷直叶.jpg",   maxHp: 3,   subtitle: "风の剑士",   from: "刀剑神域",   skills: [     {       name: "助阵「好妹妹~」",       text: "每当你于回合外失去一张装备牌时，你可以将之交给一名角色；你的回合内，每当你使用一张非延时类锦囊牌或失去一张装备牌后，你可以令一名其他角色获得之。",  voice:"飞吧~无论是何处，翱翔于无尽的蓝天。"   },     {       name: "回复「索尔斯·无制限自动回复」",       text: "锁定技，回合开始时，若你的当前体力值不为场上最多或之一，你自然增加一点体力。",     },   ],   designer: "Sword Elucidator",   voice: "竹達彩奈",   illustrator: "うえはら", },
      {   name: '朝田诗乃',   relative: "https://zh.moegirl.org/%E6%9C%9D%E7%94%B0%E8%AF%97%E4%B9%83",   image: "assets/images/cards/characters/诗乃.png",   maxHp: 3,   subtitle: "深蓝の狙击手",   from: "刀剑神域",   skills: [     {       name: "狙击「PGM Ultima Ratio HecateII」",       text: "锁定技,当你与其他角色计算距离时，始终为1；出牌阶段，你使用的【杀】不能被攻击范围内没有你的角色的【闪】响应。",     },     {       name: "箭雨「提拉莉雅·无制限歼灭」",       text: "出牌阶段限一次，你可以指定X+1名角色（X为你已损失的体力），视为你对他们使用一张【杀】。",     },   ],   designer: "Sword Elucidator",   voice: "泽城美雪",   illustrator: "A-1", },
      {   name: '黒雪姫',   relative: "https://zh.moegirl.org/%E9%BB%91%E9%9B%AA%E5%A7%AC",   image: "assets/images/cards/characters/黑雪姬.png",   maxHp: 4,   subtitle: "黑之睡莲",   from: "加速世界",   skills: [     {       name: "迅羽",       text: "出牌阶段限一次，你可以将一张手牌交给你攻击范围内的一名其他角色，视为对其使用一张【杀】（此【杀】不计入出牌阶段使用限制），此【杀】结算后，若你没有“蓝”标记，你获得目标角色一张牌。",     },     {       name: "黑扬「黑扬之羽蝶」",       text: "觉醒技，回合开始前，若场上有已觉醒的其他角色或有当前体力值为1的其他角色，你须减1点体力上限并摸两张牌，获得“超频”。",     },  {name: "超频", text:"回合开始前，你可以选择一项：1.弃置1枚“绿”标记或“蓝”并获得1枚“红”标记；2.弃置1枚“红”标记或“蓝”标记并获得1枚“绿”标记；3.弃置1枚“红”标记或“绿”标记并获得1枚“蓝”标记。若你拥有“红”标记，你使用“迅羽”时攻击范围无限且可以不交给目标角色手牌，若该角色的攻击范围内没有你，其失去1点体力；若你拥有“蓝”标记，将“迅羽”的“将一张手牌交给你攻击范围内的一名其他角色”改为“弃置你攻击范围内一名其他角色的一张手牌”，“出牌阶段限一次”改为“出牌阶段限X次（X为场上存活角色数）”；若你拥有“绿”标记，你获得“克己”。", waked: true} ],   designer: "昂翼天使",   voice: "三澤紗千香",   illustrator: "未知", },

      {   name: '艾伦',   relative: "https://zh.moegirl.org/zh/%E8%89%BE%E4%BC%A6%C2%B7%E8%80%B6%E6%A0%BC%E5%B0%94",   image: "assets/images/cards/characters/艾伦耶格尔.jpg",   maxHp: 4,   subtitle: "驱逐巨人的先锋",   from: "进击的巨人",   skills: [     {       name: "仇怨",       text: "限定技，出牌阶段，你可以令一名角色获得1枚“巨人”标记。当除该角色外的角色于该角色计算距离时，始终为1。",     },     {       name: "齐心",       text: "你每对拥有“巨人”标记的角色打出一张【杀】或【决斗】，你可以使场上所有你以外的角色依次选择一项：1、对该角色打出一张【杀】。2、让你选择一名你以外的角色摸一张牌。",     },   ],   designer: "Sword Elucidator",   voice: "梶裕贵",   illustrator: "未知", },
      {   name: '坂本竜太',   relative: "http://baike.baidu.com/view/7976031.htm",   image: "assets/images/cards/characters/坂本龙太.jpg",   maxHp: 4,   subtitle: "神级玩家",   from: "BTOOOM!",   skills: [     {       name: "陷阱「坂本の计谋」",       text: "每当你受到一次伤害后，你可以进行一次判定：若结果为♥，你获得1枚“陷阱”标记；若结果为♦，你令伤害来源的武将牌翻面；若结果为♠且伤害来源没有“崩坏”，你令伤害来源获得“崩坏”；若结果为♣且伤害来源没有“无谋”，你令伤害来源获得“无谋”；若结果无法执行以上效果，你获得1枚“陷阱”标记。若你的“陷阱”标记数量大于0，你获得“英姿”；大于1，你获得“挑衅”；大于2，你获得“反馈”；大于3，你获得“龙胆”；大于4，你获得“咆哮”；大于5，你获得“鬼才 ”。",  voice:"你果然很厉害！但是...玩BTOOOM我可不会输！"    },     {       name: "搏命「坂本の抉择」",       text: "限定技，，每当一名角色的濒死状态结束后，你可以弃置所有“陷阱”标记并失去1点体力，然后令其体力回复至X（X为你弃置的“陷阱”标记数且至多为6）。",     },   ],   designer: "Sword Elucidator",   voice: "本乡奏多",   illustrator: "MAD HOUSE", },




    ];
  }
})();
