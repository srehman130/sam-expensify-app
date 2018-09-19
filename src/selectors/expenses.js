import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const momentCreatedAt = moment(expense.createdAt);
       const startDateMatch = startDate ? startDate.isSameOrBefore(momentCreatedAt, 'day') : true;
       const endDateMatch = endDate ? endDate.isSameOrAfter(momentCreatedAt, 'day') : true;
       const textMatch = !text || expense.description.toLowerCase().indexOf(text.toLowerCase()) > -1;

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}