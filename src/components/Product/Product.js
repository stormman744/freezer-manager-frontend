import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/formatDate";
import { Modal } from "../Modal/Modal";
import { ModalContentUpdateProduct } from "../ModalContentUpdateProduct/ModalContentUpdateProduct";
import "./Product.css";

export const Product = ({
  productName = "",
  productAmount = "",
  productUnitId = -1,
  productExpiration = "",
}) => {
  const handleModalContentUpdateProductResponse = (
    response,
    productName,
    productAmount,
    productUnitId,
    productExpiration
  ) => {
    if (response) {
      console.log("Update the product....");
    }
    setShowUpdateModal(false);
  };

  const unit = useSelector((state) => {
    if (productUnitId !== -1) {
      return state?.units.data.find((x) => x.id === productUnitId);
    }
  });

  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <>
      <Modal isOpen={showUpdateModal}>
        <ModalContentUpdateProduct
          respond={handleModalContentUpdateProductResponse}
          productName={productName}
          productAmount={productAmount}
          productUnitId={productUnitId}
          productExpiration={productExpiration}
        />
      </Modal>
      <div
        className="Product"
        onClick={() => {
          setShowUpdateModal(!showUpdateModal);
        }}
      >
        <div className="Product__name">{productName}</div>
        <div className="Product__amount">{`${productAmount} ${
          unit && unit.name ? unit.name : ""
        }`}</div>
        <div className="Product__expiration">
          {formatDate(productExpiration, navigator.language)}
        </div>
      </div>
    </>
  );
};
