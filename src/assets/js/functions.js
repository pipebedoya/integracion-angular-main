function showGeneralMessage(message){
    document.querySelector("#txtMensajeGeneral").innerHTML=message;
    var elem = document.querySelector('#generalMessageModal');
    var instance = M.Modal.getInstance(elem);
    instance.open();
}