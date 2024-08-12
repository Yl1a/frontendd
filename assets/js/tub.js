

const tab = document.querySelectorAll('.tub')
const content = document.querySelectorAll('.content_item')


tab.forEach(el => {
    el.addEventListener('click', ()=>{
        let currentTub = el;
        let id = currentTub.getAttribute('data-tab')
        let contentEl = document.querySelector(id)

        content.forEach(e => {
            e.classList.remove('active')
        })
        contentEl.classList.add('active')

        tab.forEach(element => {
            element.classList.remove('active')
        });
        currentTub.classList.add('active')
    })

});