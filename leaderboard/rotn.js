var selected_chart = "RR-All"
var selected_diff = "DiffImpossible"
var selected_remix = "NonRemix"
var selected_coda = "NonCoda"
var hide_cheaters = true

var daily_info = {}
var valid_boards = []

async function load_daily_info(){
	const daily_response = await fetch('daily.json')
	const daily_json = await daily_response.json();
	daily_info = daily_json
}

async function load_valid_boards(){
	const boards_response = await fetch('boards.json')
	const boards_json = await boards_response.json();
	valid_boards = boards_json["boards"]


	loadParams()
}

load_daily_info()
load_valid_boards()

//var last_update = "2025-03-28 23:14:11"


var all_charts = {
	"Daily":{"name": "Daily"},
	"RRDiscoDisaster":{ "name": "Disco Disaster"},
	"RRElusional":{ "name": "Elusional"},
	"RRVisualizeYourself":{ "name": "Visualize Yourself"},
	"RRSpookhousePop":{ "name": "Spookhouse Pop"},
	"RROmandOn":{ "name": "Om and On"},
	"RRMorningDove":{ "name": "Morning Dove"},
	"RRHephsMess":{ "name": "Heph's Mess"},
	"RRAmalgamaniac":{ "name": "Amalgamaniac"},
	"RRHangTenHeph":{ "name": "Hang Ten Heph"},
	"RRCountFunkula":{ "name": "Count Funkula"},
	"RROverthinker":{ "name": "Overthinker"},
	"RRCryp2que":{ "name": "Cryp2que"},
	"RRNocturning":{ "name": "Nocturning"},
	"RRGlassCages":{ "name": "Glass Cages"},
	"RRHallowQueen":{ "name": "Hallow Queen"},
	"RRProgenitor":{ "name": "Progenitor"},
	"RRMatriarch":{ "name": "Matriarch"},
	"RRThunder":{ "name": "Under The Thunder"},
	"RREldritchHouse":{ "name": "Eldritch House"},
	"RRRavevenge":{ "name": "Ravevenge"},
	"RRRiftWithin":{ "name": "Rift Within"},
	"RRSuzusQuest":{ "name": "Suzu's Quest"},
	"RRNecropolis":{ "name": "Necropolis"},
	"RRBaboosh":{ "name": "Baboosh"},
	"RRNecroSonatica":{ "name": "Necro Sonatica"},
	"RRHarmonie":{ "name": "She Banned"},
	"RRDeepBlues":{ "name": "King's Ruse"},
	"RRMatron":{ "name": "What's In The Box"},
	"RRReaper":{ "name": "Brave The Harvester"},
	"RRFinalFugue":{ "name": "Final Fugue"},
	"RRTwombtorial":{ "name": "Twombtorial"},
	"RRPortamello":{ "name": "Portamello"},
	"DLCApricot01":{ "name": "Slugger's Refrain"},
	"DLCApricot02":{ "name": "Got Danged"},
	"DLCApricot03":{ "name": "Bootus Bleez"},
	"DLCBanana01":{ "name": "Resurrections (dannyBstyle Remix)"},
	"DLCBanana02":{ "name": "Scattered And Lost"},
	"DLCBanana03":{ "name": "Reach for the Summit"},
	"DLCBanana04":{ "name": "Confronting Myself"},
	"DLCBanana05":{ "name": "Resurrections"},
	"DLCOG02":{ "name":  "Crypteque"},
 	"DLCOG07":{ "name":  "Fungal Funk"},
	"DLCOG06":{ "name":  "Power Cords"},
	"DLCCherry01":{ "name": "It's Pizza Time!"},
	"DLCCherry02":{ "name": "The Death That I Deservioli"},
	"DLCCherry03":{ "name": "Unexpectancy, Pt. 3"},
	"DLCCherry04":{ "name": "World Wide Noise"},
	"DLCKiwi01":{ "name": "Too Real"},
	"DLCKiwi02":{ "name": "M@GICAL☆CURE! LOVE♥SHOT!"},
	"DLCKiwi03":{ "name": "Intergalatic Bound"},
	"DLCKiwi04":{ "name": "Just 1db Louder"},
	"DLCKiwi05":{ "name": "Mikufiesta"},
	"DLCKiwi06":{ "name": "Radiant Revival"},
	"DLCGuava01":{ "name": "Bibbidiba"},
	"DLCGuava02":{ "name": "Reflect"},
	"DLCGuava03":{ "name": "Play Dice!"},
	"DLCGuava04":{ "name": "Ahoy!! 我ら宝鐘海賊団☆"},
	"DLCGuava05":{ "name": "Carbonated Love"},
	"DLCEggplant01":{ "name": "The Final Battle"},
	"DLCEggplant02":{ "name": "Feisty Flowers"},
	"DLCEggplant03":{ "name": "Revenge"},
	"DLCEggplant04":{ "name": "Why Oh You Are LOVE"},
	"DLCEggplant05":{ "name": "Powers Of Destruction"},
	"DLCMango01":{ "name": "Final Boss"},
	"DLCMango02":{ "name": "New Game"},
	"DLCMango03":{ "name": "Crab Rave"},
	"DLCMango04":{ "name": "PLAY"},
	"DLCMango05":{ "name": "Waiting For You"},
	"DLCOrange01":{ "name": "Main Theme"},
	"DLCOrange02":{ "name": "La Danse Macabre (Lich Yard)"},
	"DLCOrange03":{ "name": "Strike the Earth! (Plains of Passage)"},
	"DLCOrange04":{ "name": "In the Halls of the Usurper (Pridemoor Keep)"},
	"DLCOrange05":{ "name": "High Above the Land (The Flying Machine)"},
	"DLCOrange06":{ "name": "An Underlying Problem (The Lost City)"}
}

