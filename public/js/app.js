const errors = {
    "firstname": "Please enter Firstname",
    "lastname": "Please enter Lastname",
    "gender": "Please enter Gender",
    "datebritch": "Please enter Date of britch",
    "datebritch_pattern": "Wrong format should be dd/mm/yyyy",
    "email": "Please enter E-mail address",
    "email_pattern": "Please enter correct email",
    "telephone": "Please enter your Phone number",
    "telephone_pattern": "Allow only UK numbers"
}

const datePattern = /([0-2]\d{1}|3[0-1])\/(0\d{1}|1[0-2])\/(19|20)\d{2}/;
const emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const ukPhonePattern = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;

const loadingAnim = document.querySelector('.cssload-fond');
const responseMsg = document.querySelector('.response-message');

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const inner1 = document.getElementById("inner1");
const inner2 = document.getElementById("inner2");
const inner3 = document.getElementById("inner3");

const picker = new Pikaday({
    field: document.getElementById('datebritch-picker'),
    format: 'DD/MM/YYYY'
});

function closeAllAlerts() {
    let validity = document.querySelectorAll('.validity'),
        i = 0;
    l = validity.length;

    for (i; i < l; i++) {
        validity[i].style.display = 'none';
    }
}

function sendFormData() {
	let clientData = new FormData(document.forms.clientForm);
	clientData.append('_token', clientData.get("_token"));
	clientData.append('firstname', clientData.get("firstname"));
	clientData.append('lastname', clientData.get("lastname"));
	clientData.append('gender', clientData.get("gender"));
	clientData.append('datebritch', clientData.get("datebritch"));
	clientData.append('email', clientData.get("email"));
	clientData.append('telephone', clientData.get("telephone"));
	clientData.append('comments', clientData.get("comments"));

	loadingAnim.className = "cssload-fond show";

	let xhr = new XMLHttpRequest();
	xhr.open('POST', '/store', true);
	xhr.onload = function () {
		loadingAnim.className = "cssload-fond hide";
		let jsonResponse = JSON.parse(xhr.responseText);
		if(jsonResponse.errors){
			responseMsg.innerHTML = "Sorry, you entered incorrect data. We apologize for this situation. Try again";
			responseMsg.className = "response-message show red";
		}else{
			responseMsg.innerHTML = jsonResponse.message;
			responseMsg.className = "response-message show";
		}
		setTimeout(function(){
		   window.location.reload(1);
		}, 5000);
	};
	xhr.send(clientData);
}

btn1.addEventListener("click", function(e) {

    closeAllAlerts();

    let group1 = document.querySelectorAll('.group1');
    i = 0;
    l = group1.length;

    let valid = true,
        message = '';

    for (i; i < l; i++) {

        let validity = document.getElementById(group1[i].name);

        if (!group1[i].value) {
            valid = false;
            validity.style.display = "inline";
            validity.innerHTML = errors[group1[i].name];
        }

        if (group1[i].name == 'datebritch' && group1[i].value !== "") {
            if (!datePattern.test(group1[i].value)) {
                valid = false;
                validity.style.display = "inline";
                validity.innerHTML = errors[group1[i].name + '_pattern'];
            }
        }
    }

    if (valid) {
        inner1.className = 'inner inner-close';
        inner2.className = 'inner inner-open';
    }
}, false);

btn2.addEventListener("click", function(e) {

    closeAllAlerts();

    let group2 = document.querySelectorAll('.group2');
    i = 0;
    l = group2.length;

    let valid = true,
        message = '';

    for (i; i < l; i++) {

        let validity = document.getElementById(group2[i].name);

        if (!group2[i].value) {
            valid = false;
            validity.style.display = "inline";
            validity.innerHTML = errors[group2[i].name];
        }

        if (group2[i].name == 'telephone' && group2[i].value !== "") {
            if (!ukPhonePattern.test(group2[i].value)) {
                valid = false;
                validity.style.display = "inline";
                validity.innerHTML = errors[group2[i].name + '_pattern'];
            }
        }

        if (group2[i].name == 'email' && group2[i].value !== "") {
            if (!emailPattern.test(group2[i].value)) {
                valid = false;
                validity.style.display = "inline";
                validity.innerHTML = errors[group2[i].name + '_pattern'];
            }
        }
    }

    if (valid) {
        inner2.className = 'inner inner-close';
        inner3.className = 'inner inner-open';
    }
}, false);

btn3.addEventListener("click", function(e) {
	sendFormData();
}, false);
