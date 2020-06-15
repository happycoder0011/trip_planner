import React from "react";
import {Trip} from "./Trip";

export const TripList = ({trip}) => {
    return (
        <div className="trip-list">
            <h3>Trips</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Place</th>
                        <th>Type</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {trip.map((trip) => (
                        <Trip {...trip} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};