import { isBefore } from "date-fns/esm";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../store/actions/productActions";
import { formatDate } from "../../utils/formatDate";
import { Modal } from "../Modal/Modal";
import { ModalContentUpdateProduct } from "../ModalContentUpdateProduct/ModalContentUpdateProduct";
import "./Product.css";

export const Product = ({
  productId = null,
  containerId = null,
  productName = "",
  productAmount = "",
  productUnitId = -1,
  productExpiration = "",
}) => {
  const dispatch = useDispatch();
  const handleModalContentUpdateProductResponse = (response) => {
    if (response === "UPDATE") {
      console.log("Update the product....");
    } else if (response === "DELETE") {
      dispatch(deleteProduct({ productId, containerId }));
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
        style={{
          backgroundColor: isBefore(new Date(productExpiration), Date.now())
            ? "rgba(247, 106, 106,0.3)"
            : "transparent",
        }}
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
