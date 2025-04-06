

import { CartEmpty } from "./cartcomponent/cartempty";
import { CartList } from "./cartcomponent/cartlist";
import { useCart } from "../../context";
import { useTitle } from "../../hook/dynamictitle";

export const CartPage = () => {
  const { cartList } = useCart();
   useTitle("Cart/CodeBook")


  return (
    <main>       
      { cartList.length ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}