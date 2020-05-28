export default (state, action) => {
  switch(action.type) {
    case 'DELETE_RUN':
      return {
        ...state,
        runs: state.runs.filter(run => run.id !== action.payload)
      }

      case 'DELETE_RUNS':
        return {
          ...state,
          runs: state.runs.filter(run => run.id === action.payload)
        }
    case 'ADD_RUN':
      return {
        ...state,
        runs: [action.payload, ...state.runs]
      }

      case 'CLEAR_GOAL':
        return {
          ...state,
          goals: state.goals.filter(goal => goal.id === action.payload)
        }
      case 'ADD_GOAL':
        return {
          ...state,
          goals: [action.payload, ...state.goals]
        }  
    
      
    default:
      return state;
  }
}