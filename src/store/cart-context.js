import React from "react";

const CartContext = React.createContext({
  //items within these objects are default values
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
