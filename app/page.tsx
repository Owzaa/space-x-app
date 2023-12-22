"use client";

import Link from "next/link";
import React, { useState } from "react";
import apiCalls from "@/graphql";

import { useQuery, useLazyQuery } from "@apollo/client";
import "./pages/ShipDetails"

// Define the ships and missions functions
const ShipsAndMissions = () => {

  // Used the `useQuery` hook to execute the `SHIPS_QUERY` query on load.
  const { data: shipsData } = useQuery(apiCalls.queries.ships);

  // Defined a state variable to store the selected ship ID
  const [selectedShipId, setSelectedShipId] = useState("");

  // `useLazyQuery` Hook to create a function that can be called later if needed. In this case, we
  const [
    getMissions,
    { data: missionsData }
  ] = useLazyQuery(apiCalls.queries.missions);

  // selection of a ship from the list
  const handleSelectShip = (shipId) => {
    // Set the selected ship ID state
    setSelectedShipId(shipId);
    // Trigger the missions query with the ship ID variable
    getMissions({ variables: { shipId } });
  };

  return (
    <>
      <div className="justify-center">
        <h3 className="flex justify-center  text-gray-200 font-bold border-x-slate-600 text-5xl p-auto">Spaceships</h3>
        <div className="flex justify-center max-h-screen max-w-screen p-5">

          {/* SPACESHIP DETAILS */}

          {shipsData && (

            <div className=" group-hover:max-w-full transition-all duration-500 h-0.5 grid grid-cols-4 grid-flow-cols gap-4 m-3 justify-center">
              {shipsData.ships.map((ship) => (

                <div className="flex group-hover:max-w-full justify-center" key={ship.id} onClick={() => handleSelectShip(ship.id)}>
                  <h3 className="hover:max-w-auto  text-sky-400 transition duration-300 bg-[#101010] rounded-lg shadow-lg w-[250px] m-4 justify-evenly font-semi-bold text-lg mb-3 p-12">{ship.name}</h3>
                </div>

              ))}
            </div>
          )}



          {/* MISSION  */}

          {selectedShipId && (
            <div className="flex-wrap sticky-top justify-center py-5  ">
              <h2 className="flex justify-center  text-gray-500 font-bold border-x-slate-600 text-5xl p-auto ">Mission</h2>
              <p>ShipId: <span>{selectedShipId}</span></p>
              <h2 className="flex justify-start  text-gray-500  border-x-slate-600 text-xl pt-auto ">Name : </h2>
              <h2 className="flex justify-start  text-gray-500  border-x-slate-600 text-xl pt-auto ">Date : </h2>


              {missionsData && (
                <>
                  {missionsData.mission.map((missions) => (
                    <div key={missions.id}>
                      <h2 className="flex justify-center  text-gray-200 font-bold border-x-slate-600 text-5xl p-auto ">Mission Name</h2>

                      <p>Mission Name:{missions.name} </p>
                      <h2 className="flex justify-center  text-gray-200 font-bold border-x-slate-600 text-5xl p-auto ">Mission Date</h2>

                      <p>Mission Date: ({missions.date})</p>

                    </div>
                  ))}
                </>
              )}
            </div>

          )}

        </div>
      </div>
    </>
  );
};


export default ShipsAndMissions;