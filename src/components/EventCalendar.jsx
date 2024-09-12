// EventCalendar.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('Nuevo evento');
    if (title) {
      fetch("http://localhost/events/", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ start, end, title })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log("System errror")
        })

      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable={true}
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default EventCalendar;
