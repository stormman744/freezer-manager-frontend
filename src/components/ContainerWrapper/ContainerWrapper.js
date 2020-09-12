import React, { useEffect, useState } from "react";
import { connect, shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchContainers } from "../../store/actions/containerActions";
import { selectContainers } from "../../store/selectors/containerSelectors";
import { Container } from "../Container/Container";

import "./ContainerWrapper.css";

const ContainerWrapper = ({ containers, loading, error, getAllContainers }) => {
  useEffect(() => {
    console.log("Effect run!");
    getAllContainers();
  }, []);

  console.log(containers);

  return (
    <div className="ContainerWrapper">
      {containers &&
        containers.map((container) => {
          return <Container key={container.id} container={container} />;
        })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    containers: state.containers.data,
    loading: state.containers.loading,
    error: state.containers.error,
  };
}

function mapDispatchToProps(dispatch) {
  return { getAllContainers: () => dispatch(fetchContainers()) };
}

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWrapper);

export { connected as ContainerWrapper };