var custom_name_styles = {
	"8bc8f869-23ba-4d3b-a6d1-6646d51f5d30": "main-dev",
	"21797726-7189-487d-8d38-54b5d5cf0504": "rondo-winner", //Bun
	"080dcc9e-ced2-4e00-b306-d615f60a3425": "rondo-winner", //Kerem
	"475971a0-96ec-4686-b2c0-3884119c00a3": "rondo-winner", //Sam
}

var cheat_false_flags = { 
"475971a0-96ec-4686-b2c0-3884119c00a3": "true",
}

var cheat_blacklist = {
"594a4463-222c-4991-a55f-b4315b42c574": "true",
}

function formatted_player_name( player_id, player_name ){
	pname = document.createElement("span")
	if( player_name.startsWith( "<color=#187ea8>[DEV] </color>" ) ){
		player_name = player_name.replace("<color=#187ea8>[DEV] </color>", "")

		prefix_span = document.createElement("span")
		prefix_span.classList.add("dev-span") 
		prefix_span.appendChild( document.createTextNode( "[DEV]" ) );
		pname.appendChild( prefix_span );

		pname.appendChild( document.createTextNode( " "+player_name ) );
	} else {
		if( custom_name_styles.hasOwnProperty(player_id) ){
			name_style = document.createElement("span")
			name_style.classList.add(custom_name_styles[player_id])
			name_style.appendChild( document.createTextNode( player_name ) )
			pname.appendChild(name_style)
		} else {
			pname.appendChild( document.createTextNode( player_name) );
		}
	}
	return pname
}

function sort_leaderboard_avg_rank(){
	var lb = document.getElementById('leaderboard')
	var e = lb.children

	Array.from( e ).sort( (a,b) => { return Number(a.getElementsByClassName("average_rank")[0].textContent) - Number(b.getElementsByClassName("average_rank")[0].textContent) } ).forEach( element => { lb.appendChild(element); });
}

function sort_leaderboard_firsts(){
	var lb = document.getElementById('leaderboard')
	var e = lb.children

	Array.from( e ).sort( (a,b) => { return Number(b.getElementsByClassName("first_places")[0].textContent) - Number(a.getElementsByClassName("first_places")[0].textContent) } ).forEach( element => { lb.appendChild(element); });
}

function sort_leaderboard_score(){
	var lb = document.getElementById('leaderboard')
	var e = lb.children

	Array.from( e ).sort( (a,b) => { return Number(b.getElementsByClassName("rank_score")[0].score) - Number(a.getElementsByClassName("rank_score")[0].score) } ).forEach( element => { lb.appendChild(element); });
}

function get_basic_score( score, is_cheater ){
	var basic_score = 0
	for( mult in score.InputMults ){
		var multiplied_score = score.InputMults[mult]
		basic_score += Number( multiplied_score.mult ) * Number( multiplied_score.oks ) * 111
		basic_score += Number( multiplied_score.mult ) * Number( multiplied_score.goods ) * 222
		basic_score += Number( multiplied_score.mult ) * Number( multiplied_score.greats ) * 333
		basic_score += Number( multiplied_score.mult ) * Number( multiplied_score.perfects ) * 555
	}
	basic_score += Number( score.holds_hit ) * 333
	return Number(basic_score)
}

