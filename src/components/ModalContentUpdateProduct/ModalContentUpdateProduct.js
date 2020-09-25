import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { DatePicker } from "../DatePicker/DatePicker";
import { Dropdown } from "../Dropdown/Dropdown";
import { InputField } from "../InputField/InputField";
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
      <ModalTitle title={`${productName}`} />
      <InputWithLabel label="Name">
        <InputField
          placeholder="Name"
          value={name}
          setValue={(e) => setName(e.target.value)}
        />
      </InputWithLabel>
      <InputWithLabel label="Amount">
        <InputField
          placeholder="Amount"
          value={amount}
          setValue={(e) => setAmount(e.target.value)}
        />
      </InputWithLabel>
      <Dropdown
        options={units}
        label={"Unit"}
        selected={unitId}
        setValue={(e) => {
          setUnitId(units[e.target.selectedIndex].id);
        }}
      />
      <DatePicker
        label="Expiration"
        value={expirationDate}
        onChange={(date) => {
          setExpirationDate(new Date(date));
        }}
      />
      <div className="ModalContentUpdateProduct__deleteButtonWrapper">
        <Button onClick={() => respond("DELETE")} type="delete">
          <FaTrashAlt size="1.25rem" />
        </Button>
      </div>

      <ModalActions>
        <Button
          onClick={() =>
            respond("UPDATE", name, amount, unitId, expirationDate)
          }
        >
          <div>UPDATE</div>
        </Button>
        <Button type="cancel" onClick={() => respond(null)}>
          <div>CANCEL</div>
        </Button>
      </ModalActions>
    </div>
  );
};
