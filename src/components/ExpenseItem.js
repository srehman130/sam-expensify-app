import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className="expense-item">
                <div>
                    <h3>{description}</h3>
                    <p>{moment(createdAt).format("MMM Do YYYY")}</p>
                </div>
                <p>{`$${(parseFloat(amount / 100))}`}</p>
            </div>
        </Link>
    </div>
);

export default ExpenseItem;