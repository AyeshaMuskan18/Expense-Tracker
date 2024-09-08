export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';
export const SET_EXPENSE = 'SET_EXPENSE';

export const addExpense = (expenseData) => ({
    type: ADD_EXPENSE,
    payload: expenseData,
})
export const deleteExpense = (id) => ({
    type: DELETE_EXPENSE,
    payload: id,
})
export const updateExpense = (id,expenseData) => ({
    type: UPDATE_EXPENSE,
    payload: {id, data:expenseData},
})
export const setExpense = (expenses) => ({
    type: SET_EXPENSE,
    payload: expenses,
})