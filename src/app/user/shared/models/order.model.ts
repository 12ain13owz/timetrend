export interface Order {
  track: string;
  logistic: string;
  logistic_track: string;
  orderList: OrderList[];
  orderTrack: OrderTrack[];
}

export interface OrderList {
  quantity: number;
  code: string;
  color: string;
  sale: number;
  cover: string;
}

export interface OrderTrack {
  status: boolean;
  date: string;
}

export interface Track {
  track: string;
}
