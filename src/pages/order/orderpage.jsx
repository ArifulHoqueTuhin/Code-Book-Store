

import { OrderSuccess } from "./ordercomponent/ordersuccess";
import { OrderFail } from "./ordercomponent/orderfail";
import { useLocation } from "react-router-dom";

export const OrderPage = () => {
  const { state } = useLocation();

  return (
    <main>
      { state.status ? <OrderSuccess data={state.data} /> : <OrderFail /> }
    </main>
  )
}