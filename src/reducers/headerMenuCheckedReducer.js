const INITIAL_STATE = {
  isChecked: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CLICK_EMPTY":
      return { ...state, isChecked: false };
    case "CLICK_MENU":
      return { ...state, isChecked: false };
    case "CLICK_TOGGLEBTN":
      return { ...state, isChecked: action.payload };
    default:
      return state;
  }
};
