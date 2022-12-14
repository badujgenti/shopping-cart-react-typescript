import React from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/Storeitem";
import storeItems from "../data/items.json";

export default function Store() {
  return (
    <div>
      <h1>Apple Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
