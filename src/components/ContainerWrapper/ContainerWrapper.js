import React, { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchContainers } from "../../store/actions/containerActions";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import "./ContainerWrapper.css";

export const ContainerWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContainers());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);

  const handleModalResponse = (
    response,
    containerName,
    containerDescription
  ) => {};

  const containers = useSelector((state) => state.containers.data);

  return (
    <div className="ContainerWrapper">
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
