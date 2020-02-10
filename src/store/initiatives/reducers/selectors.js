export default function selectors(globalState) {
  const state = globalState.initiatives;
  const getInitiative = () => state.initiative;
  const getInitiatives = () => state.entities;
  const getInitiativesStatus = () => state.getInitiativesFetchStatus;
  const getCurrentItems = () => state.current;
  const getNextItems = () => state.next;
  const getBacklogtItems = () => state.backlog;
  const getCurrentStatus = () => state.getCurrentItemsFetchStatus.status;
  const getNextStatus = () => state.getNextItemsFetchStatus.status;
  const getBacklogStatus = () => state.getBacklogItemsFetchStatus.status;

  return {
    getInitiative,
    getInitiatives,
    getInitiativesStatus,
    getCurrentItems,
    getNextItems,
    getBacklogtItems,
    getCurrentStatus,
    getNextStatus,
    getBacklogStatus
  };
}
