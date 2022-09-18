/*Fonction changement de page*/

function Page_index(){
	window.top.window.scrollTo(0,0)
    document.getElementById('page_index').style.display = 'block';	
	document.getElementById('page_produit').style.display = 'none';
	document.getElementById('page_contact').style.display = 'none';
}

function Page_produit(){
	window.top.window.scrollTo(0,0)
    document.getElementById('page_index').style.display = 'none';	
	document.getElementById('page_produit').style.display = 'block';
	document.getElementById('page_contact').style.display = 'none';
}

function Page_contact(){
	window.top.window.scrollTo(0,0)
    document.getElementById('page_index').style.display = 'none';	
	document.getElementById('page_produit').style.display = 'none';
	document.getElementById('page_contact').style.display = 'block';
}

/*Fonction liste des produits*/

function liste_on() {
    document.getElementById("produit_sidebar_list_box").style.display = "block";
	document.getElementById("produit_sidebar_image").style.transform = "rotate(180deg)";
}

function liste_off() {
    document.getElementById("produit_sidebar_list_box").style.display = "none";
	document.getElementById("produit_sidebar_image").style.transform = "rotate(0deg)";
}

function liste1() {
    document.getElementById("produit_sidebar_list_text_top1").innerHTML = "Tout ";

	document.getElementById("produit_box_in1").style.display = "block";
	document.getElementById("produit_box_in2").style.display = "block";
	document.getElementById("produit_box_in3").style.display = "block";
	document.getElementById("produit_box_in4").style.display = "block";
	document.getElementById("produit_box_in5").style.display = "block";
	document.getElementById("produit_box_in6").style.display = "block";
	document.getElementById("produit_box_in7").style.display = "block";
	document.getElementById("produit_box_in8").style.display = "block";
	document.getElementById("produit_box_in9").style.display = "block";
	document.getElementById("produit_box_in10").style.display = "block";
	document.getElementById("produit_box_in11").style.display = "block";
	document.getElementById("produit_box_in12").style.display = "block";
	document.getElementById("produit_box_in13").style.display = "block";
	document.getElementById("produit_box_in14").style.display = "block";
	document.getElementById("produit_box_in15").style.display = "block";
	document.getElementById("produit_box_in16").style.display = "block";
	document.getElementById("produit_box_in17").style.display = "block";
	document.getElementById("produit_box_in18").style.display = "block";
}

function liste2() {
    document.getElementById("produit_sidebar_list_text_top1").innerHTML = "Pains ";

	document.getElementById("produit_box_in1").style.display = "none";
	document.getElementById("produit_box_in2").style.display = "block";
	document.getElementById("produit_box_in3").style.display = "block";
	document.getElementById("produit_box_in4").style.display = "none";
	document.getElementById("produit_box_in5").style.display = "none";
	document.getElementById("produit_box_in6").style.display = "none";
	document.getElementById("produit_box_in7").style.display = "none";
	document.getElementById("produit_box_in8").style.display = "none";
	document.getElementById("produit_box_in9").style.display = "none";
	document.getElementById("produit_box_in10").style.display = "none";
	document.getElementById("produit_box_in11").style.display = "none";
	document.getElementById("produit_box_in12").style.display = "block";
	document.getElementById("produit_box_in13").style.display = "block";
	document.getElementById("produit_box_in14").style.display = "none";
	document.getElementById("produit_box_in15").style.display = "none";
	document.getElementById("produit_box_in16").style.display = "none";
	document.getElementById("produit_box_in17").style.display = "none";
	document.getElementById("produit_box_in18").style.display = "none";
}

