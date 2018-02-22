function noenter() {
	return !(window.event && window.event.keyCode == 13);
}
//Name generator function

var generatemale = document.getElementById("generatemale");
var generatfemale = document.getElementById("generatefemale");
var form = document.getElementById("nameform");



function show1() {
	document.getElementById('buttonmale').style.display = 'block';
	document.getElementById('buttonfemale').style.display = 'none';
	document.getElementById('buttondummy').style.display = 'none';
}

function show2() {
	document.getElementById('buttonfemale').style.display = 'block';
	document.getElementById('buttonmale').style.display = 'none';
	document.getElementById('buttondummy').style.display = 'none';
}

function namegenMale(form) {

	//Split words

	var TestVar = document.getElementById("namebox").value;
	var input = TestVar.toLowerCase(); //change all input to lowercase
	var splits = input.split(' ', 2); //Split the input string by spaces and only focus on the first two workds
	var name1 = splits[0]; //First word of input string
	var name2 = splits[1]; //Second word of input string



	//NAME FUNCTION

	//function testResults(form) {
	//First Names

	//A Names
	var wordlistA = ["Adaves", "Adil", "Adondasi", "Adosi", "Adren", "Alam", "Alanil", "Aldam", "Alds", "Alms", "Alnas", "Alvan", "Alven", "Alvis", "Alvor", "Alvos", "Alvur", "Anas", "Anden", "Andril", "Anel", "Angaredhel", "Aras", "Arelvam", "Aren", "Arethan", "Arnas", "Aroa", "Aron", "Arsyn", "Arven", "Arver", "Arvs", "Arvyn", "Aryon", "Athal", "Athanden", "Athelyn", "Ather", "Athyn", "Avron", "Aanthis", "Adavos", 'Adol', "Adon", "Adovon", "Adrerel", "Adril", "Aeren", "Alarel", "Alberic", "Aldam", "Aldryn", "Alexadrin", "Almas", "Almerel", "Alonas", "Alven", "Alvon", "Alvos", "Alvur", "Ambarys", "Amil", "Andel", "Anderin", "Andilo", "Angaril", "Angarthal", "Ano", "Anral", "Anylos", "Anyn", "Arayni", "Arelos", "Arendil", "Areth", "Arethil", "Arilen", "Aron", "Aronel", "Aroni", "Aroth", "Arven", "Arver", "Arverus", "Aryo", "Athal", "Athanas", "Athando", "Athires", "Athis", "Avos", "Avys", "Azaron"];

	//B Names
	var wordlistB = ["Baem", "Baladar", "Balen", "Balras", "Balver", "Balves", "Balvos", "Balynor", "Bando", "Barayin", "Baros", "Barvyn", "Bedal", "Beivis", "Beldun", "Belos", "Belron", "Belronen", "Belvin", "Belvo", "Belyn", "Benaril", "Beneran", "Benus", "Berol", "Beron", "Bertis", "Biiril", "Bilos", "Bilotan", "Bivale", "Bodsa", "Bolay", "Bolayn", "Bols", "Boran", "Boril", "Borynil", "Bothus", "Bovis", "Bovoril", "Bradil", "Bradyn", "Braladar", "Bralis", "Bralyn", "Brara", "Bravosi", "Bravosil", "Bravynor", "Breleros", "Brethis", "Breves", "Brevs", "Breynis", "Breynshad", "Brilnosu", "Brilyn", "Briras", "Brothes", "Buram", "Badala", "Badama", "Balen", "Baleni", "Balsa", "Balynu", "Barenziah", "Bedenea", "Bedynea", "Beleru", "Bevene", "Beyte", "Bidsi", "Bilsa", "Birama", "Bivale", "Boderi", "Bodsa", "Boldrisa", "Bralsea", "Brara", "Bravora", "	Bredasu", "Brelayne", "Brelda", "Brelyna", "Brerayne", "Brevasu", "Brevosi", "Brildraso", "Brilnosu", "Bronosa"]

	//E Names
	var wordlistC = ["Cadsu", "Calden", "Cason", "Charadin", "Cylben"]

	//D Names
	var wordlistD = ["Daeril", "Daledan", "Dalen", "Dalim", "Dalmir", "Dalosil", "Dalyn", "Danar", "Dandril", "Danel", "Daneras", "Danir", "Danmon", "Danus", "Danys", " Da'ravis", "Darlas", "Daru", "Darvasen", "Dathus", "Davenas", "Davur", "Daynas", "Daynil", "Dedaenc", "Dedaenil", "Dedras", "Del", "Deleren", "Delos", "Delvoni", "Dendras", "Denthis", "Denus", "Deras", "Dethis", "Dethisam", "Devas", "Diendus", "Diiril", "Dils", "Dithis", "Div", "Dohna", "Dolnus", "Dolril", "Doril", "Dovor", "Dovyn", "Dralas", "Dralnas", "Dram", "Dranos", "Dranoth", "Draren", "Drathus", "Draval", "Dravin", "Drel", "Drelden", "Drelis", "Drelyth", "Dreynos", "Dridyn", "Drinar", "Drivas", "Drondar", "Drores", "Droval", "Drulis", "Dubdil", "Dulenil", "Dural", "Durel", "Duren", 'Durodir', "Dururo", "Duryn", "Dyleso", "Dynus"]

	//E Names
	var wordlistE = ["Eanen", "Eithyna", "Edras", "Elam", "Elvil", "Endril", "Enrith", "Enthis", "Erebil", "Erene", "Ereven", "Eris", "Eron", "Erranenen", "Ethes", "Ethyan", "Eurnus", "Evo", "Evos"]

	//F Names
	var wordlistF = ["Fadar", "Faderi", "Fadren", "Faldrus", "Falen", "Falseth", "Falvis", "Fanvyn", "Farvyn", "Favas", "Faven", "Fedar", "Felayn", "Felrar", "Felvyn", "Fendros", "Fennus", "Fenus", "Feran", "Feranos", "Ferasi", "Feril", "Fervyn", "Fethis", "Fevus", "Fevyn", "Firon", "Folayn", "Folms", "Foloros", "Folvys", "Fothyna", "Forven", "Foves", "Fovus", "Furen", "Furon", "Fyrayn"]

	//G Names
	var wordlistG = ["Gadris", "Galiel", "Galmon", "Gals", "Galur", "Ganthis", "Garis", "Garvas", "Garyn", "Gavryn", "Gedras", "Gelds", "Gendyn", "Geril", "Geron", "Gethan", "Gethis", "Gidain", "Giden", "Giiril", "Gilan", "Gilas", "Gilasi", "Gilyan", "Girano", "Giruss", "Girvas", "Golar", "Goldyn", "Gols", "Golun", "Goralas", "Goras", "Gordol", "Gorour", "Gorvas", "Gorvyn", "Goval", "Govar", "Govil", "Govyth", "Gulmon", "Gural"];

	//H Names
	var wordlistH = ["Hadril", "Haladir", "Haldyn", "Halseth", "Hamen", "Harlin", "Harvyn", "Hasudel", "Hekvid", "Hennus", "Hervil", "Hiath", "Hilan", "Hladvyr", "Hlarei", "Hlaren", "Hlaril", "Hlen", "Hlenir", "Hleseth", "Hort"];

	//I Names
	var wordlistI = ["Idras", "Idros", "Iledas", "Ilem", "Ilvar", "Iraruk", "Irasil", "Irvir", "Ithis", "Ivulan", "Ivulen"];

	//J Names
	var wordlistJ = ["Jubesil", "Jiub"];

	//K Names
	var wordlistK = ["Kallin", "Kanat", "Kareth", "Kilao", "Krem", "Krilat", "Kura"];

	//L Names
	var wordlistL = ["Larthas", "Lassen", "Len", "Lenam", "Lendras", "Lenel", "Liiril", "Llaarar", "Lladrelo", "Lirtis", "Llaalam", "Llanas", "Llandras", "Llandres", "Llandresil", "Llandryn", "Llanvyn", "Llarol", "Llenus", "Lleras", "Lleris", "Llether", "Llevule", "Llevas", "Lliram", "Lliryn", "Llivam", "Llivas", "Lloden", "Llodus", "Llonas", "Llondryn", "Llonvyn", "Llothan", "Llovyn", "Llovys", "Lludyn", "Llurour", "Lluther", "Loryvn", "Luren"];

	//M Names
	var wordlistM = ["Maddu", "Madov", "Madras", "Madrus", "Malan", "Maldus", "Malkur", "Mallas", "Malni", "Malur", "Manis", "Manore", "Manyn", "Maras", "Marasar", "Maril", "Marolos", "Martos", "Marvyn", "Maryl", "Mastrius", "Mathin", "Mathis", "Mavus", "Medar", "Meden", "Mednil", "Medyn", "Mehra", "Mehran", "Mel", "Meldras", "Melil", "Melur", "Mendyn", "Menus", "Merail", "Meram", "Merano", "Merdyndril", "Merlisi", "Mertisi", "Mervs", "Methal", "Mevilis", "Mevis", "Midari", "Miil", "Milam", "Mirvon", "Monis", "Mrilen", "Mrylav", "Mudyn", "Mullas", "Munbi", 'Muriil', "Muril", "Murilam", "Murilen", "Muron", "Muronad", "Myl"];

	//N Names
	var wordlistN = ["Naddu", "Nadras", "Naldyn", "Nalman", "Nalosi", "Naloso", "Nam", "Nardis", "Naril", "Naris", "Narivys", "Naro", "Narsis", "Narvyn", "Naryni", "Navanu", "Navlos", "Navren", "Nelmil", "Neloth", "Nelvon", "Nemyn", "Nerandas", "Nerathren", "Neron", "Nethis", "Nevam", "Niil", "Nil", "Nilas", "Nilthis", "Nilus", "Nirm", "Nival", "Nivan", "Nivis", "Noris", "Norivin", "Novor", "Numyn", "Nurov"];

	//O Names
	var wordlistO = ["Odril", "Oldis", "Olleg", "Olyn", "Omin", "Ondras", "Ornis", "Orrnar", "Orval"];

	//P Names
	var wordlistP = [];

	//Q Names
	var wordlistQ = ["Quell"];

	//R Names
	var wordlistR = ["Raddu", "Ral", "Raladas", "Ralden", "Raldis", "Ralim", "Ralis", "Raloro", "Ralyn", "Ranor", "Rararyn", "Raston", "Raynor", "Redvayn", "Relam", "Relmus", "Relnus", "Relvic", "Remas", "Remyon", "Ren", "Renam", "Renli", "Rennus", "Renthis", "Renus", "Renvis", "Reraryn", "Rernel", "Rervam", "Revus", "Revyn", "Rhavil", "Ridras", "Riidras", "Riivel", "Rilaso", "Rilen", "Rilorns", "Rilos", "Rilus", "Rilyn", "Rindral", "Rithlen", "Riud", "Rivyn", "Rol", "Rolis", "Rols", "Rolver", "Rolvyn", "Roneril", "Ronervi", "Rornas", "Rothis", "Rulantaril", "Ruram", "Rythe"];

	//S Names
	var wordlistS = ["Sadis", "Saevyr", "Salen", "Salin", "Samel", "Sanvyno", "Sarathram", "Saril", "Sarvilen", "Saryne", "Saryvn", "Sathis", "Sathram", "Savarak", "Savur", "Savure", "Seden", "Selman", "Seltin", "Selvil", "Sen", "Senar", "Sendel", "Sendet", "Sendust", "Senil", "Seras", "Sero", "Seron", "Seruli", "Sethesi", "Sethrin", "Sevilon", "Sevus", "Shishiv", "Sil", "Sildras", "Silir", "Sivan", "Sodres", "Solvar", "Strav", "Surilen", "Suron", "Surond", "Survaris", "Suryvn", "Svadstar", "Sylvain"];

	//T Names
	var wordlistT = ["Tadas", "Talms", "Tandram", "Tanel", "Tanur", "Tarar", "Tarer", "Taros", "Tarvus", "Tarvyn", "Taves", "Tedril", "Tedryn", "Tedur", "Telis", "Tels", "Telvon", "Temis", "Tendren", "Tendris", "Tens", "Terer", "Teres", "Teris", "Tervur", "Tevyn", "Thadar", "Thaden", "Thanelen", "Tharer", "Thauraver", "Theldyn", "Thervam", "Tholer", "Thoryn", "Threvul", "Tidras", "Tidros", "Tinos", "Tiram", "Tiras", "Tirer", "Tirnur", "Tirvel", "Tivam", "Toris", "Tralas", "Tralayn", "Traven", "Tredyn", "Trelam", "Trels", "Trendrus", "Treram", "Treras", "Trevyn", "Trilam", "Trivon", "Tuls"];

	//U Names
	var wordlistU = ["Ultis", "Ulves", "Ulvil", "Ulvon", "Unel", "Uradras", "Ureval", "Urnel", "Urvel", "Urven", "Uryn", "Uthrel", "Uvele", "Uvren"]

	//V Names
	var wordlistV = ["Vaden", "Vanel", "Vares", "Varis", "Varon", "Varvur", "Vatollia", "Vaves", "Vavran", "Vedam", "Vedran", "Velis", "Velms", "Velyn", "Veros", "Vevos", "Vevul", "Vilval", "Vilyn", "Viras", "Virvyn", "Vobend", "Vonden", "Vonos", "Vorar", "Voruse", "Vuvil"];

	//W Names
	var wordlistW = ["Wyndelius"];

	//X Names
	var wordlistX = ["Xell", "Xiomara"];

	//Y Names
	var wordlistY = ["Yeveth", "Yurilas"];

	//Z Names
	var wordlistZ = ["Zahshur", "Zanil", "Zimmeron", "Zanain", "Zanath", "Zanfar", "Zanien", "Zanik", "Zanil", "Zanimal", "Zanimar", "Zankan", "Zanon", "Zanpar", "Zanseth", "Zirain", "Zirath", "Zirfar", "Zirien", "Zirik", "Ziril", "Zirimal", "Zirimar", "Zirkan", "Ziron", "Zirpar", "Zirseth"]

	//randomizations
	var randomNumberA = parseInt(Math.random() * wordlistA.length);
	var randomNumberB = parseInt(Math.random() * wordlistB.length);
	var randomNumberC = parseInt(Math.random() * wordlistC.length);
	var randomNumberD = parseInt(Math.random() * wordlistD.length);
	var randomNumberE = parseInt(Math.random() * wordlistE.length);
	var randomNumberF = parseInt(Math.random() * wordlistF.length);
	var randomNumberG = parseInt(Math.random() * wordlistG.length);
	var randomNumberH = parseInt(Math.random() * wordlistH.length);
	var randomNumberI = parseInt(Math.random() * wordlistI.length);
	var randomNumberJ = parseInt(Math.random() * wordlistJ.length);
	var randomNumberK = parseInt(Math.random() * wordlistK.length);
	var randomNumberL = parseInt(Math.random() * wordlistL.length);
	var randomNumberM = parseInt(Math.random() * wordlistM.length);
	var randomNumberN = parseInt(Math.random() * wordlistN.length);
	var randomNumberO = parseInt(Math.random() * wordlistO.length);
	var randomNumberP = parseInt(Math.random() * wordlistP.length);
	var randomNumberQ = parseInt(Math.random() * wordlistQ.length);
	var randomNumberR = parseInt(Math.random() * wordlistR.length);
	var randomNumberS = parseInt(Math.random() * wordlistS.length);
	var randomNumberT = parseInt(Math.random() * wordlistT.length);
	var randomNumberU = parseInt(Math.random() * wordlistU.length);
	var randomNumberV = parseInt(Math.random() * wordlistV.length);
	var randomNumberW = parseInt(Math.random() * wordlistW.length);
	var randomNumberX = parseInt(Math.random() * wordlistX.length);
	var randomNumberY = parseInt(Math.random() * wordlistY.length);
	var randomNumberZ = parseInt(Math.random() * wordlistZ.length);
	var nameA = wordlistA[randomNumberA];
	var nameB = wordlistB[randomNumberB];
	var nameC = wordlistC[randomNumberC];
	var nameD = wordlistD[randomNumberD];
	var nameE = wordlistE[randomNumberE];
	var nameF = wordlistF[randomNumberF];
	var nameG = wordlistG[randomNumberG];
	var nameH = wordlistH[randomNumberH];
	var nameI = wordlistI[randomNumberI];
	var nameJ = wordlistJ[randomNumberJ];
	var nameK = wordlistK[randomNumberK];
	var nameL = wordlistL[randomNumberL];
	var nameM = wordlistM[randomNumberM];
	var nameN = wordlistN[randomNumberN];
	var nameO = wordlistO[randomNumberO];
	var nameP = wordlistP[randomNumberP];
	var nameQ = wordlistQ[randomNumberQ];
	var nameR = wordlistR[randomNumberR];
	var nameS = wordlistS[randomNumberS];
	var nameT = wordlistT[randomNumberT];
	var nameU = wordlistU[randomNumberU];
	var nameV = wordlistV[randomNumberV];
	var nameW = wordlistW[randomNumberW];
	var nameX = wordlistX[randomNumberX];
	var nameY = wordlistY[randomNumberY];
	var nameZ = wordlistZ[randomNumberZ];



	if (name1.toLowerCase().charAt(0) == 'a') {
		document.getElementById("name1").innerHTML = nameA;
		//console.log(nameA);
	} else if (name1.toLowerCase().charAt(0) == 'b') {
		document.getElementById("name1").innerHTML = nameB;
	} else if (name1.toLowerCase().charAt(0) == 'c') {
		document.getElementById("name1").innerHTML = nameC;
	} else if (name1.toLowerCase().charAt(0) == 'd') {
		document.getElementById("name1").innerHTML = nameD;
	} else if (name1.toLowerCase().charAt(0) == 'e') {
		document.getElementById("name1").innerHTML = nameE;
	} else if (name1.toLowerCase().charAt(0) == 'f') {
		document.getElementById("name1").innerHTML = nameF;
	} else if (name1.toLowerCase().charAt(0) == 'g') {
		document.getElementById("name1").innerHTML = nameG;
	} else if (name1.toLowerCase().charAt(0) == 'h') {
		document.getElementById("name1").innerHTML = nameH;
	} else if (name1.toLowerCase().charAt(0) == 'i') {
		document.getElementById("name1").innerHTML = nameI;
	} else if (name1.toLowerCase().charAt(0) == 'j') {
		document.getElementById("name1").innerHTML = nameJ;
	} else if (name1.toLowerCase().charAt(0) == 'k') {
		document.getElementById("name1").innerHTML = nameK;
	} else if (name1.toLowerCase().charAt(0) == 'l') {
		document.getElementById("name1").innerHTML = nameL;
	} else if (name1.toLowerCase().charAt(0) == 'm') {
		document.getElementById("name1").innerHTML = nameM;
	} else if (name1.toLowerCase().charAt(0) == 'n') {
		document.getElementById("name1").innerHTML = nameN;
	} else if (name1.toLowerCase().charAt(0) == 'o') {
		document.getElementById("name1").innerHTML = nameO;
	} else if (name1.toLowerCase().charAt(0) == 'p') {
		document.getElementById("name1").innerHTML = nameP;
	} else if (name1.toLowerCase().charAt(0) == 'q') {
		document.getElementById("name1").innerHTML = nameQ;
	} else if (name1.toLowerCase().charAt(0) == 'r') {
		document.getElementById("name1").innerHTML = nameR;
	} else if (name1.toLowerCase().charAt(0) == 's') {
		document.getElementById("name1").innerHTML = nameS;
	} else if (name1.toLowerCase().charAt(0) == 't') {
		document.getElementById("name1").innerHTML = nameT;
	} else if (name1.toLowerCase().charAt(0) == 'u') {
		document.getElementById("name1").innerHTML = nameU;
	} else if (name1.toLowerCase().charAt(0) == 'v') {
		document.getElementById("name1").innerHTML = nameV;
	} else if (name1.toLowerCase().charAt(0) == 'w') {
		document.getElementById("name1").innerHTML = nameW;
	} else if (name1.toLowerCase().charAt(0) == 'x') {
		document.getElementById("name1").innerHTML = nameX;
	} else if (name1.toLowerCase().charAt(0) == 'y') {
		document.getElementById("name1").innerHTML = nameY;
	} else if (name1.toLowerCase().charAt(0) == 'z') {
		document.getElementById("name1").innerHTML = nameZ;
	}
	//Family Names

	//A Names
	var wordlistA = ["Adram", "Adryn", "Adus", "Alam", "Alan", "Alari", "Alvor", "Amori", "Andalor", "Alas", "Aran", "Arys", "Adas", "Adus", "Alor", "Andaren", "Areleth", "Arenim", "Aravel", "Aren", "Adlaron", "Alam", "Alar", "Alari", "Alas", "Alasien", "Althranis", "Alvor", "Amurith", "Andalor", "Andral", "Andules", "Aradil", "Arano", "Arelas", "Aren", "Arendis", "Arethan", "Arona", "Arvu", "Athram", "Avayn", "Avel", "Andothan", "Andral", "Andrani", "Andrilo", "Androm", "Andromo", "Androthi", "Apo", "Aradil", "Aram", "Areloth", "Ares", "Areth", "Arns", "Arval", "Athelvis", "Athin", "Athones", "Avani", "Avel", "Avilo"];

	//B Names
	var wordlistB = ["Bail", "Balu", "Balvel", "Bandu", "Baren", "Baro", "Barus", "Baryon", "Barys", "Bedas", "Belaal", "Belan", "Belaram", "Beldros", "Beleran", "Beloren", "Bels", "Belvilo", "Benethran", "Beran", "Bereloth", "Berendus", "Berer", "Bethalas", "Bethrimo", "Brilyn", "Baram", "Barelo", "Baren", "Baro", "Barus", "Baryon", "Barys", "Bavani", "Bedas", "Belaal", "Belan", "Belaram", "Belden", "Beloren", "Bels", "Belvani", "Belvayn", "Belvilo", "Bemis", "Benelas", "Beneran", "Benethran", "Beni", "Bereloth", "Beren", "Berendus", "Berer", "Bero", "Bethrano", "Bethrimo", "Bradyn", "Braryn", "Braven", "Brenos", "Brenur", "Brilyn"];

	//C Names
	var wordlistC = ["Carvaren"];

	//D Names
	var wordlistD = ["Dalas", "Dalis", "Dalobar", "Dalomo", "Dals", "Dalvani", "Damori", "Danoran", "Daram", "Darano", "Daren", "Darethran", "Darothril", "Darvel", "Dathren", "Davor", "Davus", "Daynes", "Delms", "Deltis", "Delvi", "Demnevanni", "Deras", "Dilmyn", "Dobar", "Doran", "Doren", "Dorvayn", "Doves", "Dradas", "Dralayn", "Dralen", "Dralno", "Drals", "Drath", "Drathen", "Dredayn", "Dredil", "Dreleth", "Dreloth", "Dres", "Dreth", "Driler", "Drilvi", "Drin", "Drinith", "Drivam", "Drobar", "Drolan", "Drolnor", "Drora", "Droryn", "Droth", "Drurel", "Dulfass", "Dulni", "Duro", "Dalo", "Dals", "Dalvel", "Dalvilu", "Daral", "Daram", "Dareel", "Darithran", "Darothril", "Darvel", "Davor", "Delenu", "Demnevanni", "Derith", "Devani", "Diina", "Dobar", "Doran", "Doronil", "Drad", "Dralas", "Drals", "Dredil", "Drel", "Drelen", "Drenduf", "Driler", "Drin", "Drivam", "Drothas", "Drothro", "Duleri", "Dulo"];

	//E Names
	var wordlistE = ["Elarven", "Elval", "Elvul", "Ertis", "Evos", "Esen"];

	//F Names
	var wordlistF = ["Falandas", "Falavel", "Falos", "Fals", "Falvani", "Famori", "Faralen", "Farandas", "Faravel", "Fareloth", "Farethan", "Farothran", "Fatheran", "Fathyron", "Favani", "Faveran", "Fedos", "Felas", "Felder", "Fels", "Fendyn", "Fererus", "Fevur", "Folvyn"];

	//G Names
	var wordlistG = ["Gadar", "Galen", "Gals", "Garer", "Garil", "Garvon", "Gavos", "Gavyn", "Gidran", "Gilaram", "Gilvani", "Gilvilo", "Gimalvel", "Gimayn", "Gindu", "Ginith", "Giral", "Giralvel", "Girando", "Girano", "Girendas", "Girethi", "Girothran", "Girvayne", "Githendas", "Githrano", "Givyn", "Gobor", "Golathyn", "Gols", "Goran", "Gorvas", "Guls", "Guvron", "Gals", "Garil", "Gathram", "Gavos", "Gethanol", "Gilvayn", "Gilveni", "Ginith", "Giralvel", "Girethi", "Githendas", "Githirith", "Golathyn", "Goran", "Guls"];

	//H Names
	var wordlistH = ["Harrinat", "Hedoren", "Hedran", "Heladren", "Helas", "Heleran", "Heredon", "Hlaalo", "Hlandu", "Hlaran", "Hlarar", "Hlaren", "Hlas", "Hledas", "Hler", "Hlervu", "Hardil", "Heladren", "Helni", "Helothan", "Helothran", "Helothren", "Herandus", "Herendas", "Herothran", "Hlaano", "Hlando", "Hlarar", "Hlarys", "Hledas", "Hledri"];

	//I Names
	var wordlistI = ["Ildram", "Ilnith", "Imayn", "Indavel", "Indobar", "Indoran", "Indules", "Inlador", "Irathi", "Irethi", "Ildram", "Illoro", "Ilnith", "Imyam", "Indaram", "Indarys", "Indothan", "Inlador", "Inladori"];

	//J Names
	var wordlistJ = ["Jaxilsu"];

	//K Names
	var wordlistK = ["Kren"];

	//L Names
	var wordlistL = ["Lathoril", "Ledd", "Lem", "Lirvu", "Llanith", "Llarvys", "Llenim", "Lleran", "Llervi", "Llervu", "Lleryn", "Llethan", "Lloran", "Llothas", "Lonavo", "Ledd", "Lladri", "Llandu", "Llendo", "Llerayn", "Llervi", "Lleryn", "Lloryn", "Llothas", "Llothri"];

	//M Names
	var wordlistM = ["Madalas", "Madalvel", "Madryon", "Malas", "Maloren", "Malvayn", "Manas", "Manel", "Mano", "Marvayn", "Marvos", "Mathendis", "Mavandes", "Mels", "Menas", "Mencele", "Merys", "Milar", "Milo", "Mirel", "Molor", "Moran", "Madalas", "Madryon", "Malena", "Maleran", "Maralvel", "Marano", "Marvos", "Maryon", "Mathendis", "Mencele", "Mobaner", "Moorsmith", "Moren", "Mothril"];

	//N Names
	var wordlistN = ["Nadus", "Naram", "Nelas", "Neleth", "Nerandas", "Nerendas", "Nerethi", "Nerothan", "Nervion", "Nethalen", "Nethan", "Nethri", "Nilvon", "Nirith", "Nirvayn", "Nolar", "Nadus", "Naram", "Nelas", "Neleth", "Nerandas", "Nerendas", "Nerethi", "Nerothan", "Nervion", "Nethalen", "Nethan", "Nethri", "Nilvon", "Nirith", "Nirvayn"];

	//O Names
	var wordlistO = ["Ofemalen", "Omani", "Omaren", "Ondyn", "Onmar", "Orelu", "Ores", "Oreyn", "Othralas", "Othrobar", "Ofemalen", "Omani", "Omaren", "Ondyn", "Onmar", "Orelu", "Ores", "Oreyn", "Othralas"];

	//P Names
	var wordlistP = ["Pels"];

	//Q Names
	var wordlistQ = ["Quintella"];

	//R Names
	var wordlistR = ["Radarys", "Radas", "Radathren", "Raledran", "Ralen", "Ralethran", "Raloran", "Ralren", "Ralvel", "Ramothran", "Randaro", "Randas", "Raram", "Rathri", "Rathryon", "Raviro", "Redas", "Redothan", "Relavel", "Reledran", "Reloren", "Relthren", "Relvani", "Rendas", "Reni", "Renimus", "Resvalyn", "Rethandus", "Rindu", "Rinith", "Rithari", "Rivul", "Romari", "Romoran", "Rondas", "Ronen", "Rothrano", "Rurvyn", "Ryon", "Radarys", "Radobar", "Ralaal", "Raloran", "Ralvani", "Ralvayn", "Ramarys", "Ramoran", "Ramori", "Ramothran", "Randas", "Raram", "Rathri", "Redas", "Redothril", "Reladren", "Relarys", "Relavel", "Relenim", "Relnim", "Reloro", "Reloth", "Relvani", "Rendo", "Reni", "Renim", "Reram", "Rervam", "Rethelas", "Rethul", "Reyas", "Rilvayn", "Rindo", "Rindu", "Rinith", "Rivul", "Rols", "Romandas", "Romari", "Romavel", "Romayn", "Romoran", "Romothran", "Rothalen", "Rothalnim", "Rothalor", "Rothan", "Rothari", "Rotheloth", "Rotheran", "Rothrano", "Rothren", "Rurvyn"];

	//S Names
	var wordlistS = ["Sero", "Sadalas", "Sadalvel", "Sadas", "Sadoro", "Sadralo", "Sadrano", "Sadryon", "Sadrys", "Sala", "Salam", "Salandas", "Salaren", "Salaron", "Salavel", "Salen", "Salenim", "Salmyn", "Salobar", "Salor", "Salvi", "Samandas", "Sandus", "Sarandus", "Sarathram", "Sareloth", "Sarethan", "Sari", "Sarinith", "Sarobar", "Sarothran", "Sarothren", "Saryoni", "Sathendas", "Sathis", "Sathren", "Sathryon", "Savani", "Sedrethi", "Sedri", "Selandas", "Selaro", "Selarys", "Seles", "Selothan", "Selvayn", "Sendu", "Senoril", "Seralas", "Serano", "Seri", "Serothan", "Serven", "Sethandas", "Sethandus", "Sethri", "Surishpi", "Sarothril", "Sarvani", "Sedarys", "Selvayn", "Sero", "Sevan", "Sadas", "Sadralo", "Sadrano", "Sadreno", "Sadris", "Sadryon", "Sadus", "Salas", "Salor", "Salvi", "Salvilo", "Samori", "Sandras", "Saram", "Sareloth", "Sarinith", "Sarothran", "Sarothril", "Sarvayn", "Savel", "Sedri", "Selandas", "Selarys", "Selas", "Selos", "Seloth", "Sendas", "Senoril", "Seralas", "Seran", "Serano", "Serelnim", "Sero", "Seryiil", "Severin", "Sildreth"];

	//T Names
	var wordlistT = ["Talnarith", "Tedala", "Teddalennu", "Telendas", "Teran", "Terandas", "Terano", "Teri", "Thadus", "Thando", "Thanlen", "Tharen", "Tharvi", "Tharyon", "Tharys", "Thelas", "Theloth", "Thendas", "Thenim", "Thindo", "Thirvayn", "Talds", "Tedalen", "Tedran", "Telandas", "Telmon", "Telnim", "Telvani", "Teneran", "Terandas", "Terano", "Teri", "Teria", "Terilu", "Tervayn", "Thalas", "Thalor", "Thando", "Tharam", "Tharyon", "Tharys", "Theman", "Thenim", "Therayn", "Therethi", "Thilandas", "Thilarvel", "Thimalvel", "Thindo", "Thiralas", "Thireloth", "Thirith", "Thirothan", "Thirvayn", "Tilvur", "Tistar", "Tobor", "Trandel", "Tunel", "Tyravel", "Telvayn", "Tharys", "Telleno"];

	//U Names
	var wordlistU = ["Uleni", "Ulessen", "Ulom", "Ulvel", "Ulver", "Urns", "Urvon", "Urvyn", "Uvalas", "Uvalen", "Uvalor", "Uvani", "Uvaram", "Uveleth", "Uvulas"]

	//V Names
	var wordlistV = ["Vadryon", "Valaai", "Valas", "Valen", "Valno", "Valor", "Vando", "Vandram", "Varo", "Vavas", "Vavyn", "Vedaren", "Vedralu", "Vedrano", "Velendas", "Velni", "Veloren", "Veloth", "Velothren", "Velothril", "Veralor", "Verelas", "Verendas", "Veri", "Verilnith", "Verothan", "Viake", "Vian", "Vibato", "Vidron", "Vilas", "Vinden", "Volos", "Verelnim", "Valas", "Valen", "Valos", "Vando", "Varyon", "Varyoni", "Vashi", "Vavas", "Vedralu", "Vedran", "Velador", "Velni", "Ven", "Vendil", "Vendu", "Veralas", "Veralor", "Veren", "Verendas", "Verenim", "Veri", "Vilas", "Vildan", "Viri", "Virith", "Vlaren", "Volek", "Volos", "Voren", "Voung", "Vules"]

	//W Names
	var wordlistW = [" "]

	//X Names
	var wordlistX = [" "]

	//Y Names
	var wordlistY = ["Yahaz"];

	//Z Names
	var wordlistZ = [""]

	//randomizationss
	var randomNumberA = parseInt(Math.random() * wordlistA.length);
	var randomNumberB = parseInt(Math.random() * wordlistB.length);
	var randomNumberC = parseInt(Math.random() * wordlistC.length);
	var randomNumberD = parseInt(Math.random() * wordlistD.length);
	var randomNumberE = parseInt(Math.random() * wordlistE.length);
	var randomNumberF = parseInt(Math.random() * wordlistF.length);
	var randomNumberG = parseInt(Math.random() * wordlistG.length);
	var randomNumberH = parseInt(Math.random() * wordlistH.length);
	var randomNumberI = parseInt(Math.random() * wordlistI.length);
	var randomNumberJ = parseInt(Math.random() * wordlistJ.length);
	var randomNumberK = parseInt(Math.random() * wordlistK.length);
	var randomNumberL = parseInt(Math.random() * wordlistL.length);
	var randomNumberM = parseInt(Math.random() * wordlistM.length);
	var randomNumberN = parseInt(Math.random() * wordlistN.length);
	var randomNumberO = parseInt(Math.random() * wordlistO.length);
	var randomNumberP = parseInt(Math.random() * wordlistP.length);
	var randomNumberQ = parseInt(Math.random() * wordlistQ.length);
	var randomNumberR = parseInt(Math.random() * wordlistR.length);
	var randomNumberS = parseInt(Math.random() * wordlistS.length);
	var randomNumberT = parseInt(Math.random() * wordlistT.length);
	var randomNumberU = parseInt(Math.random() * wordlistU.length);
	var randomNumberV = parseInt(Math.random() * wordlistV.length);
	var randomNumberW = parseInt(Math.random() * wordlistW.length);
	var randomNumberX = parseInt(Math.random() * wordlistX.length);
	var randomNumberY = parseInt(Math.random() * wordlistY.length);
	var randomNumberZ = parseInt(Math.random() * wordlistZ.length);
	var nameA = wordlistA[randomNumberA];
	var nameB = wordlistB[randomNumberB];
	var nameC = wordlistC[randomNumberC];
	var nameD = wordlistD[randomNumberD];
	var nameE = wordlistE[randomNumberE];
	var nameF = wordlistF[randomNumberF];
	var nameG = wordlistG[randomNumberG];
	var nameH = wordlistH[randomNumberH];
	var nameI = wordlistI[randomNumberI];
	var nameJ = wordlistJ[randomNumberJ];
	var nameK = wordlistK[randomNumberK];
	var nameL = wordlistL[randomNumberL];
	var nameM = wordlistM[randomNumberM];
	var nameN = wordlistN[randomNumberN];
	var nameO = wordlistO[randomNumberO];
	var nameP = wordlistP[randomNumberP];
	var nameQ = wordlistQ[randomNumberQ];
	var nameR = wordlistR[randomNumberR];
	var nameS = wordlistS[randomNumberS];
	var nameT = wordlistT[randomNumberT];
	var nameU = wordlistU[randomNumberU];
	var nameV = wordlistV[randomNumberV];
	var nameW = wordlistW[randomNumberV];
	var nameX = wordlistX[randomNumberX];
	var nameY = wordlistY[randomNumberY];
	var nameZ = wordlistZ[randomNumberZ];



	if (name2.toLowerCase().charAt(0) == 'a') {
		document.getElementById("name2").innerHTML = nameA;
		//console.log(nameA);
	} else if (name2.toLowerCase().charAt(0) == 'b') {
		document.getElementById("name2").innerHTML = nameB;
	} else if (name2.toLowerCase().charAt(0) == 'c') {
		document.getElementById("name2").innerHTML = nameC;
	} else if (name2.toLowerCase().charAt(0) == 'd') {
		document.getElementById("name2").innerHTML = nameD;
	} else if (name2.toLowerCase().charAt(0) == 'e') {
		document.getElementById("name2").innerHTML = nameE;
	} else if (name2.toLowerCase().charAt(0) == 'f') {
		document.getElementById("name2").innerHTML = nameF;
	} else if (name2.toLowerCase().charAt(0) == 'g') {
		document.getElementById("name2").innerHTML = nameG;
	} else if (name2.toLowerCase().charAt(0) == 'h') {
		document.getElementById("name2").innerHTML = nameH;
	} else if (name2.toLowerCase().charAt(0) == 'i') {
		document.getElementById("name2").innerHTML = nameI;
	} else if (name2.toLowerCase().charAt(0) == 'j') {
		document.getElementById("name2").innerHTML = nameJ;
	} else if (name2.toLowerCase().charAt(0) == 'k') {
		document.getElementById("name2").innerHTML = nameK;
	} else if (name2.toLowerCase().charAt(0) == 'l') {
		document.getElementById("name2").innerHTML = nameL;
	} else if (name2.toLowerCase().charAt(0) == 'm') {
		document.getElementById("name2").innerHTML = nameM;
	} else if (name2.toLowerCase().charAt(0) == 'n') {
		document.getElementById("name2").innerHTML = nameN;
	} else if (name2.toLowerCase().charAt(0) == 'o') {
		document.getElementById("name2").innerHTML = nameO;
	} else if (name2.toLowerCase().charAt(0) == 'p') {
		document.getElementById("name2").innerHTML = nameP;
	} else if (name2.toLowerCase().charAt(0) == 'q') {
		document.getElementById("name2").innerHTML = nameQ;
	} else if (name2.toLowerCase().charAt(0) == 'r') {
		document.getElementById("name2").innerHTML = nameR;
	} else if (name2.toLowerCase().charAt(0) == 's') {
		document.getElementById("name2").innerHTML = nameS;
	} else if (name2.toLowerCase().charAt(0) == 't') {
		document.getElementById("name2").innerHTML = nameT;
	} else if (name2.toLowerCase().charAt(0) == 'u') {
		document.getElementById("name2").innerHTML = nameU;
	} else if (name2.toLowerCase().charAt(0) == 'v') {
		document.getElementById("name2").innerHTML = nameV;
	} else if (name2.toLowerCase().charAt(0) == 'w') {
		document.getElementById("name2").innerHTML = nameW;
	} else if (name2.toLowerCase().charAt(0) == 'x') {
		document.getElementById("name2").innerHTML = nameX;
	} else if (name2.toLowerCase().charAt(0) == 'y') {
		document.getElementById("name2").innerHTML = nameY;
	} else if (name2.toLowerCase().charAt(0) == 'z') {
		document.getElementById("name2").innerHTML = nameZ;
	}
}

