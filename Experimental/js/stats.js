const player = [
	{
		name:["Jemma", "Hay"],
		jerseyImg:["img/player_jerseys/10.png"],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Erin", "Robinson"],
		jerseyImg:["img/player_jerseys/02.png"],
		rOne:[true, 10, 9, 1, 1, 5, 3, 0, 1, 62],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Caprice", "Baillie"],
		jerseyImg:["img/player_jerseys/03.png"],
		rOne:[true, 9, 5, 4, 2, 9, 0, 0, 0, 65],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Carlie", "Chircop"],
		jerseyImg:["img/player_jerseys/04.png"],
		rOne:[true, 0, 0, 0, 0, 4, 0, 0, 0, 16],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Alex", "Kilty"],
		jerseyImg:["img/player_jerseys/05.png"],
		rOne:[true, 14, 12, 2, 0, 0, 5, 0, 0, 55],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Emily", "Laidlaw"],
		jerseyImg:["img/player_jerseys/06.png"],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Kylie", "Garth"],
		jerseyImg:["img/player_jerseys/07.png"],
		rOne:[true, 6, 2, 4, 0, 1, 0, 0, 0, 18],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Kiera", "Dorrington"],
		jerseyImg:["img/player_jerseys/08.png"],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Mia", "Tournas"],
		jerseyImg:["img/player_jerseys/09.png"],
		rOne:[true, 20, 16, 4, 7, 13, 1, 1, 0, 138],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	/*{
		name:["Rainbow", "Ebert"],
		jerseyImg:["img/player_jerseys/10.png"],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},*/
	{
		name:["Alana", "Vidov"],
		jerseyImg:["img/player_jerseys/11.png"],
		rOne:[true, 4, 1, 3, 1, 4, 1, 0, 1, 32],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Nyny", "Malual"],
		jerseyImg:["img/player_jerseys/14.png"],
		rOne:[true, 4, 2, 2, 0, 3, 0, 0, 0, 22],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Caitlyn", "Crameri"],
		jerseyImg:["img/player_jerseys/13.png"],
		rOne:[true, 2, 2, 0, 0, 1, 2, 1, 0, 22],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Laycee", "Eustace"],
		jerseyImg:["img/player_jerseys/01.png"],
		rOne:[true, 7, 6, 1, 1, 11, 0, 0, 0, 67],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Bella", "Arvanitis"],
		jerseyImg:["img/player_jerseys/15.png"],
		rOne:[true, 3, 2, 1, 0, 10, 0, 0, 0, 48],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Angel", "Pokora"],
		jerseyImg:["img/player_jerseys/16.png"],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Jessie", "Hazeldine-Onno"],
		jerseyImg:["img/player_jerseys/17.png"],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Makenzie", "Carr"],
		jerseyImg:["img/player_jerseys/18.png"],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Genna", "Rooth"],
		jerseyImg:["img/player_jerseys/19.png"],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Sarah", "Poni"],
		jerseyImg:["img/player_jerseys/20.png"],
		rOne:[true, 11, 5, 6, 3, 2, 1, 0, 0, 47],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Kayla", "Corrigan"],
		jerseyImg:["img/player_jerseys/21.png"],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Taylor Rose", "Evans"],
		jerseyImg:["img/player_jerseys/22.png"],
		rOne:[true, 19, 15, 4, 5, 7, 0, 0, 0, 96],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Alyx", "Wilkinson"],
		jerseyImg:["img/player_jerseys/23.png"],
		rOne:[true, 1, 1, 0, 0, 0, 0, 0, 0, 4],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	/*{ No #24 Player
		name:["", ""],
		jerseyImg:["img/player_jerseys/24.png"],
		rOne:[],
		total:[],
	},*/
	{
		name:["Tahlia", "Reeves"],
		jerseyImg:["img/player_jerseys/25.png"],
		rOne:[true, 6, 3, 3, 0, 2, 0, 0, 0, 23],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	/*{ No #26 Player
		name:["", ""],
		jerseyImg:["img/player_jerseys/26.png"],
		rOne:[],
		total:[],
	},*/
	{
		name:["Olivia", "Koch"],
		jerseyImg:["img/player_jerseys/27.png"],
		rOne:[true, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	/*{ No #28 Player
		name:["", ""],
		jerseyImg:["img/player_jerseys/28.png"],
		rOne:[],
		total:[],
	},*/
	{
		name:["Molli", "Russell"],
		jerseyImg:["img/player_jerseys/29.png"],
		rOne:[false, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		name:["Marissa", "Baker"],
		jerseyImg:["img/player_jerseys/30.png"],
		rOne:[true, 11, 10, 1, 2, 3, 0, 0, 0, 50],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	/*{ No #31 Player
		name:["", ""],
		jerseyImg:["img/player_jerseys/31.png"],
		rOne:[],
		total:[],
	},*/
	{
		name:["Destiny", "Eustace"],
		jerseyImg:["img/player_jerseys/32.png"],
		rOne:[true, 9, 6, 3, 0, 4, 1, 0, 0, 43],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	
	{
		name:["Vanessa", "Baldwin"],
		jerseyImg:["img/player_jerseys/12.png"],
		rOne:[true, 6, 4, 2, 0, 1, 0, 0, 0, 20],
		total:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
];