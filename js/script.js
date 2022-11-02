const validation = document.querySelector('.content');

function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(inputText.value.match(mailformat)){
        validation.children[3].innerHTML = 'Valid email address!';
        document.form1.email.focus();
		return true;

	}else{
        validation.children[3].innerHTML = 'Please provide a valid email';
		document.form1.email.focus();
		return false;
	}
}

document.addEventListener('invalid', (function () {
	return function (e) {
	  e.preventDefault();
	  document.getElementById("email").focus();
	};
  })(), true);