function get_acc_for_score( score, is_cheater ){

	var basic_score = 0
	for( mult in score.InputMults ){
		var multiplied_score = score.InputMults[mult]
		basic_score += Number( multiplied_score.mult ) * Number( multiplied_score.oks ) * 111
		basic_score += Number( multiplied_score.mult ) * Number( multiplied_score.goods ) * 222
		basic_score += Number( multiplied_score.mult ) * Number( multiplied_score.greats ) * 333
		basic_score += Number( multiplied_score.mult ) * Number( multiplied_score.perfects ) * 555
	}
	basic_score += Number( score.holds_hit ) * 333
	
	var bonus_points = (score.score - basic_score) / 2.0

	if( score.dnf || is_cheater ){
		bonus_points = 0
	}

	var acc = 0
	var possible_acc = 0

	possible_acc += score.total_perfects * 1.0
	possible_acc += score.total_greats * 1.0
	possible_acc += score.total_goods * 1.0
	possible_acc += score.total_oks * 1.0
	possible_acc += score.total_misses * 1.0
	
	acc += bonus_points * 1.0
	acc += (score.total_perfects-bonus_points) * 0.99
	acc += score.total_greats * .8
	acc += score.total_goods * .5
	acc += score.total_oks * .3
	acc += score.total_misses * 0

	var acc_percentage = 0
	if( possible_acc > 0 ){
		acc_percentage = acc / possible_acc
	}

	return Number(acc_percentage)

}

function friendly_lb( lb_name ){
	if( lb_name == "DailyE" ){
		return "Daily E"
	}
	if( lb_name == "DailyM" ){
		return "Daily M"
	}
	if( lb_name == "DailyH" ){
		return "Daily H"
	}
	if( lb_name == "DailyX" ){
		return "Daily X"
	}
	var lb_name = lb_name.slice(4)
	var data = lb_name.split("_")
	var diff = data[0]
	var coda = false
	var remix = false
	var remix_seeded = false
	if( data.includes("CD") ){
		coda = true
	}
	if( data.includes("R") ){
		remix = true
	}
	if( data.includes("RS") ){
		remix_seeded = true
	}
	var chart = data[ data.length-1 ]
	
	var chart_name = all_charts[chart].name

	if( diff == "E" ){ chart_name += " E"	}
	if( diff == "M" ){ chart_name += " M"	}
	if( diff == "H" ){ chart_name += " H"	}
	if( diff == "X" ){ chart_name += " X"	}

	if( remix ){ chart_name += " 🌀"}
	if( remix_seeded ){ chart_name += " 🌱"}
	if( coda ){ chart_name += " 🎯"}
	return chart_name

}

function cheat_detect( score ){
	if( cheat_false_flags.hasOwnProperty(score.player_id) ){
	return false
	}
	if( cheat_blacklist.hasOwnProperty(score.player_id) ){
	return true
	}
	if( score.cheated ){ 
		console.log("python cheat detect")
		return true 
	}
	if( Number(score.vibe_duration) > Number(score.vibe_chains_hit) * 5.35 ){ 
		console.log("vibe_duration cheat detect")
		return true
	}
	if( Number(score.vibes) > Number(score.vibe_chains_hit) ){ return true }
	if( (Number(score.max_possible_vibes) != -1) && Number(score.vibes) > Number(score.max_possible_vibes) ){
		console.log("max_possible_vibes cheat detect")
		return true
	}
	if( (score.max_possible_hits != -1) && (score.total_perfects + score.total_greats + score.total_goods + score.total_oks + score.total_misses > score.max_possible_hits) ){ 
		console.log("max_possible_hits cheat detect")
		console.log(score.max_possible_hits )
		return true 
	}

	for( i = 1; i < score.vibe_times; i++ ){
		prev_vibe = Number(score.vibe_times[i-1])
		curr_vibe = Number(score.vibe_times[i])
		if( (curr_vibe - prev_vibe) < 4.5 ) { //activating vibe more frequently than possible (minor leniency)
			return true
		}
	}

	if( score.pfc && !score.dnf ){
		var bonus_points = score.score - get_basic_score( score, false )
		if( bonus_points == (score.total_perfects * 2) ){
			console.log("100% pfc cheat detect")
			return true
		}
	}
	return false
}

