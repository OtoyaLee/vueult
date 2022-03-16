module.exports = {
	head:[['link',{rel:'icon',href:'/img/headlogo.png'}]],
	theme:'reco',
	title:'音也时馆1号分馆',
	description:'音也的经验分享',
	base:'/VuePressBlog/',
	dest:'/dist',
	locales:{
		'/':{
			lang:'zh-CN',
			title:'vae他又一些烦恼',
			description:'音也的分享',
		},
		'/en/':{
			lang:'en-US',
			title:'vuePress',
			description:"Otoya's share",
		},
	},
	themeConfig:{
		subSidebar:'auto',
		nav:[
			{text:'首页',link:'/'},
			{
				text:'音也的博客',
				items:[
					{text:'Github',link:'https://github.com/OtoyaLee'},
					{text:'待定',link:'/'}
				]
			}
		],
		sidebar:[
			{
				title:'最新',
				path:'/',
				collapsable:false,
				children:[
					{title:'广而告之',path:'/'}
				]
			},
			{
				title:"日常课程",
				path:'/handbook/AE.html',
				collapsable:false,
				children:[
					{title:"AE",path:"/handbook/AE.html"},
					{title:"Arduino",path:"/handbook/Arduino.html"},
					{title:"UI设计",path:"/handbook/UID.html"}
				]
			},
			{
				title:"其他领域",
				path:"/Code/C.html",
				collapsable:false,
				children:[
					{title:"艹语言程序设计",path:"/Code/C.html"},
					{title:"咖啡语程序设计",path:"/Code/Java.html"},
					{title:"蟒蛇语程序设计",path:"/Code/Python.html"}
				]

			}
		],
	},
	//插件（复制）
	plugins: [
		['vuepress-plugin-code-copy',true],
		[
			'cursor-effects',
			{
				size:2,
				shape:'star',
				zIndex:999999999,
			},
		],
		[
			"@vuepress-reco/vuepress-plugin-bgm-player",{
				audios:[
					{
						name:'你是此生最美的风景',
						artist:'你是此生最美的风景',
						url:'https://reliable-thinkable-error.glitch.me/pastime/music/CM1/bgm1.flac',
						cover:'https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/adaf2edda3cc7cd90694ef433901213fb90e91eb.jpg',
					},
					{
						name:'负けないで',
						artist:'负けないで',
						url:'https://reliable-thinkable-error.glitch.me/pastime/music/CM1/bgm2.flac',
						cover:'https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/ac6eddc451da81cbae9088605666d0160924312c.jpg',
					},
				],

			},
		],
		// {
		// 	"meting":{
		// 		meting:{
		// 			auto:'https://music.163.com/#/playlist?id=6803663058',
		// 			server:"netsase",
		// 			type:"playlist",
		// 			mid:"6803663058",
		// 		},
		// 		aplayer:{
		// 			order:'random',
		// 			lrcType:1,
		// 			volume:0.15,
		// 			mini:true,
		// 			autoplay:false,

		// 		},
		// 	},
		// },
	],
   //行号显示
   markdown:{
   		lineNumbers: true
   },
}