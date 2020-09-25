import { handleDispatch } from "../../utils/handleDispatch";

export const FETCH_UNITS_BEGIN = "FETCH_UNITS_BEGIN";
export const FETCH_UNITS_SUCCESS = "FETCH_UNITS_SUCCESS";
export const FETCH_UNITS_FAILURE = "FETCH_UNITS_FAILURE";

const fetchUnitsBegin = () => ({
  type: FETCH_UNITS_BEGIN,
});

const fetchUnitsSuccess = (data) => ({
  type: FETCH_UNITS_SUCCESS,
  payload: { data },
});

const fetchUnitsFailure = (err) => ({
  type: FETCH_UNITS_FAILURE,
  payload: { err },
});

export const fetchUnits = () => {
  return handleDispatch(
    process.env.REACT_APP_API_URL + "unit/all",
    "",
    fetchUnitsBegin,
    fetchUnitsSuccess,
    fetchUnitsFailure
  );
};

export const FETCH_UNITBYID_BEGIN = "FETCH_UNITBYID_BEGIN";
export const FETCH_UNITBYID_SUCCESS = "FETCH_UNITBYID_SUCCESS";
export const FETCH_UNITBYID_FAILURE = "FETCH_UNITBYID_FAILURE";

const fetchUnitByIdBegin = () => ({
  type: FETCH_UNITBYID_BEGIN,
});

const fetchUnitByIdSuccess = (data) => ({
  type: FETCH_UNITBYID_SUCCESS,
  payload: { data },
});

const fetchUnitByIdFailure = (err) => ({
  type: FETCH_UNITBYID_FAILURE,
  payload: { err },
});

export const fetchUnitById = (unitId) => {
  return handleDispatch(
    process.env.REACT_APP_API_URL + "unit/" + unitId,
    "",
    fetchUnitByIdBegin,
    fetchUnitByIdSuccess,
    fetchUnitByIdFailure
  );
};
