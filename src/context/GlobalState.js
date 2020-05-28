import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  runs: [],
  goals: [],
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteRun(id) {
    dispatch({
      type: 'DELETE_RUN',
      payload: id
    });
  }
    function deleteRuns(runs) {
      dispatch({
        type: 'DELETE_RUNS',
        payload: runs
      });
    }

  function addRun(run) {
    dispatch({
      type: 'ADD_RUN',
      payload: run
    });
  }

  function clearGoal(goals) {
    dispatch({
      type: 'CLEAR_GOAL',
      payload: goals
    });
  }

  function addGoal(goal) {
    dispatch({
      type: 'ADD_GOAL',
      payload: goal
    });
  }

  return (<GlobalContext.Provider value={{
    runs: state.runs,
    deleteRun,
    deleteRuns,
    addRun,

    goals: state.goals,
    clearGoal,
    addGoal,

  }}>
    {children}
  </GlobalContext.Provider>);
}