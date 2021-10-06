//links
document.querySelectorAll('#drop-menu').forEach(function (menu) {
    menu.addEventListener('change', function () {
        window.location = this.value
        
    })
})
console.log('samuel is developing me')
let height = document.querySelector('.arr-data').style.height
console.log(height)

//creating neew account
document.querySelector('.cre-ac-dir').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.create-ac').style.display = 'block'
    document.querySelector('.cre-ac-dir').style.display = 'none'
    document.querySelector('.login').style.display = 'none'
})
//CREATE

document.querySelector('.refresh').addEventListener('click', function(){
    window.location.reload()
})



