const getGuestView = (state) => state.guestView;

export const getShowSignUp = (state) => getGuestView(state).showSignUp;

export const getShowSignIn = (state) => getGuestView(state).showSignIn;
export const getShowConnectOptions = (state) =>
  getGuestView(state).showConnectOptions;
