import React, { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContainers,
  postContainer,
} from "../../store/actions/containerActions";
import { fetchUnits } from "../../store/actions/unitActions";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Modal } from "../Modal/Modal";
import { ModalContentCreateContainer } from "../ModalContentCreateContainer/ModalContentCreateContainer";
import "./ContainerWrapper.css";

export const ContainerWrapper = () => {
  const dispatch = useDispatch();
  const containers = useSelector((state) => state.containers.data);

  useEffect(() => {
    dispatch(fetchContainers());
    dispatch(fetchUnits());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);

  const handleModalResponse = (
    response,
    containerName,
    containerDescription
  ) => {
    if (response) {
      dispatch(postContainer({ containerName, containerDescription }));
    }
    setShowModal(false);
  };

  return (
    <div className="ContainerWrapper">
      <Modal isOpen={showModal}>
        <ModalContentCreateContainer respond={handleModalResponse} />
      </Modal>
      <Button onClick={() => setShowModal(!showModal)} type="createContainer">
        <FiPlusCircle size="2rem" />
      </Button>
      {containers &&
        containers.map((container) => {
          return <Container key={container.id} container={container} />;
        })}
    </div>
  );
};
