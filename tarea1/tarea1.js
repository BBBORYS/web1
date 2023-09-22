
const impresoras = [
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

console.log("\nUsando for in:");
for (const index in impresoras) {
  console.log(impresoras[index].marca, impresoras[index].modelo);
}
console.log("\nUsando for of:");
for (const impresora of impresoras) {
  console.log(impresora.marca, impresora.modelo);
}


function buscarImpresoraPorID(impresoras, id, callback) {
  const impresoraEncontrada = impresoras.find((impresora) => impresora.id === id);
  if (impresoraEncontrada) {
    callback(impresoraEncontrada);
  } else {
    console.log("Impresora no encontrada");
  }
}


buscarImpresoraPorID(impresoras, 3, (impresora) => {
  console.log("\nImpresora encontrada por ID:");
  console.log(impresora);
});

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    return response.json();
  })
  .then((data) => {
    console.log("\nDatos de la API:");
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
