import { ADD_EXPENSE, DELETE_EXPENSE, UPDATE_EXPENSE, SET_EXPENSE } from "./expenseActions";


const initialState = [];

export const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            const newId = new Date().toString() + Math.random().toString;
            return [{ ...action.payload, id: newId }, ...state];

        case UPDATE_EXPENSE:
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case DELETE_EXPENSE:
            return state.filter((expense) => expense.id !== action.payload);
        case SET_EXPENSE:
            const inverted = action.payload.reverse();
            return inverted;

        default:
            return state;
    }
}
