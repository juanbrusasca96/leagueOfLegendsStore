let campeones = [
    { id: '1', posicion: 'Superior', nombre: 'Aatrox', precio: 880, foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg' },
    { id: '2', posicion: 'Central', nombre: 'Ahri', precio: 790, foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg' },
    { id: '3', posicion: 'Superior, Central', nombre: 'Akali', precio: 790, foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg' },
    { id: '4', posicion: 'Central', nombre: 'Akshan', precio: 975, foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_0.jpg' },
    { id: '5', posicion: 'Soporte', nombre: 'Alistar', precio: 585, foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg' },
    { id: '6', posicion: 'Jungla', nombre: 'Amumu', precio: 260, foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg' },
    { id: '7', posicion: 'Central', nombre: 'Anivia', precio: 790, foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg' },
    { id: '8', posicion: 'Central', nombre: 'Annie', precio: 260, foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg' },
    { id: '9', posicion: 'Inferior', nombre: 'Aphelios', precio: 975, foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg' },
    { id: '10', posicion: 'Inferior, Soporte', nombre: 'Ashe', precio: 260, foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg' },
    { id: '11', posicion: 'Central', nombre: 'Aurelion Sol', precio: 975, foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg' },
    { id: '12', posicion: 'Central', nombre: 'Azir', precio: 880, foto: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg' }
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