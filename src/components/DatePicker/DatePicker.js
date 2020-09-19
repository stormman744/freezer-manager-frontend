import React, { useState } from "react";
import "./DatePicker.css";
import Tooltip from "react-tooltip-lite";
import Calendar from "react-calendar";

export const DatePicker = ({ value, onChange }) => {
  const [calendarIsOpen, setCalendarIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(value));
  return (
    <div className="DatePicker">
      <Tooltip
        isOpen={calendarIsOpen}
        content={
          <Calendar
            onChange={(date) => {
              setSelectedDate(date);
              onChange(date);
            }}
            value={value}
            minDate={new Date()}
          />
        }
      >
        <input
          className="DatePicker__input"
          value={selectedDate.toLocaleDateString()}
          readOnly
          type="text"
          onClick={() => setCalendarIsOpen(!calendarIsOpen)}
        />
      </Tooltip>
    </div>
  );
};