function generate_row_manual(leaderboard_table, rank, name, score, accuracy, details, vibe, rows, is_cheater, player_id ){
	var trow = document.createElement("div")
	
	if( is_cheater ){ 
		trow.classList.add("table-cheater") 
	} else {
		trow.classList.add("table-row")
		trow.classList.add("table-legit")
	}


	var tgrid = document.createElement("div")
	tgrid.classList.add("table-grid")

	trow.appendChild(tgrid)

	var rank_div = document.createElement("div")
	if( is_cheater ){
		rank_div.appendChild( document.createTextNode( "-" ) );
	} else {
		rank_div.appendChild( document.createTextNode( rank ) );
	}
	
	tgrid.appendChild(rank_div)

	var pname = document.createElement("div")
	pname.classList.add("span-2")
	pname.classList.add("clickable")
	pname.addEventListener('click', showPlayerDetails, false )
	pname.player_id = player_id
	sub_player = formatted_player_name( player_id, name )
	pname.appendChild( sub_player );
	tgrid.appendChild(pname)

	var pscore = document.createElement("div")
	pscore.classList.add("span-2")
	pscore.classList.add("rank_score")
	pscore.score = score
	pscore.appendChild( document.createTextNode( score.toLocaleString() ) );

	tgrid.appendChild(pscore)

	var acc_percentage = accuracy

	var acc_data = (acc_percentage * 100).toFixed(4)+"%"
	var acc_table = document.createElement("div")
	acc_table.appendChild( document.createTextNode(acc_data) );

	tgrid.appendChild(acc_table)

	

	var flag_table = document.createElement("div")
	flag_table.classList.add("first_places")
	flag_table.appendChild( document.createTextNode( details ) );
	tgrid.appendChild(flag_table)

	var vibe_table = document.createElement("div")
	vibe_table.classList.add("average_rank")
	vibe_table.appendChild( document.createTextNode( vibe ) );
	tgrid.appendChild(vibe_table)

	leaderboard_table.appendChild(trow)
}

function generate_row( leaderboard_table, score, rows, replace_name_with_board=false ){
	var is_cheater = cheat_detect( score )
	score.cheated = is_cheater

	var trow = document.createElement("div")
	if( is_cheater ){ 
		trow.classList.add("table-cheater") 
	} else {
		trow.classList.add("table-legit") 
	}
	trow.classList.add("table-row")
	if( rows % 2 == 0 ){
		trow.classList.add("table-dark")
	} else {
		trow.classList.add("table-light")
	}


	var tgrid = document.createElement("div")
	tgrid.classList.add("table-grid")

	trow.appendChild(tgrid)

	var rank = document.createElement("div")
	if( is_cheater ){
		rank.appendChild( document.createTextNode( "-" ) );
	} else {
		rank.appendChild( document.createTextNode( Number(score.rank)+1 ) );
	}
	
	tgrid.appendChild(rank)

	var pname = document.createElement("div")
	pname.classList.add("span-2")
	if( !replace_name_with_board ){ 
		pname.classList.add("clickable")
		pname.addEventListener('click', showPlayerDetails, false )
		pname.player_id = score.player_id
		sub_player = formatted_player_name( score.player_id, score.player_name )
		pname.appendChild( sub_player )
	} else {
		pname.appendChild( document.createTextNode( friendly_lb(score.board) ) );
	}
	tgrid.appendChild(pname)

	var pscore = document.createElement("div")
	pscore.classList.add("span-2")
	pscore.appendChild( document.createTextNode( score.score.toLocaleString() ) );

	var max_combo = document.createElement("span")
	max_combo.classList.add("small-text")
	max_combo.classList.add("left-spacer")
	max_combo.appendChild( document.createTextNode( score.max_combo + "x COMBO +" + score.holds_hit + " WYRMS" ) );
	pscore.appendChild( max_combo )

	tgrid.appendChild(pscore)

	var acc_percentage = get_acc_for_score( score, is_cheater )

	var average = score.average * 1000

	var acc_data = (acc_percentage * 100).toFixed(4)+"%"
	var avg_sign = ""
	var acc_split = acc_data.split(".")
	if( average > 0 ){
		avg_sign = "+"
	} else {
		avg_sign = "-"
	}
	acc_data = Math.abs(average).toFixed(1)+"ms"
	var avg_split = acc_data.split(".")

	var acc_table = document.createElement("div")
	acc_table.classList.add("tooltip")

	var acc_big = document.createElement("span")
	acc_big.appendChild( document.createTextNode( acc_split[0] ) )
	acc_table.appendChild( acc_big );

	var acc_small = document.createElement("span")
	acc_small.classList.add("small-text")
	acc_small.appendChild( document.createTextNode( "."+acc_split[1] ) )
	acc_table.appendChild( acc_small );

	var avg_big = document.createElement("span")
	avg_big.appendChild( document.createTextNode( " " + avg_sign + avg_split[0] ) )
	acc_table.appendChild( avg_big );

	var avg_small = document.createElement("span")
	avg_small.classList.add("small-text")
	avg_small.appendChild( document.createTextNode( "."+avg_split[1] ) )
	acc_table.appendChild( avg_small );

	var acc_tooltip = document.createElement("div")
	acc_tooltip.classList.add("tooltiptext")
	acc_tooltip.classList.add("flex-col")
	if( rows > 5 ){
		acc_tooltip.classList.add("tooltip-top-override")
	}

	var tt_text = ""
	var tt_total = document.createElement("span")
	tt_total.appendChild( document.createTextNode( score.total_perfects + " | "+score.total_greats+" | "+score.total_goods+" | "+score.total_oks+" | "+score.total_misses ) )
	tt_total.classList.add("full-width")
	acc_tooltip.appendChild( tt_total )

	for( imult in score.InputMults ){
		var input_data = score.InputMults[imult]
		var mult = input_data.mult

		var tt_subheader = document.createElement("span")
		
		tt_subheader.appendChild( document.createTextNode( mult + "x" ) )
		tt_subheader.classList.add("full-width")
		tt_subheader.classList.add("small-text")
		tt_subheader.classList.add("tooltip-underline")
		acc_tooltip.appendChild( tt_subheader )

		var tt_subdata = document.createElement("span")
		tt_subdata.appendChild( document.createTextNode( input_data.perfects + " | "+input_data.greats+" | "+input_data.goods+" | "+input_data.oks+" | "+input_data.misses ) )
		tt_subdata.classList.add("full-width")
		acc_tooltip.appendChild( tt_subdata )
	}

	acc_table.appendChild( acc_tooltip )

	tgrid.appendChild(acc_table)

	leaderboard_table.appendChild(trow)

	var flag = ""
	if ( score.fc ){
		flag = "FC"
		if( score.total_oks == 0 && score.total_goods == 0 ){
			if( score.total_greats < 10 ){
				flag = "SDG"
			}
		}
	} else {
		if( score.total_misses < 10 ){
			flag = "SDCB"
		}
	}
	if( score.pfc ){
		flag = "PFC"
	}

	if( score.dnf ){
		flag = "DNF"
	} 

	var base_score = score.base_score
	var total_score = score.score
	var rating = "D "
	if( total_score > base_score * 2 ){
		rating = "C "
	}
	if( total_score > base_score * 3 ){
		rating = "B "
	}
	if( total_score > base_score * 4 ){
		rating = "A "
	}
	if( total_score > base_score * 5.5 ){
		rating = "S "
	}
	if( total_score > base_score * 6.5 ){
		rating = "S+"
	}

	if( is_cheater ){
		flag = "CHEATED"
	}

	var flag_table = document.createElement("div")
	flag_table.appendChild( document.createTextNode( rating + " " + flag ) );
	tgrid.appendChild(flag_table)

	var vt = ""
	for( t in score.vibe_times ){
		var time = score.vibe_times[t].toFixed(1)
		vt += time
		if( t != score.vibe_times.length-1 ){
			vt += " | "
		}
	}

	var vibe_table = document.createElement("div")
	vibe_table.classList.add("span-2")
	vibe_table.classList.add("small-text")
	vibe_table.appendChild( document.createTextNode( vt ) );
	tgrid.appendChild(vibe_table)

	return is_cheater
}

