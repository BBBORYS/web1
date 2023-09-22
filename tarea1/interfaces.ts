
export interface Sale {
  id: number;
  serial: string;
  customer: string;
  printerModel: string;
  price: number;
  saleDate: Date; 
}

export interface Printer {
  id: number;
  model: string;
  brand: string;
  stock: number; 
}
