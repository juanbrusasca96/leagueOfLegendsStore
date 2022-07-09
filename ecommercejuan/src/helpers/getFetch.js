let campeones = [
    { id: '1', posicion: 'Superior', nombre: 'Aatrox', precio: convertir(880), foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg' },
    { id: '2', posicion: 'Central', nombre: 'Ahri', precio: convertir(790), foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg' },
    { id: '3', posicion: 'Superior, Central', nombre: 'Akali', precio: convertir(790), foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg' },
    { id: '4', posicion: 'Central', nombre: 'Akshan', precio: convertir(975), foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_0.jpg' },
    { id: '5', posicion: 'Soporte', nombre: 'Alistar', precio: convertir(585), foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg' },
    { id: '6', posicion: 'Jungla', nombre: 'Amumu', precio: convertir(260), foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg' },
    { id: '7', posicion: 'Central', nombre: 'Anivia', precio: convertir(790), foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg' },
    { id: '8', posicion: 'Central', nombre: 'Annie', precio: convertir(260), foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg' },
    { id: '9', posicion: 'Inferior', nombre: 'Aphelios', precio: convertir(975), foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg' },
    { id: '10', posicion: 'Inferior, Soporte', nombre: 'Ashe', precio: convertir(260), foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg' },
    { id: '11', posicion: 'Central', nombre: 'Aurelion Sol', precio: convertir(975), foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg' },
    { id: '12', posicion: 'Central', nombre: 'Azir', precio: convertir(880), foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg' }
];

export const gFetch = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            resolve(campeones)
        }, 2000)
    } else {
        reject('404 not found')
    }
})

export const getItems = (id) => new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            resolve(campeones.find(camp => camp.id === id))
        }, 2000)
    } else {
        reject('404 not found')
    }
})

function convertir(rp) {
    return (rp * 5 / 710).toFixed(2);
}