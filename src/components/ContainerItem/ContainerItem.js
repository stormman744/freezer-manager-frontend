import React, { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { updateContainer } from "../../store/actions/containerActions";
import {
  fetchProductsByContainerId,
  postProductWithContainerId,
} from "../../store/actions/productActions";
import { Button } from "../Button/Button";
import { ContainerHeader } from "../ContainerHeader/ContainerHeader";
import { Modal } from "../Modal/Modal";
import { ModalContentCreateProduct } from "../ModalContentCreateProduct/ModalContentCreateProduct";
import { ModalContentUpdateContainer } from "../ModalContentUpdateContainer/ModalContentUpdateContainer";
import { OptionsButton } from "../OptionsButton/OptionsButton";
import { Product } from "../Product/Product";
import { ProductTableHeader } from "../ProductTableHeader/ProductTableHeader";
import "./ContainerItem.css";

export const ContainerItem = ({
  containerId,
  containerName,
  containerDescription,
  expanded,
}) => {
  const products = useSelector((state) => state.products.data[containerId]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsByContainerId(containerId));
  }, [containerId, dispatch]);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showCreateProductModal, setShowCreateProductModal] = useState(false);

  const handleModalContentCreateProductResponse = (
    response,
    productName,
    productAmount,
    productUnitId,
    productExpiration
  ) => {
    if (response) {
      dispatch(
        postProductWithContainerId({
          containerId,
          productName,
          productAmount,
          productUnitId,
          productExpiration,
        })
      );
    }
    setShowCreateProductModal(false);
  };

  const handleModalContentUpdateContainerResponse = (
    response,
    containerName,
    containerDescription
  ) => {
    if (response) {
      dispatch(
        updateContainer({ containerId, containerName, containerDescription })
      );
    }
    setShowUpdateModal(false);
  };
  return (
    <div
      className={
        expanded ? "ContainerItem ContainerItem--expanded " : "ContainerItem"
      }
    >
      <Modal isOpen={showUpdateModal}>
        <ModalContentUpdateContainer
          respond={handleModalContentUpdateContainerResponse}
          containerName={containerName}
          containerDescription={containerDescription}
        />
      </Modal>
      <Modal isOpen={showCreateProductModal}>
        <ModalContentCreateProduct
          respond={handleModalContentCreateProductResponse}
        />
      </Modal>
      <div className="ContainerItem__header">
        <ContainerHeader
          containerName={containerName}
          containerDescription={containerDescription}
        />
        <OptionsButton onClick={() => setShowUpdateModal(!showUpdateModal)} />
      </div>
      <div
        className={
          expanded
            ? "ContainerItem__products expanded"
            : "ContainerItem__products"
        }
      >
        <Button
          onClick={() => setShowCreateProductModal(!showCreateProductModal)}
          type="createProduct"
        >
          <FiPlusCircle size="1.25rem" />
        </Button>
        {products?.length > 0 && (
          <div className="ContainerItem__ProductTableHeaders">
            <ProductTableHeader
              headerTitles={["Name", "Amount", "Expiration"]}
            />
          </div>
        )}
        {products &&
          products.map((product) => {
            return (
              <Product
                key={product.id}
                productName={product.name}
                productAmount={product.amount}
                productUnitId={product.unit_id}
                productExpiration={product.expiration_date}
              />
            );
          })}
      </div>
    </div>
  );
};
