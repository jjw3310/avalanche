import React, { useState, useEffect } from "react";
import { Calendar, CalendarDay, CalendarMonth } from "react-calendar";
import MyCalendar from "./MyCalendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [images, setImages] = useState(["ss", "sa"]);
  const [formatDate, setFormatDate] = useState(["aa", "bb"]);
  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${selectedDate.toISOString()}/`
      );
      const data = await response.json();
      // setImages(data);
    };
    fetchImages();
  }, [selectedDate]);
  const today = new Date();
  let formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC",
  });
  useEffect(() => {
    setFormatDate(formattedDate);
  }, [formatDate]);
  console.log(formattedDate);
  return (
    <div>
      <Calendar
        selected={selectedDate}
        calendarType="US"
        minDetail="decade"
        onSelectDate={setSelectedDate}
        style={{ "background-color": "black" }}
      />
      <div>
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={image.title} />
        ))}
      </div>
      <div className="text-gray-500 mt-4">{formattedDate}</div>
      {/* <MyCalendar /> */}
    </div>
  );
};

export default CalendarComponent;
