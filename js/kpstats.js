	/* FANTASY POINTS LEGEND 
	Kick = 3 Points
	Hanball = 2 Points
	Mark = 3 Points
	Tackle = 4 Points
	Goal = 6 Points
	Behind = 1 Point
*/ 

var loadedDefault = false;

const player = [
	{ 	/* 1 JEMMA HAY */
		fName:"Jemma", sName:"Hay",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/01.png"
	},
	
	{	/* 2 ERIN ROBINSON */
		fName:"Erin", sName:"Robinson",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/02.png"
	},
	
	{	/* 3 CAPRICE BAILLIE */
		fName:"Caprice", sName:"Baillie",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/03.png"
	},
	
	{	/* 4 CARLIE CHIRCOP */
		fName:"Carlie", sName:"Chircop",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/04.png"
	},
	
	{	/* 5 ALEX KILTY */
		fName:"Alex", sName:"Kilty",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/05.png"
	},
	
	{	/* 6 EMILY LAIDLAW */
		fName:"Emily", sName:"Laidlaw",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/06.png"
	},
	
	{	/* 7 KYLIE GARTH */
		fName:"Kylie", sName:"Garth",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/07.png"
	},
	
	{	/* 8 KIERA DORRINGTON */
		fName:"Kiera", sName:"Dorrington",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/08.png"
	},
	
	{	/* 9 MIA TOURNAS */
		fName:"Mia", sName:"Tournas",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/09.png"
	},
	
	{	/* 10 RAINBOW EBERT */
		fName:"Rainbow", sName:"Ebert",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/10.png"
	},
	
	{	/* 11 ALANA VIDOV */
		fName:"Alana", sName:"Vidov",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/11.png"
	},
	
	{	/* 12 NYNY MALUAL */
		fName:"NyNy", sName:"Malual",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/12.png"
	},
	
	{	/* 13 CAITLYN CRAMERI */
		fName:"Caitlyn", sName:"Crameri",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/13.png"
	},
	
	{	/* 14 LAYCEE EUSTACE */
		fName:"Laycee", sName:"Eustace",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/14.png"
	},
	
	{	/* 15 BELLA ARVANITIS */
		fName:"Bella", sName:"Arvanitis",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/15.png"
	},
	
	{	/* 16 ANGEL POKORA */
		fName:"Angel", sName:"Pokora",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/16.png"
	},
	
	{	/* 17 JESSIE HAZELDINE-ONNO */
		fName:"Jessie", sName:"Hazeldine-Onno",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/17.png"
	},
	
	{	/* 18 MAKENZIE CARR */
		fName:"Makenzie", sName:"Carr",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/18.png"
	},
	
	{	/* 19 GENNA ROOTH */
		fName:"Genna", sName:"Rooth",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/19.png"
	},
	
	{	/* 20 SARAH PONI */
		fName:"Sarah", sName:"Poni",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/20.png"
	},
	
	{	/* 21 KAYLA CORRIGAN */
		fName:"Kayla", sName:"Corrigan",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/21.png"
	},
	
	{	/* 22 TAYLOR ROSE EVANS */
		fName:"Taylor", sName:"Rose Evans",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/22.png"
	},
	
	{	/* 23 ALYX WILKINSON */
		fName:"Alyx", sName:"Wilkinson",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/23.png"
	},
	
	/*{	 24 NO PLAYER
		fName:"", sName:"",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/24.png"
	},*/
	
	{	/* 25 TAHLIA REEVES */
		fName:"Tahlia", sName:"Reeves",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/25.png"
	},
	
	/*{	 26 NO PLAYER
		fName:"", sName:"",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/26.png"
	},*/
	
	{	/* 27 OLIVIA KOCH */
		fName:"Olivia", sName:"Koch",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/27.png"
	},
	
	/*{	 28 NO PLAYER
		fName:"", sName:"",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/28.png"
	},*/
	
	{	/* 29 MOLLI RUSSELL */
		fName:"Molli", sName:"Russell",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/29.png"
	},
	
	{	/* 30 MARISSA BAKER */
		fName:"Marissa", sName:"Baker",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/30.png"
	},
	
	/*{	 31 NO PLAYER
		fName:"", sName:"",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/31.png"
	},*/
	
	{	/* 32 DESTINY EUSTACE */
		fName:"Destiny", sName:"Eustace",
		tDisposals: 0,
		tKicks: 0,
		tHandballs: 0,
		tClearances: 0,
		tTackles: 0,
		tMarks: 0,
		tGoals: 0,
		tBehinds: 0,
		tFantasy: 0,
		pImage: "img/player_jerseys/32.png"
	}
];

