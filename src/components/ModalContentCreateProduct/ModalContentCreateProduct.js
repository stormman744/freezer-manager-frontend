import React, { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
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

  const datePickerContainer = () => {
    return (
      <CalendarContainer className="datePickerContainer"></CalendarContainer>
    );
  };
  return (
    <div className="ModalContentCreateProduct">
      <ModalTitle title={"Add product"} />
      <InputWithLabel
        placeholder="Name"
        label="Name"
        setValue={(e) => setName(e.target.value)}
      />
      <InputWithLabel
        placeholder="Amount"
        label="Amount"
        setValue={(e) => setAmount(e.target.value)}
      />
      <Dropdown
        options={units}
        setValue={(e) => {
          setUnitId(units[e.target.selectedIndex].id);
        }}
      />

      <DatePicker
        showWeekNumbers
        selected={expirationDate}
        onChange={(date) => {
          setExpirationDate(date);
        }}
        dateFormat="dd/MM/yyyy"
        calendarContainer={datePickerContainer}
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
