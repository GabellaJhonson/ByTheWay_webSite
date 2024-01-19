
const scriptURL = 'https://script.google.com/macros/s/AKfycbynb-42Zmt_RnQD-MPQw4m_fhC3HUitCMRCOrOQ7OPElxsTIGLSEb07Vs9au4rXXFp8/exec'
const form = document.forms['submit-to-google-sheet']
const ansForm = document.getElementById('ansForm')
const tryBot = document.getElementById('tryBot')
form.addEventListener('submit', e => {
    e.preventDefault()
    ansForm.innerHTML="Загрузка..."
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => { 
        ansForm.innerHTML = "Ваши данные успешно отправлены"
        tryBot.style.display = "block"

        setTimeout(function(){
            ansForm.innerHTML = ""
        }, 3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

window.onclick = function(event){
    if(event.target === tryBot ){
        tryBot.style.display = "none"
    }
}