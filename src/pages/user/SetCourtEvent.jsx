import React, { useState } from "react";

const SetCourtEvent = () => {
    const [events, setEvents] = useState([]);
    const [eventData, setEventData] = useState({
        court: "",              //court name
        date: "",               //date of the event
        description: "",        //description of the event
    });

    //to handle the input change
    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    //to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!eventData.court || !eventData.date || !eventData.description) {
            alert("Please fill in all fields.");
            return;
        }

        setEvents([...events, { ...eventData, id: Date.now() }]);
        setEventData({ court: "", date: "", description: "" }); // to reset form
    };

    //to handle the deletion of the event
    const handleDelete = (id) => {
        setEvents(events.filter((event) => event.id !== id));
    };

    // CSS Styles to make it look better
    const styles = {
        container: {
            maxWidth: "550px",
            margin: "21px auto",
            padding: "21px",
            background: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(52, 52, 52, 0.1)",
        },
        title: {
            textAlign: "center",
            color: "#333",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "12px",
        },
        label: {
            fontWeight: "bold italic",
        },
        input: {
            width: "100%",
            padding: "10px",
            border: "2px solid #ccc",
            borderRadius: "5px",
        },
        button: {
            background: "#007bff",
            color: "white",
            padding: "12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        },
        buttonHover: {
            background: "#0056b3",
        },
        eventsTitle: {
            marginTop: "21px",
            textAlign: "center",
        },
        eventList: {
            listStyle: "none",
        },
        eventItem: {
            background: "white",
            margin: "6px 0",
            padding: "10px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        deleteButton: {
            background: "red",
            color: "white",
            padding: "5px 12px",
            cursor: "pointer",
            borderRadius: "5px",
        },
        deleteButtonHover: {
            background: "darkred",
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Set Basketball Court Event</h2>        {/*title for the event form*/}
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>Court Name:</label>     {/*court name*/}
                <input
                    type="text"
                    name="court"
                    value={eventData.court}
                    onChange={handleChange}
                    placeholder="Enter court name"
                    style={styles.input}
                />

                <label style={styles.label}>Date:</label>           {/*to set the date of the event*/}
                <input
                    type="date"
                    name="date"
                    value={eventData.date}
                    onChange={handleChange}
                    style={styles.input}
                />

                <label style={styles.label}>Description:</label>        {/*this is to describe the event*/}
                <textarea
                    name="description"
                    value={eventData.description}
                    onChange={handleChange}
                    placeholder="Enter event details here (e.g., discounts, free play, many more......)"
                    style={{ ...styles.input, height: "82px" }}
                ></textarea>

                <button
                    type="submit"           // to add the event bu submitting the event
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.background = styles.buttonHover.background)}
                    onMouseOut={(e) => (e.target.style.background = styles.button.background)}
                >
                    Add Event
                </button>
            </form>

            <h3 style={styles.eventsTitle}>Scheduled Events</h3>  {/*to set the event*/}
            <ul style={styles.eventList}>
                {events.map((event) => (
                    <li key={event.id} style={styles.eventItem}>        {/*event items to show below*/}
                        <strong>{event.court}</strong> - {event.date}: {event.description}  {/*event descriptions*/}
                        <button
                            onClick={() => handleDelete(event.id)}         //to delete the event
                            style={styles.deleteButton}
                            onMouseOver={(e) => (e.target.style.background = styles.deleteButtonHover.background)}
                            onMouseOut={(e) => (e.target.style.background = styles.deleteButton.background)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SetCourtEvent;
