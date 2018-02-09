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
      {name: '夏娜',
        relative: "https://zh.moegirl.org/zh/%E5%A4%8F%E5%A8%9C",
        image: "assets/images/cards/characters/夏娜.png",
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
      {name: '露易丝',
        relative: "https://zh.moegirl.org/%E9%9C%B2%E6%98%93%E4%B8%9D%C2%B7%E6%B3%95%E5%85%B0%E8%A5%BF%E6%96%AF%C2%B7%E9%9C%B2%C2%B7%E5%B8%83%E6%9C%97%C2%B7%E6%9D%9C%C2%B7%E6%8B%89%C2%B7%E7%93%A6%E5%88%A9%E5%9F%83%E5%B0%94",
        image: "assets/images/cards/characters/露易丝.png",
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
      {name: '平賀才人',
	    relative: "https://zh.moegirl.org/%E5%B9%B3%E8%B4%BA%E6%89%8D%E4%BA%BA",
	    image: "",
	    maxHp: 4,
	    subtitle: "零之使魔",
	    from: "零之使魔",
	    skills: [
	      {
		    name: "智剑「デルフリンガー」",
		    text: "出牌阶段限一次，你可以将一张“魔力”置入弃牌堆，然后你选择一名角色进行拼点：若你赢，你进行一次判定，然后摸X张牌（X为判定结果的点数且至少为6）。 ",
		    voice: "唉...为什么我要勉强地做这种事情啊..."
		  },
		  {
		    name: "横扫「以一对七万」",
		    text: "出牌阶段，你可以失去2点体力，然后对至多三名角色各造成一点伤害，并获得一个“守护”标记。  ",
			voice:"可恶！！......"
		  },
		  {
		    name: "唤回「继续被虐待-。-」",
		    text: "结束阶段开始时，你须变身为露易丝并回复体力至体力上限。 ",
		  },
		],
		designer: "Sword Elucidator",
		voice: "日野聪",
		illustrator: "节操Staff",
		},
      {name: '尤斯蒂娅',
        relative: "https://zh.moegirl.org/zh/%E5%B0%A4%E6%96%AF%E8%92%82%E5%A8%85%C2%B7%E9%98%BF%E6%96%AF%E6%89%98%E5%88%A9%E4%BA%9A",
        image: "assets/images/cards/characters/eustia.jpg",
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
      {name: 'Saber',
	    relative: "https://zh.moegirl.org/%E9%98%BF%E5%B0%94%E6%89%98%E8%8E%89%E9%9B%85%C2%B7%E6%BD%98%E5%A4%9A%E6%8B%89%E8%B4%A1",
		image: "assets/images/cards/characters/saber.png",
		maxHp: 4,
		subtitle: "吾王",
		from: "Fate Zero",
		skills: [
		  {
			name: "圣剑「约束胜利之剑」",
			text: "出牌阶段限一次，你可以将武将牌翻面，然后对一名角色造成X点伤害并将其装备区里的所有牌置入弃牌堆（X为你与其装备牌数的差的绝对值）。",
			voice:"Ex...calibur！！！！！！"
		  },
		  {
			name: "剑鞘「远离尘世的理想乡」",
			text: "锁定技，每当你受到一次伤害时，有1/3概率防止此伤害。",
		  },
		],
		designer: "Sword Elucidator",
		voice: "川澄绫子",
		illustrator: "しらび",
				},
      {name: '言峰綺礼',
	    relative: "https://zh.moegirl.org/%E8%A8%80%E5%B3%B0%E7%BB%AE%E7%A4%BC",
	    image: "assets/images/cards/characters/kirei.jpg",
	    maxHp: 4,
	    subtitle: "麻婆神父",
	    from: "Fate Zero/Fate Stay Night",
	    skills: [
	      {
		    name: "愉悦「追求愉悦」",
		    text: "锁定技，每当一名角色造成一次伤害后 ，你摸等同于此伤害数量的牌。",
		    voice: "这样的毁灭！这样的悲鸣！居然是我的愉悦？"
		  },
		  {
		    name: "陷害「阴谋与剧本」",
		    text: "每当一名角色造成伤害时，若该伤害可以令目标进入濒死，你可以指定该伤害的来源。",
			voice:"酒的味道...比想象中的还要善变..."
		  },
		],
		designer: "Sword Elucidator",
		voice: "中田讓治",
		illustrator: "zihad",
		},
      {name: '神户小鸟',
	    relative: "https://zh.moegirl.org/%E7%A5%9E%E6%88%B7%E5%B0%8F%E9%B8%9F",
	    image: "assets/images/cards/characters/k_kotori.jpg",
	    maxHp: 3,
	    subtitle: "小小幸福",
	    from: "Rewrite",
	    skills: [
	      {
		    name: "键使",
		    text: "锁定技,每当【键】离开牌堆时，你获得这次移动的所有牌，并指定一名其他角色，视为你对其使用了这张【键】。以此法指定的目标对不包括你的其他角色消失，直到1.你下一次发动该技能2.你死亡。 ",
		    voice: "毕竟小篝就是在这出生的嘛，但是吓了我一跳，最开始还和幽灵一样，现在已经变得和人类一样了。"
		  },
		  {
		    name: "契约",
		    text: "一名角色濒死阶段结束时，若其体力值小于1，你可以令所有角色各摸X张牌，然后弃置区域内的X张牌，X为5-你的体力上限。若此过程中牌堆清空，你恢复体力上限初值，否则你需失去一点体力上限。 ",
			voice:"我只是为了救瑚太郎君，所以拼命拼命的求你。"
		  },
		],
		designer: "晴空；Sword Elucidator",
		voice: "斎藤千和",
		illustrator: "繭咲悠@三日目東タ-39b",
		},
      {name: '妲丽安',
	    relative: "https://zh.moegirl.org/%E4%B8%B9%E7%89%B9%E4%B8%BD%E5%AE%89",
	    image: "assets/images/cards/characters/dalian.png",
	    maxHp: 3,
	    subtitle: "黑之读姬",
	    from: "丹特丽安的书架",
	    skills: [
	      {
		    name: "书姬",
		    text: "当一张锦囊牌因使用而进入弃牌堆时，你可以弃置一张手牌将其放在你的武将牌上，称为“幻书”（幻书最多存在9张，同种类幻书牌最多存在一张）；锁定技,弃牌阶段，你的锦囊牌不计入手牌数，你不能弃置锦囊牌。 ",
		    voice: "世界上有些东西还是不知道为好。"
		  },
		  {
		    name: "继承",
		    text: "觉醒技，你的回合开始时，若手牌数为0，则你增加一点体力上限，选择回复一点体力或摸两张牌，然后将副将变为“修·安索尼·迪斯瓦德”。  ",
			voice:"解除契约之言！"
		  },
		],
		designer: "Clannad最爱",
		voice: "泽城美雪",
		illustrator: "",
		},
      {name: '修·安索尼·迪斯瓦德',
	    relative: "https://zh.moegirl.org/%E4%B8%B9%E7%89%B9%E4%B8%BD%E5%AE%89%E7%9A%84%E4%B9%A6%E6%9E%B6",
	    image: "assets/images/cards/characters/修伊.png",
	    maxHp: 4,
	    subtitle: "钥之守护者",
	    from: "丹特丽安的书架",
	    skills: [
	      {
		    name: "守匙",
		    text: "锁定技,你无法成为与你拥有的“幻书”牌类型相同的锦囊牌的目标。当你使用一张非延时锦囊时，你根据你武将牌上和该牌花色相同的“幻书”牌的数量获得以下效果：≥1张：这张牌不能被【金色宣言】响应。≥2：你摸一张牌。≥3：你可以让这张牌额外指定或减少1个目标。 ",
		    voice: "拿你没办法，我也会陪着你的。"
		  },
		  {
		    name: "开启",
		    text: "出牌阶段开始时，你可以重复此过程：若你有“幻书”，弃置一张牌，指定该阶段未指定过的角色并交给其一张“幻书”中的牌。 ",
			voice:"我问汝，汝为人否。"
		  },
		],
		designer: "Clannad最爱",
		voice: "小野大辅",
		illustrator: "",
		},
      {name: '黑化间桐樱',
	    relative: "https://zh.moegirl.org/%E9%97%B4%E6%A1%90%E6%A8%B1",
	    image: "assets/images/cards/characters/sakura1.jpg",
	    maxHp: 8,
	    subtitle: "间桐家的御主",
	    from: "Fate Zero/Fate Stay Night",
	    skills: [
	      {
		    name: "虚数",
		    text: "锁定技,对你造成的伤害和你造成的伤害视为体力流失。准备阶段开始时，你需令一名其他角色流失一点体力。 ",
		    voice: "能够给你的，只有后悔和绝望。"
		  },
		  {
		    name: "吸收",
		    text: "一名其他角色进入濒死时，你可以获得其一个技能并回复一点体力。 ",
			voice:"和我一起溶解吧。"
		  },
		],
		designer: "Sword Elucidator",
		voice: "下屋则子",
		illustrator: "月本葵",
		},
      {name: '黑化间桐樱（圣杯模式）',
	    relative: "https://zh.moegirl.org/%E9%97%B4%E6%A1%90%E6%A8%B1",
	    image: "assets/images/cards/characters/sakura2.jpg",
	    maxHp: 4,
	    subtitle: "间桐家的圣杯",
	    from: "Fate Zero/Fate Stay Night",
	    skills: [
	      {
		    name: "虚数",
		    text: "锁定技,对你造成的伤害和你造成的伤害视为体力流失。准备阶段开始时，你需令一名其他角色流失一点体力。 ",
		    voice: "能够给你的，只有后悔和绝望。"
		  },
		  {
		    name: "吸收",
		    text: "一名其他角色进入濒死时，你可以获得其一个技能并回复一点体力。 ",
			voice:"和我一起溶解吧。"
		  },
		  {
		    name: "圣杯",
		    text: "锁定技,回合开始前，弃置你判定区内的所有牌，若你背面朝上，将你的武将牌翻面。你的摸牌数+3，你的手牌上限+3 ",
		    voice: "不会停下的，妨碍我的话就毁掉你。"
		  },
		  {
		    name: "操影",
		    text: "其他角色指定你为目标时，获得一个“影”标记。一名角色流失体力时，你可以弃置其“影”标记，然后弃置其相同数量的牌。 ",
			voice:"消失吧！"
		  },
		  {
		    name: "黑·约束胜利之剑",
		    text: "当你失去体力时，你可以对一名其他角色造成X点伤害，X为你和其装备区牌的差，然后弃置其所有的装备牌。  ",
			voice:"被吾之剑光吞噬吧，Excalibur！！！"
		  },
		],
		designer: "Sword Elucidator",
		voice: "下屋则子",
		illustrator: "皇♦小J",
		},
      {name: '艾',
	    relative: "https://zh.moegirl.org/%E8%89%BE%C2%B7%E4%BA%9A%E6%96%AF%E6%B1%80",
	    image: "assets/images/cards/characters/ai.jpg",
	    maxHp: 3,
	    subtitle: "终焉的墓旅人",
	    from: "神不在的星期天",
	    skills: [
	      {
		    name: "收葬",
		    text: "每当一名角色进入濒死状态时，你可以弃置X张牌，然后视为你杀死该角色（X为该角色的体力上限）。 ",
		    voice: "我是守墓人...不，我要成为守墓人。"
		  },
		  {
		    name: "相认",
		    text: "限定技，每当一名男性角色进入濒死状态时，你可以令其获得除该角色以外的角色的各至多一张红色手牌，若其于濒死状态被救回，你与其处于父女状态。每当处于父女状态的角色死亡后，处于父女状态的另一名角色获得三个额外的回合。 ",
			voice:"我不会逃！直到就出父亲大人为止！"
		  },
		  {
		    name: "神悯",
		    text: "锁定技,每当一名角色死亡后，你回复1点体力；你的手牌上限+X（X为已死亡的人数）。  ",
			voice: "如果神抛弃了世界，我就去拯救这个世界。"
		  },
		],
		designer: "黑猫roy",
		voice: "豊崎愛生",
		illustrator: "Madhouse",
		},
      {name: '鎖部葉風',
	    relative: "https://zh.moegirl.org/%E9%94%81%E9%83%A8%E5%8F%B6%E9%A3%8E",
	    image: "assets/images/cards/characters/hakaze.jpg",
	    maxHp: 3,
	    subtitle: "初始的魔法使",
	    from: "绝园的暴风雨",
	    skills: [
	      {
		    name: "贡品「文明贡品」",
		    text: "每当一名角色造成一次伤害时，你可以将牌堆顶部的三张牌依次置入弃牌堆，若其中存在非延时类锦囊牌，你获得一枚“魔道具”标记。  ",
		    voice: "如此高度的文明产物...为什么会恰巧落在我的附近..."
		  },
		  {
		    name: "结界「守护之魔法」",
		    text: "出牌阶段，你可以弃置1枚“魔道具”标记并指定一名没有“结界”标记的角色，你令其获得1枚“结界”标记。每当拥有“结界”标记的角色受到伤害时，其须弃置1枚“结界”标记并令此伤害-1。",
			voice: "听我调遣！"
		  },
		],
		designer: "Sword Elucidator",
		voice: "沢城みゆき",
		illustrator: "pixiv いやくん",
		},
      {name: '五河琴里',
	    relative: "https://zh.moegirl.org/%E4%BA%94%E6%B2%B3%E7%90%B4%E9%87%8C",
	    image: "assets/images/cards/characters/kotori.jpg",
	    maxHp: 3,
	    subtitle: "炎魔妹妹",
	    from: "约会大作战",
	    skills: [
	      {
		    name: "五番「神威灵装·五番（Elohim Gibor）」",
		    text: "游戏开始时，你获得3枚 Efreet 标记；每当你处于濒死状态被救回，你获得一枚 Efreet 标记。回合开始前，若你没有 Efreet 标记，你失去所有技能。准备阶段，你可以弃置一个 Efreet 标记，并获得【涅槃】和【灼烂歼鬼（Camael）】",
		    voice: "神威灵装·五番（Elohim Gibor）！"
		  },
		  {
		    name: "涅槃「伤势复原」",
		    text: "唤醒技,锁定技,你受到一次伤害后，回复一点体力。",
			voice: "你还真是会玩啊。"
		  },
		  {
		    name: "奸鬼「灼烂歼鬼（Camael）」",
		    text: "唤醒技,出牌阶段限一次，你可以指定任意名其他角色，对这些角色造成一点火焰伤害，弃置这些角色各两张牌，然后摸三张牌。 ",
			voice: "灼烂歼鬼（Camael）·炮（Megiddo）！"
		  },
		],
		designer: "御坂20623",
		voice: "竹達彩奈",
		illustrator: "ちゃわん",
		},
      {name: '右代宮縁寿',
	    relative: "https://zh.moegirl.org/%E5%8F%B3%E4%BB%A3%E5%AE%AB%E7%BC%98%E5%AF%BF",
	    image: "assets/images/cards/characters/anje.jpg",
	    maxHp: 3,
	    subtitle: "返魂の魔女",
	    from: "海猫鸣泣之时",
	    skills: [
	      {
		    name: "七桩【炼狱七桩】",
		    text: "锁定技,游戏开始时，你获得7枚“炼狱桩”标记；你跳过你的出牌阶段；弃牌阶段结束时，若你的手牌小于X，你将手牌补至X-2（X为场上的存活角色）；每当拥有“炼狱桩”标记的角色死亡后，你获得其对应的“炼狱桩”标记。结束阶段结束时，你可以令至多四名其他角色分别获得你的“路西法”“雷维阿坦”“撒旦”“贝露菲格露”标记；结束阶段结束时，你可以令至多两名角色分别获得你的“贝露赛布布”“阿丝磨德乌丝”标记。每当拥有“炼狱桩”标记的角色造成伤害时，你可以获得此标记并根据此标记执行以下效果：路西法 - 该角色受到等同于其造成的伤害。雷维阿坦 - 你有1/2的几率弃置该角色的两张装备区里的牌。撒旦 - 你有1/2几率对该角色造成1点伤害。贝露菲格露 - 你有1/2几率防止此伤害。贝露赛布布 - 你有1/2几率令该角色摸两张牌。阿丝磨德乌丝 - 你有1/2几率令你与该角色各回复1点体力。玛蒙 - 你获得1枚“爱の魔法”标记。 ◆7枚“炼狱桩”标记分别为“路西法”“雷维阿坦”“撒旦”“贝露菲格露”“贝露赛布布”“阿丝磨德乌丝”“玛蒙”标记。",
		    voice: "炼狱的七姐妹！"
		  },
		  {
		    name: "返魂【爱の魔法】",
		    text: "回合开始时，你可以令一名已死亡的角色复活并将其体力自然回复至2点，然后令其获得一个额外的回合。结束阶段开始时，你可以弃置1枚“爱の魔法”标记并令该角色存活至你的下一回合初，否则该角色死亡。 ",
			voice: "魔法、魔女，在此刻展示奇迹吧！"
		  },
		],
		designer: "Sword Elucidator",
		voice: "佐藤利奈",
		illustrator: "時火",
		},
    {name: '姫柊雪菜',
    relative: "https://zh.moegirl.org/%E5%A7%AC%E6%9F%8A%E9%9B%AA%E8%8F%9C",
    image: "assets/images/cards/characters/yukina.jpg",
    maxHp: 3,
    subtitle: "狮子王机关の剑巫",
    from: "噬血狂袭",
    skills: [
      {
      name: "雪霞狼",
      text: "锁定技,每当你对一名角色造成雷属性伤害时，你须将该角色的武将牌上的所有牌置入弃牌堆，然后弃置其所有标记。",
      voice: "不，前辈，是我们的战斗。"
    },
    {
      name: "监视",
      text: "游戏开始时，你获得1枚“监视”标记；每当你受到1点伤害后，你获得1枚“监视”标记。出牌阶段，你可以指定一名没有“监视”标记的角色，若如此做，你令其获得你的1枚“监视”标记。每当拥有“监视”标记的角色使用一张牌后或成为一张牌的目标后，你有17%的概率可以指定一名角色，你对其造成1点雷电伤害。每当拥有“监视”标记的角色死亡时，所有其他角色各失去“监视”标记。 ",
    voice: "当然啦，我可是监视者啊。"
    },
  ],
  designer: "Sword Elucidator",
  voice: "種田梨沙",
  illustrator: "緋華",
  },
      {name: '藍羽浅葱',
	    relative: "https://zh.moegirl.org/%E8%93%9D%E7%BE%BD%E6%B5%85%E8%91%B1",
	    image: "assets/images/cards/characters/asagi.jpg",
	    maxHp: 3,
	    subtitle: "电子的女帝",
	    from: "噬血狂袭",
	    skills: [
	      {
		    name: "破译",
		    text: "出牌阶段限一次,你可以指定一名AI角色X和另一名角色Y，令X的AI重置，然后令X视为对Y使用一张【杀】。",
		    voice: "这家伙的形态要素解析已经可以了。"
		  },
		  {
		    name: "管理",
		    text: "任意角色回合开始时，你可以弃置一张牌，令该角色立刻执行一个你指定的一个额外阶段。",
			voice: "好吧，我稍微有点兴趣，就陪你查一下吧。"
		  },
		],
		designer: "Sword Elucidator",
		voice: "瀬戸麻沙美",
		illustrator: "",
		},
      {name: '时崎狂三',
	    relative: "https://zh.moegirl.org/%E6%97%B6%E5%B4%8E%E7%8B%82%E4%B8%89",
	    image: "assets/images/cards/characters/kurumi.jpg",
	    maxHp: 3,
	    subtitle: "Nightmare",
	    from: "约会大作战",
	    skills: [
	      {
		    name: "七弹",
		    text: "奇数回合的准备阶段开始时，你可以跳过你的出牌阶段和弃牌阶段并指定一名其他角色，令其武将牌翻面。若如此做，此回合结束阶段开始时，你摸一张牌。",
		    voice: "啊，啊，失算了，失算了。虽然还想享受一会儿和士道的约会..."
		  },
		  {
		    name: "十弹",
		    text: "偶数回合的准备阶段开始时，你可以跳过你的判定阶段和摸牌阶段并指定一名其他角色，视为对其使用一张火【杀】。若该角色为上回合使用“七弹”的目标，改为你对其直接造成2点火属性伤害。",
			voice: "把枪口对准生命，就是...这样一回事哦。"
		  },
		  {
		    name: "八弹",
		    text: "限定技，回合开始时，你可以将体力值回复至3，并重置你当前的回合为奇数或偶数。 ",
			voice: "不是哦。我还是让时间倒流了而已。来吧来吧，开始吧~"
		  },
		],
		designer: "御坂20623",
		voice: "真田麻美",
		illustrator: "入绘由君（君君々）",
		},
      {name: '木之本樱',
	    relative: "https://zh.moegirl.org/%E6%9C%A8%E4%B9%8B%E6%9C%AC%E6%A8%B1",
	    image: "assets/images/cards/characters/sakura.jpg",
	    maxHp: 3,
	    subtitle: "初代萌王",
	    from: "魔卡少女樱",
	    skills: [
	      {
		    name: "百变",
		    text: "准备阶段开始时，你需失去所有“百变”和“库洛”以外的技能；若你的体力上限大于6，将你的体力上限设定为6；若你的体力上限小于3，将你的体力上限设定为3。你可以翻开牌堆顶X张牌（X为你失去的你的体力值），根据翻开的牌获得技能，然后获得这些手牌。 ",
		  },
		  {
		    name: "库洛",
		    text: "锁定技,你的手牌上限为52。 ",
		  },
		],
		designer: "幽灵;御坂;萝莉姬",
		voice: "丹下桜",
		illustrator: "",
		},
      {name: '优克莉伍德',
	    relative: "https://zh.moegirl.org/%E4%BC%98%E5%85%8B%E9%87%8C%E4%BC%8D%E5%BE%B7",
	    image: "assets/images/cards/characters/eu.jpg",
	    maxHp: 3,
	    subtitle: "沉默的死灵师",
	    from: "这就是僵尸吗",
	    skills: [
	      {
		    name: "谶言",
		    text: "每当你需使用或打出一张牌时，你可以弃置两张牌或失去1点体力并声明你需使用的牌，你视为使用此牌，每阶段限一次。 ",
		    voice: "我明白的。"
		  },
		  {
		    name: "通灵",
		    text: "限定技，出牌阶段，你可以选择一项：1、指定一名主公以外的体力值不大于1的其他角色，你杀死该角色，然后令其复活并变身为僵尸。2、指定一名已死亡角色，令其变身为僵尸。",
			voice: "太温吞，酸死了，真差劲。"
		  },
		],
		designer: "御坂20623；黑猫roy-音频",
		voice: "月宫みどり",
		illustrator: "Windforcelan",
		},
      {name: '右代宮戦人',
	    relative: "https://zh.moegirl.org/%E5%8F%B3%E4%BB%A3%E5%AE%AB%E6%88%98%E4%BA%BA",
	    image: "",
	    maxHp: 4,
	    subtitle: "翻盘狂魔",
	    from: "海猫鸣泣之时",
	    skills: [
	      {
		    name: "掀桌",
		    text: "你死亡时，你可以依次指出每个角色的身份，若正确，你复活并回复至体力上限，令场上所有角色的牌、标记、武将牌、各牌堆均置入弃牌堆，复活各角色，所有角色均摸取一张武将牌，然后你重新分配各角色的身份（主公只能有一个）。 ",
		  },
		],
		designer: "Sword Elucidator",
		voice: "小野大輔",
		illustrator: "水野英多",
		},
      {name: '魔·右代宮戦人',
	    relative: "https://zh.moegirl.org/%E5%8F%B3%E4%BB%A3%E5%AE%AB%E6%88%98%E4%BA%BA",
	    image: "",
	    maxHp: 4,
	    subtitle: "无限黄金魔术师",
	    from: "海猫鸣泣之时",
	    skills: [
	      {
		    name: "布棋",
		    text: "游戏开始时或你受到一次伤害后，你可获得所有其他角色手牌，并由当前回合角色开始，依次交给每名其他角色等同于其原有手牌张数的手牌。  ",
		  },
		],
		designer: "Sword Elucidator",
		voice: "小野大輔",
		illustrator: "水野英多",
		},
      {name: '美樹沙耶香',
	    relative: "https://zh.moegirl.org/%E7%BE%8E%E6%A0%91%E6%B2%99%E8%80%B6%E9%A6%99",
	    image: "assets/images/cards/characters/sayaka.jpg",
	    maxHp: 3,
	    subtitle: "迷茫的魔法少女",
	    from: "魔法少女小圆",
	    skills: [
	      {
		    name: "无畏",
		    text: "锁定技,你每受到一次伤害后，你回复一点体力然后你获得一个“无畏”标记。回合结束阶段开始时，若你的“无畏”标记大于场上存活角色数（至少为4），你变身为魔女并将你的身份变为内奸（主公时不变），否则你回复一点体力并摸一张牌。当你使用【杀】时，你可以获得一个“无畏”标记，此【杀】造成伤害时，该伤害+1，你失去一个“无畏”标记。若你的“无畏”标记大于1，你使用【杀】无次数限制；若你的“无畏”标记大于2，你使用【杀】无视防具；若你的“无畏”标记大于场上存活角色数（至少为4）/2，你回合内使用【杀】无视距离；若你的“无畏”标记大于场上存活角色数（至少为4），你的【杀】不可闪避且你使用【杀】造成伤害时摸一张牌。 ",
		    voice: "...不要妨碍我，我一个人能解决.."
		  },
		],
		designer: "OmnisReen; Sword Elucidator",
		voice: "喜多村英梨",
		illustrator: "momonote",
		},
      {name: '佐仓杏子',
	    relative: "https://zh.moegirl.org/%E4%BD%90%E4%BB%93%E6%9D%8F%E5%AD%90",
	    image: "assets/images/cards/characters/kyouko.jpg",
	    maxHp: 4,
	    subtitle: "红色幽灵",
	    from: "魔法少女小圆",
	    skills: [
	      {
		    name: "强气",
		    text: "准备阶段开始时，你可以进行一次判定，然后你获得生效后的判定牌且你可以重复此流程，直到判定结果为【杀】。 ",
		    voice: "超烦~超烦人~~"
		  },
		],
		designer: "昂翼天使",
		voice: "野中藍",
		illustrator: "SHAFT",
		},
      {name: '吉尔伽美什',
	    relative: "https://zh.moegirl.org/%E5%90%89%E5%B0%94%E4%BC%BD%E7%BE%8E%E4%BB%80(Fate)",
	    image: "assets/images/cards/characters/kinpika.jpg",
	    maxHp: 4,
	    subtitle: "金闪闪",
	    from: "Fate Zero/Fate Stay Night",
	    skills: [
	      {
		    name: "财宝「Gate of Babylon」",
		    text: "回合开始时，你可以搜寻一张武器牌并放在你的武将牌上，称为“王之财宝”。出牌阶段，你可以将任意张武器牌置入“王之财宝”。你可选择一张“王之财宝”，将其视为你对一名其他角色使用了一张任意属性的【杀】。以此法使用的【杀】无视距离且不计入回合次数限制。",
		    voice: "Gate of Babylon"
		  },
		  {
		    name: "天锁「天之锁」",
		    text: "你指定一名其他角色为唯一目标时，可以令其横置。你指定横置的角色为目标使用【杀】时，其需弃置一张基本牌，否则该【杀】不能闪避。",
			voice: "天之锁！"
		  },
		],
		designer: "Sword Elucidator",
		voice: "関智一",
		illustrator: "null",
		},
      {name: '衛宮切嗣',
	    relative: "https://zh.moegirl.org/%E5%8D%AB%E5%AE%AB%E5%88%87%E5%97%A3",
	    image: "assets/images/cards/characters/kiritsugu.jpg",
	    maxHp: 4,
	    subtitle: "正义天秤的衡量者",
	    from: "Fate Zero",
	    skills: [
	      {
		    name: "起源「起源弹」",
		    text: "出牌阶段，你可以失去一点体力上限，获得一发“起源弹”。若你拥有起源弹，你额外摸“起源弹”数目张牌，你回合使用【杀】次数+“起源弹”数目。你使用【杀】指定一名角色时，需选择是否为“起源弹”（目标不知道选项），当你的【杀】造成的伤害时，若为“起源弹”，目标失去副将外的所有的技能。",
		    voice: "这就是小少爷的礼装，起源弹。"
		  },
		  {
		    name: "逼令「自我强制证文」",
		    text: "限定技，你指定一名角色，令其获得效果：你对其造成伤害时，取消之，且其不能成为起源弹的目标。若该角色有副将，令该角色移除自己的副将；若该角色没有副将，其受到你指定的你和其以外的来源的两张【杀】（若无来源则无效）。",
			voice: "嗯，成立了，我已经无法再伤害你们了。仅限我。"
		  },
		  {
		    name: "剑鞘「亚瑟王的治愈之力」",
		    text: "限定技，当一名角色受到造成濒死的伤害时，你可以取消之并令其回复一点体力。 ",
			voice: "还活着...还活着...还活着......"
		  },
		],
		designer: "Sword Elucidator",
		voice: "小山力也",
		illustrator: "砂雲",
		},
      {name: '社长八云',
	    relative: "https://zh.moegirl.org/%E6%90%AC%E8%BF%90%E7%A4%BE",
	    image: "",
	    maxHp: 4,
	    subtitle: "搬运社",
	    from: "拳皇/TH",
	    skills: [
	      {
		    name: "搬运",
		    text: "出牌阶段限一次，指定一名距离为1的其他角色A和任意一名你和A以外的角色B。你带着A随机位移5次，然后你和A以原次序移动到B的左侧。若如此做，你对A造成一点伤害。",
		  },
		  {
		    name: "间隙",
		    text: "出牌阶段限一次，你可以指定两名角色交换位置。",
		  },
		  {
		    name: "升龙",
		    text: "锁定技,你受到其他角色的伤害时，若伤害来源的手牌数为0，取消之；为1-3，伤害来源受到一点你造成的伤害；为4-6，伤害来源受到两点你造成的伤害；大于6，伤害来源受到三点你造成的伤害。",
		  },
		],
		designer: "军师可以打酱油",
		voice: "",
		illustrator: "",
		},
      {name: '织田信奈',
	    relative: "https://zh.moegirl.org/%E7%BB%87%E7%94%B0%E4%BF%A1%E5%A5%88",
	    image: "assets/images/cards/characters/odanobuna.jpg",
	    maxHp: 3,
	    subtitle: "第六天魔王",
	    from: "织田信奈的野望",
	    skills: [
	      {
		    name: "赤鬼",
		    text: "结束阶段开始时，你可失去1点体力，获得1名角色装备区内的武器牌，然后再摸1张牌，直到场上没有武器牌。 ",
		    voice: "这种规矩，就由我来打破！"
		  },
		  {
		    name: "布武",
		    text: "每当你造成一次伤害后，你可令受到伤害的角色将其武将牌翻面，然后该角色摸等同于其体力值-1张牌。",
			voice: "我眼中所见，是整个世界！"
		  },
		  {
		    name: "天魔",
		    text: "当你使用的【杀】被【闪】抵消时，你获得1枚“天魔”标记。当扣减你的体力时，你可弃置1枚“天魔”标记，防止此次扣减体力。",
			voice: "谢谢你，猴子。我又被你救了呢~~"
		  },
		],
		designer: "OmnisReen",
		voice: "伊藤 かな恵",
		illustrator: "Studio 五组 X MADHOUSE",
		},
      {name: '魔王',
	    relative: "https://zh.moegirl.org/%E7%BA%A2%E7%8E%89%E4%B9%8B%E7%9E%B3",
	    image: "assets/images/cards/characters/mao_maoyu.png",
	    maxHp: 4,
	    subtitle: "红玉之瞳",
	    from: "魔王勇者",
	    skills: [
	      {
		    name: "博学",
		    text: "出牌阶段限一次，你可指定X名角色并亮出牌堆顶X张牌，然后你摸X/2(向上取整)张牌，指定角色依次与之交换一张牌（包括装备牌），然后你将其余的牌弃置，或以任意顺序置于牌堆顶。 ",
		    voice: "战争的彼端 未曾见过的世界"
		  },
		],
		designer: "昂翼天使; OmnisReen",
		voice: "小清水亜美",
		illustrator: "Arms",
		},
      {name: '葵·托利',
	    relative: "https://zh.moegirl.org/%E5%A2%83%E7%95%8C%E7%BA%BF%E4%B8%8A%E7%9A%84%E5%9C%B0%E5%B9%B3%E7%BA%BF",
	    image: "assets/images/cards/characters/aoitori.jpg",
	    maxHp: 4,
	    subtitle: "不可能之男",
	    from: "境界线上的地平线",
	    skills: [
	      {
		    name: "裸王",
		    text: "摸牌阶段结束时，你可以展示所有手牌。其中每有一种红色花色，你可令一名角色摸一张牌。然后每有一种黑色花色，你可弃置一名角色的一张牌。 ",
		    voice: "如同偷窥围裙里的胖次 难以表达。"
		  },
		],
		designer: "OmnisReen",
		voice: "福山潤",
		illustrator: "Sunrise",
		},
      {name: '迪卢木多',
	    relative: "https://zh.moegirl.org/%E8%BF%AA%E5%B0%94%E5%A7%86%E5%BE%B7%C2%B7%E5%A5%A5%E8%BF%AA%E9%82%A3(Fate)",
	    image: "assets/images/cards/characters/diarmuid.jpg",
	    maxHp: 4,
	    subtitle: "光辉之貌",
	    from: "Fate Zero",
	    skills: [
	      {
		    name: "破魔",
		    text: "锁定技，你使用【杀】时，无视目标角色的防具。",
		    voice: "鲜红地，舞动吧。"
		  },
		  {
		    name: "必灭",
		    text: "每当你使用的【杀】造成伤害后，你可令受到伤害的角色获得1枚“咒”标记，拥有该标记的角色回复体力时，取消之。你死亡时，弃置场上所有的”咒“标记。 ",
			voice: "飞舞吧，Gae·Buidhe！"
		  },
		],
		designer: "银龙幽影",
		voice: "緑川光",
		illustrator: "TYPE-MOON",
		},
      {name: '露娜莉亚',
	    relative: "https://zh.moegirl.org/%E6%9C%88%E5%85%89%E5%98%89%E5%B9%B4%E5%8D%8E",
	    image: "",
	    maxHp: 3,
	    subtitle: "月长石",
	    from: "月光嘉年华",
	    skills: [
	      {
		    name: "御空",
		    text: "出牌阶段限一次，你可以弃置一张“丝”，然后你计算和其他角色的距离为1，直到回合结束。",
		    voice: "那样的话，就算被我代替了也没啥怨言吧"
		  },
		  {
		    name: "文乐",
		    text: "锁定技，摸牌阶段摸牌时，你额外摸X张牌，然后摸牌阶段结束时将X张牌背面朝上置于武将牌上称为“丝”（X为存活角色数的一半，向下取整）。准备阶段开始时，你须弃置所有的“丝”，然后摸等量的牌。 ",
			voice: "哪都行，请带我离开这里"
		  },
		  {
		    name: "绮丝",
		    text: "【杀】或非延时类锦囊对你生效前，你可以弃置一张“丝”，若该角色的攻击范围小于“丝”点数的一半（向下取整），取消之。",
			voice: "真狼狈呢。"
		  },
		],
		designer: "昂翼天使",
		voice: "红野ミア",
		illustrator: "Nitro+",
		},
      {name: '英灵卫宫',
	    relative: "https://zh.moegirl.org/%E5%8D%AB%E5%AE%AB%E5%A3%AB%E9%83%8E",
	    image: "",
	    maxHp: 4,
	    subtitle: "冶炼的英雄",
	    from: "Fate Stay Night",
	    skills: [
	      {
		    name: "投影",
		    text: "出牌阶段限一次，若你的装备区没有武器，你可以声明一种武器，获得其特效直到回合结束。",
		    voice: "Trace......on!"
		  },
		  {
		    name: "崩坏",
		    text: "你可以将一张装备牌当无距离限制的【杀】使用。",
			voice: "螺旋剑！"
		  },
		  {
		    name: "剑咏",
		    text: "弃牌阶段开始时，若此回合内你未造成伤害，可以摸X张牌。若如此做，你可以将至多X张手牌置于武将牌上，称为“咏”。（X为你已损失的体力值，至少为1；） ",
			voice: "I am the bone of my sword."
		  },
		  {
		    name: "剑制",
		    text: "觉醒技，结束阶段开始时，若你的”咏“的数量达到三张或更多时，你减1点体力上限，获得每名其他角色各一张手牌并置于你的武将牌上，然后获得技能”剑雨“和”炽天“，此回合结束后进行一个额外的回合。 ",
			voice: "So as I pray, unlimited blade works. "
		  },
		],
		designer: "昂翼天使",
		voice: "諏訪部 順一",
		illustrator: "Type Moon",
		},
      {name: '不破爱花',
	    relative: "https://zh.moegirl.org/%E4%B8%8D%E7%A0%B4%E7%88%B1%E8%8A%B1",
	    image: "",
	    maxHp: 3,
	    subtitle: "绝园的魔法使",
	    from: "绝园的暴风雨",
	    skills: [
	      {
		    name: "破始",
		    text: "出牌阶段限一次，你可失去1点体力，然后你无视与其他角色的距离和其他角色的防具；且你使用杀时无使用次数限制，直到回合结束。",
		    voice: "一切都是你的罪过"
		  },
		  {
		    name: "连锁",
		    text: "每名其他角色的回合限两次，其他角色的牌因弃置而置入弃牌堆时，你可以摸一张牌 ",
			voice: "天地之间有许多事情是你的睿智无法想象的"
		  },
		  {
		    name: "因果",
		    text: "限定技，你死亡后，可以将所有手牌交给至多两名男性角色，然后指定的角色再摸等同于交给其手牌张数的牌。",
			voice: "这是怎样一个被诅咒的因果啊。"
		  },
		],
		designer: "昂翼天使",
		voice: "花澤 香菜",
		illustrator: "Bones",
		},
      {name: '贝伦卡斯泰露',
	    relative: "https://zh.moegirl.org/%E8%B4%9D%E4%BC%A6%E5%8D%A1%E6%96%AF%E6%B3%B0%E9%9C%B2",
	    image: "",
	    maxHp: 3,
	    subtitle: "奇迹之魔女",
	    from: "海猫鸣泣之时",
	    skills: [
	      {
		    name: "奇迹宣言",
		    text: "当一名角色受到其他角色伤害而进入濒死状态时，你可令该角色和伤害来源各进行一次判定；若判定点数相同，则该角色体力恢复至其体力上限，伤害来源失去全部体力。（该技能对一名角色一局游戏只能使用一次） ",
		    voice: "你爱怎么样就怎么样吧，既然如此那我就认真了。"
		  },
		  {
		    name: "碎片筛选",
		    text: "在一名角色的判定牌生效前，你可用牌堆顶牌代替判定牌且你可重复此流程。 ",
			voice: "这样一边倒的游戏 真无聊。"
		  },
		],
		designer: "海猫鸣泣之时吧&果然萝卜斩",
		voice: "田村ゆかり",
		illustrator: "ひさｎ(@Pixiv)",
		},
      {name: '古手梨花',
	    relative: "https://zh.moegirl.org/%E5%8F%A4%E6%89%8B%E6%A2%A8%E8%8A%B1",
	    image: "assets/images/cards/characters/rika2.jpg",
	    maxHp: 3,
	    subtitle: "无尽轮回の巫女",
	    from: "海猫鸣泣之时",
	    skills: [
	      {
		    name: "轮回",
		    text: "锁定技,摸牌阶段，你少摸一张牌（最少为0）。当你使用牌因弃牌、使用结算完毕将要进入弃牌堆时，你可以获得之并置于武将牌上方。回合开始时，回合结束阶段开始时，你获得武将牌上的所有牌。 ",
		    voice: "我到底该怎么办...该怎么办..."
		  },
		],
		designer: "帕秋莉·萝莉姬",
		voice: "田村ゆかり",
		illustrator: "KayaK",
		},
      {name: '佩斯特',
	    relative: "https://zh.moegirl.org/%E9%97%AE%E9%A2%98%E5%84%BF%E7%AB%A5%E9%83%BD%E6%9D%A5%E8%87%AA%E5%BC%82%E4%B8%96%E7%95%8C",
	    image: "",
	    maxHp: 4,
	    subtitle: "黑死病魔王",
	    from: "问题儿童都来自异世界",
	    skills: [
	      {
		    name: "源头",
		    text: "游戏开始阶段，你获得“鼠疫”，“鼠疫”对你无效，你无法获得“抗体”。每当你受到“鼠疫”持有角色伤害或对其造成伤害时，可以获得其所拥有的“鼠疫”，或者给予其自己所拥有的“鼠疫”，并防止此次伤害。不能无视抗体 ",
		  },
		  {
		    name: "鼠疫",
		    text: "回合结束的时候，失去1点体力，与你距离为1的角色将以80%获得“鼠疫”，距离为2的角色将以50%获得“鼠疫”，持有者将以50%的几率失去“鼠疫”获得免疫。获得免疫者以50%失去“抗体”  ",
		  },
		],
		designer: "帕秋莉·萝莉姬",
		voice: "",
		illustrator: "KayaK",
		},
      {name: '立花響',
	    relative: "https://zh.moegirl.org/%E7%AB%8B%E8%8A%B1%E5%93%8D",
	    image: "",
	    maxHp: 3,
	    subtitle: "永恒之枪",
	    from: "战姬绝唱",
	    skills: [
	      {
		    name: "同步",
		    text: "萌战技,绝唱,3,出牌阶段限一次;令参战角色依次对一名其他角色使用一张【杀】，直到一名参战角色不如此做。每以此法使用一张【杀】，你可令一名参战角色摸一张牌。（不计入出牌阶段使用杀次数）",
		    voice: "开始吧！S2CA TRIBURST!"
		  },
		  {
		    name: "圣枪",
		    text: "锁定技，若你装备有武器，你的【杀】不能被【闪】响应。你对体力值比你多的角色造成的伤害+1；你对体力值不多于你的角色造成伤害时，回复1点体力。回合内你每造成一次伤害，结束阶段开始时便须弃置一张牌。",
			voice: "Balwisyall Nescell gungnir tron"
		  },
		],
		designer: "OmnisReen",
		voice: "悠木碧",
		illustrator: "うなぎ海鮮（@Pixiv）",
		},
      {name: '風鳴翼',
	    relative: "https://zh.moegirl.org/%E9%A3%8E%E9%B8%A3%E7%BF%BC",
	    image: "",
	    maxHp: 4,
	    subtitle: "天羽羽斩",
	    from: "战姬绝唱",
	    skills: [
	      {
		    name: "苍闪",
		    text: "你可将装备牌当【杀】或【闪】使用或打出。以此法使用的【杀】无视距离，每以此法使用或打出一张牌时，你摸两张牌。",
		    voice: "那我这边也来真的吧！"
		  },
		  {
		    name: "月煌",
		    text: "萌战技,绝唱,3,出牌阶段限一次;令其他参战角色各交给你一张装备牌，然后参战角色各摸X张牌。若如此做，该阶段内你可额外使用X张【杀】（X为以此法交给你的装备牌的数量+2）",
			voice: "利刃风急千花绽。"
		  },
		],
		designer: "OmnisReen",
		voice: "水樹奈々",
		illustrator: "サブ(@Pixiv）",
		},
      {name: '小日向未来',
	    relative: "https://zh.moegirl.org/%E5%B0%8F%E6%97%A5%E5%90%91%E6%9C%AA%E6%9D%A5",
	    image: "",
	    maxHp: 3,
	    subtitle: "神兽镜",
	    from: "战姬绝唱",
	    skills: [
	      {
		    name: "镜鸣",
		    text: "其他角色的回合开始时，你可弃置一张牌，然后令其不能使用【杀】直到其回合结束；若如此做，回合结束时，你可令其回复1点体力，或其摸两张牌。 ",
		    voice: "我不想让你再战斗下去了。"
		  },
		  {
		    name: "映现",
		    text: "萌战技,绝唱,3,出牌阶段限一次;参战角色各展示一张手牌，然后你将牌堆顶X张牌以任意方式交给参战角色。（X为所有展示手牌的点数和的算术平方根，向上取整） ",
			voice: "闪光…创始的世界　漆黑…终结的世界。"
		  },
		],
		designer: "OmnisReen",
		voice: "井口裕香",
		illustrator: "双葉はる(@Pixiv）",
		},
      {name: '雪音クリス',
	    relative: "https://zh.moegirl.org/%E9%9B%AA%E9%9F%B3%E5%85%8B%E8%8E%89%E4%B8%9D",
	    image: "",
	    maxHp: 3,
	    subtitle: "魔弓",
	    from: "战姬绝唱",
	    skills: [
	      {
		    name: "扫射",
		    text: "出牌阶段对每名角色限两次，你可指定一名你攻击范围内的其他角色，然后交给其一张牌并视为你对其使用一张【杀】（不计入出牌阶段使用【杀】次数。）当你于出牌阶段内以此法交给其他角色的手牌首次达到两张或更多时，你回复1点体力，或摸两张牌。",
		    voice: "Combination Arts！"
		  },
		  {
		    name: "敌忾",
		    text: "萌战技,绝唱,1,绝唱角色受到伤害后;若其参战，你可摸一张牌，然后弃置伤害来源的一张牌并可交给参战角色一张【杀】或装备牌。 ",
			voice: "接下来就是我的活儿了！"
		  },
		],
		designer: "OmnisReen",
		voice: "高垣彩陽",
		illustrator: "mototenn(@Pixiv）",
		},
    ];
  }
})();
