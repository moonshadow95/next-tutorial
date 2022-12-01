import { useRouter } from 'next/router';
import React, { useState } from 'react';

const EventList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const data = await (
      await fetch('http://localhost:4000/events?category=sports')
    ).json();
    setEvents(data);
    router.push('/events?category=sports', undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.date} | {event.category}
          </h2>
          <p>{event.description}</p>
        </div>
      ))}
    </>
  );
};

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? 'category=sports' : '';
  const data = await (
    await fetch(`http://localhost:4000/events?${queryString}`)
  ).json();
  return { props: { eventList: data } };
}