//
//
//
//
//
//
//
//
// Name Gen 2
//Name generator function

function namegenFemale(form) {

	//Split words
	var TestVar = document.getElementById("namebox").value;
	var input = TestVar.toLowerCase(); //change all input to lowercase
	var splits = input.split(' ', 2); //Split the input string by spaces and only focus on the first two workds
	var name1 = splits[0]; //First word of input string
	var name2 = splits[1]; //Second word of input string


	//NAME FUNCTION 2


	//First Names - Female

	//A Names
	var wordlistA = ["Adrusu", "Alarvyne", "Alavesa", "Aldyne", "Alenus", "Aleri", "Alfe", "Almse", "Almsi", "Aloie", "Alonisea", "Alurue", "Alvela", "Alveno", "Alvura", "Alynu", "Amili", "Andalin", "Andilo", "Andilu", "Ane", "Angahran", "Anis", "Anise", "Aralosea", "Arara", "Arns", "Arnsa", "Arnsi", "Artisa", "Arvama", "Arvamea", "Arvela", "Arvso", "Aryne", "Aryni", "Athesie", "Avoni", "Aamela", "Aamrila", "Aarela", "Adansa", "Adosi", "Adrasi", "Adryn", "Aerona", "Aeyne", "Alalura", "Alaru", "Aldyna", "Aldyne", "Alicon", "Alli", "Alma", "Almise", "Almse", "Alsal", "Alurami", "Alurue", "Alves", "Alvesi", "Alvila", "Alvura", "Amila", "Amili", "Andilan", "Andilo", "Aneyda", "Ani", "Anila", "Anisa", "Aphia", "Aralosi", "Arara", "Arela", "Areyne", "Arilu", "Arisa", "Arns", "Arnsi", "Arvena", "Aryvena", "Aspera", "Athesa", "Aurona", "Aymillo"];

	//B Names
	var wordlistB = ["Badala", "Badama", "Balen", "Baleni", "Balsa", "Balynu", "Barenziah", "Bedenea", "Bedynea", "Beleru", "Bevene", "Beyte", "Bidsi", "Bilsa", "Birama", "Bivale", "Boderi", "Bodsa", "Boldrisa", "Bralsea", "Brara", "Bravora", "Bredasu", "Brelayne", "Brelda", "Brelyna", "Brerayne", "Brevasu", "Brevosi", "Brildraso", "Brilnosu", "Bronosa", "Badila", "Badilia", "Bala", "Balsia", "Bameli", "Bameni", "Banda", "Bedena", "Bedyna", "Bedyni", "Belderi", "Belera", "Beleru", "Belosi", "Belya", "Bendyni", "Bera", "Berada", "Berari", "Berela", "Betina", "Betya", "Beyte", "Bidia", "Bidsa", "Biiri", "Bili", "Binayne", "Birila", "Bivala", "Bivale", "Bivessa", "Blivisi", "Boderi", "Boderia", "Boldrisa", "Bolnora", "Bothisii", "Bralsa", "Bralsi", "Bravaria", "Bravora", "Breda", "Bredami", "Brela", "Brelaca", "Brelayne", "Brelda", "Brelyn", "Brelynd", "Brema", "Breva", "Burila", "Buronii", "Butheli", "Byla"]

	//E Names
	var wordlistC = ["Cadiva", "Cindiri", "Cloya"];

	//D Names
	var wordlistD = ["Dalami", "Dalnorea", "Dalse", "Dalyne", "Danaronea", "Danasi", "Dandera", "Dandynea", "Danoso", "Danso", "Darane", "Dareru", "Daroso", "Darvala", "Darvame", "Darvasa", "Darvynea", "Daynali", "Daynas", "Daynillo", "Deldasa", "Deldrise", "Delmene", "Delte", "Delyna", "Derar", "Derayna", "Dilami", "Dileno", "Dilvene", "Dinara", "Dinere", "Dinuro", "Diradeni", "Dirara", "Diren", "Dolmesa", "Dolsa", "Dolvasie", "Domesea", "Dorisa", "Dorynu", "Dothasi", "Dovrosi", "Dralasa", "Dralcea", "Dralisi", "Dralora", "Dralosa", "Dralsea", "Draramu", "Drarayne", "Dratha", "Dravynea", "Dredyni", "Drelasa", "Drelyne", "Drendrisa", "Dreveni", "Drilame", "Driloru", "Drireri", "Drolora", "Drorayni", "Drulene", "Drurile", "Duldresi", ];

	//E Names
	var wordlistE = ["Edryno", "Eldrasea", "Eldrilu", "Elmera", "Elmussa", "Elvasea", "Elynea", "Elynu", "Endase", "Endroni", "Eralane", "Erirvase", "Ernse", "Ervesa", "Ervona", "Ervyna", "Ethal", "Ethasi", "Evesa", "Evilu", "Edrasa", "Edrisi", "Edryn", "Edwina", "Eldri", "Elmera", "Elneri", "Elvasia", "Elyna", "Elynisi", "Enura", "Erila", "Erivase", "Eroni", "Ervyla", "Ervyna", "Ervyni", "Ervynu", "Evessa", "Evisi", "Evylu"]

	//F Names
	var wordlistF = ["Fadase", "Fadile", "Falanu", "Falena", "Falura", "Fanasa", "Fanisea", "Fanuse", "Faral", "Faralenu", "Farare", "Faras", "Farena", "Farusea", "Fathasa", "Fathusa", "Favani", "Favela", "Favilea", "Favise", "Favona", "Fedura", "Feldrelo", "Felisa", "Felmena", "Felsa", "Felsu", "Feralea", "Ferise", "Ferone", "Fervsea", "Ferynu", "Fevasa", "Fevila", "Fieryra", "Folsi", "Folvalie", "Fomesa", "Fonari", "Fonas", "Forvse", "Falora", "Faltha", "Famdii", "Famyne", "Faral", "Faras", "Farena", "Faric", "Farona", "Faryon", "Farys", "Favel", "Favela", "Fealu", "Fedrasa", "Feduria", "Feldrasa", "Feldsii", "Felisa", "Felmina", "Felsa", "Fenila", "Ferdyn", "Ferena", "Ferva", "Fethesena", "Fevila", "Feyne", "Fieria", "Filu", "Fonari", "Fondryn", "Foni", "Fonira", "Forvse", "Furoni", "Furu", "Fyrayn", "Fyrona"];

	//G Names
	var wordlistG = ["Gadila", "Gadsi", "Galdas", "Galdsa", "Galisa", "Galori", "Galotha", "Galsi", "Galsu", "Galyn", "Gami", "Gandilla", "Gariasa", "Garila", "Garyne", "Gelaa", "Gelana", "Gelii", "Gena", "Gindur", "Girara", "Girva", "Glistel", "Godyna", "Golmerea", "Golvy", "Gorili", "Grona", "Guroanii", "Guronii", "Gynisi", "Gadasu", "Gadela", "Gadyni", "Galas", "Galasa", "Galdal", "Galeri", "Galero", "Galore", "Galsu", "Galuro", "Galvene", "Galviso", "Galyn", "Gandela", "Gandosa", "Garalo", "Garas", "Garila", "Garyne", "Gilse", "Ginadura", "Gindrala", "Girara", "Girvani", "Girynu", "Golana", "Golena", "Golmerea", "Golveso", "Golvyni", "Gomeso", "Gorenea", "Gorven", "Guldrise", "Gulena", "Gulvilie", "Gureryne"];

	//H Names
	var wordlistH = ["Haleneri", "Hlavora", "Hlendrisa", "Hlevala", "Hlireni", "Hlodala", "Hadrill", "Hala", "Hanala", "Helma", "Helseth", "Hlana", "Hlaren", "Hlava", "Hlavora", "Hlenia", "Hlethena", "Hlevala", "Hlisi", "Hlura"];

	//I Names
	var wordlistI = ["Idrasa", "Idrenia", "Idria", "Idroni", "Idula", "Ienasa", "Iirila", "Ildari", "Ildrasai" - "daro", "Ilmeni", "Indra", "Indrasa", "Indrasi", "Indrela", "Indrele", "Indririi", "Ineria", "Inisa", "Inise", "Iriana", "Irileth", "Iry", "Isabeau", "Ithrini", "Ivaynel", "Ivela", "Ivramia", "Ivrosa", "Idrenie", "Idronea", "Idroso", "Idula", "Ienasa", "Ienase", "Ienaso", "Ilmeni", "Ilmyna", "Indrele", "Inera", "Irna", "Irvama", "Irvsie", "Ivela", "Iveri", "Ivramie", "Ivrosa"];

	//J Names
	var wordlistJ = ["Jenassa", "Jinrisa"];

	//K Names
	var wordlistK = ["Kalara", "Kalina", "Kireth", "Kylia"];

	//L Names
	var wordlistL = ["Lauravenya", "Llaalamu", "Llaalsa", "Llandrale", "Llandreri", "Llarara", "Llaros", "Llarusea", "Llathise", "Llathyno", "Llavane", "Llavelea", "Llavesa", "Llaynasa", "Lledsa", "Lledsea", "Llemisa", "Llerusa", "Llevana", "Llirala", "Llivas", "Llondresa", "Llorayna", "Llunela", "Larthas", "Lassen", "Len", "Lenam", "Lendras", "Lenel", "Liiril", "Llaarar", "Lladrelo", "Lirtis", "Llaalam", "Llanas", "Llandras", "Llandres", "Llandresil", "Llandryn", "Llanvyn", "Llarol", "Llenus", "Lleras", "Lleris", "Llether", "Llevule", "Llevas", "Lliram", "Lliryn", "Llivam", "Llivas", "Lloden", "Llodus", "Llonas", "Llondryn", "Llonvyn", "Llothan", "Llovyn", "Llovys", "Lludyn", "Llurour", "Lluther", "Loryvn", "Luren"];

	//M Names
	var wordlistM = ["Maddu", "Madov", "Madras", "Madrus", "Malan", "Maldus", "Malkur", "Mallas", "Malni", "Malur", "Manis", "Manore", "Manyn", "Maras", "Marasar", "Maril", "Marolos", "Martos", "Marvyn", "Maryl", "Mastrius", "Mathin", "Mathis", "Mavus", "Medar", "Meden", "Mednil", "Medyn", "Mehra", "Mehran", "Mel", "Meldras", "Melil", "Melur", "Mendyn", "Menus", "Merail", "Meram", "Merano", "Merdyndril", "Merlisi", "Mertisi", "Mervs", "Methal", "Mevilis", "Mevis", "Midari", "Miil", "Milam", "Mirvon", "Monis", "Mrilen", "Mrylav", "Mudyn", "Mullas", "Munbi", "Muriil", "Muril", "Murilam", "Murilen", "Muron", "Muronad", "Myl", "Madran", "Madres", "Madsu", "Malar", "Mallam", "Mals", "Manabi", "Mandran", "Mandur", "Mandyn", "Manel", "Maner", "Manolos", "Marayn", "Maros", "Mastrius", "Mathis", "Mathyn", "Mavis", "Mavon", "Mavus", "Meder", "Medyn", "Melar", "Melur", "Menus", "Meril", "Mertis", "Mertisi", "Mervis", "Mervs", "Meryn", "Methal", "Methas", "Mevel", "Meven", "Mevil", "Midar", "Milar", "Mils", "Milyn", "Miner", "Miron", "Mirvon", "Mivul", "Mondros", "Movis", "Muvis"];

	//N Names
	var wordlistN = ["Nads", "Nalis", "Nalmen", "Nalosi", "Nals", "Nalur", "Naral", "Naris", "Nathyn", "Navam", "Navil", "Neldris", "Nelmil", "Nelos", "Neloth", "Nels", "Nelvon", "Nelyn", "Nerer", "Nethyn", "Nevil", "Nevon", "Nevos", "Nevosi", "Niden", "Nilas", "Nilos", "Niras", "Nivel", "Nivos", "Norus", "Naddu", "Nadras", "Naldyn", "Nalman", "Nalosi", "Naloso", "Nam", "Nardis", "Naril", "Naris", "Narivys", "Naro", "Narsis", "Narvyn", "Naryni", "Navanu", "Navlos", "Navren", "Nelmil", "Neloth", "Nelvon", "Nemyn", "Nerandas", "Nerathren", "Neron", "Nethis", "Nevam", "Niil", "Nil", "Nilas", "Nilthis", "Nilus", "Nirm", "Nival", "Nivan", "Nivis", "Noris", "Norivin", "Novor", "Numyn", "Nurov"];

	//O Names
	var wordlistO = ["Olvyne", "Omesu", "Orero", "Orvona", "Odesa", "Odrasa", "Odrys", "Odyna", "Olvyia", "Orama", "Orani", "Orara", "Orea", "Orona", "Orvana", "Oryla"];

	//P Names
	var wordlistP = ["Pelia"];

	//Q Names
	var wordlistQ = ["Qyss"];

	//R Names
	var wordlistR = ["Radene", "Radrase", "Rala", "Ralsynilsa", "Ramavel", "Rami", "Ramila", "Ramu", "Rana", "Rania", "Ranis", "Ranyna", "Rarili", "Rarusi", "Ravania", "Ravel", "Ravela", "Ravila", "Raynil", "Raynila", "Rela", "Reldsii", "Relenila", "Relmerea", "Relmeria", "Rena", "Rendrasa", "Renkathi", "Rernel", "Reron", "Resetta", "Revisii", "Rianor", "Ridinna", "Riinsi", "Rila", "Rinori", "Riray", "Rironi", "Ris", "Risa", "Rudrasa", "Rurvyn", "Ruvali", "Ryna", "Radene", "Radrase", "Rala", "Ralsynilsa", "Ramavel", "Rami", "Ramila", "Ramu", "Rana", "Rania", "Ranis", "Ranyna", "Rarili", "Rarusi", "Ravania", "Ravel", "Ravela", "Ravila", "Raynil", "Raynila", "Rela", "Reldsii", "Relenila", "Relmerea", "Relmeria", "Rena", "Rendrasa", "Renkathi", "Rernel", "Reron", "Resetta", "Revisii", "Rianor", "Ridinna", "Riinsi", "Rila", "Rinori", "Riray", "Rironi", "Ris", "Risa", "Rudrasa", "Rurvyn", "Ruvali", "Ryna"];

	//S Names
	var wordlistS = ["Sadal", "Sadela", "Salama", "Salora", "Salyni", "Sanaso", "Saruse", "Sathasa", "Satheri", "Satyana", "Savesea", "Savile", "Sedris", "Sedyni", "Selvura", "Senise", "Serila", "Sernsi", "Seryne", "Sethesi", "Sevame", "Sevisa", "Sevyni", "Sodrara", "Sondryn", "Sorosi", "Sovali", "Sovisa", "Suldreni", "Saalu", "Sadelia", "Salima", "Salina", "Salori", "Salver", "Saly", "Samtri", "Sanas", "Satha", "Sathdira", "Sathryn", "Sava", "Savi", "Savila", "Savile", "Sayla", "Sayne", "Sedura", "Sehlena", "Sela", "Selvura", "Sem", "Semoa", "Sen", "Sena", "Serana", "Seritath", "Servyna", "Seryna", "Seryne", "Sethan", "Sethisa", "Sevame", "Sevy", "Seyne", "Seyrena", "Shelethys", "Shiralas", "Shra", "Sia", "Siid", "Siila", "Silen", "Sirari", "Sirili", "Sirilu", "Sivisia", "Sodra", "Solryn", "Sorosi", "Sovi", "Suldrini", "Surii", "Suronii", "Sursi"];

	//T Names
	var wordlistT = ["Taderi", "Taelu", "Talama", "Talamu", "Talari", "Talmeni", "Talsi", "Talsyne", "Taluri", "Talvini", "Tama", "Tamira", "Tanar", "Tanisa", "Tarania", "Tarvili", "Tavya", "Tedas", "Tedoran", "Telare", "Teldyni", "Teleri", "Telura", "Tenara", "Tendren", "Teranya", "Ternu", "Tereri", "Teroni", "Tevynni", "Thelama", "Thelvamu", "Thera", "Therana", "Thilse", "Tifosi", "Tildsi", "Tilenra", "Tilore", "Tivela", "Tirvina", "Tonas", "Tovisa", "Traldrisa", "Trayna", "Trayniria", "Tredare", "Tredere", "Tremona", "Tadara", "Tadera", "Talamu", "Talare", "Talmeni", "Talmsa", "Talsi", "Taluri", "Taluro", "Tamira", "Tanar", "Tandasea", "Tanisie", "Tanusea", "Tarani", "Tavilu", "Tavynu", "Tedysa", "Teleri", "Telura", "Tenaru", "Tenisi", "Terenu", "Tereri", "Teril", "Teruise", "Teryne", "Thalurea", "Thavere", "Thelsa", "Thelvamu", "Therana", "Thilse", "Thovasi", "Thurisea", "Tilena", "Tilore", "Tinaso", "Tirasie", "Tirele", "Tolmera", "Tolvise", "Tolvone", "Tonas", "Tonasi", "Toranu", "Torasa", "Torosi", "Traldrisa", "Traynili", "Tredere", "Tremona", "Trerayna", "Trivura", "Tumsa", "Tunila", "Tuvene", "Tuvenie", "Tuveso"];

	//U Names
	var wordlistU = ["Ulenea", "Uleni", "Ulmesi", "Ulmiso", "Ulvena", "Ulveni", "Ulyne", "Ulyno", "Unila", "Urandile", "Urene", "Uresa", "Ureso", "Urtisa", "Urtiso", "Uryne", "Uupse", "Uvisea", "Uvoo", "Udrasi", "Ulene", "Urada", "Urava", "Uravasa", "Ureso", "Urila", "Urili", "Urona", "Urrila", "Uryne", "Uthisii"]

	//V Names
	var wordlistV = ["Vadramea", "Vadusa", "Vadyne", "Vala", "Valana", "Valesu", "Valvesu", "Valyia", "Valyn", "Vamoni", "Varasa", "Varila", "Varona", "Varoni", "Vaveli", "Vayne", "Vedelea", "Vedyne", "Velanda", "Velas", "Veldrana", "Velsa", "Venae", "Venoni", "Veran", "Veranim", "Verilu", "Vermethys", "Veru", "Vess", "Vethisa", "Veya", "Vila", "Vilrani", "Vim", "Vindamea", "Vinden", "Visthina", "Vivyne", "Vlaasti", "Vlesyl", "Voldsea", "Volene", "Volmyni", "Volyn", "Vrali", "Vuri", "Vurila", "Vadeni", "Vadramea", "Vadusa", "Valveli", "Valvesu", "Valvosa", "Valyne", "Varasa", "Varenu", "Varona", "Varvsa", "Vaveli", "Vedelea", "Velanda", "Velyna", "Venasa", "Vendrela", "Verara", "Vevrana", "Vilvyni", "Vindamea", "Vindyne", "Vireveri", "Vivyne", "Volene", "Volmyni", "Voneri", "Vuldronu", "Vulyne"];

	//W Names
	var wordlistW = ["Wren"];

	//X Names
	var wordlistX = ["Xand"];

	//Y Names
	var wordlistY = ["Yivyene"];

	//Z Names
	var wordlistZ = ["Zaristesi"]

	//randomizationss
	var randomNumberA = parseInt(Math.random() * wordlistA.length);
	var randomNumberB = parseInt(Math.random() * wordlistB.length);
	var randomNumberC = parseInt(Math.random() * wordlistC.length);
	var randomNumberD = parseInt(Math.random() * wordlistD.length);
	var randomNumberE = parseInt(Math.random() * wordlistE.length);
	var randomNumberF = parseInt(Math.random() * wordlistF.length);
	var randomNumberG = parseInt(Math.random() * wordlistG.length);
	var randomNumberH = parseInt(Math.random() * wordlistH.length);
	var randomNumberI = parseInt(Math.random() * wordlistI.length);
	var randomNumberJ = parseInt(Math.random() * wordlistJ.length);
	var randomNumberK = parseInt(Math.random() * wordlistK.length);
	var randomNumberL = parseInt(Math.random() * wordlistL.length);
	var randomNumberM = parseInt(Math.random() * wordlistM.length);
	var randomNumberN = parseInt(Math.random() * wordlistN.length);
	var randomNumberO = parseInt(Math.random() * wordlistO.length);
	var randomNumberP = parseInt(Math.random() * wordlistP.length);
	var randomNumberQ = parseInt(Math.random() * wordlistQ.length);
	var randomNumberR = parseInt(Math.random() * wordlistR.length);
	var randomNumberS = parseInt(Math.random() * wordlistS.length);
	var randomNumberT = parseInt(Math.random() * wordlistT.length);
	var randomNumberU = parseInt(Math.random() * wordlistU.length);
	var randomNumberV = parseInt(Math.random() * wordlistV.length);
	var randomNumberW = parseInt(Math.random() * wordlistW.length);
	var randomNumberX = parseInt(Math.random() * wordlistX.length);
	var randomNumberY = parseInt(Math.random() * wordlistY.length);
	var randomNumberZ = parseInt(Math.random() * wordlistZ.length);
	var nameA = wordlistA[randomNumberA];
	var nameB = wordlistB[randomNumberB];
	var nameC = wordlistC[randomNumberC];
	var nameD = wordlistD[randomNumberD];
	var nameE = wordlistE[randomNumberE];
	var nameF = wordlistF[randomNumberF];
	var nameG = wordlistG[randomNumberG];
	var nameH = wordlistH[randomNumberH];
	var nameI = wordlistI[randomNumberI];
	var nameJ = wordlistJ[randomNumberJ];
	var nameK = wordlistK[randomNumberK];
	var nameL = wordlistL[randomNumberL];
	var nameM = wordlistM[randomNumberM];
	var nameN = wordlistN[randomNumberN];
	var nameO = wordlistO[randomNumberO];
	var nameP = wordlistP[randomNumberP];
	var nameQ = wordlistQ[randomNumberQ];
	var nameR = wordlistR[randomNumberR];
	var nameS = wordlistS[randomNumberS];
	var nameT = wordlistT[randomNumberT];
	var nameU = wordlistU[randomNumberU];
	var nameV = wordlistV[randomNumberV];
	var nameW = wordlistW[randomNumberW];
	var nameX = wordlistX[randomNumberX];
	var nameY = wordlistY[randomNumberY];
	var nameZ = wordlistZ[randomNumberZ];



	if (name1.toLowerCase().charAt(0) == 'a') {
		document.getElementById("name1").innerHTML = nameA;
		//console.log(nameA);
	} else if (name1.toLowerCase().charAt(0) == 'b') {
		document.getElementById("name1").innerHTML = nameB;
	} else if (name1.toLowerCase().charAt(0) == 'c') {
		document.getElementById("name1").innerHTML = nameC;
	} else if (name1.toLowerCase().charAt(0) == 'd') {
		document.getElementById("name1").innerHTML = nameD;
	} else if (name1.toLowerCase().charAt(0) == 'e') {
		document.getElementById("name1").innerHTML = nameE;
	} else if (name1.toLowerCase().charAt(0) == 'f') {
		document.getElementById("name1").innerHTML = nameF;
	} else if (name1.toLowerCase().charAt(0) == 'g') {
		document.getElementById("name1").innerHTML = nameG;
	} else if (name1.toLowerCase().charAt(0) == 'h') {
		document.getElementById("name1").innerHTML = nameH;
	} else if (name1.toLowerCase().charAt(0) == 'i') {
		document.getElementById("name1").innerHTML = nameI;
	} else if (name1.toLowerCase().charAt(0) == 'j') {
		document.getElementById("name1").innerHTML = nameJ;
	} else if (name1.toLowerCase().charAt(0) == 'k') {
		document.getElementById("name1").innerHTML = nameK;
	} else if (name1.toLowerCase().charAt(0) == 'l') {
		document.getElementById("name1").innerHTML = nameL;
	} else if (name1.toLowerCase().charAt(0) == 'm') {
		document.getElementById("name1").innerHTML = nameM;
	} else if (name1.toLowerCase().charAt(0) == 'n') {
		document.getElementById("name1").innerHTML = nameN;
	} else if (name1.toLowerCase().charAt(0) == 'o') {
		document.getElementById("name1").innerHTML = nameO;
	} else if (name1.toLowerCase().charAt(0) == 'p') {
		document.getElementById("name1").innerHTML = nameP;
	} else if (name1.toLowerCase().charAt(0) == 'q') {
		document.getElementById("name1").innerHTML = nameQ;
	} else if (name1.toLowerCase().charAt(0) == 'r') {
		document.getElementById("name1").innerHTML = nameR;
	} else if (name1.toLowerCase().charAt(0) == 's') {
		document.getElementById("name1").innerHTML = nameS;
	} else if (name1.toLowerCase().charAt(0) == 't') {
		document.getElementById("name1").innerHTML = nameT;
	} else if (name1.toLowerCase().charAt(0) == 'u') {
		document.getElementById("name1").innerHTML = nameU;
	} else if (name1.toLowerCase().charAt(0) == 'v') {
		document.getElementById("name1").innerHTML = nameV;
	} else if (name1.toLowerCase().charAt(0) == 'w') {
		document.getElementById("name1").innerHTML = nameW;
	} else if (name1.toLowerCase().charAt(0) == 'x') {
		document.getElementById("name1").innerHTML = nameX;
	} else if (name1.toLowerCase().charAt(0) == 'y') {
		document.getElementById("name1").innerHTML = nameY;
	} else if (name1.toLowerCase().charAt(0) == 'z') {
		document.getElementById("name1").innerHTML = nameZ;
	}
	//Family Names

	//A Names
	var wordlistA = ["Adram", "Adryn", "Adus", "Alam", "Alan", "Alari", "Alvor", "Amori", "Andalor", "Alas", "Aran", "Arys", "Adas", "Adus", "Alor", "Andaren", "Areleth", "Arenim", "Aravel", "Aren", "Adlaron", "Alam", "Alar", "Alari", "Alas", "Alasien", "Althranis", "Alvor", "Amurith", "Andalor", "Andral", "Andules", "Aradil", "Arano", "Arelas", "Aren", "Arendis", "Arethan", "Arona", "Arvu", "Athram", "Avayn", "Avel", "Andothan", "Andral", "Andrani", "Andrilo", "Androm", "Andromo", "Androthi", "Apo", "Aradil", "Aram", "Areloth", "Ares", "Areth", "Arns", "Arval", "Athelvis", "Athin", "Athones", "Avani", "Avel", "Avilo"];

	//B Names
	var wordlistB = ["Bail", "Balu", "Balvel", "Bandu", "Baren", "Baro", "Barus", "Baryon", "Barys", "Bedas", "Belaal", "Belan", "Belaram", "Beldros", "Beleran", "Beloren", "Bels", "Belvilo", "Benethran", "Beran", "Bereloth", "Berendus", "Berer", "Bethalas", "Bethrimo", "Brilyn", "Baram", "Barelo", "Baren", "Baro", "Barus", "Baryon", "Barys", "Bavani", "Bedas", "Belaal", "Belan", "Belaram", "Belden", "Beloren", "Bels", "Belvani", "Belvayn", "Belvilo", "Bemis", "Benelas", "Beneran", "Benethran", "Beni", "Bereloth", "Beren", "Berendus", "Berer", "Bero", "Bethrano", "Bethrimo", "Bradyn", "Braryn", "Braven", "Brenos", "Brenur", "Brilyn"];

	//C Names
	var wordlistC = ["Carvaren"];

	//D Names
	var wordlistD = ["Dalas", "Dalis", "Dalobar", "Dalomo", "Dals", "Dalvani", "Damori", "Danoran", "Daram", "Darano", "Daren", "Darethran", "Darothril", "Darvel", "Dathren", "Davor", "Davus", "Daynes", "Delms", "Deltis", "Delvi", "Demnevanni", "Deras", "Dilmyn", "Dobar", "Doran", "Doren", "Dorvayn", "Doves", "Dradas", "Dralayn", "Dralen", "Dralno", "Drals", "Drath", "Drathen", "Dredayn", "Dredil", "Dreleth", "Dreloth", "Dres", "Dreth", "Driler", "Drilvi", "Drin", "Drinith", "Drivam", "Drobar", "Drolan", "Drolnor", "Drora", "Droryn", "Droth", "Drurel", "Dulfass", "Dulni", "Duro", "Dalo", "Dals", "Dalvel", "Dalvilu", "Daral", "Daram", "Dareel", "Darithran", "Darothril", "Darvel", "Davor", "Delenu", "Demnevanni", "Derith", "Devani", "Diina", "Dobar", "Doran", "Doronil", "Drad", "Dralas", "Drals", "Dredil", "Drel", "Drelen", "Drenduf", "Driler", "Drin", "Drivam", "Drothas", "Drothro", "Duleri", "Dulo"];

	//E Names
	var wordlistE = ["Elarven", "Elval", "Elvul", "Ertis", "Evos", "Esen"];

	//F Names
	var wordlistF = ["Falandas", "Falavel", "Falos", "Fals", "Falvani", "Famori", "Faralen", "Farandas", "Faravel", "Fareloth", "Farethan", "Farothran", "Fatheran", "Fathyron", "Favani", "Faveran", "Fedos", "Felas", "Felder", "Fels", "Fendyn", "Fererus", "Fevur", "Folvyn"];

	//G Names
	var wordlistG = ["Gadar", "Galen", "Gals", "Garer", "Garil", "Garvon", "Gavos", "Gavyn", "Gidran", "Gilaram", "Gilvani", "Gilvilo", "Gimalvel", "Gimayn", "Gindu", "Ginith", "Giral", "Giralvel", "Girando", "Girano", "Girendas", "Girethi", "Girothran", "Girvayne", "Githendas", "Githrano", "Givyn", "Gobor", "Golathyn", "Gols", "Goran", "Gorvas", "Guls", "Guvron", "Gals", "Garil", "Gathram", "Gavos", "Gethanol", "Gilvayn", "Gilveni", "Ginith", "Giralvel", "Girethi", "Githendas", "Githirith", "Golathyn", "Goran", "Guls"];

	//H Names
	var wordlistH = ["Harrinat", "Hedoren", "Hedran", "Heladren", "Helas", "Heleran", "Heredon", "Hlaalo", "Hlandu", "Hlaran", "Hlarar", "Hlaren", "Hlas", "Hledas", "Hler", "Hlervu", "Hardil", "Heladren", "Helni", "Helothan", "Helothran", "Helothren", "Herandus", "Herendas", "Herothran", "Hlaano", "Hlando", "Hlarar", "Hlarys", "Hledas", "Hledri"];

	//I Names
	var wordlistI = ["Ildram", "Ilnith", "Imayn", "Indavel", "Indobar", "Indoran", "Indules", "Inlador", "Irathi", "Irethi", "Ildram", "Illoro", "Ilnith", "Imyam", "Indaram", "Indarys", "Indothan", "Inlador", "Inladori"];

	//J Names
	var wordlistJ = ["Jaxilsu"];

	//K Names
	var wordlistK = ["Kren"];

	//L Names
	var wordlistL = ["Lathoril", "Ledd", "Lem", "Lirvu", "Llanith", "Llarvys", "Llenim", "Lleran", "Llervi", "Llervu", "Lleryn", "Llethan", "Lloran", "Llothas", "Lonavo", "Ledd", "Lladri", "Llandu", "Llendo", "Llerayn", "Llervi", "Lleryn", "Lloryn", "Llothas", "Llothri"];

	//M Names
	var wordlistM = ["Madalas", "Madalvel", "Madryon", "Malas", "Maloren", "Malvayn", "Manas", "Manel", "Mano", "Marvayn", "Marvos", "Mathendis", "Mavandes", "Mels", "Menas", "Mencele", "Merys", "Milar", "Milo", "Mirel", "Molor", "Moran", "Madalas", "Madryon", "Malena", "Maleran", "Maralvel", "Marano", "Marvos", "Maryon", "Mathendis", "Mencele", "Mobaner", "Moorsmith", "Moren", "Mothril"];

	//N Names
	var wordlistN = ["Nadus", "Naram", "Nelas", "Neleth", "Nerandas", "Nerendas", "Nerethi", "Nerothan", "Nervion", "Nethalen", "Nethan", "Nethri", "Nilvon", "Nirith", "Nirvayn", "Nolar", "Nadus", "Naram", "Nelas", "Neleth", "Nerandas", "Nerendas", "Nerethi", "Nerothan", "Nervion", "Nethalen", "Nethan", "Nethri", "Nilvon", "Nirith", "Nirvayn"];

	//O Names
	var wordlistO = ["Ofemalen", "Omani", "Omaren", "Ondyn", "Onmar", "Orelu", "Ores", "Oreyn", "Othralas", "Othrobar", "Ofemalen", "Omani", "Omaren", "Ondyn", "Onmar", "Orelu", "Ores", "Oreyn", "Othralas"];

	//P Names
	var wordlistP = ["Pels"];

	//Q Names
	var wordlistQ = ["Quintella"];

	//R Names
	var wordlistR = ["Radarys", "Radas", "Radathren", "Raledran", "Ralen", "Ralethran", "Raloran", "Ralren", "Ralvel", "Ramothran", "Randaro", "Randas", "Raram", "Rathri", "Rathryon", "Raviro", "Redas", "Redothan", "Relavel", "Reledran", "Reloren", "Relthren", "Relvani", "Rendas", "Reni", "Renimus", "Resvalyn", "Rethandus", "Rindu", "Rinith", "Rithari", "Rivul", "Romari", "Romoran", "Rondas", "Ronen", "Rothrano", "Rurvyn", "Ryon", "Radarys", "Radobar", "Ralaal", "Raloran", "Ralvani", "Ralvayn", "Ramarys", "Ramoran", "Ramori", "Ramothran", "Randas", "Raram", "Rathri", "Redas", "Redothril", "Reladren", "Relarys", "Relavel", "Relenim", "Relnim", "Reloro", "Reloth", "Relvani", "Rendo", "Reni", "Renim", "Reram", "Rervam", "Rethelas", "Rethul", "Reyas", "Rilvayn", "Rindo", "Rindu", "Rinith", "Rivul", "Rols", "Romandas", "Romari", "Romavel", "Romayn", "Romoran", "Romothran", "Rothalen", "Rothalnim", "Rothalor", "Rothan", "Rothari", "Rotheloth", "Rotheran", "Rothrano", "Rothren", "Rurvyn"];

	//S Names
	var wordlistS = ["Sero", "Sadalas", "Sadalvel", "Sadas", "Sadoro", "Sadralo", "Sadrano", "Sadryon", "Sadrys", "Sala", "Salam", "Salandas", "Salaren", "Salaron", "Salavel", "Salen", "Salenim", "Salmyn", "Salobar", "Salor", "Salvi", "Samandas", "Sandus", "Sarandus", "Sarathram", "Sareloth", "Sarethan", "Sari", "Sarinith", "Sarobar", "Sarothran", "Sarothren", "Saryoni", "Sathendas", "Sathis", "Sathren", "Sathryon", "Savani", "Sedrethi", "Sedri", "Selandas", "Selaro", "Selarys", "Seles", "Selothan", "Selvayn", "Sendu", "Senoril", "Seralas", "Serano", "Seri", "Serothan", "Serven", "Sethandas", "Sethandus", "Sethri", "Surishpi", "Sarothril", "Sarvani", "Sedarys", "Selvayn", "Sero", "Sevan", "Sadas", "Sadralo", "Sadrano", "Sadreno", "Sadris", "Sadryon", "Sadus", "Salas", "Salor", "Salvi", "Salvilo", "Samori", "Sandras", "Saram", "Sareloth", "Sarinith", "Sarothran", "Sarothril", "Sarvayn", "Savel", "Sedri", "Selandas", "Selarys", "Selas", "Selos", "Seloth", "Sendas", "Senoril", "Seralas", "Seran", "Serano", "Serelnim", "Sero", "Seryiil", "Severin", "Sildreth"];

	//T Names
	var wordlistT = ["Talnarith", "Tedala", "Teddalennu", "Telendas", "Teran", "Terandas", "Terano", "Teri", "Thadus", "Thando", "Thanlen", "Tharen", "Tharvi", "Tharyon", "Tharys", "Thelas", "Theloth", "Thendas", "Thenim", "Thindo", "Thirvayn", "Talds", "Tedalen", "Tedran", "Telandas", "Telmon", "Telnim", "Telvani", "Teneran", "Terandas", "Terano", "Teri", "Teria", "Terilu", "Tervayn", "Thalas", "Thalor", "Thando", "Tharam", "Tharyon", "Tharys", "Theman", "Thenim", "Therayn", "Therethi", "Thilandas", "Thilarvel", "Thimalvel", "Thindo", "Thiralas", "Thireloth", "Thirith", "Thirothan", "Thirvayn", "Tilvur", "Tistar", "Tobor", "Trandel", "Tunel", "Tyravel", "Telvayn", "Tharys", "Telleno"];

	//U Names
	var wordlistU = ["Uleni", "Ulessen", "Ulom", "Ulvel", "Ulver", "Urns", "Urvon", "Urvyn", "Uvalas", "Uvalen", "Uvalor", "Uvani", "Uvaram", "Uveleth", "Uvulas"]

	//V Names
	var wordlistV = ["Vadryon", "Valaai", "Valas", "Valen", "Valno", "Valor", "Vando", "Vandram", "Varo", "Vavas", "Vavyn", "Vedaren", "Vedralu", "Vedrano", "Velendas", "Velni", "Veloren", "Veloth", "Velothren", "Velothril", "Veralor", "Verelas", "Verendas", "Veri", "Verilnith", "Verothan", "Viake", "Vian", "Vibato", "Vidron", "Vilas", "Vinden", "Volos", "Verelnim", "Valas", "Valen", "Valos", "Vando", "Varyon", "Varyoni", "Vashi", "Vavas", "Vedralu", "Vedran", "Velador", "Velni", "Ven", "Vendil", "Vendu", "Veralas", "Veralor", "Veren", "Verendas", "Verenim", "Veri", "Vilas", "Vildan", "Viri", "Virith", "Vlaren", "Volek", "Volos", "Voren", "Voung", "Vules"]

	//W Names
	var wordlistW = [" "]

	//X Names
	var wordlistX = [" "]

	//Y Names
	var wordlistY = ["Yahaz"];

	//Z Names
	var wordlistZ = [""]

	//randomizationss
	var randomNumberA = parseInt(Math.random() * wordlistA.length);
	var randomNumberB = parseInt(Math.random() * wordlistB.length);
	var randomNumberC = parseInt(Math.random() * wordlistC.length);
	var randomNumberD = parseInt(Math.random() * wordlistD.length);
	var randomNumberE = parseInt(Math.random() * wordlistE.length);
	var randomNumberF = parseInt(Math.random() * wordlistF.length);
	var randomNumberG = parseInt(Math.random() * wordlistG.length);
	var randomNumberH = parseInt(Math.random() * wordlistH.length);
	var randomNumberI = parseInt(Math.random() * wordlistI.length);
	var randomNumberJ = parseInt(Math.random() * wordlistJ.length);
	var randomNumberK = parseInt(Math.random() * wordlistK.length);
	var randomNumberL = parseInt(Math.random() * wordlistL.length);
	var randomNumberM = parseInt(Math.random() * wordlistM.length);
	var randomNumberN = parseInt(Math.random() * wordlistN.length);
	var randomNumberO = parseInt(Math.random() * wordlistO.length);
	var randomNumberP = parseInt(Math.random() * wordlistP.length);
	var randomNumberQ = parseInt(Math.random() * wordlistQ.length);
	var randomNumberR = parseInt(Math.random() * wordlistR.length);
	var randomNumberS = parseInt(Math.random() * wordlistS.length);
	var randomNumberT = parseInt(Math.random() * wordlistT.length);
	var randomNumberU = parseInt(Math.random() * wordlistU.length);
	var randomNumberV = parseInt(Math.random() * wordlistV.length);
	var randomNumberW = parseInt(Math.random() * wordlistW.length);
	var randomNumberX = parseInt(Math.random() * wordlistX.length);
	var randomNumberY = parseInt(Math.random() * wordlistY.length);
	var randomNumberZ = parseInt(Math.random() * wordlistZ.length);
	var nameA = wordlistA[randomNumberA];
	var nameB = wordlistB[randomNumberB];
	var nameC = wordlistC[randomNumberC];
	var nameD = wordlistD[randomNumberD];
	var nameE = wordlistE[randomNumberE];
	var nameF = wordlistF[randomNumberF];
	var nameG = wordlistG[randomNumberG];
	var nameH = wordlistH[randomNumberH];
	var nameI = wordlistI[randomNumberI];
	var nameJ = wordlistJ[randomNumberJ];
	var nameK = wordlistK[randomNumberK];
	var nameL = wordlistL[randomNumberL];
	var nameM = wordlistM[randomNumberM];
	var nameN = wordlistN[randomNumberN];
	var nameO = wordlistO[randomNumberO];
	var nameP = wordlistP[randomNumberP];
	var nameQ = wordlistQ[randomNumberQ];
	var nameR = wordlistR[randomNumberR];
	var nameS = wordlistS[randomNumberS];
	var nameT = wordlistT[randomNumberT];
	var nameU = wordlistU[randomNumberU];
	var nameV = wordlistV[randomNumberV];
	var nameW = wordlistW[randomNumberV];
	var nameX = wordlistX[randomNumberX];
	var nameY = wordlistY[randomNumberY];
	var nameZ = wordlistZ[randomNumberZ];



	if (name2.toLowerCase().charAt(0) == 'a') {
		document.getElementById("name2").innerHTML = nameA;
		//console.log(nameA);
	} else if (name2.toLowerCase().charAt(0) == 'b') {
		document.getElementById("name2").innerHTML = nameB;
	} else if (name2.toLowerCase().charAt(0) == 'c') {
		document.getElementById("name2").innerHTML = nameC;
	} else if (name2.toLowerCase().charAt(0) == 'd') {
		document.getElementById("name2").innerHTML = nameD;
	} else if (name2.toLowerCase().charAt(0) == 'e') {
		document.getElementById("name2").innerHTML = nameE;
	} else if (name2.toLowerCase().charAt(0) == 'f') {
		document.getElementById("name2").innerHTML = nameF;
	} else if (name2.toLowerCase().charAt(0) == 'g') {
		document.getElementById("name2").innerHTML = nameG;
	} else if (name2.toLowerCase().charAt(0) == 'h') {
		document.getElementById("name2").innerHTML = nameH;
	} else if (name2.toLowerCase().charAt(0) == 'i') {
		document.getElementById("name2").innerHTML = nameI;
	} else if (name2.toLowerCase().charAt(0) == 'j') {
		document.getElementById("name2").innerHTML = nameJ;
	} else if (name2.toLowerCase().charAt(0) == 'k') {
		document.getElementById("name2").innerHTML = nameK;
	} else if (name2.toLowerCase().charAt(0) == 'l') {
		document.getElementById("name2").innerHTML = nameL;
	} else if (name2.toLowerCase().charAt(0) == 'm') {
		document.getElementById("name2").innerHTML = nameM;
	} else if (name2.toLowerCase().charAt(0) == 'n') {
		document.getElementById("name2").innerHTML = nameN;
	} else if (name2.toLowerCase().charAt(0) == 'o') {
		document.getElementById("name2").innerHTML = nameO;
	} else if (name2.toLowerCase().charAt(0) == 'p') {
		document.getElementById("name2").innerHTML = nameP;
	} else if (name2.toLowerCase().charAt(0) == 'q') {
		document.getElementById("name2").innerHTML = nameQ;
	} else if (name2.toLowerCase().charAt(0) == 'r') {
		document.getElementById("name2").innerHTML = nameR;
	} else if (name2.toLowerCase().charAt(0) == 's') {
		document.getElementById("name2").innerHTML = nameS;
	} else if (name2.toLowerCase().charAt(0) == 't') {
		document.getElementById("name2").innerHTML = nameT;
	} else if (name2.toLowerCase().charAt(0) == 'u') {
		document.getElementById("name2").innerHTML = nameU;
	} else if (name2.toLowerCase().charAt(0) == 'v') {
		document.getElementById("name2").innerHTML = nameV;
	} else if (name2.toLowerCase().charAt(0) == 'w') {
		document.getElementById("name2").innerHTML = nameW;
	} else if (name2.toLowerCase().charAt(0) == 'x') {
		document.getElementById("name2").innerHTML = nameX;
	} else if (name2.toLowerCase().charAt(0) == 'y') {
		document.getElementById("name2").innerHTML = nameY;
	} else if (name2.charAt(0) == 'z') {
		document.getElementById("name2").innerHTML = nameZ;
	}
}
generatemale.addEventListener("click", namegenMale);

generatefemale.addEventListener("click", namegenFemale);
