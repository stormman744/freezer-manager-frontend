import { createSelector } from "reselect";

const selectAllContainers = (state) => state.containers;

export const selectContainers = createSelector(
  selectAllContainers,
  (allContainers) => allContainers
);
