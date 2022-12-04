import React from "react";
import { Card } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
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
    </Card>
  );
}
