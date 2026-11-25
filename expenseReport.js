/*
 * An expense follows the format:
 * {
 *    id: number;
 *    description: string;
 *    amountInCents: number;
 *    category: string;
 *    date: string;
 * }
*/
let expenses = [
    {
        id: 1,
        description: 'Groceries',
        amountInCents: 5240,
        category: 'Food',
        date: "2026-11-20"
    },
    {
        id: 2,
        description: 'Gas',
        amountInCents: 3500,
        category: 'Transportation',
        date: "2026-11-21"
    },
    {
        id: 3,
        description: 'Lunch',
        amountInCents: 1450,
        category: 'Food',
        date: "2026-11-22"
    },
    {
        id: 4,
        description: 'Movie',
        amountInCents: 1800,
        category: 'Entertainment',
        date: "2026-11-22"
    },
    {
        id: 5,
        description: 'Bus Pass',
        amountInCents: 2500,
        category: 'Transportation',
        date: "2026-11-23"
    },
    {
        id: 6,
        description: 'Dinner',
        amountInCents: 2200,
        category: 'Food',
        date: "2026-11-24"
    },
]
const allowedCategories = new Set(["Food", "Transportation", "Entertainment"]);

/*
 * Adds an expense to the global "expenses" array
 * @param {Expense} expense - The expense object that should be added
 * @returns true on success or false on failure
*/
function addExpense(expense) {
    return;
}

/*
 * Removes an expense from the global "expenses" array
 * @param {number} expenseId - The id of the expense you want to delete
 * @returns {boolean} true on success or false on failure
*/
function removeExpense(expenseId) {
    return;
}

/*
 * Calculates the total amount spent on all expenses
 * @returns {number} the total spending in cents
*/
function calculateTotalSpending() {
    return;
}

/*
 * Calculates the total amount spent on a certain category
 * @param {string} category - The category that should be searched
 * @returns {number} the total spending in the category in cents
*/
function calculateSpendingByCategory(category) {
    return;
}

/*
 * Gets all expenses in between 2 dates inclusive and returns them
 * @param {string} startDate - The start of the date range (Format: "YYYY-MM-DD")
 * @param {string} endDate - The end of the date range (Format: "YYYY-MM-DD")
 * @returns {Expense[]} Array of all expenses that are within the date range
*/
function getExpensesWithinDateRange(startDate, endDate) {
    return;
}

/*
 * Generates a spending report based on all current expenses
 * The spending report looks like:
 * {
 *    totalSpending: number, // in cents
 *    numberOfExpenses: number,
 *    averageExpense: number, // in cents
 *    highestExpense: Expense, // The expense object from expenses
 *    spendingByCategory: Object // Maps all existing categories to how much was spent in them
 * }
 * 
 * @returns {Object} The spending report
*/
function generateSpendingReport() {
    return;
}