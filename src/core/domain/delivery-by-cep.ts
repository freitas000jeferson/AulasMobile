export enum CdServiceEnum {
  SEDEX = "Sedex",
  SEDEX_10 = "Sedex 10",
  PAC = "PAC",
}


export interface DeliveryByCep {
  deliveryTime: number;
  deliveryPrice: number;
  typeDelivery: number;
}
