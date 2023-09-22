
interface Impresora {
  id: number;
  marca: string;
  modelo: string;
  precio: number;
}

const impresoras: Impresora[] = [
  {
    id: 1,
    marca: "HP",
    modelo: "LaserJet",
    precio: 299.99,
  },
  {
    id: 2,
    marca: "Epson",
    modelo: "WorkForce",
    precio: 199.99,
  },
  {
    id: 3,
    marca: "Canon",
    modelo: "Pixma",
    precio: 149.99,
  },
  {
    id: 4,
    marca: "Brother",
    modelo: "HL-L2350DW",
    precio: 179.99,
  },
  {
    id: 5,
    marca: "Samsung",
    modelo: "Xpress",
    precio: 129.99,
  },
];

console.log("Usando forEach:");
impresoras.forEach((impresora) => {
  console.log(impresora.marca, impresora.modelo);
});

console.log("\nUsando for of:");
for (const impresora of impresoras) {
  console.log(impresora.marca, impresora.modelo);
});

