// Contaner div
const $containerButtons = document.querySelector('#container-buttons')
const $containerCards = document.querySelector('#container-cards')
const $containerProgressBar = document.querySelector('#container-progress-bar')
const $containerModal = document.querySelector('#container-modal')
const $containerForms = document.querySelector('#container-forms')

// Function add module. This add HTML module to .container div
const importModule = function(path){
    return fetch(path)
    .then(response => response.text())
}


importModule('./button/button.html').then(html => $containerButtons.innerHTML = html)
importModule('./forms/forms.html').then(html => $containerForms.innerHTML = html)
importModule('./progress-bar/progress-bar.html').then(html => $containerCards.innerHTML = html)
importModule('./card/card.html').then(html => $containerProgressBar.innerHTML = html)
importModule('./modal/modal.html').then((html) => {
    $containerModal.innerHTML = html

    // Open modal
    const $modalOpenButtonsArray = document.querySelectorAll('.modal-toggle')

    $modalOpenButtonsArray.forEach(function(button){
        button.addEventListener('click', function(){
            const modal = button.getAttribute('data-modal')
            document.getElementById(modal).style.display = 'block'
        })
    })

    // Close modal
    const $modalCloseButtonsArray = document.querySelectorAll('.modal')

    $modalCloseButtonsArray.forEach(function(modal){
        // If user either clicks X button OR clicks outside the modal window, then close modal
        modal.addEventListener('click', function(event){
            // The matches() method checks if the event.target matches a specific selector
            if(event.target.matches('.modal-close')){
                modal.style.display = 'none'
            }
            // The closest() method looks for the closest matching parent to an element that has a selector that you pass in
            if(!event.target.closest('.modal-content')){
                modal.style.display = 'none'
            }
        })
    })
})






