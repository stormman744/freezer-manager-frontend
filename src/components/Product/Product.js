import React from "react";
import "./Product.css";
import { formatDate } from "../../utils/formatDate";

export const Product = ({
  productName,
  productAmount,
  productUnit,
  productExpiration,
}) => {
  return (
    <div className="Product">
      <div className="Product__name">{productName}</div>
      <div className="Product__amount">{productAmount + productUnit}</div>
      <div className="Product__expiration">
        {formatDate(productExpiration, navigator.language)}
      </div>
    </div>
  );
};