const mMelton = [
	{ /* 1 JEMMA HAY */
		mPlayed: false,
	},
	
	{ /* 2 ERIN ROBINSON */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 14,
		mHandballs: 1,
		mClearances: 0,
		mTackles: 4,
		mMarks: 6,
		mGoals: 3,
		mBehinds: 1,
		mFantasy: 0,
	},
	
	{ /* 3 CAPRICE BAILLIE */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 8,
		mHandballs: 3,
		mClearances: 0,
		mTackles: 4,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 4 CARLIE CHIRCOP */
		mPlayed: false,
	},
	
	{ /* 5 ALEX KILTY */
		mPlayed: false,
	},
	
	{ /* 6 EMILY LAIDLAW */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 7,
		mHandballs: 2,
		mClearances: 1,
		mTackles: 1,
		mMarks: 4,
		mGoals: 3,
		mBehinds: 2,
		mFantasy: 0,
	},
	
	{ /* 7 KYLIE GARTH */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 1,
		mHandballs: 1,
		mClearances: 0,
		mTackles: 1,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 8 KIERA DORRINGTON */
		mPlayed: false,
	},
	
	{ /* 9 MIA TOURNAS */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 19,
		mHandballs: 8,
		mClearances: 7,
		mTackles: 11,
		mMarks: 1,
		mGoals: 0,
		mBehinds: 2,
		mFantasy: 0,
	},
	
	{ /* 10 RAINBOW EBERT */
		mPlayed: false,
	},
	
	{ /* 11 ALANA VIDOV */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 7,
		mHandballs: 4,
		mClearances: 1,
		mTackles: 1,
		mMarks: 0,
		mGoals: 1,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 12 NYNY MALUAL */
		mPlayed: false,
	},
	
	{ /* 13 CAITLYN CRAMERI */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 3,
		mHandballs: 4,
		mClearances: 0,
		mTackles: 0,
		mMarks: 1,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 14 LAYCEE EUSTACE */
		mPlayed: false,
	},
	
	{ /* 15 BELLA ARVANITIS */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 1,
		mHandballs: 2,
		mClearances: 0,
		mTackles: 0,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 16 ANGEL POKORA */
		mPlayed: false,
	},
	
	{ /* 17 JESSIE HAZELDINE-ONNO */
		mPlayed: false,
	},
	
	{ /* 18 MAKENZIE CARR */
		mPlayed: false,
	},
	
	{ /* 19 GENNA ROOTH */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 7,
		mHandballs: 0,
		mClearances: 0,
		mTackles: 2,
		mMarks: 1,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 20 SARAH PONI */
		mPlayed: false,
	},
	
	{ /* 21 KAYLA CORRIGAN */
		mPlayed: false,
	},
	
	{ /* 22 TAYLOR ROSE EVANS */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 9,
		mHandballs: 4,
		mClearances: 1,
		mTackles: 8,
		mMarks: 1,
		mGoals: 0,
		mBehinds: 1,
		mFantasy: 0,
	},
	
	{ /* 23 ALYX WILKINSON */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 4,
		mHandballs: 4,
		mClearances: 1,
		mTackles: 1,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	/*{	 24 NO PLAYER
		mPlayed: false,
	},*/
	
	{ /* 25 TAHLIA REEVES */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 3,
		mHandballs: 3,
		mClearances: 0,
		mTackles: 3,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	/*{	 26 NO PLAYER
		mPlayed: false,
	},*/
	
	{ /* 27 OLIVIA KOCH */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 3,
		mHandballs: 5,
		mClearances: 0,
		mTackles: 0,
		mMarks: 1,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	/*{	 28 NO PLAYER
		mPlayed: false,
	},*/
	
	{ /* 29 MOLLI RUSSELL */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 6,
		mHandballs: 1,
		mClearances: 0,
		mTackles: 0,
		mMarks: 4,
		mGoals: 0,
		mBehinds: 1,
		mFantasy: 0,
	},
	
	{ /* 30 MARISSA BAKER */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 19,
		mHandballs: 5,
		mClearances: 2,
		mTackles: 7,
		mMarks: 1,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	/*{	 31 NO PLAYER
		mPlayed: false,
	},*/
	
	{ /* 32 DESTINY EUSTACE */
		mPlayed: false,
	}
];

const mTaylors = [
	{ /* 1 JEMMA HAY */
		mPlayed: false,
	},
	
	{ /* 2 ERIN ROBINSON */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 20,
		mHandballs: 4,
		mClearances: 2,
		mTackles: 2,
		mMarks: 8,
		mGoals: 4,
		mBehinds: 1,
		mFantasy: 0,
	},
	
	{ /* 3 CAPRICE BAILLIE */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 18,
		mHandballs: 2,
		mClearances: 1,
		mTackles: 2,
		mMarks: 3,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 4 CARLIE CHIRCOP */
		mPlayed: false,
	},
	
	{ /* 5 ALEX KILTY */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 33,
		mHandballs: 3,
		mClearances: 5,
		mTackles: 2,
		mMarks: 5,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 6 EMILY LAIDLAW */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 10,
		mHandballs: 2,
		mClearances: 1,
		mTackles: 3,
		mMarks: 2,
		mGoals: 2,
		mBehinds: 3,
		mFantasy: 0,
	},
	
	{ /* 7 KYLIE GARTH */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 9,
		mHandballs: 5,
		mClearances: 2,
		mTackles: 4,
		mMarks: 1,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 8 KIERA DORRINGTON */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 9,
		mHandballs: 0,
		mClearances: 0,
		mTackles: 1,
		mMarks: 2,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 9 MIA TOURNAS */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 13,
		mHandballs: 4,
		mClearances: 5,
		mTackles: 4,
		mMarks: 2,
		mGoals: 1,
		mBehinds: 1,
		mFantasy: 0,
	},
	
	{ /* 10 RAINBOW EBERT */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 13,
		mHandballs: 11,
		mClearances: 1,
		mTackles: 5,
		mMarks: 4,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 11 ALANA VIDOV */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 13,
		mHandballs: 4,
		mClearances: 0,
		mTackles: 2,
		mMarks: 2,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 12 NYNY MALUAL */
		mPlayed: false,
	},
	
	{ /* 13 CAITLYN CRAMERI */
		mPlayed: false,
	},
	
	{ /* 14 LAYCEE EUSTACE */
		mPlayed: false,
	},
	
	{ /* 15 BELLA ARVANITIS */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 10,
		mHandballs: 2,
		mClearances: 0,
		mTackles: 8,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 16 ANGEL POKORA */
		mPlayed: false,
	},
	
	{ /* 17 JESSIE HAZELDINE-ONNO */
		mPlayed: false,
	},
	
	{ /* 18 MAKENZIE CARR */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 2,
		mHandballs: 0,
		mClearances: 0,
		mTackles: 2,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 19 GENNA ROOTH */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 2,
		mHandballs: 2,
		mClearances: 0,
		mTackles: 2,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 20 SARAH PONI */
		mPlayed: false,
	},
	
	{ /* 21 KAYLA CORRIGAN */
		mPlayed: false,
	},
	
	{ /* 22 TAYLOR ROSE EVANS */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 17,
		mHandballs: 6,
		mClearances: 7,
		mTackles: 9,
		mMarks: 2,
		mGoals: 0,
		mBehinds: 1,
		mFantasy: 0,
	},
	
	{ /* 23 ALYX WILKINSON */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 8,
		mHandballs: 2,
		mClearances: 1,
		mTackles: 4,
		mMarks: 0,
		mGoals: 1,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	/*{	 24 NO PLAYER
		mPlayed: false,
	},*/
	
	{ /* 25 TAHLIA REEVES */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 4,
		mHandballs: 2,
		mClearances: 0,
		mTackles: 1,
		mMarks: 2,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	/*{	 26 NO PLAYER
		mPlayed: false,
	},*/
	
	{ /* 27 OLIVIA KOCH */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 1,
		mHandballs: 3,
		mClearances: 0,
		mTackles: 1,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	/*{	 28 NO PLAYER
		mPlayed: false,
	},*/
	
	{ /* 29 MOLLI RUSSELL */
		mPlayed: false,
	},
	
	{ /* 30 MARISSA BAKER */
		mPlayed: false,
	},
	
	/*{	 31 NO PLAYER
		mPlayed: false,
	},*/
	
	{ /* 32 DESTINY EUSTACE */
		mPlayed: false,
	}
];

const mParkside = [
	{ /* 1 JEMMA HAY */
		mPlayed: false,
	},
	
	{ /* 2 ERIN ROBINSON */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 21,
		mHandballs: 3,
		mClearances: 1,
		mTackles: 1,
		mMarks: 4,
		mGoals: 0,
		mBehinds: 2,
		mFantasy: 0,
	},
	
	{ /* 3 CAPRICE BAILLIE */
		mPlayed: false,
	},
	
	{ /* 4 CARLIE CHIRCOP */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 1,
		mHandballs: 2,
		mClearances: 0,
		mTackles: 0,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 5 ALEX KILTY */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 15,
		mHandballs: 4,
		mClearances: 3,
		mTackles: 7,
		mMarks: 3,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 6 EMILY LAIDLAW */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 6,
		mHandballs: 1,
		mClearances: 0,
		mTackles: 0,
		mMarks: 3,
		mGoals: 1,
		mBehinds: 3,
		mFantasy: 0,
	},
	
	{ /* 7 KYLIE GARTH */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 0,
		mHandballs: 3,
		mClearances: 0,
		mTackles: 2,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 8 KIERA DORRINGTON */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 8,
		mHandballs: 3,
		mClearances: 0,
		mTackles: 3,
		mMarks: 1,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 9 MIA TOURNAS */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 21,
		mHandballs: 6,
		mClearances: 4,
		mTackles: 8,
		mMarks: 1,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 10 RAINBOW EBERT */
		mPlayed: false,
	},
	
	{ /* 11 ALANA VIDOV */
		mPlayed: false,
	},
	
	{ /* 12 NYNY MALUAL */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 3,
		mHandballs: 4,
		mClearances: 1,
		mTackles: 2,
		mMarks: 1,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 13 CAITLYN CRAMERI */
		mPlayed: false,
	},
	
	{ /* 14 LAYCEE EUSTACE */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 3,
		mHandballs: 4,
		mClearances: 0,
		mTackles: 3,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 15 BELLA ARVANITIS */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 4,
		mHandballs: 1,
		mClearances: 0,
		mTackles: 3,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 16 ANGEL POKORA */
		mPlayed: false,
	},
	
	{ /* 17 JESSIE HAZELDINE-ONNO */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 0,
		mHandballs: 5,
		mClearances: 0,
		mTackles: 1,
		mMarks: 2,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 18 MAKENZIE CARR */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 0,
		mHandballs: 0,
		mClearances: 0,
		mTackles: 1,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 19 GENNA ROOTH */
		mPlayed: false,
	},
	
	{ /* 20 SARAH PONI */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 8,
		mHandballs: 2,
		mClearances: 0,
		mTackles: 4,
		mMarks: 5,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 21 KAYLA CORRIGAN */
		mPlayed: false,
	},
	
	{ /* 22 TAYLOR ROSE EVANS */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 25,
		mHandballs: 3,
		mClearances: 4,
		mTackles: 10,
		mMarks: 4,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 23 ALYX WILKINSON */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 5,
		mHandballs: 1,
		mClearances: 0,
		mTackles: 0,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	/*{	 24 NO PLAYER
		mPlayed: false,
	},*/
	
	{ /* 25 TAHLIA REEVES */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 1,
		mHandballs: 1,
		mClearances: 0,
		mTackles: 0,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	/*{	 26 NO PLAYER
		mPlayed: false,
	},*/
	
	{ /* 27 OLIVIA KOCH */
		mPlayed: false,
	},
	
	/*{	 28 NO PLAYER
		mPlayed: false,
	},*/
	
	{ /* 29 MOLLI RUSSELL */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 8,
		mHandballs: 2,
		mClearances: 2,
		mTackles: 3,
		mMarks: 1,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	{ /* 30 MARISSA BAKER */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 12,
		mHandballs: 4,
		mClearances: 1,
		mTackles: 9,
		mMarks: 1,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	},
	
	/*{	 31 NO PLAYER
		mPlayed: false,
	},*/
	
	{ /* 32 DESTINY EUSTACE */
		mPlayed: true,
		mDisposals: 0,
		mKicks: 8,
		mHandballs: 2,
		mClearances: 1,
		mTackles: 2,
		mMarks: 0,
		mGoals: 0,
		mBehinds: 0,
		mFantasy: 0,
	}
];


function LoadDefault() {
	CreateTable();
	DisplayData();
	loadedDefault = true;
}

function CalcTotals() {
	
	for(i = 0; i < player.length; i++) {
		/* GET MELTON MATCH STATS */
		if(mMelton[i].mPlayed)
		{
			player[i].tDisposals += mMelton[i].mKicks + mMelton[i].mHandballs;
			player[i].tKicks += mMelton[i].mKicks;
			player[i].tHandballs += mMelton[i].mHandballs;
			player[i].tClearances += mMelton[i].mClearances;
			player[i].tTackles += mMelton[i].mTackles;
			player[i].tMarks += mMelton[i].mMarks;
			player[i].tGoals += mMelton[i].mGoals;
			player[i].tBehinds += mMelton[i].mBehinds;
			// CALCULATE FANTASY POINTS HERE
		}
		
		/* GET TAYLORS LAKES MATCH STATS */
		if(mTaylors[i].mPlayed) {
			player[i].tDisposals += mTaylors[i].mKicks + mTaylors[i].mHandballs;
			player[i].tKicks += mTaylors[i].mKicks;
			player[i].tHandballs += mTaylors[i].mHandballs;
			player[i].tClearances += mTaylors[i].mClearances;
			player[i].tTackles += mTaylors[i].mTackles;
			player[i].tMarks += mTaylors[i].mMarks;
			player[i].tGoals += mTaylors[i].mGoals;
			player[i].tBehinds += mTaylors[i].mBehinds;
			//CALCULATE FANTASY POINTS HERE
		}
		
		/* GET PARKSIDE MATCH STATS */
		if(mParkside[i].mPlayed) {
			player[i].tDisposals += mParkside[i].mKicks + mParkside[i].mHandballs;
			player[i].tKicks += mParkside[i].mKicks;
			player[i].tHandballs += mParkside[i].mHandballs;
			player[i].tClearances += mParkside[i].mClearances;
			player[i].tTackles += mParkside[i].mTackles;
			player[i].tMarks += mParkside[i].mMarks;
			player[i].tGoals += mParkside[i].mGoals;
			player[i].tBehinds += mParkside[i].mBehinds;
			//CALCULATE FANTASY POINTS HERE
		}
	}
}

function RemoveCurData() {
	var totalRows = 27;
	const dataZero = document.getElementById("data0");
	const dataOne = document.getElementById("data1");
	const dataTwo = document.getElementById("data2");
	
	dataZero.removeChild(dataZero.firstElementChild);
	dataOne.removeChild(dataOne.firstElementChild);
	dataTwo.removeChild(dataTwo.firstElementChild);
	
	for(i = 0; i < totalRows; i++) {
		for(d = 0; d < 3; d++) {
			var data = document.getElementById("data" + d.toString() + i.toString());
			data.removeChild(data.firstElementChild);
		}
	}
}

function CreateTable() {
	var maxColumns = 3;
	
	/* CREATE STAT LEADER ROW */
	var tr = document.createElement("tr");
	tr.id = "leader-row";
	tr.style.border = "1px solid black";
	document.getElementById("display-table").appendChild(tr);
	
	/* CREATE STAT LEADER COLUMNS */
	for(i = 0; i < maxColumns; i++) { 
		var th = document.createElement("th");
		th.id = "data" + i.toString();
		document.getElementById("leader-row").appendChild(th);
	}
	
	/* CREATE OTHER ROWS */
	for(i = 0; i < player.length-1; i++) {
		var tr = document.createElement("tr");
		tr.id = "row" + i.toString();
		tr.style.border = "1px solid black";
		document.getElementById("display-table").appendChild(tr);
	
		/* CREATE OTHER COLUMNS */
		for(d = 0; d < maxColumns; d++) { 
			var td = document.createElement("td");
			td.id = "data" + d.toString() + i.toString();
			td.style.textAlign = "center";
			document.getElementById("row" + i.toString()).appendChild(td);
		}
	}
}

function DisplayData() {
	var statValue = document.getElementById("statistic-filter").value;
	var maxColumns = 3;
	var leaderFinalised = false;
	
	
	if(statValue == "disposals" && !loadedDefault) {
		console.log("Loading Disposals...");
		SortDisplayDebug();
		
		for(i = 0; i < player.length; i++) {
			
			if(!leaderFinalised) {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[0].pImage;
				img.style.height = "60px";
				document.getElementById("data0").appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.style.fontSize = "18px";
				p.innerHTML = player[0].fName + " " + player[0].sName;
				document.getElementById("data1").appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[0].tDisposals.toString();
				document.getElementById("data2").appendChild(p2);
				
				leaderFinalised = true;
			} else {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[i].pImage;
				img.style.height = "50px";
				p.style.fontSize = "18px";
				document.getElementById("data0" + (i-1).toString()).appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.innerHTML = player[i].fName + " " + player[i].sName;
				document.getElementById("data1" + (i-1).toString()).appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[i].tDisposals.toString();
				document.getElementById("data2" + (i-1).toString()).appendChild(p2);
			}
		}
	} else if(statValue == "disposals" && loadedDefault) {
		RemoveCurData();
		console.log("Loading Disposals...");
		SortDisplayDebug();
		
		for(i = 0; i < player.length; i++) {
			
			if(!leaderFinalised) {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[0].pImage;
				img.style.height = "60px";
				document.getElementById("data0").appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.style.fontSize = "18px";
				p.innerHTML = player[0].fName + " " + player[0].sName;
				document.getElementById("data1").appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[0].tDisposals.toString();
				document.getElementById("data2").appendChild(p2);
				
				leaderFinalised = true;
			} else {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[i].pImage;
				img.style.height = "50px";
				p.style.fontSize = "18px";
				document.getElementById("data0" + (i-1).toString()).appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.innerHTML = player[i].fName + " " + player[i].sName;
				document.getElementById("data1" + (i-1).toString()).appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[i].tDisposals.toString();
				document.getElementById("data2" + (i-1).toString()).appendChild(p2);
			}
		}
	} else if(statValue == "kicks"){
		RemoveCurData();
		console.log("Loading Kicks...");
		player.sort(function(a, b) { return b.tKicks - a.tKicks; });
		
		for(i = 0; i < player.length; i++) {
			
			if(!leaderFinalised) {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[0].pImage;
				img.style.height = "60px";
				document.getElementById("data0").appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.style.fontSize = "18px";
				p.innerHTML = player[0].fName + " " + player[0].sName;
				document.getElementById("data1").appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[0].tKicks.toString();
				document.getElementById("data2").appendChild(p2);
				
				leaderFinalised = true;
			} else {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[i].pImage;
				img.style.height = "50px";
				p.style.fontSize = "18px";
				document.getElementById("data0" + (i-1).toString()).appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.innerHTML = player[i].fName + " " + player[i].sName;
				document.getElementById("data1" + (i-1).toString()).appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[i].tKicks.toString();
				document.getElementById("data2" + (i-1).toString()).appendChild(p2);
			}
		}
	} else if(statValue == "handballs"){
		RemoveCurData();
		console.log("Loading Handballs...");
		player.sort(function(a, b) { return b.tHandballs - a.tHandballs; });
		
		for(i = 0; i < player.length; i++) {
			
			if(!leaderFinalised) {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[0].pImage;
				img.style.height = "60px";
				document.getElementById("data0").appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.style.fontSize = "18px";
				p.innerHTML = player[0].fName + " " + player[0].sName;
				document.getElementById("data1").appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[0].tHandballs.toString();
				document.getElementById("data2").appendChild(p2);
				
				leaderFinalised = true;
			} else {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[i].pImage;
				img.style.height = "50px";
				p.style.fontSize = "18px";
				document.getElementById("data0" + (i-1).toString()).appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.innerHTML = player[i].fName + " " + player[i].sName;
				document.getElementById("data1" + (i-1).toString()).appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[i].tHandballs.toString();
				document.getElementById("data2" + (i-1).toString()).appendChild(p2);
			}
		}
	} else if(statValue == "clearances"){
		RemoveCurData();
		console.log("Loading Clearances...");
		player.sort(function(a, b) { return b.tClearances - a.tClearances; });
		
		for(i = 0; i < player.length; i++) {
			
			if(!leaderFinalised) {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[0].pImage;
				img.style.height = "60px";
				document.getElementById("data0").appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.style.fontSize = "18px";
				p.innerHTML = player[0].fName + " " + player[0].sName;
				document.getElementById("data1").appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[0].tClearances.toString();
				document.getElementById("data2").appendChild(p2);
				
				leaderFinalised = true;
			} else {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[i].pImage;
				img.style.height = "50px";
				p.style.fontSize = "18px";
				document.getElementById("data0" + (i-1).toString()).appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.innerHTML = player[i].fName + " " + player[i].sName;
				document.getElementById("data1" + (i-1).toString()).appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[i].tClearances.toString();
				document.getElementById("data2" + (i-1).toString()).appendChild(p2);
			}
		}
	} else if(statValue == "tackles"){
		RemoveCurData();
		console.log("Loading Tackles...");
		player.sort(function(a, b) { return b.tTackles - a.tTackles; });
		
		for(i = 0; i < player.length; i++) {
			
			if(!leaderFinalised) {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[0].pImage;
				img.style.height = "60px";
				document.getElementById("data0").appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.style.fontSize = "18px";
				p.innerHTML = player[0].fName + " " + player[0].sName;
				document.getElementById("data1").appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[0].tTackles.toString();
				document.getElementById("data2").appendChild(p2);
				
				leaderFinalised = true;
			} else {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[i].pImage;
				img.style.height = "50px";
				p.style.fontSize = "18px";
				document.getElementById("data0" + (i-1).toString()).appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.innerHTML = player[i].fName + " " + player[i].sName;
				document.getElementById("data1" + (i-1).toString()).appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[i].tTackles.toString();
				document.getElementById("data2" + (i-1).toString()).appendChild(p2);
			}
		}
	} else if(statValue == "marks"){
		RemoveCurData();
		console.log("Loading Marks...");
		player.sort(function(a, b) { return b.tMarks - a.tMarks; });
		
		for(i = 0; i < player.length; i++) {
			
			if(!leaderFinalised) {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[0].pImage;
				img.style.height = "60px";
				document.getElementById("data0").appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.style.fontSize = "18px";
				p.innerHTML = player[0].fName + " " + player[0].sName;
				document.getElementById("data1").appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[0].tMarks.toString();
				document.getElementById("data2").appendChild(p2);
				
				leaderFinalised = true;
			} else {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[i].pImage;
				img.style.height = "50px";
				p.style.fontSize = "18px";
				document.getElementById("data0" + (i-1).toString()).appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.innerHTML = player[i].fName + " " + player[i].sName;
				document.getElementById("data1" + (i-1).toString()).appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[i].tMarks.toString();
				document.getElementById("data2" + (i-1).toString()).appendChild(p2);
			}
		}
	} else if(statValue == "goals"){
		RemoveCurData();
		console.log("Loading Goals...");
		player.sort(function(a, b) { return b.tGoals - a.tGoals; });
		
		for(i = 0; i < player.length; i++) {
			
			if(!leaderFinalised) {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[0].pImage;
				img.style.height = "60px";
				document.getElementById("data0").appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.style.fontSize = "18px";
				p.innerHTML = player[0].fName + " " + player[0].sName;
				document.getElementById("data1").appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[0].tGoals.toString();
				document.getElementById("data2").appendChild(p2);
				
				leaderFinalised = true;
			} else {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[i].pImage;
				img.style.height = "50px";
				p.style.fontSize = "18px";
				document.getElementById("data0" + (i-1).toString()).appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.innerHTML = player[i].fName + " " + player[i].sName;
				document.getElementById("data1" + (i-1).toString()).appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[i].tGoals.toString();
				document.getElementById("data2" + (i-1).toString()).appendChild(p2);
			}
		}
	} else if(statValue == "behinds"){
		RemoveCurData();
		console.log("Loading Behinds...");
		player.sort(function(a, b) { return b.tBehinds - a.tBehinds; });
		
		for(i = 0; i < player.length; i++) {
			
			if(!leaderFinalised) {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[0].pImage;
				img.style.height = "60px";
				document.getElementById("data0").appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.style.fontSize = "18px";
				p.innerHTML = player[0].fName + " " + player[0].sName;
				document.getElementById("data1").appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[0].tBehinds.toString();
				document.getElementById("data2").appendChild(p2);
				
				leaderFinalised = true;
			} else {
				var img = document.createElement("img");
				img.alt = "0" + i.toString();
				img.src = player[i].pImage;
				img.style.height = "50px";
				p.style.fontSize = "18px";
				document.getElementById("data0" + (i-1).toString()).appendChild(img);
				
				var p = document.createElement("p");
				p.style.fontFamily = "sans-serif";
				p.innerHTML = player[i].fName + " " + player[i].sName;
				document.getElementById("data1" + (i-1).toString()).appendChild(p);
				
				var p2 = document.createElement("p");
				p2.style.fontFamily = "sans-serif";
				p2.innerHTML = player[i].tBehinds.toString();
				document.getElementById("data2" + (i-1).toString()).appendChild(p2);
			}
		}
	}
}

function SortDisplayDebug() {
	player.sort(function(a, b) { return b.tDisposals - a.tDisposals; });
	
	/*for(i = 0; i < player.length; i++) {
		console.log(player[i].fName + " " + player[i].sName + ": " + player[i].tDisposals.toString());
	}*/
}