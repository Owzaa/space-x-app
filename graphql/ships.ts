import { gql } from "graphql-tag";



const ships = gql`
  query ships {
    ships {
      id
      class
      name
    }
  }
`;

// Defined the missions query
const missions = gql`
  query missions($shipId: ID!) {
    missions(shipId: $shipId) {
      id
      name
      date
    }
  }
`;

// Define a React component that displays the ships and missions
const Ships = {ships};
const Missions = {missions};
const mutations = {};


export { Ships, Missions, mutations};