function generate_leaderboards( json_objects ) {
	var leaderboard_table = document.getElementById("leaderboard")
	var legend = document.getElementById('lb_legend')
	legend.classList.remove("show-regular")
	legend.classList.remove("show-ranked")
	var rows = 0
	if( json_objects.length == 1 ){
		legend.classList.add("show-regular")
		//just list scores
		var lb = json_objects[0]

		var rank = 0
		console.log(lb)

		switch( lb.name ){
			case "DailyE": get_daily_info("Easy"); break;
			case "DailyM": get_daily_info("Medium"); break;
			case "DailyH": get_daily_info("Hard"); break;
			case "DailyX": get_daily_info("Impossible"); break;
			default:
		}

		for( s in lb.scores ){
			var score = lb.scores[s]
			score.rank = rank

			score.max_possible_hits = -1
			score.max_possible_vibes = -1
			if( lb.hasOwnProperty("max_hits") ){
				score.max_possible_hits = Number(lb.max_hits)
			}
			if( lb.hasOwnProperty("vibe_chains") ){
				score.max_possible_vibes = Number(lb.vibe_chains)
			}

			//console.log(score)
			if( !generate_row( leaderboard_table, score, rows ) ){
				rank += 1
				rows += 1
			} else {
				//if( hide_cheaters ) rows -= 1;
			}
			
			
		}
		//console.log(lb)
	} else {
		//calc a rating
		legend.classList.add("show-ranked")
		var players = {}

		for( idx in json_objects ){
			var lb = json_objects[idx]
			var scores = lb.scores

			var first_score = scores[0]
			var last_score = scores[ scores.length-1 ]
			var diff = first_score.score-last_score.score
			if( diff == 0 ){
				diff = 1
			}

			var cheaters = 0
			for( s in scores ){
				var score = scores[s]
				var rel_score = (score.score-last_score.score)/diff

				if( cheat_detect(score) ) cheaters += 1

				if( players[score.player_id] == undefined ){
					players[score.player_id] = {}
					players[score.player_id]["player_id"] = score.player_id
					players[score.player_id]["player_name"] = score.player_name
					players[score.player_id]["acc"] = 0
					players[score.player_id]["rank"] = 0
					players[score.player_id]["firsts"] = 0
					players[score.player_id]["scores"] = 0
					players[score.player_id]["score"] = 0
					players[score.player_id]["is_cheater"] = false
				}
				players[score.player_id]["score"] += Math.floor( rel_score * rel_score * 10000 )
				players[score.player_id]["acc"] += get_acc_for_score( score, false )
				players[score.player_id]["scores"] += 1				

				if( cheat_detect( score ) ){
					players[score.player_id]["is_cheater"] = true
					cheaters += 1
				} else {
					if( s-cheaters == 0 ){ players[score.player_id]["firsts"] += 1 }
					players[score.player_id]["rank"] += Number(s-cheaters)+1
				}

			}
		}

		p_array = Object.values( players )
		p_array.sort( (a,b) => { return Number(b.score) - Number(a.score) }) 

		var cheaters = 0

		for( s in p_array ){
			var score = p_array[s]

			var acc = players[score.player_id]["acc"] / players[score.player_id]["scores"]
			var avg_rank = Number(score["rank"])  / Number(players[score.player_id]["scores"])
			avg_rank = avg_rank.toFixed(1)
			generate_row_manual( leaderboard_table, Number(s)+1-cheaters, score["player_name"], score["score"], acc, score["firsts"], avg_rank, (Number(s)+cheaters)%2, score["is_cheater"], score["player_id"] )

			if( score["is_cheater"] ) cheaters += 1
		}


	}
}

