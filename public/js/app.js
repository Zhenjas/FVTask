
const datePattern = /([0-2]\d{1}|3[0-1])\/(0\d{1}|1[0-2])\/(19|20)\d{2}/;
const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const ukPhonePattern = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;

$(document).ready(function () {

	$('#birthday-picker').datepicker({
		dateFormat: "dd/mm/yyyy",
    	language: 'en'
	});

	$('#btn1').on('click', function() {
	    let valid = true,
	        message = '';
	    
	    $('.validity').hide();
	    $('.group1').each(function() {
	        let $this = $(this),
	            inputName = $this.attr("name");

	        if(!$this.val()) {
	            valid = false;
	            $("span#"+inputName).show().text("Please enter your " + inputName);
	        }

	        if(inputName == "datebritch" && $this.val() !== ""){
	            if(!datePattern.test($this.val())){               
	                valid  = false;
	                $("span#"+inputName).show().text("Wrong format! Should be dd/mm/yyyy");
	            }
	        }
	    });
	    
	    if(valid)
	    {
			$(this).parent().parent().slideUp();
			$('#inner2').slideDown();
	    }

	});


	$('#btn2').on('click', function(){
	    let valid = true,
	        message = '';
	    
	    $('.validity').hide();
	    $('.group2').each(function() {
	        let $this = $(this),
	            inputName = $this.attr("name");
	        if(!$this.val()) {
	            valid = false;
	            $("span#"+inputName).show().text("Please enter your " + inputName);
	        }
	        
	        if(inputName == "email" && $this.val() !== ""){
	            if(!emailPattern.test($this.val())){               
	                valid  = false;
	                $("span#"+inputName).show().text("Please enter email in correct format");
	            }
	        }

	        if(inputName == "telephone" && $this.val() !== ""){
	            if(!ukPhonePattern.test($this.val())){
	            	valid  = false;
	            	$("span#"+inputName).show().text("Please enter UK telephone number");
	            }
	        }
	    });
	    
	    if(valid)
	    {
		    $(this).parent().parent().slideUp();
		  	$('#inner3').slideDown();
	    }

	});

	$('.error-alert button').on('click', function(){
	  $('.error-alert').hide();
	})

});
