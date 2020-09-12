import React, { useEffect, useState } from "react";
import { ContainerHeader } from "../ContainerHeader/ContainerHeader";
import { Product } from "../Product/Product";
import "./ContainerItem.css";

export const ContainerItem = ({
  containerId,
  containerName,
  containerDescription,
  expanded,
}) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (products === null) {
      fetch(process.env.REACT_APP_API_URL + "product/" + containerId)
        .then((data) => {
          return data.json();
        })
        .then((jsonData) => {
          setProducts(jsonData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [products, containerId]);

  return (
    <div
      className={
        expanded ? "ContainerItem ContainerItem--expanded " : "ContainerItem"
      }
    >
      <ContainerHeader
        containerName={containerName}
        containerDescription={containerDescription}
      />
      <div
        className={
          expanded
            ? "ContainerItem__products expanded"
            : "ContainerItem__products"
        }
      >
        {products &&
          products.map((product) => {
            return (
              <Product
                key={product.id}
                productName={product.name}
                productAmount={product.amount}
                productUnit={product.unit}
                productExpiration={product.expiration_date}
              />
            );
          })}
      </div>
    </div>
  );
};
