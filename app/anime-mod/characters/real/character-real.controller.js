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
      {name: '古河渚',
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
      {name: '藤林杏',
	    relative: "https://zh.moegirl.org/%E8%97%A4%E6%9E%97%E6%9D%8F",
		image: "assets/images/cards/characters/kyou.jpg",
		maxHp: 4,
		subtitle: "字典战神",
		from: "Clannad",
		skills: [
		  {
			name: "投掷 ",
			text: "出牌阶段，你可以将一张单体锦囊当做【杀】使用（不计入次数限制），若该【杀】造成伤害，视为你对目标使用了这张锦囊。若你的【杀】未造成伤害，你视为使用一张【酒】并摸1张牌。你每发动一次该技能，你与其他角色计算距离时-1。",
			voice:"喂！冈崎朋也！咻!~"
		  },
		  {
			name: "幼教",
			text: "一名体力值小于你的角色失去体力时，你可以将一张基本牌当做【键】使用，然后你和其各摸1张牌。 ",
			voice:"你是冈崎汐的父亲吧？(杏）哦...你...你...（朋也）我是小汐的班主任名叫滕林杏，请多指教~"
		  },
		],
		designer: "Sword Elucidator",
		voice: "広橋涼",
		illustrator: "",
	  },
    {name: '岡崎朋也',
    relative: "https://zh.moegirl.org/%E5%86%88%E5%B4%8E%E6%9C%8B%E7%BE%8E",
  image: "assets/images/cards/characters/tomoya.jpg",
  maxHp: 4,
  subtitle: "家族的誓言",
  from: "Clannad",
  skills: [
    {
    name: "助人「实现梦想」",
    text: "出牌阶段限一次，你可以将至多X+1张牌交给一名角色（X为你已损失的体力值）。弃牌阶段结束时，你可以将手牌补至4张。 ",
    voice:"只要找到下一件愉快和开心的事不就好了嘛。"
    },
    {
    name: "道路「选择的道路」",
    text: "觉醒技，你的濒死状态结束时，你可以将体力回复至2点，然后你减一点体力上限并选择一个技能获得：“电工”“收养”“海星”“坦言”。",
    },
    {
    name: "电工「电路工人」",
    text: "出牌阶段，你可以将一张黑色手牌当做“闪电”置于任意角色的判定区。你可以防止闪电的伤害。",
    voice:"渚...我找到了。终于找到了..只有我能守护的的东西。",
    waked: true
    },
    {
      name: "收养「Tomo」",
    text: "结束阶段结束时，你可以摸X+1张牌（X为你已损失的体力）；每当你获得此技能后，你须指定一名其他角色，每当其受到伤害时，该角色将此伤害转移给你。",
    voice:"不管发生什么，我都会保护你的。",
    waked: true
    },
    {
    name: "海星「梦的碎片」",
    text: "每当一名角色的濒死状态结束时，你可以弃置一张牌并进行一次判定：若结果大于8，该角色回复1点体力；若结果为红色，该角色回复1点体力。",
    voice: "非常感谢你们..风子过得很开心..",
    waked: true
    },
    {
    name: "坦言「真正的心意」",
    voice: "其他女性角色出牌阶段开始时，你可以对其展示你全部的手牌且令该阶段其与你的距离为1。若如此做，该角色本回合出牌阶段的【杀】结算完毕后，你获得之，然后你交给其一张牌。（每阶段限两次） ",
    text: "椋和我说[不要逃避]。",
    waked: true
    },
  ],
  designer: "Sword Elucidator",
  voice: "中村悠一",
  illustrator: "京アニ",
  },
  {name: '棗鈴',
  relative: "https://zh.moegirl.org/%E6%9E%A3%E9%93%83",
image: "assets/images/cards/characters/n_rin.jpg",
maxHp: 99,
subtitle: "不擅长与他人交流的高贵小猫",
from: "Little Busters",
skills: [
  {
  name: "怕生「不善交流」",
  text: "锁定技,当其他角色与你计算距离时，始终-100；当你计算与其他角色的距离时，始终+100。 ",
  },
  {
  name: "猫群「只和猫玩」",
  text: "锁定技,每当一名角色造成一次伤害后，你失去1点体力并展示牌堆顶牌，然后将之置于你的武将牌上，称为“猫”。 ",
  voice:"就这样就这样~第一只直立行走的猫~"
  },
  {
  name: "成长「Refrain」",
  text: "觉醒技，回合开始时，若“猫”的数量达到存活人数的1.5倍（向下取整）或更多，若你的体力上限小于100，你须将体力上限减少至3；若你的体力上限大于99，你须减96点体力上限。然后失去“怕生”和“猫群”，获得“指令”和“执行”。",
  voice:"理树，拉住我的手吧！"
  },
  {
  name: "指令「无限猫制~」",
  text: "出牌阶段，你可以将一张“猫”置入弃牌堆并指定一名角色，你令其根据此“猫”的花色获得以下效果：♠：摸牌阶段，你有1/3概率少摸两张牌；♣：你的手牌上限-1；♦：每当你受到一次属性伤害时，此伤害+1；♥：每当你进入濒死状态时，直到濒死状态结束，有1/2概率令其他角色的【桃】不能指定你为目标。 ",
  voice:"不许欺负弱小！"
  },
  {
  name: "执行「果断的执行力」",
  text: "每当一名角色进入濒死状态时，若其判定区没有【键】，你可以将场上的一张牌当做【键】置于其判定区。判定区内有【键】的角色受到伤害时，你可以弃置【键】，然后取消之。 ",
  voice:"小毬，我会让你的愿望实现的。"
  },
],
designer: "Sword Elucidator",
voice: "民安ともえ",
illustrator: "ミステア",
},
{name: '立华奏',
  relative: "https://zh.moegirl.org/zh/%E7%AB%8B%E5%8D%8E%E5%A5%8F",
image: "assets/images/cards/characters/kanade.jpg",
maxHp: 3,
subtitle: "天使",
from: "Angel Beats!",
skills: [
{
name: "祈愿「死后战线解放」",
text: "限定技，出牌阶段，你可以指定一名已死亡的角色，令其复活并失去所有技能，然后摸三张牌并加入你的阵营。",
},
{
name: "力场「Distortion“扭曲力场”」",
text: "每当你需使用或打出一张【闪】时，若你的当前体力值不为全场最大，可以视为你使用或打出一张【闪】。",
},
{
name: "手刃「Handsonic “音速手刃”」",
text: "出牌阶段限一次，你可以指定一名角色，令其失去1点体力。若如此做且该角色的当前体力值为0，你令其将武将牌翻面。",
},
],
designer: "Sword Elucidator",
voice: "花泽香菜",
illustrator: "Na-Ga",
},
{name: '仲村由理',
relative: "https://zh.moegirl.org/%E4%BB%B2%E6%9D%91%E7%94%B1%E7%90%86",
image: "assets/images/cards/characters/yuri.jpg",
maxHp: 3,
subtitle: "死后战线的领袖",
from: "Angel Beats!",
skills: [
{
name: "作战",
text: "一名角色回合开始时，若其血量不少于你，你可以重新为其分配判定阶段、摸牌阶段、出牌阶段、弃牌阶段的顺序。 ",
voice:"那么，作战开始！"
},
],
designer: "Sword Elucidator",
voice: "櫻井浩美",
illustrator: "キチロク",
},
      {name: '赤座灯里',
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
      {name: '逢坂大河',
	    relative: "https://zh.moegirl.org/zh/%E9%80%A2%E5%9D%82%E5%A4%A7%E6%B2%B3",
	    image: "assets/images/cards/characters/taiga.jpg",
	    maxHp: 3,
	    subtitle: "掌中萌虎",
	    from: "龙与虎",
	    skills: [
	      {
		    name: "竹刀「萌虎必杀」",
			text: "每当你失去一张装备区里的牌时，可以将场上的一张牌移动到另一名角色区域里的相应位置，并将你的武将牌翻回正面。",
		  },
		  {
			name: "思绪「私奔·出走」",
			text: "出牌阶段结束时，你可以将场上的两张牌依次移动到另一名角色区域里的相应位置，然后跳过你的弃牌阶段并将武将牌翻面。每当你受到一次伤害时，若你的武将牌背面朝上且此伤害为1，你防止此伤害。",
			voice: "那个...我们...打算私奔！"
		  },
	    ],
		designer: "Sword Elucidator",
		voice: "钉宫理惠",
		illustrator: "画楽多",
	  },
      {name: '五更琉璃',
 	    relative: "https://zh.moegirl.org/%E4%BA%94%E6%9B%B4%E7%90%89%E7%92%83",
		image: "assets/images/cards/characters/kuroneko.jpg",
		maxHp: 3,
		subtitle: "堕天圣黑猫",
		from: "我的妹妹不可能这么可爱！",
		skills: [
		  {
			name: "仪式「命运记录」",
			text: "回合开始时，你可以选择一项：1.令体力不大于其体力上限+3一名男性角色回复1点体力，若该角色的体力多于你，你摸X张牌（X为你与其体力之差且至多为6）；2.摸一张牌。",
		  },
		  {
			name: "毒舌「“诅杀你哦！”」",
			text: "出牌阶段，你可以与一名其他角色拼点：若你赢，你获得该角色一张手牌并选择一项：弃置一张黑色手牌并弃置其装备区里的所有牌，或弃置一张红色手牌，令该角色对其造成1点伤害；若你没赢，该角色摸一张牌，你失去“毒舌”直到回合结束。",
			voice: "明明能和妹妹一起玩色情游戏，却不能和我玩文字游戏么？"
		  },
		],
		designer: "黑猫roy",
		voice: "花泽香菜",
		illustrator: "AIC",
	  },
    {name: '新垣绫濑',
    relative: "https://zh.moegirl.org/%E6%96%B0%E5%9E%A3%E7%BB%AB%E6%BF%91",
  image: "assets/images/cards/characters/ayase.jpg",
  maxHp: 3,
  subtitle: "黑化天使",
  from: "我的妹妹不可能这么可爱！",
  skills: [
    {
    name: "飞踢「旋风飞踢」",
    text: "结束阶段开始时，你可以令一名男性角色进行一次判定，你令该角色将武将牌翻面X次，然后你可以令其摸X张牌（X为判定结果的点数），若该角色的武将牌正面朝上，你对其造成1点伤害；若该角色的武将牌背面朝上，其摸一张牌。 ",
    voice: "哥哥，我听说了哦！连你都沉迷进去可怎么办啊！"
    },
    {
    name: "萌黑「菜刀乱挥」",
    text: "每当你受到其他角色造成的一次伤害后，你可以令该角色距离1以内的一名角色失去1点体力。  ",
    voice: "哇啊啊...会被杀掉的！！  才不会杀你啦~"
    },
    {
    name: "告白",
    text: "限定技，出牌阶段，你可以令一名男性角色的体力上限增加或减少至4，然后令其将体力补至体力上限。 ",
    voice: "哥哥你真是个不得了的大骗子！是色狼，变态，妹控，萝莉控，而且还是抖M！每次见到我都对我性骚扰，还惹我生气！但无论什么时候都老好人的，又爱管闲事！...迟钝又不讲理，却很温柔...总是...总是欺骗我...但是我喜欢...那样的你..."
    },
  ],
  designer: "Sword Elucidator",
  voice: "早見沙織",
  illustrator: "スカイ",
  },
  {name: '平沢唯',
    relative: "https://zh.moegirl.org/zh/%E5%B9%B3%E6%B3%BD%E5%94%AF",
image: "assets/images/cards/characters/0211/yui.png",
maxHp: 3,
subtitle: "呆唯",
from: "轻音少女",
skills: [
  {
  name: "呆  「天然呆」",
  text: "每当你使用或打出一张【闪】或打出一张【杀】后，你可以进行一次判定：若结果为黑色，你获得1枚“呆唯”标记；若结果为红色，你指定一名角色回复1点体力。每当其他角色于濒死状态未被救回，你可以弃置2枚“呆唯”标记，令其体力回复至1点。",
  },
  {
  name: "主唱「治愈系声线」",
  text: "每当一名角色回复一次体力时，你可以令其额外回复1点体力。",
  },
],
designer: "Sword Elucidator",
voice: "豊崎爱生",
illustrator: "らぐほのえりか",
},
  {name: '柊司',
  relative: "https://zh.moegirl.org/%E6%9F%8A%E5%8F%B8",
image: "assets/images/cards/characters/tsukasa.jpg",
maxHp: 3,
subtitle: "天然",
from: "Lucky Star!",
skills: [
  {
  name: "冒失",
  text: "每当你的一张♥牌因拼点、获得或于你的弃牌阶段外的弃置移动到你的区域外时，你可以回复1点体力；每当你的一张装备牌因拼点、获得或于你的弃牌阶段外的弃置移动到你的区域外时，你可以摸一张牌。每当一张牌置入你的装备区时，你将之置入弃牌堆。",
  },
  {
    name: "料理",
  text: "出牌阶段限一次，可以弃置一张牌并指定一名角色，该角色的回合开始时，弃置其判定区里的所有牌，然后其摸X张牌，你获得牌堆中第一张装备牌并摸X-1张牌（X为弃置的牌数且至少为1）。",
  },
  {
    name: "治愈",
  text: "出牌阶段，你可以将任意数量的♥牌或装备牌交给一名其他角色。",
  },
],
designer: "yxl88205",
voice: "福原香织",
illustrator: "竜胆",
},
      {name: '杉崎鍵',
	    relative: "http://baike.baidu.com/view/2820151.htm",
		image: "assets/images/cards/characters/key.jpg",
		maxHp: 3,
		subtitle: "KEY君",
		from: "学生会的一己之见",
		skills: [
		  {
			name: "粟梦",
			text: "每当你于回合外失去一张♦牌时，你可以令你与一名其他角色各摸一张牌。",
			voice:"她给了我改变的机会。"
		  },
		  {
			name: "深夏",
			text: "每当你于回合外失去一张♣牌时，你可以视为对一名角色使用一张火属性的【杀】（无距离限制）。",
			voice:"她给了我发奋的动力。"
		  },
		  {
			name: "知弦",
			text: "每当你于回合外失去一张♥牌时，你可以令一名角色回复1点体力。",
			voice:"她治愈了太过拼命的我。"
		  },
		  {
		    name: "真冬",
			text: "每当你于回合外失去一张♠牌时，你可以令一名角色跳过其的下个出牌阶段。",
			voice:"她让我下定决定，要做一个保护女孩子的男人。"
		  },
		  {
			name: "后宫",
			voice: "我...我...我是要成为后宫王的男人...",
			text:"锁定技，你的手牌上限+X（X为场上的女性角色数量）。"
		  },
		],
		designer: "黑猫roy",
		voice: "近藤隆",
		illustrator: "STUDIO DEEN/AIC",
	  },
      {name: '永瀬伊織',
	    relative: "https://zh.moegirl.org/zh/%E6%B0%B8%E6%BF%91%E4%BC%8A%E7%BB%87",
		image: "assets/images/cards/characters/nagase.jpg",
		maxHp: 3,
		subtitle: "真正的自己",
		from: "恋爱随意链接",
		skills: [
		  {
			name: "气氛「察言观色」",
			text: "结束阶段结束时，你可以令所有角色各摸一张牌，若你已受伤，你分别从每名角色处获得1张牌。",
		  },
		  {
			name: "迷失「低沉黑化」",
			text: "每当一名角色进入濒死状态时，你可以展示你的所有手牌，然后令你与其各失去1点体力。若如此做且该角色于濒死状态被救回，你获得其一张牌。每阶段限一次。",
		  },
		  {
			name: "祝福「最重要的伙伴们」",
			text: "摸牌阶段开始时，你可以令一名其他角色将手牌补至X张（X为你的手牌数且至多为7）。",
		  },
		],
		designer: "Sword Elucidator",
		voice: "豊崎爱生",
		illustrator: "れい",
	  },
      {name: '天江衣',
	    relative: "https://zh.moegirl.org/%E5%A4%A9%E6%B1%9F%E8%A1%A3",
		image: "assets/images/cards/characters/koromo.png",
		maxHp: 3,
		subtitle: "海底捞月",
		from: "天才麻将少女",
		skills: [
		  {
			name: "控底",
			text: "手牌数比你多的其他角色从牌堆获得牌时，你可以观看其手牌并选择其1张牌展示，然后选择下列一项进行：1，将此牌置于牌堆底，2，弃置此牌。  ",
			voice:"海底捞月~"
		  },
		  {
			name: "一向听",
			text: "锁定技,其他角色从牌堆获得牌改为从牌堆中随机获得一张牌。  ",
		  },
		],
		designer: "Lolihime",
		voice: "福原香织",
		illustrator: "stoner08",
	  },
      {name: '竹井久',
	    relative: "https://zh.moegirl.org/%E7%AB%B9%E4%BA%95%E4%B9%85",
		image: "assets/images/cards/characters/ku.jpg",
		maxHp: 4,
		subtitle: "地狱单骑",
		from: "天才麻将少女",
		skills: [
		  {
			name: "单吊『将』",
			text: "摸牌阶段开始时，你可以放弃摸牌改为从牌堆顶亮出一张牌。若此牌的花色是手牌中唯一的仅一张的花色，则可以展示所有手牌，并选择一名角色，对其造成X点雷电伤害之后失去[X/2]点体力上限，然后获得此牌。 （X为此牌的花色在弃牌堆中花色的从少到多的顺位）。 ",
			voice:"这可不安全哟。点和，立直，一发，宝牌4，12000点。"
		  },
		],
		designer: "帕秋莉·萝莉姬",
		voice: "伊藤静",
		illustrator: "",
	  },
      {name: '宮永咲',
	    relative: "https://zh.moegirl.org/%E5%AE%AB%E6%B0%B8%E5%92%B2",
		image: "assets/images/cards/characters/saki.jpg",
		maxHp: 4,
		subtitle: "裱人大魔王",
		from: "天才麻将少女",
		skills: [
		  {
			name: "岭上",
			text: "每当一张牌非因弃置而进入弃牌堆时，你可以弃置两张与之相同类别的牌，然后指定一种牌堆中存在的牌名，你从牌堆中获得一张这种牌，然后你获得一个“咲”标记。摸牌阶段，你可以额外摸2X张牌。你的手牌上限始终+X。X为你“咲”标记的数量。若你没有“归零”，X至多为4，且摸牌数变为X。 ",
			voice:"自摸，岭上开花。"
		  },
		  {
			name: "归零",
			text: "锁定技,摸牌阶段结束时，你失去“咲”标记。",
			voice:"我每次打麻将，都会变成这个样子.."
		  },
		],
		designer: "Sword Elucidator",
		voice: "植田佳奈",
		illustrator: "",
	  },
      {name: '片岡優希',
	    relative: "https://zh.moegirl.org/%E7%89%87%E5%86%88%E4%BC%98%E5%B8%8C",
		image: "assets/images/cards/characters/yuki.jpg",
		maxHp: 4,
		subtitle: "东风王",
		from: "天才麻将少女",
		skills: [
		  {
			name: "速攻『东风』",
			text: "准备阶段开始时，若摸牌堆大于弃牌堆牌数的3倍时，你可以观看牌堆顶的1张牌，然后可以弃置这张牌或者选择将此牌置于保留区，若保留牌数小于于X，则可以继续发动该技能。若摸牌堆不大于弃牌堆牌数的3倍时，你可以使用手牌中的tacos，如此做可以继续发动该技能。技能结束时，将保留区的牌按栈的规则放回牌堆顶。（X为2+你的判定区的牌数。） ",
			voice:"这场比赛...不会再有东二局！"
		  },
		],
		designer: "帕秋莉·萝莉姬",
		voice: "釘宮理恵",
		illustrator: "",
	  },
    {name: '青山七海',
    relative: "https://zh.moegirl.org/%E9%9D%92%E5%B1%B1%E4%B8%83%E6%B5%B7",
  image: "assets/images/cards/characters/nanami.jpg",
  maxHp: 3,
  subtitle: "永远的追梦",
  from: "樱花庄的宠物女孩",
  skills: [
    {
    name: "声优「追寻梦想」",
    text: "回合准备阶段开始时，若你的手牌数不超过2，你可以变身为非死亡的武将牌堆中的一张女性武将。若如此做，回合结束阶段开始时，你须变身为“青山七海”。 ",
    voice:"啊，这里有台词~"
    },
    {
    name: "进取",
    text: "每当你受到一次伤害时，你可以将武将牌翻面，然后摸取X张手牌并将手牌以任意方式交给其他角色。X为你失去的体力值 * 伤害值 * 2。若你因此而翻回正面，你弃置判定区内的一张牌。 ",
    voice:"我喜欢有目标的人！喜欢拼命努力的人！"
    },
  ],
  designer: "Sword Elucidator",
  voice: "中津真莉子",
  illustrator: "节操Staff",
  },
      {name: '菲娅·库布里克',
	    relative: "https://zh.moegirl.org/%E8%8F%B2%E5%A8%85%C2%B7%E5%BA%93%E5%B8%83%E9%87%8C%E5%85%8B",
		image: "assets/images/cards/characters/fear.png",
		maxHp: 3,
		subtitle: "箱形祸具",
		from: "c3魔方少女",
		skills: [
		  {
			name: "诅咒",
			text: "锁定技,每当你成为其他角色一张牌的目标，则该角色手牌上限-X直至该回合结束；一名角色弃牌阶段结束时，如该角色手牌上限不大于1，你摸一张牌（X为你失去的体力值，且最小为1） ",
			voice:"烦死了，闭嘴，诅咒你哦！"
		  },
		  {
			name: "机关",
			text: "出牌阶段限一次，你可摸一张牌，然后将至多两张黑色牌倒扣在武将牌上，；每当一名角色使用一张与你武将上的牌同点数的牌，你可展示并弃置该牌，令该角色失去一点体力，如使用角色为你，则改为令一名你指定的角色失去一点体力  ",
			voice:"第二十号机关，斩式大刀态，凌迟之斧!"
		  },
		],
		designer: "钉子",
		voice: "田村ゆかり",
		illustrator: "",
	  },
      {name: '筒隐筑紫',
	    relative: "https://zh.moegirl.org/%E7%AD%92%E9%9A%90%E7%AD%91%E7%B4%AB",
		image: "",
		maxHp: 3,
		subtitle: "钢铁之王",
		from: "变态王子与不笑猫",
		skills: [
		  {
			name: "钢躯",
			text: "结束阶段开始时，你可以将一张手牌置于你的武将牌上，称为“钢”，然后同类型的牌对你无效直至你下一回合的准备阶段。你的准备阶段开始时，若你的武将牌上有“钢”，须将“钢”弃置。（“钢”至多存在1张） ",
			voice:"真有种啊！"
		  },
		  {
			name: "调教",
			text: "出牌阶段限一次，你可以令一名角色选择一项：对一名你指定的其他角色使用一张【杀】，或令你获得其区域内的一张牌。  ",
			voice:"现在就把你赶出去！再也不让你踏进这个家门半步了！"
		  },
		],
		designer: "OmnisReen",
		voice: "田村ゆかり",
		illustrator: "J.C.Staff",
	  },
      {name: '千反田爱瑠',
	    relative: "https://zh.moegirl.org/%E5%8D%83%E5%8F%8D%E7%94%B0%E7%88%B1%E7%91%A0",
		image: "assets/images/cards/characters/jdd.jpg",
		maxHp: 3,
		subtitle: "我很好奇",
		from: "冰菓",
		skills: [
		  {
			name: "土豪",
			text: "锁定技,出牌阶段，每当你使用一张红色的牌，你摸一张牌；每当你使用一张黑色的牌，你须弃置你的任意区域内的一张牌。 ",
			voice:"奉太郎没听说过【千反田家族】的名号吗！"
		  },
		  {
			name: "收集",
			text: "出牌阶段限一次，你可以弃置X张牌，依次观看场上所有角色的手牌并选择一张获得之。 X为你的体力值+1。  ",
			voice:"折木同学，有什么线索吗？"
		  },
		],
		designer: "帕秋莉·萝莉姬",
		voice: "佐藤聡美",
		illustrator: "",
	  },
      {name: '江之岛盾子',
	    relative: "https://zh.moegirl.org/%E6%B1%9F%E4%B9%8B%E5%B2%9B%E7%9B%BE%E5%AD%90",
		image: "assets/images/cards/characters/junko.jpg",
		maxHp: 3,
		subtitle: "幕后黑手",
		from: "弹丸论破",
		skills: [
		  {
			name: "黑幕",
			text: "限二技，游戏结束前，若你已经阵亡，可以以4体力上限满血复活并摸4张牌并对场上所有角色造成1点雷击伤害，之后把你的身份变为主公，胜者为反贼，败者为内奸，并获得[规定『学级』]。",
			voice: "真是让我久等了，让本大爷久等了啊。我就等待着像你们这样的人出现。"
		  },
		  {
			name: "绝望学园 规定『学级』",
			text: "锁定技，场上的所有角色在体力变动后，体力值调整为不多于你的手牌数。 ",
			voice: "绝望  是会传染的。"
		  },
		],
		designer: "萝莉姬",
		voice: "豊口めぐみ",
		illustrator: "",
	  },
      {name: '塞蕾丝缇雅',
	    relative: "https://zh.moegirl.org/%E8%B5%9B%E8%95%BE%E4%B8%9D%E5%AA%9E%E4%BA%9A%C2%B7%E9%B2%81%E4%B8%81%E8%B4%9D%E9%B2%81%E6%A0%BC",
		image: "assets/images/cards/characters/0211/se.png",
		maxHp: 3,
		subtitle: "超高校级的赌徒",
		from: "弹丸论破",
		skills: [
		  {
			name: "言惑",
			text: "出牌阶段，你可以将一张手牌背面朝上置于武将牌上，称为“惑”（惑最多为当前场上人数且最多为4），然后你摸一张牌。其他角色的出牌阶段限一次，可以翻开一张你的“惑”。你受到伤害后，可令伤害来源翻开你指定的一张“惑”。 ",
			voice: "能够存活下来的人不是强者也不是智者，而是能够接受并适应变化的人"
		  },
		  {
			name: "诈唬",
			text: "锁定技，翻开“惑”的角色须执行以下效果并弃置“惑”，♠，回复1点体力，♥，失去1点体力，♣，摸两张牌，♦，你弃置其一张牌；准备阶段开始时，你须翻开你所有的“惑”。  ",
			voice: "自作自受"
		  },
		],
		designer: "昂翼天使",
		voice: "椎名　へきる",
		illustrator: "Spike",
	  },
      {name: '七海千秋',
	    relative: "https://zh.moegirl.org/%E4%B8%83%E6%B5%B7%E5%8D%83%E7%A7%8B",
		image: "assets/images/cards/characters/chiaki.png",
		maxHp: 3,
		subtitle: "微笑赴死",
		from: "弹丸论破",
		skills: [
		  {
			name: "凝聚",
			text: "出牌阶段限3次，你可指定一名角色，然后你令攻击范围内有该角色的其他所有角色各摸一张牌，然后各弃置一张牌，如弃置的牌都为同一颜色，视为你对该角色使用一张杀（此杀不计入出牌阶段使用的杀数） ",
			voice: "我是大家的班长，要和大家在一起。"
		  },
		  {
			name: "执念",
			text: "觉醒技，当你濒死阶段结束时，若你的体力值小于1，你回复至3点体力，你获得技能“程序”，然后你将技能“凝聚”描述中的“各弃置一张牌”改成“各交给你一张牌，然后你弃置X张牌”（X为你获得的牌）  ",
			voice: "我要...回到...大家身边！"
		  },
		  {
			name: "程序",
			text: "防止你受到所有伤害，你回合结束时失去一点体力上限。",
		  },
		],
		designer: "钉子",
		voice: "花澤香菜",
		illustrator: "",
	  },
      {name: '苗木诚',
	    relative: "https://zh.moegirl.org/%E8%8B%97%E6%9C%A8%E8%AF%9A",
		image: "assets/images/cards/characters/n_makoto.png",
		maxHp: 4,
		subtitle: "超高校级希望",
		from: "弹丸论破",
		skills: [
		  {
			name: "言弹",
			text: "一名角色回合外弃牌时，若你的“言弹”数不大于你的体力上限，你可将弃置的一张牌置于武将牌上；一名其他角色死亡时，你可将其一张牌置于武将牌上，视为“言弹”，你有“言弹“时，你手牌上限+1，且场上每有一次角色死亡，你的手牌上限+1。 ",
			voice: "这就是事件的全貌!"
		  },
		  {
			name: "希望",
			text: "回合开始时，如你的“言弹”数大于你的体力值，你需减一点体力上限，摸一张牌，获得技能“论破“，直到游戏结束。 ",
			voice: "希望只会勇往直前！"
		  },
		  {
			name: "论破",
			text: "出牌阶段开始时，你可以弃置X张“言弹”，令所有角色失去技能直到回合结束；回合外，每当一名角色使用一张非装备牌时，你可弃置一张与之同花色的“言弹“，令该牌无效并置入弃牌堆。（X为场上体力最低的角色的体力值）  ",
			voice: "尽TM扯淡！"
		  },
		],
		designer: "钉子",
		voice: "緒方恵美",
		illustrator: "",
	  },
      {name: '由比滨结衣',
	    relative: "https://zh.moegirl.org/%E7%94%B1%E6%AF%94%E6%BB%A8%E7%BB%93%E8%A1%A3",
		image: "assets/images/cards/characters/y_yui.jpg",
		maxHp: 3,
		subtitle: "决意的团子",
		from: "果然我的青春恋爱喜剧搞错了",
		skills: [
		  {
			name: "稳场",
			text: "一次伤害造成后，你可以弃置一张牌，令受到伤害的角色获得伤害来源的一张牌并展示。若获得的牌为红色，受伤角色回复一点体力。 ",
			voice: "就是嘛。啊哈哈...哈哈......"
		  },
		  {
			name: "援心",
			text: "一名角色受到伤害时，若伤害值不小于2，你可以受到伤害来源的一点伤害，然后令该伤害-1。若如此做，你和受到伤害的角色互相观看手牌。  ",
			voice: "但是...但是呢...以后可不能再做这种事了。"
		  },
		],
		designer: "Sword Elucidator",
		voice: "东山奈央",
		illustrator: "コ゛りぼて",
	  },
      {name: '雪之下雪乃',
	    relative: "https://zh.moegirl.org/%E9%9B%AA%E4%B9%8B%E4%B8%8B%E9%9B%AA%E4%B9%83",
		image: "assets/images/cards/characters/yukino.jpg",
		maxHp: 3,
		subtitle: "侍奉部长",
		from: "果然我的青春恋爱喜剧搞错了",
		skills: [
		  {
			name: "侍奉",
			text: "一名角色受到伤害时，若你的“侍奉”标记不超过2，你可以令该伤害值-1。若如此做，你获得一个“侍奉”标记。 ",
			voice: "你来了呢"
		  },
		  {
			name: "直言",
			text: "摸牌阶段，若你有“侍奉”标记，你的摸牌数为0，若你的“侍奉”标记数至少为2，直到你的下一个摸牌阶段，当你需要使用【金色宣言】时，你可以视为使用一张【金色宣言】，并获得一个“侍奉”标记。该效果获得后将“侍奉”标记全部弃置。 ",
			voice: "你的这种做法，我很厌烦。"
		  },
		],
		designer: "Sword Elucidator",
		voice: "早见沙织",
		illustrator: "刃天",
	  },
      {name: '比企谷八幡',
	    relative: "https://zh.moegirl.org/%E6%AF%94%E4%BC%81%E8%B0%B7%E5%85%AB%E5%B9%A1",
		image: "assets/images/cards/characters/hikigaya.jpg",
		maxHp: 4,
		subtitle: "现充爆裂使",
		from: "果然我的青春恋爱喜剧搞错了",
		skills: [
		  {
			name: "自伤",
			text: "当场上一名其他角色即将受到伤害时，你可以选择由自己承担此伤害，然后令伤害来源的角色牌摸1张牌并翻面，并指定一名除你以外的角色回复与伤害等同的体力值。  ",
			voice: "喂，我可是超像大人的吧，发着牢骚，撒着肮脏的谎言，还做着卑鄙的勾当哦。"
		  },
		  {
			name: "自闭",
			text: "若你的出牌阶段没有指定其他角色为目标，则回合结束后你回复一点体力或摸取两张牌。 ",
			voice: "这世上有许多即使去了也没用的事..."
		  },
		],
		designer: "黑猫roy",
		voice: "江口拓也",
		illustrator: "Brain's Base",
	  },
      {name: '一色彩羽',
	    relative: "https://zh.moegirl.org/%E4%B8%80%E8%89%B2%E5%BD%A9%E7%BE%BD",
		image: "assets/images/cards/characters/iroha.png",
		maxHp: 3,
		subtitle: "发卡狂魔",
		from: "果然我的青春恋爱喜剧搞错了",
		skills: [
		  {
			name: "渐进",
			text: "回合内和回合外各限一次，当一名角色受到伤害后，你可以令伤害来源或其摸X张牌（X为该回合所有角色受到伤害和所有角色回复体力数之和，且X最大为3） ",
			voice: "你看，就像这样呀！就像这样~"
		  },
		  {
			name: "发卡",
			text: "除游戏开始阶段，其他角色回合内，你每获得一次牌，你可以将其交给这个回合的角色或这张牌的来源，然后令该角色受到X点伤害(X为获得的牌的数量）。锁定技,当你于一名其他角色回合内回复了体力，你将该角色武将牌翻面，并令其摸一张牌。 ",
			voice: "你做什么，是在跟我搭讪吗？对不起，不行，我有喜欢的人了"
		  },
		],
		designer: "钉子；红白",
		voice: "佐倉綾音",
		illustrator: "",
	  },
    {name: '龙宫礼奈',
    relative: "https://zh.moegirl.org/zh/%E9%BE%99%E5%AE%AB%E7%A4%BC%E5%A5%88",
  image: "assets/images/cards/characters/rena.png",
  maxHp: 3,
  subtitle: "柴刀女",
  from: "寒蝉鸣泣之时",
  skills: [
    {
    name: "自主「自行摆脱L5」",
    text: "转化技，通常状态下，你拥有标记“普通”并拥有技能“可爱”。每当你受到一次后，你须将你的标记翻面为“黑化”，将“可爱”转化为“柴刀”。回合开始前，若你的标记为“黑化”且你的判定区里有牌，你可以弃置判定区里的牌；回合结束后，你须将标记翻回“普通”。",
    },
    {
    name: "可爱「好想带回家！」",
    text: "每当其他角色的♥锦囊牌或装备牌因弃置、使用、打出或判定置入弃牌堆时，你可以获得之。",
    waked: true , voice: "啊呜~~这个真棒啊！好想带回家！~~"
    },
    {
    name: "柴刀「黑化暴走」",
    text: "每当其他角色的黑色牌因弃置、使用、打出或判定置入弃牌堆时，你可以获得之。",
    waked: true,
    voice: "你骗人！！..."
    },
  ],
  designer: "Sword Elucidator",
  voice: "中原麻衣",
  illustrator: "Studio DEEN",
  },
      {name: '前原圭一（鬼隐篇）',
	    relative: "https://zh.moegirl.org/%E5%89%8D%E5%8E%9F%E5%9C%AD%E4%B8%80",
		image: "assets/images/cards/characters/k1.jpg",
		maxHp: 4,
		subtitle: "鬼影的迷途人",
		from: "寒蝉鸣泣之时",
		skills: [
		  {
			name: "鬼隐",
			text: "锁定技,每当你成为卡牌的目标或受到伤害后，来源获得一个“鬼”标记。当场上“鬼”标记总数大于或等于：1：球棒 你与其他角色计算距离时，始终-2.3：幻觉 回合结束阶段开始时，每个攻击范围内有你的角色各获得一个“鬼”标记。5：L5 出牌阶段结束时，你对所有其他拥有“鬼”标记的角色造成X点伤害，并清空其各自的“鬼”标记。X为该角色“鬼”标记的数量且至多为2（若目标为自己，至多为1）。  ",
			voice: "可恶！...我才不会那么轻易就被杀掉！绝对不会...！"
		  },
		],
		designer: "前原圭一",
		voice: "保志総一朗",
		illustrator: "さよなら転さん…",
	  },
      {name: '古手梨花',
	    relative: "https://zh.moegirl.org/%E5%8F%A4%E6%89%8B%E6%A2%A8%E8%8A%B1",
		image: "assets/images/cards/characters/rika.jpg",
		maxHp: 3,
		subtitle: "御社神の巫女",
		from: "寒蝉鸣泣之时",
		skills: [
		  {
			name: "升华",
			text: "回合开始时，你可以选择“碎片筛选”或“奇迹宣言”，若如此做，直到你的下个回合开始，你视为拥有该技能。",
			voice: "要不要来上一拳让她吐出来？"
		  },
		  {
			name: "雾霾",
			text: "每当你受到1点伤害后，你可以将伤害来源的一张牌置于你的武将牌上，称为“碎片”。每当你受到一次伤害时，若你有“碎片”时，你可以进行一次判定：若结果与造成伤害的牌花色相同，你将其加入“碎片”；若不同，你摸一张牌。   ",
			voice: "话说...这不完全没有了结吗OTL"
		  },
		  {
			name: "破晓",
			text: "觉醒技，回合开始时，若你的“碎片”大于你的手牌数，你须增加1点体力上限，然后你失去“升华”并获得“咪啪”。",
			voice: "看来我不得不放弃成为魔女了，现在的我必须舍弃身为贝伦卡斯特尔的魔女身份，回到古手梨花的位置上来了。"
		  },
		  {
			name: "咪啪",
			text: "出牌阶段，你可以弃置1枚“碎片”并指定一名角色，直到你的下个回合开始前，你选择一项：令该角色不能使用或打出基本牌，或令该角色不能使用非锦囊牌。",
			voice: "（大梨花）咪啪~（小梨花）咪啪~（大梨花）咪啪~（小梨花）咪啪~（梨花合奏）咪啪~~~"
		  },
		],
		designer: "黑猫roy",
		voice: "田村ゆかり",
		illustrator: "ナナムラ",
	  },
      {name: '風早翔太',
	    relative: "https://zh.moegirl.org/%E5%A5%BD%E6%83%B3%E5%91%8A%E8%AF%89%E4%BD%A0",
		image: "assets/images/cards/characters/syouta.jpg",
		maxHp: 3,
		subtitle: "爽朗君",
		from: "好像告诉你",
		skills: [
		  {
			name: "羞涩「必杀の羞涩」",
			text: "每当你受到的伤害结算结束时，你可以令一名异性角色将武将牌翻面并摸X张牌（X为你的当前体力值）。  ",
			voice: "不要再看这边了，我现在超脸红的。"
		  },
		  {
			name: "爽朗「爽朗的微笑驱散雾霭」",
			text: "每当武将牌背面朝上的一名角色的回合开始前，你可以令其将武将牌翻面并摸一张牌；每当武将牌背面朝上的一名角色受到一次伤害时，你可以令其将武将牌翻面并摸一张牌，然后你摸一张牌。  ",
			voice: "既然不讨厌我，为什么要躲着我？"
		  },
		  {
			name: "恋慕「爱してる」",
			text: "锁定技,结束阶段结束时，你选择一项：1.将武将牌翻面，然后令已受伤的一名异性角色回复1点体力；2.将武将牌翻面，然后令未受伤的一名异性角色摸两张牌；3.摸一张牌。 ",
			voice: "我说啊，只是顺便问问，交往什么的，你怎么想？"
		  },
		],
		designer: "黄金堂下卧麒麟; 黑猫roy",
		voice: "浪川大輔",
		illustrator: "Production I.G",
	  },
      {name: '本间芽衣子',
	    relative: "https://zh.moegirl.org/%E6%9C%AC%E9%97%B4%E8%8A%BD%E8%A1%A3%E5%AD%90",
		image: "assets/images/cards/characters/mianma.jpg",
		maxHp: 0,
		subtitle: "面码",
		from: "未闻花名",
		skills: [
		  {
			name: "消逝",
			text: "游戏开始时，你的体力上限变为0，你获得X枚“灵体”标记。回合开始阶段开始时，你失去一个“灵体”标记；若你没有“灵体”标记，你立即死亡。X为游戏人数 + 5 ",
			voice: "面麻...对自己已经死了这件事，还是知道的..."
		  },
		  {
			name: "灵体",
			text: "锁定技,你防止你的任何体力减少，每防止一次摸一张牌。  ",
			voice: "大~丈~夫~"
		  },
		  {
			name: "心愿",
			text: "弃牌阶段，当你的牌因弃置而置入弃牌堆时，你可以令任意其他角色摸等量的牌。  ",
			voice: "面麻的愿望...好像已经实现了..."
		  },
		],
		designer: "帕秋莉·萝莉姬 & Sword Elucidator",
		voice: "茅野爱衣",
		illustrator: "KayaK",
	  },
      {name: '六识命',
	    relative: "https://zh.moegirl.org/%E5%A3%B3%E4%B9%8B%E5%B0%91%E5%A5%B3",
		image: "",
		maxHp: 3,
		subtitle: "面码",
		from: "未闻花名",
		skills: [
		  {
			name: "心灵诱导",
			text: "其他角色的基本牌或非延时类锦囊牌指定一名角色为目标时，你可以将武将牌翻面或横置，然后该角色指定另一名角色为此牌的唯一目标。 ",
		  },
		  {
			name: "藏位转移",
			text: "锁定技，你受到的伤害结算开始时，若你有两张或更多手牌且你的武将牌横置或背面朝上，你弃置两张牌并防止此伤害，然后将你的武将牌翻至正面并重置。 ",
		  },
		  {
			name: "语言牢笼",
			text: "限定技，一名其他角色的准备阶段开始时，你可以令其摸三张牌，然后该角色须交给你四张牌。 ",
		  },
		],
		designer: "起个ID好烦",
		voice: "",
		illustrator: "Innocent Grey",
	  },
      {name: '凉宫春日',
	    relative: "https://zh.moegirl.org/%E5%87%89%E5%AE%AB%E6%98%A5%E6%97%A5",
		image: "assets/images/cards/characters/haruhi.jpg",
		maxHp: 4,
		subtitle: "团长大人",
		from: "凉宫春日的忧郁",
		skills: [
		  {
			name: "梦现",
			text: "摸牌阶段开始时，你可以声明一种牌的类别，然后进行判定并你获得判定牌。你重复该过程直到判定牌不为你所声明的类别。若你声明的是武器牌，你需要弃置一张手牌。 ",
			voice: "我对一般的人类没有兴趣，如果你们中谁是宇宙人，未来人，异世界人或者超能力者的话，就到我这里来！"
		  },
		],
		designer: "帕秋莉·萝莉姬",
		voice: "平野绫",
		illustrator: "KayaK",
	  },
      {name: '伊藤诚',
	    relative: "https://zh.moegirl.org/%E4%BC%8A%E8%97%A4%E8%AF%9A",
		image: "",
		maxHp: 3,
		subtitle: "好船人渣",
		from: "日在校园",
		skills: [
		  {
			name: "好船",
			text: "出牌阶段限一次，你可以弃置一张“渣”,然后恢复X点体力并将你的武将牌翻面，视作你发动了一次技能“乱武”。（X为“渣”的数量-1）  ",
			voice: "啊~~~ 可恶！"
		  },
		  {
			name: "人渣",
			text: "每当你受到1点伤害后，你摸两张牌并将一张手牌置于你的武将牌上，称为“渣”，然后你可将武将牌翻面并摸一张牌。 ",
			voice: "才不是"
		  },
		],
		designer: "OmnisReen",
		voice: "平川大辅",
		illustrator: "TNK",
	  },
      {name: '平和島静雄',
	    relative: "https://zh.moegirl.org/%E5%B9%B3%E5%92%8C%E5%B2%9B%E9%9D%99%E9%9B%84",
		image: "assets/images/cards/characters/shizuo.png",
		maxHp: 6,
		subtitle: "池袋最强",
		from: "无头骑士异闻录",
		skills: [
		  {
			name: "暴怒",
			text: "摸牌阶段，你可失去一点体力，若如此，你摸牌阶段改为摸X张牌（X为你此时失去的体力值）",
			voice: "火大!烦死了，烦死了！。。。"
		  },
		  {
			name: "即战",
			text: "出牌阶段限一次，如你该回合使用了技能“暴怒”，你可将你攻击范围内的一名其他角色一张牌交（丢）给你指定的另一名其他角色，并对指定角色造成一点伤害。 ",
			voice: "我可没生气，只想好好揍你一顿。"
		  },
		],
		designer: "钉子",
		voice: "小野大辅",
		illustrator: "もg",
	  },
      {name: '三千院凪',
	    relative: "https://zh.moegirl.org/%E4%B8%89%E5%8D%83%E9%99%A2%E5%87%AA",
		image: "assets/images/cards/characters/0211/3000.png",
		maxHp: 3,
		subtitle: "OTAKU大小姐",
		from: "旋风管家",
		skills: [
		  {
			name: "天资「天生的资产家」",
			text: "你的每个阶段结束时（回合开始和回合结束阶段除外），你可以弃置一张牌。如该牌不为基本牌，你摸两张牌；否则你摸一张牌。",
			voice: "啊，好，我决定了！"
		  },
		  {
			name: "御宅",
			text: "回合结束阶段，若你于此回合内弃置的牌数大于你的当前体力值，你可以弃置场上任意名其他角色总共X张牌（X为你弃置的牌数与当前体力值数的差）",
			voice: "总之，我才不会在这么潮湿的天气去学校!"
		  },
		],
		designer: "钉子",
		voice: "钉宫理惠",
		illustrator: "库拉乌",
	  },
      {name: '佐仓千代',
	    relative: "https://zh.moegirl.org/%E4%BD%90%E4%BB%93%E5%8D%83%E4%BB%A3",
		image: "assets/images/cards/characters/chiyo.jpg",
		maxHp: 3,
		subtitle: "月刊派拉斯",
		from: "月刊少女野崎君",
		skills: [
		  {
			name: "临摹",
			text: "一名其他角色于出牌阶段使用基本牌或锦囊牌时，若你的武将牌上没有“原稿”，你可以将其置于你的武将牌上，称为“原稿”。若如此做，你可以将一张牌置于你的武将牌上，称为“临摹”。若你拥有该技能，你所有的与“临摹”牌类相同的牌均可以视为“原稿”，你每以此方式使用一张这种牌，你摸一张牌。“原稿”与“临摹”于你回合结束时进入弃牌堆。",
			voice: "哎————野崎君是漫画家？（野崎）哎？不知道就涂了四个小时？"
		  },
		  {
			name: "振奋",
			text: "锁定技,若你于出牌阶段使用了第x张牌，你变身为“欧根亲王”。 x为你的体力值+1 ",
			voice: "好，佐仓千代，要上了！"
		  },
		],
		designer: "Sword Elucidator",
		voice: "小澤亞李",
		illustrator: "Straw@お仕事募集中",
	  },
      {name: '桂木桂马',
	    relative: "https://zh.moegirl.org/%E6%A1%82%E6%9C%A8%E6%A1%82%E9%A9%AC",
		image: "assets/images/cards/characters/0211/kami.png",
		maxHp: 3,
		subtitle: "神大人",
		from: "只有神知道的世界",
		skills: [
		  {
			name: "神知",
			text: "准备阶段或结束阶段开始时，你可以观看牌堆顶的X张牌，然后将任意数量的牌以任意顺序置于牌堆顶，将其余的牌以任意顺序置于牌堆底。（X为存活角色数且至多为4。) ",
			voice: "我已经看到结局了。"
		  },
		  {
			name: "攻略",
			text: "出牌阶段限一次，你可观看一名角色的手牌，然后选择其中一张牌并获得之。  ",
			voice: "欢迎~迷途羔羊们。。。"
		  },
		],
		designer: "OmnisReen",
		voice: "下野紘",
		illustrator: "manglobe",
	  },
      {name: '富樫勇太',
	    relative: "https://zh.moegirl.org/%E5%AF%8C%E6%A8%AB%E5%8B%87%E5%A4%AA",
		image: "assets/images/cards/characters/0211/yuuta.png",
		maxHp: 4,
		subtitle: "漆黑烈焰使",
		from: "中二病也要谈恋爱",
		skills: [
		  {
			name: "妄想",
			text: "当你的手牌数不多于你已损失的体力值时，你可以将一张手牌当【等价交换】使用。 ",
		  },
		  {
			name: "黑焰",
			text: "出牌阶段限一次，你可失去1点体力，然后对一名角色造成1点火焰伤害。   ",
		  },
		],
		designer: "OmnisReen",
		voice: "福山潤",
		illustrator: "Kyoto Animation",
	  },















































    ];
  }
})();
