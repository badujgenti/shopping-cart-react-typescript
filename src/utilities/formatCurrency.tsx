import React from "react";
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export default function formatCurrency(number: number | bigint) {
  return CURRENCY_FORMATTER.format(number);
}
