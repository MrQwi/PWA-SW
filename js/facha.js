function lok(){
    isid.innerHTML = ' '
    isit.innerHTML = ' '
    async function getfoto() {
        let vizov = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        let photo = await vizov.json()
        photo = photo.splice(0, 10)
        let list = document.querySelector('.posts')
        let key
        for (key in photo) {
           
            isit.innerHTML += `
                <li>
                    <h4></h4>
                    <img src="${photo[key].url}" width="300">
                </li>
            `
        }
    }
    getfoto()
}
function opa() {
    isit.innerHTML = ''
    isid.innerHTML =`
    <a href="#" target="_blank">Здарова</a>
    `
}
function pri() {
    isit.innerHTML = ''
    isid.innerHTML = `
    <ul style="list-style-type: none;">
        <li><img src="/icons/ya.png" width="750px" style="display: flex; position:fixed; bottom: 110px;"></li>
        <li><img src="/icons/hori.png"></li>
        <li><img src="/icons/mops.png" width=750px></li>
        <li><img src="/icons/bel.png"></li>
    <ul>
    `
}

async function Kryto() {
    let res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    console.log(res.json())
}
Kryto()

    