function liste3() {
    document.getElementById("produit_sidebar_list_text_top1").innerHTML = "Pâtisseries ";

	document.getElementById("produit_box_in1").style.display = "block";
	document.getElementById("produit_box_in2").style.display = "none";
	document.getElementById("produit_box_in3").style.display = "none";
	document.getElementById("produit_box_in4").style.display = "none";
	document.getElementById("produit_box_in5").style.display = "none";
	document.getElementById("produit_box_in6").style.display = "none";
	document.getElementById("produit_box_in7").style.display = "block";
	document.getElementById("produit_box_in8").style.display = "none";
	document.getElementById("produit_box_in9").style.display = "block";
	document.getElementById("produit_box_in10").style.display = "none";
	document.getElementById("produit_box_in11").style.display = "none";
	document.getElementById("produit_box_in12").style.display = "none";
	document.getElementById("produit_box_in13").style.display = "none";
	document.getElementById("produit_box_in14").style.display = "block";
	document.getElementById("produit_box_in15").style.display = "none";
	document.getElementById("produit_box_in16").style.display = "none";
	document.getElementById("produit_box_in17").style.display = "none";
	document.getElementById("produit_box_in18").style.display = "block";
}

function liste4() {
    document.getElementById("produit_sidebar_list_text_top1").innerHTML = "Viennoiseries ";

	document.getElementById("produit_box_in1").style.display = "none";
	document.getElementById("produit_box_in2").style.display = "none";
	document.getElementById("produit_box_in3").style.display = "none";
	document.getElementById("produit_box_in4").style.display = "none";
	document.getElementById("produit_box_in5").style.display = "block";
	document.getElementById("produit_box_in6").style.display = "block";
	document.getElementById("produit_box_in7").style.display = "none";
	document.getElementById("produit_box_in8").style.display = "none";
	document.getElementById("produit_box_in9").style.display = "none";
	document.getElementById("produit_box_in10").style.display = "block";
	document.getElementById("produit_box_in11").style.display = "block";
	document.getElementById("produit_box_in12").style.display = "none";
	document.getElementById("produit_box_in13").style.display = "none";
	document.getElementById("produit_box_in14").style.display = "none";
	document.getElementById("produit_box_in15").style.display = "block";
	document.getElementById("produit_box_in16").style.display = "none";
	document.getElementById("produit_box_in17").style.display = "none";
	document.getElementById("produit_box_in18").style.display = "none";
}

function liste5() {
    document.getElementById("produit_sidebar_list_text_top1").innerHTML = "Sucreries ";

	document.getElementById("produit_box_in1").style.display = "none";
	document.getElementById("produit_box_in2").style.display = "none";
	document.getElementById("produit_box_in3").style.display = "none";
	document.getElementById("produit_box_in4").style.display = "block";
	document.getElementById("produit_box_in5").style.display = "none";
	document.getElementById("produit_box_in6").style.display = "none";
	document.getElementById("produit_box_in7").style.display = "none";
	document.getElementById("produit_box_in8").style.display = "block";
	document.getElementById("produit_box_in9").style.display = "none";
	document.getElementById("produit_box_in10").style.display = "none";
	document.getElementById("produit_box_in11").style.display = "none";
	document.getElementById("produit_box_in12").style.display = "none";
	document.getElementById("produit_box_in13").style.display = "none";
	document.getElementById("produit_box_in14").style.display = "none";
	document.getElementById("produit_box_in15").style.display = "none";
	document.getElementById("produit_box_in16").style.display = "block";
	document.getElementById("produit_box_in17").style.display = "block";
	document.getElementById("produit_box_in18").style.display = "none";
}

/*Fonction envoie du formulaire*/

function Formulaire() {
	var nom = document.getElementById("nom").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	
	if (nom == '') {
		Alert();
		
	} else if (email == '') {
		Alert();

    } else if (message == '') {
		Alert();
	
	} else {

		var url = "https://discord.com/api/webhooks/1013789946345173022/wJ87qxQlb32z9Nx3lYl4F0ZAX4peXFB8iYIH2VN_4DprlRrwzvKt2MObDuvfCxEwpkXt";
		var request = new XMLHttpRequest();
		request.open("POST", url);
		request.setRequestHeader("Content-type", "application/json");

		var myEmbed2 = {
			"title": "Formulaire de contact de mon Portfolio",
			"color": 0xDA7426,
			"fields": [
				{
					"name": "Nom :",
					"value": nom,
				},
				{
					"name": "Email :",
					"value": email,
				},
				{
					"name": "Message :",
					"value": message
				}
			],
		}
		
		var params = {
        username: "Form Bot",
        embeds: [ myEmbed2 ]
		}
    
		request.send(JSON.stringify(params)); 

		Envoiee()
		
		document.getElementById("nom").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
	}
}

