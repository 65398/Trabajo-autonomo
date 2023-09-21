interface Usuario {
    id: number;
    nombre: string;
    correo: string;
    direccion: string;
    telefono: string;
  }
  
  const Usuarios: Usuario[] = [
    { id: 1, nombre: 'Natasha', correo: 'natasha@gmail.com', direccion: 'manta', telefono: '0989874525' },
    { id: 2, nombre: 'Fernando', correo: 'fernando@gmail.com', direccion: 'cuba', telefono: '0945698740' },
    { id: 3, nombre: 'Maria', correo: 'maria@gmail.com', direccion: 'las cumbres', telefono: '0925874139' },
    { id: 4, nombre: 'Ariel', correo: 'ariel@gmail.com', direccion: 'portoviejo', telefono: '0936790142' },
    { id: 5, nombre: 'kiara', correo: 'kiara@gmail.com', direccion: 'jocay', telefono: '0975315987' },
  ];

  // Recorriendo y mostrando los elementos usando for...if
  console.log('Recorriendo con for...if:');
  for (let i = 0; i < Usuarios.length; i++) {
    const usuario = Usuarios[i];
    if (usuario.nombre === 'Natasha') {
      console.log(usuario);
    }
  }
  
  // Recorriendo y mostrando los elementos usando forEach
  console.log('Recorriendo con forEach:');
  usuarios.forEach((usuario) => {
    console.log(usuario);
  });
  
  
  // Recorriendo y mostrando los elementos usando for...of
  console.log('Recorriendo con for...of:');
  for (let usuario of Usuarios) {
    console.log(usuario);
  }
  