function repopulate_leaderboard(){
	var prod = ["P_C_"]

	var charts = []
	if( selected_chart == "RR-All" ){
		for( c in all_charts ){
			charts.push(c)
		}
	} else {
		charts.push( selected_chart )
	}


	var diffs = []
	switch( selected_diff ){
	case "Diff-All": 
		diffs = ["E_", "M_", "H_", "X_"]
		break;
    case "DiffEasy":
    	diffs = ["E_"]
    	break;
    case "DiffMed":
    	diffs = ["M_"]
		break;
    case "DiffHard":
    	diffs = ["H_"]
		break;
    case "DiffImpossible":
    	diffs = ["X_"]
		break;
	}

	var mods = []
	switch( selected_coda ){
	case "Coda-All": 
		mods = ["", "CD_"]
		break;
    case "NonCoda":
    	mods = [""]
    	break;
    case "Coda":
    	mods = ["CD_"]
		break;
	}

	var remixes = []
	switch( selected_remix ){
	case "Remix-All": 
		remixes = ["", "R_", "RS_"]
		break;
    case "NonRemix":
    	remixes = [""]
    	break;
    case "Remix":
    	remixes = ["R_"]
		break;
    case "RemixSeeded":
    	remixes = ["RS_"]
		break;
	}

	var boards = []
	for( p in prod ){
		for( r in remixes ){
			for( m in mods ){
				for( d in diffs ){
					for( c in charts ){
						var l_id = ""+prod[p]+diffs[d]+remixes[r]+mods[m]+charts[c]

						if( charts[c] == "Daily" ){
							if( diffs[d] == "E_") l_id = "DailyE"
							if( diffs[d] == "M_") l_id = "DailyM"
							if( diffs[d] == "H_") l_id = "DailyH"
							if( diffs[d] == "X_") l_id = "DailyX"
						}


						if( valid_boards.indexOf(l_id) > -1 ){
							var b = 'leaderboards/'+l_id+'.json'
							if( !boards.includes( b ) ){
								boards.push(b)	
							}							
						}									
					}					
				}
			}
		}
	}

	var scount = document.getElementById("score_count")
	scount.innerHTML = ""
	var lb = document.getElementById("leaderboard")
	lb.innerHTML = "";
	//console.log( boards )

	var promises = boards.map(board => fetch(board))
	
	Promise.all(promises)
	.then( responses => Promise.all( responses.map(r => r.json() ) ) )
	.then( jsonObjects => generate_leaderboards(jsonObjects) )
}

