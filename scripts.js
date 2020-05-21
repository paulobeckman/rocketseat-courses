const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){
    card.addEventListener("click", function(){
        const pageId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        document.querySelector('.modal').classList.remove('maximize')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pageId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})

document.querySelector('.maximize-modal').addEventListener("click", function(){
    if(document.querySelector('.modal').classList.contains('maximize')){
        document.querySelector('.modal').classList.remove('maximize')
    } else{
        document.querySelector('.modal').classList.add('maximize')
    }
})