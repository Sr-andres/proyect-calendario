// EventCalendar.js
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useQuery } from 'react-query';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const { isLoading, data, isError } = useQuery("threads", () =>
    fetch("http://localhost/events/").then(res => res.json())
  );

  useEffect(() => {
    if (data) {
      setEvents(() => data)
    }
  }, [data])

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
