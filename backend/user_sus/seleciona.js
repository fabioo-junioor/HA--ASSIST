function selecionarUserSus(userSus){
    let idUserSus = userSus.value;
    // console.log(cartSus);
    localStorage.setItem('idUserSus', idUserSus);
    window.location = "../pages/menu1.html";
}