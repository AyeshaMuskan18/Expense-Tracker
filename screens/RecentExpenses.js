import { useEffect, useState } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { getDateMinusDays } from '../util/date';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses } from '@/util/http';
import { setExpense } from '@/redux/expenseActions';
import LoadingOverlay from '../components/UI/loadingOverlay'
import ErrorOverlay from '../components/UI/ErrorOverlay';

function RecentExpenses() {


  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const [fetchedExpenses, setFetchedExpenses] = useState([]);


  const dispatch = useDispatch();
  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        dispatch(setExpense(expenses));
      } catch (error) {
        setError('Could not fetch expenses!');
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);


  console.log(fetchedExpenses)
  const expenses = useSelector((state) => state.expenses);
  console.log(expenses);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;