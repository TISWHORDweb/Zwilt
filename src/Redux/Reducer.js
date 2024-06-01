
import { SHOW_DESCRIPTION, HIDE_ALL_DESCRIPTIONS } from '../Redux/Actions'; 
import Screening from '../Data/Screening.json'

const initialState = {
    descriptions: {
      1: false, 
      2: false,
      3: false,
      4: false,
      5: false,
    },
    screeningData:Screening.screening
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_DESCRIPTION:
        return {
          ...state,
          descriptions: {
            ...state.descriptions,
            [action.step]: true, 
          },
        };
      case HIDE_ALL_DESCRIPTIONS:
        return {
          ...state,
          descriptions: Object.fromEntries(
            Object.keys(state.descriptions).map((step) => [step, false])
          ), // Reset all descriptions to hidden
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  