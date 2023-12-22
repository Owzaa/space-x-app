import { Ships, Missions } from "./ships";

const apiCalls = {
  queries: {
    ...Ships,
    ...Missions,
  },
  mutations: {
    ...Ships,
    ...Missions,
  },
};

export default apiCalls;
