import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateContainer } from "../../store/actions/containerActions";
import { fetchProductsByContainerId } from "../../store/actions/productActions";
import { ContainerHeader } from "../ContainerHeader/ContainerHeader";
import { Modal } from "../Modal/Modal";
import { ModalContentUpdateContainer } from "../ModalContentUpdateContainer/ModalContentUpdateContainer";
import { OptionsButton } from "../OptionsButton/OptionsButton";
import { Product } from "../Product/Product";
import "./ContainerItem.css";

export const ContainerItem = ({
  containerId,
  containerName,
  containerDescription,
  expanded,
}) => {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsByContainerId(containerId));
  }, [containerId, dispatch]);

  const [showModal, setShowModal] = useState(false);

  const handleModalResponse = (
    response,
    containerName,
    containerDescription
  ) => {
    if (response) {
      dispatch(
        updateContainer({ containerId, containerName, containerDescription })
      );
    }
    setShowModal(false);
  };
  return (
    <div
      className={
        expanded ? "ContainerItem ContainerItem--expanded " : "ContainerItem"
      }
    >
      <Modal isOpen={showModal}>
        <ModalContentUpdateContainer
          respond={handleModalResponse}
          containerName={containerName}
          containerDescription={containerDescription}
        />
      </Modal>
      <div className="ContainerItem__header">
        <ContainerHeader
          containerName={containerName}
          containerDescription={containerDescription}
        />
        <OptionsButton onClick={() => setShowModal(!showModal)} />
      </div>
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
