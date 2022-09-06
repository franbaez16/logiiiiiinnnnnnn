function logearse(){
    var x, y, usuario, contraseña
    x = document.getElementById("usuario").value;
    y = document.getElementById("contraseña").value;
    document.write(x,y)
    usuario = "eddie34"
    contraseña = "eddieforever"
    if (x == usuario &&  y == contraseña) {
        alert ("Login completado con exito")
} else {
        alert ("Datos incorrectos")
}
    window.location.href

}