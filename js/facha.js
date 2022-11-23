const url = 'https://prikol-b27e4.web.app'

async function facha() {
    const response = await fetch(url)
    const data = await response.json()
    console.log('Data:', data)
}
facha()