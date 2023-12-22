"use client"

import React, { useState } from "react";
import apiCalls from "@/graphql";
import { useLazyQuery } from "@apollo/client";

// Define the ships and missions functions
const ShipDetails = () => {
  // Defined a state variable to store the selected ship ID
  const [selectedShipId, setSelectedShipId] = useState(null);

  // Used the `useLazyQuery` Hook to create a function that can be called later if needed. In this case, we
  const [getMissions, { data: missionsData }] = useLazyQuery(
    apiCalls.queries.missions
  );

  // select a ship and trigger the query
const handleSelectShip = (shipId) => {
  // Set the selected ship ID state
  setSelectedShipId(shipId);
  // Trigger the query with the ship ID variable
  getMissions({ variables: { shipId } });
};
  return (
    <div>
      <h3 className="flex justify-center bg-white text-gray-600 font-bold text-5xl p-12">
        Mission Details
      </h3>

 {selectedShipId && (
      <div>
        <h2>{selectedShipId}</h2>
        {missionsData && (
          <ul>
            {missionsData.mission.map((mission) => (
              <li key={mission.id}>
                {mission.name} && ({mission.date})
              </li>
            ))}
          </ul>
        )}
    </div>
 
  )}; 
  </div>
  )
};

export default ShipDetails;