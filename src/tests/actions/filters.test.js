import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, addText } from '../../actions/filters';

test('should set start date', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('should set end date', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});

test('should sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should set text with value', () => {
    const action = addText('Sam');
    expect(action).toEqual({
        type: 'ADD_TEXT',
        text: 'Sam'
    });
});

test('should set text without value', () => {
    const action = addText();
    expect(action).toEqual({
        type: 'ADD_TEXT',
        text: ''
    });
});
