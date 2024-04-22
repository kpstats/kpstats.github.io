const sPlayer = [
	/*{
		name:["", ""],
		jerseyImg:["img/player_jerseys/00.png"],
        mMelton:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mTayLakes:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mParkside:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},*/
	{
		name:["Erin", "Robinson"],
		jerseyImg:["img/player_jerseys/02.png"],
        mMelton:[true, 15, 14, 1, 0, 4, 6, 3, 1, 97],
		mTayLakes:[true, 24, 20, 4, 2, 2, 8, 4, 1, 131],
		mParkside:[true, 24, 21, 3, 1, 1, 4, 0, 2, 90],
		rOne:[true, 10, 9, 1, 1, 5, 3, 0, 1, 62],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Caprice", "Baillie"],
		jerseyImg:["img/player_jerseys/03.png"],
        mMelton:[true, 11, 8, 3, 0, 4, 0, 0, 0, 46],
		mTayLakes:[true, 20, 18, 2, 1, 2, 3, 0, 0, 78],
		mParkside:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		rOne:[true, 9, 5, 4, 2, 9, 0, 0, 0, 65],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Carlie", "Chircop"],
		jerseyImg:["img/player_jerseys/04.png"],
        mMelton:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mTayLakes:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mParkside:[true, 3, 1, 2, 0, 0, 0, 0, 0, 7],
		rOne:[true, 0, 0, 0, 0, 4, 0, 0, 0, 16],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Alex", "Kilty"],
		jerseyImg:["img/player_jerseys/05.png"],
        mMelton:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mTayLakes:[true, 36, 33, 3, 5, 2, 5, 0, 0, 143],
		mParkside:[true, 19, 15, 4, 3, 7, 3, 0, 0, 99],
		rOne:[true, 14, 12, 2, 0, 0, 5, 0, 0, 55],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Emily", "Laidlaw"],
		jerseyImg:["img/player_jerseys/06.png"],
        mMelton:[true, 9, 7, 2, 1, 1, 4, 3, 2, 64],
		mTayLakes:[true, 12, 10, 2, 1, 3, 2, 2, 3, 70],
		mParkside:[true, 7, 6, 1, 0, 0, 3, 1, 3, 38],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Kylie", "Garth"],
		jerseyImg:["img/player_jerseys/07.png"],
        mMelton:[true, 2, 1, 1, 0, 1, 0, 0, 0, 9],
		mTayLakes:[true, 14, 9, 5, 2, 4, 1, 0, 0, 62],
		mParkside:[true, 3, 0, 3, 0, 2, 0, 0, 0, 14],
		rOne:[true, 6, 2, 4, 0, 1, 0, 0, 0, 18],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Kiera", "Dorrington"],
		jerseyImg:["img/player_jerseys/08.png"],
        mMelton:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mTayLakes:[true, 9, 9, 0, 0, 1, 2, 0, 0, 37],
		mParkside:[true, 11, 8, 3, 0, 3, 1, 0, 0, 45],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Mia", "Tournas"],
		jerseyImg:["img/player_jerseys/09.png"],
        mMelton:[true, 27, 19, 8, 7, 11, 1, 0, 2, 143],
		mTayLakes:[true, 17, 13, 4, 5, 4, 2, 1, 1, 91],
		mParkside:[true, 27, 21, 6, 4, 8, 1, 0, 0, 122],
		rOne:[true, 20, 16, 4, 7, 13, 1, 1, 0, 138],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	/*
    {
		name:["Rainbow", "Ebert"],
		jerseyImg:["img/player_jerseys/10.png"],
        mMelton:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mTayLakes:[true, 24, 13, 11, 1, 5, 4, 0, 0, 96],
		mParkside:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
    */
	{
		name:["Alana", "Vidov"],
		jerseyImg:["img/player_jerseys/11.png"],
        mMelton:[true, 11, 7, 4, 1, 1, 0, 1, 0, 42],
		mTayLakes:[true, 17, 13, 4, 0, 2, 2, 0, 0, 61],
		mParkside:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		rOne:[true, 4, 1, 3, 1, 4, 1, 0, 1, 32],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Nyny", "Malual"],
		jerseyImg:["img/player_jerseys/14.png"],
        mMelton:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mTayLakes:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mParkside:[true, 7, 3, 4, 1, 2, 1, 0, 0, 31],
		rOne:[true, 4, 2, 2, 0, 3, 0, 0, 0, 22],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Caitlyn", "Crameri"],
		jerseyImg:["img/player_jerseys/13.png"],
        mMelton:[true, 7, 3, 4, 0, 0, 1, 0, 0, 20],
		mTayLakes:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mParkside:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		rOne:[true, 2, 2, 0, 0, 1, 2, 1, 0, 22],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Laycee", "Eustace"],
		jerseyImg:["img/player_jerseys/01.png"],
        mMelton:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mTayLakes:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mParkside:[true, 7, 3, 4, 0, 3, 0, 0, 0, 29],
		rOne:[true, 7, 6, 1, 1, 11, 0, 0, 0, 67],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Bella", "Arvanitis"],
		jerseyImg:["img/player_jerseys/15.png"],
        mMelton:[true, 3, 1, 2, 0, 0, 0, 0, 0, 7],
		mTayLakes:[true, 12, 10, 2, 0, 8, 0, 0, 0, 66],
		mParkside:[true, 5, 4, 1, 0, 3, 0, 0, 0, 26],
		rOne:[true, 3, 2, 1, 0, 10, 0, 0, 0, 48],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Angel", "Pokora"],
		jerseyImg:["img/player_jerseys/16.png"],
        mMelton:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mTayLakes:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mParkside:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Jessie", "Hazeldine-Onno"],
		jerseyImg:["img/player_jerseys/17.png"],
        mMelton:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mTayLakes:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mParkside:[true, 5, 0, 5, 0, 1, 2, 0, 0, 20],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Makenzie", "Carr"],
		jerseyImg:["img/player_jerseys/18.png"],
        mMelton:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mTayLakes:[true, 2, 2, 0, 0, 2, 0, 0, 0, 14],
		mParkside:[true, 0, 0, 0, 0, 1, 0, 0, 0, 4],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Genna", "Rooth"],
		jerseyImg:["img/player_jerseys/19.png"],
        mMelton:[true, 7, 7, 0, 0, 2, 1, 0, 0, 32],
		mTayLakes:[true, 4, 2, 2, 0, 2, 0, 0, 0, 18],
		mParkside:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Sarah", "Poni"],
		jerseyImg:["img/player_jerseys/20.png"],
        mMelton:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mTayLakes:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mParkside:[true, 10, 8, 2, 0, 4, 5, 0, 0, 59],
		rOne:[true, 11, 5, 6, 3, 2, 1, 0, 0, 47],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Kayla", "Corrigan"],
		jerseyImg:["img/player_jerseys/21.png"],
        mMelton:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mTayLakes:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mParkside:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Taylor Rose", "Evans"],
		jerseyImg:["img/player_jerseys/22.png"],
        mMelton:[true, 13, 9, 4, 1, 8, 1, 0, 1, 74],
		mTayLakes:[true, 23, 17, 6, 7, 9, 2, 0, 0, 126],
		mParkside:[true, 28, 25, 3, 4, 10, 4, 0, 0, 145],
		rOne:[true, 19, 15, 4, 5, 7, 0, 0, 0, 96],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Alyx", "Wilkinson"],
		jerseyImg:["img/player_jerseys/23.png"],
        mMelton:[true, 8, 4, 4, 1, 1, 0, 0, 0, 27],
		mTayLakes:[true, 10, 8, 2, 1, 4, 0, 1, 0, 53],
		mParkside:[true, 6, 5, 1, 0, 0, 0, 0, 0, 17],
		rOne:[true, 1, 1, 0, 0, 0, 0, 0, 0, 4],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	/*{ No #24 Player
		name:["", ""],
		jerseyImg:["img/player_jerseys/24.png"],
        mMelton:[],
		mTayLakes:[],
		mParkside:[],
		rOne:[],
		total:[],
	},*/
	{
		name:["Tahlia", "Reeves"],
		jerseyImg:["img/player_jerseys/25.png"],
        mMelton:[true, 6, 3, 3, 0, 3, 0, 0, 0, 27],
		mTayLakes:[true, 6, 4, 2, 0, 1, 2, 0, 0, 26],
		mParkside:[true, 2, 1, 1, 0, 0, 0, 0, 0, 5],
		rOne:[true, 6, 3, 3, 0, 2, 0, 0, 0, 23],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	/*{ No #26 Player
		name:["", ""],
		jerseyImg:["img/player_jerseys/26.png"],
        mMelton:[],
		mTayLakes:[],
		mParkside:[],
		rOne:[],
		total:[],
	},*/
	{
		name:["Olivia", "Koch"],
		jerseyImg:["img/player_jerseys/27.png"],
        mMelton:[true, 8, 3, 5, 0, 0, 1, 0, 0, 22],
		mTayLakes:[true, 4, 1, 3, 0, 1, 0, 0, 0, 13],
		mParkside:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		rOne:[true, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	/*{ No #28 Player
		name:["", ""],
		jerseyImg:["img/player_jerseys/28.png"],
        mMelton:[],
		mTayLakes:[],
		mParkside:[],
		rOne:[],
		total:[],
	},*/
	{
		name:["Molli", "Russell"],
		jerseyImg:["img/player_jerseys/29.png"],
        mMelton:[true, 7, 6, 1, 0, 0, 4, 0, 1, 33],
		mTayLakes:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mParkside:[true, 10, 8, 2, 2, 3, 1, 0, 0, 49],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Marissa", "Baker"],
		jerseyImg:["img/player_jerseys/30.png"],
        mMelton:[true, 24, 19, 5, 2, 7, 1, 0, 0, 104],
		mTayLakes:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mParkside:[true, 16, 12, 4, 1, 9, 1, 0, 0, 86],
		rOne:[true, 11, 10, 1, 2, 3, 0, 0, 0, 50],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	/*{ No #31 Player
		name:["", ""],
		jerseyImg:["img/player_jerseys/31.png"],
        mMelton:[],
		mTayLakes:[],
		mParkside:[],
		rOne:[],
		total:[],
	},*/
	{
		name:["Destiny", "Eustace"],
		jerseyImg:["img/player_jerseys/01.png"],
        mMelton:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mTayLakes:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mParkside:[true, 10, 8, 2, 1, 2, 0, 0, 0, 39],
		rOne:[true, 9, 6, 3, 0, 4, 1, 0, 0, 43],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	
	{
		name:["Vanessa", "Baldwin"],
		jerseyImg:["img/player_jerseys/12.png"],
        mMelton:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mTayLakes:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		mParkside:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		rOne:[true, 6, 4, 2, 0, 1, 0, 0, 0, 20],
        rTwo:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
];