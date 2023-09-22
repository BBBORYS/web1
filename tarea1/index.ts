

import { Sale } from './interfaces';

const sales: Sale[] = [
  {id: 1, serial: 'A123', customer: 'Juan Perez', printerModel: 'HP LaserJet Pro M404', price: 120},
  {id: 2, serial: 'B456', customer: 'Maria Gomez', printerModel: 'Epson EcoTank ET-2760', price: 200},
  {id: 3, serial: 'C789', customer: 'Pedro Fuentes', printerModel: 'Canon PIXMA G620', price: 90},
  {id: 4, serial: 'D012', customer: 'Luisa Torres', printerModel: 'Brother HL-L2390DW', price: 100},
  {id: 5, serial: 'E345', customer: 'Fernando Ruiz', printerModel: 'Xerox B215', price: 80}
];

sales.forEach(sale => {
  console.log(sale.customer); 
});

for (let i in sales) {
  console.log(sales[i].customer);
}

for (let sale of sales) {
  console.log(sale.customer);
}