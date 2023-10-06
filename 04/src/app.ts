import { PrismaClient, Compra } from '@prisma/client';

const prisma = new PrismaClient();

const createCompra = async () => {
  try {
    const compraCreated = await prisma.compra.create({
      data: {
        fechaCompra: new Date(),
        usuario: {
          create: {
            email: 'joancemac9@gmail.com',
            nombre: 'Joance Mac',
          },
        },
        historialesCompra: {
          create: [
            {
              producto: 'Producto 1',
              cantidad: 3,
            },
            {
              producto: 'Producto 2',
              cantidad: 2,
            },
          ],
        },
      },
      include: {
        usuario: true,
        historialesCompra: true,
      },
    });
    console.log('Compra creada:', compraCreated);
  } catch (error) {
    console.error('Error al crear la compra:', error);
  }
};

const queryCompra = async () => {
  try {
    const compra: Compra | null = await prisma.compra.findUnique({
      where: {
        id: 1, // Cambia esto al ID de compra que deseas consultar
      },
      include: {
        usuario: true,
        historialesCompra: true,
      },
    });
    console.log('Compra consultada:', compra);
  } catch (error) {
    console.error('Error al consultar la compra:', error);
  }
};

const updateCompra = async () => {
  try {
    const compra = await prisma.compra.update({
      where: {
        id: 1, // Cambia esto al ID de compra que deseas actualizar
      },
      data: {
        fechaCompra: new Date(),
        /* Otros campos actualizados de la compra */
      },
      include: {
        usuario: true,
        historialesCompra: true,
      },
    });
    console.log('Compra actualizada:', compra);
  } catch (error) {
    console.error('Error al actualizar la compra:', error);
  }
};

const deleteCompra = async () => {
  try {
    const compra = await prisma.compra.delete({
      where: {
        id: 1, // Cambia esto al ID de compra que deseas eliminar
      },
    });
    console.log('Compra eliminada:', compra);
  } catch (error) {
    console.error('Error al eliminar la compra:', error);
  }
};

(async () => {
  await createCompra();
  await queryCompra();
  await updateCompra();
  await deleteCompra();
})();
