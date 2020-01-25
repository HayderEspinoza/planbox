export default function selectors(globalState) {
  const state = globalState.initiatives;
  const getInitiatives = () => state.entities;
  const getInitiativesStatus = () => state.getInitiativesFetchStatus;

  return {
    getInitiatives,
    getInitiativesStatus
  };
}
