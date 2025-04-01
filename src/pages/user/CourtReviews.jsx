import React, { useState, useEffect } from "react";

const CourtReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const mockReviews = [
                { id: 1, player: "John Smith", court: "Montreal Court", rating: 5, comment: "Great experience!" },
                { id: 2, player: "Alex Smith", court: "Central Park Court", rating: 4.5, comment: "Good, but needs better lighting and needs cleaning as well." },
                { id: 3, player: "Peter Person", court: "Queens Playcourt", rating: 3.7, comment: "Average, needs good maintenance." },
            ];
            setReviews(mockReviews);
        };

        fetchReviews();
    }, []);

    const styles = {
        container: {
            maxWidth: "500px",
            margin: "21px auto",
            padding: "21px",
            background: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0 3px 10px rgba(108, 108, 108, 0.1)",
        },
        title: {
            textAlign: "center",
            color: "#333",
        },
        reviewList: {
            listStyle: "none",
            padding: 1,
        },
        reviewItem: {
            background: "white",
            padding: "11px",
            margin: "10px 1",
            borderRadius: "5px",
            borderLeft: "5px solidrgb(0, 95, 188)",
        },
        playerName: {
            fontWeight: "bold italic",
            color: "#007bff",
        },
        rating: {
            fontSize: "14px",
            color: "#ffcc00",
        },
        comment: {
            marginTop: "6px",
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Basketball Court Reviews</h2>          {/*title for the reviews form*/}
            <ul style={styles.reviewList}>
                {reviews.map((review) => (
                    <li key={review.id} style={styles.reviewItem}>          {/*reviews id*/}
                        <div style={styles.playerName}>{review.player} - {review.court}</div>       {/*name of the player who reviewd the court*/}
                        <div style={styles.rating}>⭐ {review.rating}/5</div>               {/*stars to show the review*/}
                        <div style={styles.comment}>{review.comment}</div>                   {/*comment of the review*/}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourtReviews;
