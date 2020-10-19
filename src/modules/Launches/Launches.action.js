import { apiCall } from "../../utility";

export const getLaunches = (filters = "") => (dispatch) => {
  dispatch({
    type: "FETCH_LAUNCES_START",
  });
  apiCall("https://api.spaceXdata.com/v3/launches?limit=100" + filters)
    .then((res) => {
      dispatch({
        type: "FETCH_LAUNCES_SUCCESS",
        data: res,
      });
    })
    .catch((e) => {
      dispatch({ type: "FETCH_LAUNCES_ERROR", data: e });
    });
};