function get_leaderboard_set( charts, categories ){

	var prod = ["P_C_"]

	var diffs = []
	var mods = []
	var remixes = []
	for( c in categories ){
		console.log(categories[c])
		switch( categories[c] ) {
			case "Easy": diffs.push("E_"); break;
			case "Medium": diffs.push("M_"); break;
			case "Hard": diffs.push("H_"); break;
			case "Impossible": diffs.push("X_"); break;
			case "Mainboard": remixes.push(""); break;
			case "Remix": remixes.push("R_"); break;
			case "RemixSeeded": remixes.push("RS_"); break;
			case "NoMod": mods.push(""); break;
			case "Coda": mods.push("CD_"); break;
		}
	}

	var boards = []

	console.log( diffs )
	console.log( mods )
	console.log( remixes )
	console.log( charts )

	for( p in prod ){
		for( r in remixes ){
			for( m in mods ){
				for( d in diffs ){
					for( c in charts ){
						var l_id = ""+prod[p]+diffs[d]+remixes[r]+mods[m]+charts[c]
						console.log(l_id)
						if( valid_boards.indexOf(l_id) > -1 ){
							var b = 'leaderboards/'+l_id+'.json'
							if( !boards.includes( b ) ){
								boards.push(b)	
							}							
						}									
					}					
				}
			}
		}
	}



	var scount = document.getElementById("score_count")
	scount.innerHTML = ""
	var lb = document.getElementById("leaderboard")
	lb.innerHTML = "";
	console.log( boards )

	var promises = boards.map(board => fetch(board))
	
	Promise.all(promises)
	.then( responses => Promise.all( responses.map(r => r.json() ) ) )
	.then( jsonObjects => generate_leaderboards(jsonObjects) )

}

function updateChart(){
	var e = document.getElementById("chart")
	selected_chart = e.value;

	repopulate_leaderboard();
}

function updateDifficulty(){
	var e = document.getElementById("diff")
	selected_diff = e.value;

	repopulate_leaderboard();
}

function updateRemix(){
	var e = document.getElementById("remix")
	selected_remix = e.value;

	repopulate_leaderboard();
}

function updateCoda(){
	var e = document.getElementById("coda")
	selected_coda = e.value;

	repopulate_leaderboard();
}

function toggleCheaters(){
	var c = document.getElementById("cheat_toggle") 
	var e = document.getElementById("leaderboard")

	if( c.checked ){
		e.classList.add("show-cheaters")
	} else {
		e.classList.remove("show-cheaters")
	}
}

function showAdvanced(){
	var mainflex = document.getElementById("mainflex")
	var adv_div = document.getElementById("advanced_search_box")

	mainflex.classList.add("hidden")
	adv_div.classList.remove("hidden")
}

function doAdvancedSearch(){
	var song_checks = document.getElementsByClassName("adv_song_check")

	var filtered_songs = []
	for( song in song_checks ){
		if( song_checks[song].checked ){
			filtered_songs.push(song_checks[song].name)
		}
	}

	var cat_checks = document.getElementsByClassName("adv_cat_check")
	var filtered_cats = []

	for( cat in cat_checks ){
		if( cat_checks[cat].checked ){
			filtered_cats.push(cat_checks[cat].name)
		}
	}

	var url = window.location.href;
	url = url.split("?")[0]

	url = url + "?songs=" + filtered_songs.join(',')
	url = url + "&cats=" + filtered_cats.join(',')

	window.location.href = url;
}

function loadParams(){
	var url = new URL(window.location.href)
	var songs = url.searchParams.get("songs").split(",")
	var cats = url.searchParams.get("cats").split(",")

	if( songs.length > 0 && cats.length > 0 ){
		get_leaderboard_set( songs, cats )
	}
}

