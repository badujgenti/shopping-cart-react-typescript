import React from "react";
import { Button, Card } from "react-bootstrap";
import useShoppingCart from "../context/ShoppingCartContext";
import formatCurrency from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="300px"
        width="300px"
        style={{
          objectFit: "contain",
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span>{name}</span>
          <span>{formatCurrency(price)}</span>
        </Card.Title>
        <div className="d-flex">
          {quantity === 0 ? (
            <Button className="m-auto" onClick={() => increaseCartQuantity(id)}>
              Add To Cart
            </Button>
          ) : (
            <div className="d-flex flex-column align-items-center m-auto">
              <div className="d-flex justify-content-center align-items-center ">
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                {quantity} In Cart{" "}
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button className="bg-red" onClick={() => removeFromCart(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
