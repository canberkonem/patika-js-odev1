let isim = prompt("Adınız nedir?")
const userName = document.querySelector("#name")
const day = document.querySelector("#day")


if(isim.length<2 || isim.length>25){
    nameCheck()
}

function nameCheck(){
    if(isim.length<2 || isim.length>25){
        isim = prompt("İsim 2 karakterden az 25 karakterden fazla olamaz")
        nameCheck()
    }
}

const displayName = isim.charAt(0).toUpperCase() + isim.slice(1)
userName.innerHTML = displayName


function displayDate() {
    setInterval(() => {
        let saat = new Date().getHours()
        if(saat<10){saat = "0" + saat} 
        let dakika = new Date().getMinutes()
        if(dakika<10){dakika = "0" + dakika} 
        let saniye = new Date().getSeconds()
        if(saniye<10){saniye = "0" + saniye}
        let today = new Date().getDay()
        switch (today) {
            case 0:
                today = "Pazar"
                break;
            case 1:
                today = "Pazartesi"
                break
            case 2:
                today = "Salı"
                break;
            case 3:
                today = "Çarşamba"
                break
            case 4:
                today = "Perşembe"
                break  
            case 5:
                today = "Cuma"
                break
            case 6:
                today = "Cumartesi"
                break
        }
        day.innerHTML = `${saat}:${dakika}:${saniye} ${today}`
    }, 1000);
}

displayDate()