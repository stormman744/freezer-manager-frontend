import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { DatePicker } from "../DatePicker/DatePicker";
import { Dropdown } from "../Dropdown/Dropdown";
import { InputWithLabel } from "../InputWithLabel/InputWithLabel";
import { ModalActions } from "../ModalActions/ModalActions";
import { ModalTitle } from "../ModalTitle/ModalTitle";
import "./ModalContentUpdateProduct.css";

export const ModalContentUpdateProduct = ({
  respond,
  productName,
  productAmount,
  productUnitId,
  productExpiration,
}) => {
  const units = useSelector((state) => state.units.data);

  const [name, setName] = useState(productName);
  const [amount, setAmount] = useState(productAmount);
  const [unitId, setUnitId] = useState(productUnitId);
  const [expirationDate, setExpirationDate] = useState(
    new Date(productExpiration)
  );

  return (
    <div className="ModalContentUpdateProduct">
      <ModalTitle title={`Edit ${productName}`} />
      <InputWithLabel
        placeholder="Name"
        label="Name"
        value={name}
        setValue={(e) => setName(e.target.value)}
      />
      <InputWithLabel
        placeholder="Amount"
        label="Amount"
        value={amount}
        setValue={(e) => setAmount(e.target.value)}
      />
      <Dropdown
        options={units}
        label={"Unit"}
        selected={unitId}
        setValue={(e) => {
          setUnitId(units[e.target.selectedIndex].id);
        }}
      />
      <DatePicker
        value={expirationDate}
        onChange={(date) => {
          setExpirationDate(new Date(date));
        }}
      />

      <ModalActions>
        <Button
          onClick={() => respond(true, name, amount, unitId, expirationDate)}
        >
          <div>UPDATE</div>
        </Button>
        <Button type="cancel" onClick={() => respond(false)}>
          <div>CANCEL</div>
        </Button>
      </ModalActions>
    </div>
  );
};
