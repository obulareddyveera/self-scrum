import { authTypes } from "./../types/_auth";

export default (state, action) => {
  const initState = {
    isLoading: false,
    dateLastModified: new Date().getTime(),
  };
  if (!state) return initState;

  switch (action.type) {
    case authTypes.SELF_SCRUM_FIRESTORE_AUTH_BEGIN:
      return {
        ...state,
        isLoading: true,
        dateLastModified: new Date().getTime(),
      };
    case authTypes.SELF_SCRUM_FIRESTORE_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dateLastModified: new Date().getTime(),
        status: {...action.payload},
        forward: {
          pathname: "/app/dashboard",
          state: { ...action.payload, dateLastModified: new Date().getTime() }
        },
      }
    default:
      return { ...initState };
  }
};
