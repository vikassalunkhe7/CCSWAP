jQuery(document).ready(function(){

	$( "a.lang_select" ).click(function () {
		if ( $( ".lang_popup" ).is( ":hidden" ) ) {
			$( ".lang_popup" ).show();
		} else {
			$( ".lang_popup" ).hide();
		}
		return false;
	});

	$( "a.btn_modal_open_wallet" ).click(function () {
		if ( $( ".modal_popup_def_wrap" ).is( ":hidden" ) ) {
			$( ".modal_popup_def_wrap" ).show();
		} else {
			$( ".modal_popup_def_wrap" ).hide();
		}
		return false;
	});

	$( ".bg_modal_popup, .btn_close_modal" ).click(function () {
		$( ".modal_popup_def_wrap" ).hide();
		return false;
	});

	$( ".lang_list a" ).click(function (e) {
		e.preventDefault();
		const nextPage = this.href;
		const selectedLang = nextPage.match(/(\w+)$/i)[1];
		setCookie('lang', selectedLang);
		location.href = nextPage;
	});

}); //end Document ready

function setCookie(key, value) {
	const expires = new Date();
	expires.setTime(expires.getTime() + (10 * 365 * 24 * 60 * 60 * 1000));
	document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

// Roadmap






  
  
