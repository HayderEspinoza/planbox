export default function selectors(globalState) {
  const state = globalState.authentication;
  const getSession = () => state.session;
  const getProfile = () => state.profile;
  const getLogInStatus = () => state.logInFetchStatus;
  const getCheckTokenStatus = () => state.checkTokenFetchStatus.status;

  return {
    getSession,
    getLogInStatus,
    getCheckTokenStatus,
    getProfile
  };
}
