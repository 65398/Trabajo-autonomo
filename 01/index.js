//Arreglo
const usuarios = [
    { id: 1, nombre:'Natasha', correo: 'natasha@gmail.com', direccion:'manta',telefono:'0989874525'},
    { id: 2, nombre:'Fernando', correo: 'fernando@gmail.com', direccion:'cuba',telefono:'0945698740'},
    { id: 3, nombre:'Maria', correo: 'maria@gmail.com', direccion:'las cumbres',telefono:'0925874139'},
    { id: 4, nombre:'Ariel', correo: 'ariel@gmail.com', direccion:'portoviejo',telefono:'0936790142'},
    { id: 5, nombre:'kiara', correo: 'kiara@gmail.com', direccion:'jocay',telefono:'0975315987'},
];

// Recorriendo y mostrando los elementos
// Usando forEach
console.log('Recorriendo con forEach:');
usuarios.forEach((usuario) => {
  console.log(usuario);
});

// Usando for...in
console.log('Recorriendo con for...in:');
for (let index in usuarios) {
  console.log(usuarios[index]);
}

// Usando for...of
console.log('Recorriendo con for...of:');
for (let usuario of usuarios) {
  console.log(usuario);
}


//callback
function BuscarPorId(id,callback){
const usuarioEncontrado=usuarios.find((element)=>{return element.id===id})
if(!usuarioEncontrado){
    return callback("No se ha encontrado el usuario")
}
return callback(null, usuarioEncontrado);
}

BuscarPorId(2,(error, usuarios)=>{
    if(error){
        console.log("ha ocurrido un error")
    }
    console.log(usuarios);
});