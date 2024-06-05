$(document).ready(function() {
	$( '.general_information__screen__map' ).show();
	$( '.general_information__screen__list' ).hide();
	$( '.general_information__screen__history' ).hide();
	$( '.general_information__screen__tourist' ).hide();
	$( '.general_information__screen__food' ).hide();
	$("#map").click(function(){
			$( '.general_information__screen__map' ).show();
			$( '.general_information__screen__list' ).hide();
			$( '.general_information__screen__history' ).hide();
			$( '.general_information__screen__tourist' ).hide();
			$( '.general_information__screen__food' ).hide();
			$( '#map' ).css('text-decoration', 'underline');
			$( '#list' ).css('text-decoration', 'none');
			$( '#history' ).css('text-decoration', 'none');
			$( '#tourist' ).css('text-decoration', 'none');
			$( '#food' ).css('text-decoration', 'none');
		});
	$("#list").click(function(){
			$( '.general_information__screen__list' ).show();
			$( '.general_information__screen__map' ).hide();
			$( '.general_information__screen__history' ).hide();
			$( '.general_information__screen__tourist' ).hide();
			$( '.general_information__screen__food' ).hide();
			$( '#map' ).css('text-decoration', 'none');
			$( '#list' ).css('text-decoration', 'underline');
			$( '#history' ).css('text-decoration', 'none');
			$( '#tourist' ).css('text-decoration', 'none');
			$( '#food' ).css('text-decoration', 'none');
		});
	$("#history").click(function(){
			$( '.general_information__screen__map' ).hide();
			$( '.general_information__screen__list' ).hide();
			$( '.general_information__screen__history' ).show();
			$( '.general_information__screen__tourist' ).hide();
			$( '.general_information__screen__food' ).hide();
			$( '#map' ).css('text-decoration', 'none');
			$( '#list' ).css('text-decoration', 'none');
			$( '#history' ).css('text-decoration', 'underline');
			$( '#tourist' ).css('text-decoration', 'none');
			$( '#food' ).css('text-decoration', 'none');
		});
	$("#tourist").click(function(){
			$( '.general_information__screen__map' ).hide();
			$( '.general_information__screen__list' ).hide();
			$( '.general_information__screen__history' ).hide();
			$( '.general_information__screen__tourist' ).show();
			$( '.general_information__screen__food' ).hide();
			$( '#map' ).css('text-decoration', 'none');
			$( '#list' ).css('text-decoration', 'none');
			$( '#history' ).css('text-decoration', 'none');
			$( '#tourist' ).css('text-decoration', 'underline');	
			$( '#food' ).css('text-decoration', 'none');

		});
	$("#food").click(function(){
			$( '.general_information__screen__map' ).hide();
			$( '.general_information__screen__list' ).hide();
			$( '.general_information__screen__history' ).hide();
			$( '.general_information__screen__tourist' ).hide();
			$( '.general_information__screen__food' ).show();
			$( '#map' ).css('text-decoration', 'none');
			$( '#list' ).css('text-decoration', 'none');
			$( '#history' ).css('text-decoration', 'none');
			$( '#tourist' ).css('text-decoration', 'none');
			$( '#food' ).css('text-decoration', 'underline');
		});
});