function listCharts(){

	var url = new URL(window.location.href)
	var showadv = url.searchParams.get("showadv")

	if( showadv != null ){
		var adv_search = document.getElementById("advanced_search")
		adv_search.classList.remove("hidden")

	} 

	var footer = document.getElementById("footer")
	footer.appendChild( document.createTextNode( "Last API Fetch : " + last_update + " UTC" ) )

	var rank_average = document.getElementById("rank-avg-legend")
	rank_average.classList.add("clickable")
	rank_average.addEventListener('click', sort_leaderboard_avg_rank, false )


	var rank_firsts = document.getElementById("rank-first-legend")
	rank_firsts.classList.add("clickable")
	rank_firsts.addEventListener('click', sort_leaderboard_firsts, false )

	var rank_scores = document.getElementById("rank-score-legend")
	rank_scores.classList.add("clickable")
	rank_scores.addEventListener('click', sort_leaderboard_score, false )

	var rank_rank = document.getElementById("rank-rank-legend")
	rank_rank.classList.add("clickable")
	rank_rank.addEventListener('click', sort_leaderboard_score, false )

	var e = document.getElementById("chart")

	var adv_songs = document.getElementById("advanced_song_list_inner")

	var adv_cat = document.getElementById("advanced_cat_list_inner")

	var items = Object.keys(all_charts).map(function(key) {
  		return [key, all_charts[key]];
	});

	items.sort(function(first, second) {
  		return second[1].name < first[1].name;
	});

	for( i in items ){
		item = items[i]
		var n = item[1].name

		var opt = document.createElement("option")
		opt.value = item[0]
		var text = document.createTextNode(n);
		opt.appendChild(text);
		e.appendChild(opt);

		var check_cont = document.createElement("div")
		//width: 100%;flex-basis: auto;

		var check = document.createElement("input")
		check.type ="checkbox"
		check.name = item[0]
		check.value = item[0]
		check.classList.add( "adv_song_check" )

		var check_label = document.createElement("label")
		check_label.appendChild( document.createTextNode( n ) )

		check_cont.appendChild( check )
		check_cont.appendChild( check_label )

		adv_songs.appendChild(check_cont)
	}

	var cats = ["Easy", "Medium", "Hard", "Impossible", "Mainboard", "Remix", "RemixSeeded", "NoMod", "Coda"]

	for( cat in cats ){
		var check_cont = document.createElement("div")
		//width: 100%;flex-basis: auto;

		var check = document.createElement("input")
		check.type ="checkbox"
		check.name = cats[cat]
		check.value = cats[cat]
		check.classList.add( "adv_cat_check" )

		var check_label = document.createElement("label")
		check_label.appendChild( document.createTextNode( cats[cat] ) )

		check_cont.appendChild( check )
		check_cont.appendChild( check_label )

		adv_cat.appendChild(check_cont)
	}
}


function get_daily_info( diff ){
	var scount = document.getElementById("score_count")
	scount.innerHTML = ""

	var chart_id = daily_info["data"]["response"]["daily"]["song"]
	var seed = ""
	for( i in daily_info["data"]["response"]["daily"]["difficulties"] ){
		if( daily_info["data"]["response"]["daily"]["difficulties"][i]["difficulty"] == diff ){
			seed = daily_info["data"]["response"]["daily"]["difficulties"][i]["seed"]
		}
	}
	
	var cname = document.createElement("div")
	cname.appendChild(document.createTextNode(  all_charts[chart_id].name + " : " + seed  ))

	cname.classList.add("centered-text")

	scount.appendChild( cname )
}


function get_player_scores( json_objects, pid ){
	var scores = []
	var leaderboard_table = document.getElementById("leaderboard")
	var scount = document.getElementById("score_count")
	var count = 0
	var player_name = ""
	rows = 0
	for( j in json_objects ){
		var cheaters = 0
		var json = json_objects[j]
		for( s in json.scores ){
			var score = json.scores[s]
			if( score.player_id == pid ){
				score.board = json.name
				score.max_possible_hits = -1
				score.max_possible_vibes = -1
				if( json.hasOwnProperty("max_hits") ){
					score.max_possible_hits = Number(json.max_hits)
				}
				if( json.hasOwnProperty("vibe_chains") ){
					score.max_possible_vibes = Number(json.vibe_chains)
				}
				score.rank = s - cheaters
				scores.push( score )
				player_name = score.player_name
				count += 1
			} else {
				if( cheat_detect( score ) ){ cheaters += 1 }
			}
		}
	}

	sub_player = formatted_player_name( pid, player_name )

	scount.innerHTML = ""
	scount.appendChild( sub_player )
	scount.appendChild( document.createTextNode( " has " + count + " scores" ) )

	scores.sort( (a,b) => { return Number(a.rank) > Number(b.rank) } )

	leaderboard_table.innerHTML = ""
	for( score in scores ){
		generate_row(leaderboard_table, scores[score], rows, replace_name_with_board=true)
		rows += 1
	}
	
}

function showPlayerDetails( evt ){
	var legend = document.getElementById('lb_legend')
	legend.classList.remove("show-regular")
	legend.classList.remove("show-ranked")
	legend.classList.add("show-regular")

	var pid = evt.currentTarget.player_id

	var boards = []
	for( b in valid_boards ){	
		boards.push('leaderboards/'+valid_boards[b]+'.json')		
	}

	var promises = boards.map(board => fetch(board))
	
	Promise.all(promises)
	.then( responses => Promise.all( responses.map(r => r.json() ) ) )
	.then( jsonObjects => get_player_scores(jsonObjects, pid) )
}
