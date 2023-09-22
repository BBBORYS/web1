const sales = [
    { id: 1, serial: 'A123', customer: 'Juan Perez', printerModel: 'HP LaserJet Pro M404', price: 120 },
    { id: 2, serial: 'B456', customer: 'Maria Gomez', printerModel: 'Epson EcoTank ET-2760', price: 200 },
    { id: 3, serial: 'C789', customer: 'Pedro Fuentes', printerModel: 'Canon PIXMA G620', price: 90 },
    { id: 4, serial: 'D012', customer: 'Luisa Torres', printerModel: 'Brother HL-L2390DW', price: 100 },
    { id: 5, serial: 'E345', customer: 'Fernando Ruiz', printerModel: 'Xerox B215', price: 80 }
];

sales.forEach(sale => console.log(sale.customer));

for (let i in sales) {
    console.log(sales[i].customer);
}

for (let sale of sales) {
    console.log(sale.customer);
}

function getSale(sales, id, callback) {
    const sale = sales.find(s => s.id === id);

    if (!sale) {
        return callback('Venta no encontrada');
    }

    callback(null, sale);
}

getSale(sales, 3, (err, sale) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(sale);
});

fetch('https://api.example.com/sales')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));