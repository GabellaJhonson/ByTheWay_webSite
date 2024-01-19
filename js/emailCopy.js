document.getElementById('email').addEventListener('click', function(event) {
    event.preventDefault();
    var email = this.childNodes[0].nodeValue.trim();
    navigator.clipboard.writeText(email);
    alert('Адрес электронной почты скопирован!');
  });
  