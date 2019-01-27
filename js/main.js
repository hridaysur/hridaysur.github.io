$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	//init();

	$(document).ready(function() {
        $(document).delegate('.open', 'click', function(event){
            $(this).addClass('oppenned');
            event.stopPropagation();
		})
        $(document).delegate('body', 'click', function(event) {
            $('.open').removeClass('oppenned');
        })
        $(document).delegate('.cls', 'click', function(event){
            $('.open').removeClass('oppenned');
            event.stopPropagation();
        });
	});

	$("#contactForm").submit(function(data){
		var message = {
			name:$("#name").val(),
			email:$("#email").val(),
			msg:$("#msg").val(),
		};

		const eMail = {
			from: 'Portfolio <mailgun@sandboxae38d3c0335b4c488aeb12cfa94fba80.mailgun.org>',
			to: 'hridaysur@yahoo.co.in',
			subject: 'Regarding Contact',
			text: `This is E-mail from portfolio.
				   FROM: ${message.name} <${message.email}>
				   Message: ${message.msg}`
		  };
		
		$.ajax({
			type: "POST",
			contenttype : 'application/json',
			url: "https://pd52ufuz68.execute-api.us-east-2.amazonaws.com/stage/",
			data: JSON.stringify(eMail),
			dataType:'text'
		}).done(function(response){
			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#msg').val('');
			alertify.notify('Message sent succesfully', 'success', 5);
		}).fail(function(error){
			console.log(error);
			alertify.notify('Message sent succesfully', 'alert', 5);
		});
		
		data.preventDefault();
	})

	var parlx1 = document.querySelectorAll('#parlx1');
	window.addEventListener('scroll',function(e){
		var pos = window.pageYOffset;
		for(var i=0; i< parlx1.length; i++){
			var rate = pos * parlx1[i].dataset.rate;
			parlx1[i].style.transform = `translate3d(0px,${rate}px,0px)`;
		}
	})

	ScrollOut();
})();

function closeMenu(){
	$('.open').removeClass('oppenned');
		event.stopPropagation();
}

function checkform(){
	var x = document.forms["contactForm"]["fname"].value;
	if (x == "") {
	  alert("Name must be filled out");
	  event.stopPropagation();
	  return false;
	}
}


