import React, { useState } from "react";
import {
  startOfWeek,
  addDays,
  addMonths,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  format,
} from "date-fns";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const header = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">
          {format(currentDate, dateFormat)}
        </div>
        <div>
          <button
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            onClick={prevMonth}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 ml-2"
            onClick={nextMonth}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const daysOfWeek = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="flex mb-2 w-full justify-between">
        {days.map((day) => (
          <div className="text-center w-full" key={day}>
            {day}
          </div>
        ))}
      </div>
    );
  };

  const cells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        days.push(
          <div
            className={`w-full flex justify-center ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, currentDate)
                ? "bg-blue-400 text-white"
                : ""
            }`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="flex justify-between" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(addMonths(currentDate, -1));
  };

  const onDateClick = (day) => {
    console.log(day);
  };

  return (
    <div className="calendar border rounded p-4 w-3/5">
      {header()}
      {daysOfWeek()}
      {cells()}
    </div>
  );
}
