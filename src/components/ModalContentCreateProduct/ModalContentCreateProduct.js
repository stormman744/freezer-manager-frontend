import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { DatePicker } from "../DatePicker/DatePicker";
import { Dropdown } from "../Dropdown/Dropdown";
import { InputField } from "../InputField/InputField";
import { InputWithLabel } from "../InputWithLabel/InputWithLabel";
import { ModalActions } from "../ModalActions/ModalActions";
import { ModalTitle } from "../ModalTitle/ModalTitle";
import "./ModalContentCreateProduct.css";

export const ModalContentCreateProduct = ({ respond }) => {
  const units = useSelector((state) => state.units.data);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [unitId, setUnitId] = useState(1);
  const [expirationDate, setExpirationDate] = useState(new Date());

  return (
    <div className="ModalContentCreateProduct">
      <ModalTitle title={"Add product"} />
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
          onClick={() => {
            respond(true, name, amount, unitId, expirationDate);
          }}
        >
          <div>ADD</div>
        </Button>
        <Button type="cancel" onClick={() => respond(false)}>
          <div>CANCEL</div>
        </Button>
      </ModalActions>
    </div>
  );
};
