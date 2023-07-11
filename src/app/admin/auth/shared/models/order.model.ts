export interface Order {
  id_order: number;
  track: string;
  fullname: string;
  phone: string;
  active: number;
}

export interface OrderList {
  orderList: number;
}

export interface OrderAll {
  id_order: number;
  track: string;
  fullname: string;
  address1: string;
  address2: string;
  email: string;
  phone: string;
  remark: string;
  receipt: string;
  active: number;
  logistic: string;
  logistic_track: string;
}

export interface OrderListAll {
  id: number;
  code: string;
  color: string;
  sale: number;
  cover: string;
  quantity: number;
}

export interface OrderTrackAll {
  id: number;
  status: boolean;
  date: string;
  id_order: number;
}

export interface OrderData {
  order: OrderAll;
  list: OrderListAll[];
  track: OrderTrackAll[];
}
