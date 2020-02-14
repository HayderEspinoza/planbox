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
  const getUtilsStatus = () => state.getUtilsFetchStatus.status;
  const getProjects = () => state.projects;
  const getProjectsList = () => state.projectsList;
  const getTasks = () => state.tasks;
  const getTasksStatus = () => state.getTasksFetchStatus.status;
  const getUsersList = () => state.usersList;

  return {
    getInitiative,
    getInitiatives,
    getInitiativesStatus,
    getCurrentItems,
    getNextItems,
    getBacklogtItems,
    getCurrentStatus,
    getNextStatus,
    getBacklogStatus,
    getUtilsStatus,
    getProjects,
    getProjectsList,
    getTasks,
    getTasksStatus,
    getUsersList
  };
}