/*Alert*/

function Alert() {
	document.getElementById("formulaire_alert").style.animationName = "animation_a";
	setTimeout(Timer14, 700);
	setTimeout(Timer13, 1700);
	setTimeout(Timer12, 2700);
	setTimeout(Timer11, 3700);
	setTimeout(Timer10, 4700);
	setTimeout(Timer9, 5700);
}

function Envoiee() {
	document.getElementById("formulaire_envoie").style.animationName = "animation_c";
	setTimeout(Timer24, 700);
	setTimeout(Timer23, 1700);
	setTimeout(Timer22, 2700);
	setTimeout(Timer21, 3700);
	setTimeout(Timer20, 4700);
	setTimeout(Timer19, 5700);
}

function Timer14(){
	document.getElementById("formulaire_alert_text2").innerHTML = "4";
}

function Timer13(){
	document.getElementById("formulaire_alert_text2").innerHTML = "3";
}

function Timer12(){
	document.getElementById("formulaire_alert_text2").innerHTML = "2";
}

function Timer11(){
	document.getElementById("formulaire_alert_text2").innerHTML = "1";
}

function Timer10(){
	document.getElementById("formulaire_alert_text2").innerHTML = "0";
	document.getElementById("formulaire_alert").style.animationName = "animation_b";
}

function Timer9(){
	document.getElementById("formulaire_alert_text2").innerHTML = "5";
}

function Timer24(){
	document.getElementById("formulaire_envoie_text2").innerHTML = "4";
}

function Timer23(){
	document.getElementById("formulaire_envoie_text2").innerHTML = "3";
}

function Timer22(){
	document.getElementById("formulaire_envoie_text2").innerHTML = "2";
}

function Timer21(){
	document.getElementById("formulaire_envoie_text2").innerHTML = "1";
}

function Timer20(){
	document.getElementById("formulaire_envoie_text2").innerHTML = "0";
	document.getElementById("formulaire_envoie").style.animationName = "animation_d";
}

function Timer19(){
	document.getElementById("formulaire_envoie_text2").innerHTML = "5";
}

/*Animation produits*/

function Animation_on(id) {
	var balise = id + "_in"
	document.getElementById(balise).style.opacity = 1;
}

function Animation_off(id) {
	var balise = id + "_in"
	document.getElementById(balise).style.opacity = 0;
}

/*Animation du menu*/

function Menu_on() {
	document.getElementById("sidebar_top_div6").style.animationName = "animation_a";
}

function Menu_off() {
	document.getElementById("sidebar_top_div6").style.animationName = "animation_b";
}

function Menu_off1() {
	document.getElementById("sidebar_top_div6").style.animationName = "animation_b";
	window.top.window.scrollTo(0,0)
    document.getElementById('page_index').style.display = 'block';	
	document.getElementById('page_produit').style.display = 'none';
	document.getElementById('page_contact').style.display = 'none';
}

function Menu_off2() {
	document.getElementById("sidebar_top_div6").style.animationName = "animation_b";
	window.top.window.scrollTo(0,0)
    document.getElementById('page_index').style.display = 'none';	
	document.getElementById('page_produit').style.display = 'block';
	document.getElementById('page_contact').style.display = 'none';
}

function Menu_off3() {
	document.getElementById("sidebar_top_div6").style.animationName = "animation_b";
	window.top.window.scrollTo(0,0)
    document.getElementById('page_index').style.display = 'none';	
	document.getElementById('page_produit').style.display = 'none';
	document.getElementById('page_contact').style.display = 'block';
}