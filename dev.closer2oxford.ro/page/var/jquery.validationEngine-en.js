

(function($j) {
	$j.fn.validationEngineLanguage = function() {};
	$j.validationEngineLanguage = {
		newLang: function() {
			$j.validationEngineLanguage.allRules = 	{
				"required":{    			// Add your regex rules here, you can take telephone as an example
						"regex":"none",
						"alertText":"* Acesta e un camp obligatoriu",
						"alertTextCheckboxMultiple":"* Alege o optiune",
						"alertTextCheckboxe":"* Acest checkbox e obligatoriu"},
					"length":{
						"regex":"none",
						"alertText":"*Intre ",
						"alertText2":" si ",
						"alertText3": " caractere permise"},
					"maxCheckbox":{
						"regex":"none",
						"alertText":"* Ai bifat prea multe casute"},	
					"minCheckbox":{
						"regex":"none",
						"alertText":"* Alege ",
						"alertText2":" optiuni"},	
					"confirm":{
						"regex":"none",
						"alertText":"* Campurile nu se potrivesc"},		
					"telephone":{
						"regex":"/^[0-9\-\(\)\ ]+$j/",
						"alertText":"* Numar de telefon invalid"},	
					"email":{
						"regex":"/^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$j/",
						"alertText":"* Adresa de mail invalida"},	
					"date":{
                         "regex":"/^[0-9]{4}\-\[0-9]{1,2}\-\[0-9]{1,2}$j/",
                         "alertText":"* Invalid date, must be in YYYY-MM-DD format"},
					"onlyNumber":{
						"regex":"/^[0-9\ ]+$j/",
						"alertText":"* Numai numere"},	
					"noSpecialCaracters":{
						"regex":"/^[0-9a-zA-Z]+$j/",
						"alertText":"* Caracterele speciale nu sunt permise"},	
					"ajaxEmail":{
						"file":"/page/login_user/validate_email",
						"extraData":"name=eric",
						"alertTextOk":"* Acest mail e disponibil",//ar trebui sa fie override-uit de ajax
						"alertTextLoad":"* Se incarca, asteapta",
						"alertText":"* Acest email e invalid"},//ar trebui sa fie override-uit de ajax
					 "ajaxEmailNewsletter":{
						"file":"/page/login_user/validate_email_newsletter",
						"extraData":"name=eric",
						"alertTextOk":"* Acest mail e disponibil",//ar trebui sa fie override-uit de ajax
						"alertTextLoad":"* Se incarca, asteapta",
						"alertText":"* Acest email e invalid"},//ar trebui sa fie override-uit de ajax
					"ajaxEmailArbitru":{//wtf?.. //todo: revino aici!
						"file":"/page/register_arbitri/validate_email",
						"extraData":"name=eric",
						"alertTextOk":"* This email is available",	
						"alertTextLoad":"* Loading, please wait",
						"alertText":"* This email is invalid"},	
					"ajaxName":{
						"file":"validateUser.php",
						"alertText":"* This name is already taken",
						"alertTextOk":"* This name is available",	
						"alertTextLoad":"* Loading, please wait"},		
					"onlyLetter":{
						"regex":"/^[a-zA-Z\ \']+$j/",
						"alertText":"* Letters only"}
					}	
		}
	}
})(jQuery);

$j(document).ready(function() {	
	$j.validationEngineLanguage.newLang()
});
