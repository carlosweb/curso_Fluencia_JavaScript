const bt = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')


bt.addEventListener('click', ()=> {
    popup.style.display = "block"
})

popup.addEventListener('click', event => {
    const classNameClickElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-link', 'popup-wrapper']

    const shouldClosepopoup = classNames.some(className => 
        className === classNameClickElement)
        
    if(shouldClosepopoup){
        popup.style.display = "none"
    }
})


