function lok() {
    async function getfoto() {
        const vizov = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        const photo = await vizov.json()
        photo = photo.splice(0, 10)
        let key;
        for (key in photo) {
            isid.innerHTML += `
                <li>
                    <h4></h4>
                    <img src="${photo[key].url}" width="300">
                </li>
            `
        }
    }
    
}

