import React, { useState, useEffect } from "react";

const TrackRevenue = () => {
    const [earnings, setEarnings] = useState([]);

    useEffect(() => {
        const earningsData = [
            { id: 1, court: "Central Park Court", revenue: 5000 },
            { id: 2, court: "Harlem Ballers Court", revenue: 3500 },
            { id: 3, court: "Queens Playcourt", revenue: 4200 },
            { id: 4, court: "Montreal Court", revenue: 8100 },
        ];
        setEarnings(earningsData);
    }, []);

    //to calculate the total revenue
    const totalRevenue = earnings.reduce((sum, court) => sum + court.revenue, 0);

    return (
        <div className="track-revenue">
            <h2>Basketball Court Revenue</h2>           {/*basketball court revenue*/}
            <table>
                <thead>
                    <tr>
                        <th>Court Name</th>         {/*court name*/}
                        <th>Revenue ($)</th>        {/*to see the court revenue*/}
                    </tr>
                </thead>
                <tbody>
                    {earnings.map((court) => (
                        <tr key={court.id}>             {/*court id*/}
                            <td>{court.court}</td>
                            <td>${court.revenue.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td><strong>Total Revenue</strong></td>         {/*total revenue of the courts*/}
                        <td><strong>${totalRevenue.toLocaleString()}</strong></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default TrackRevenue;
