import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>This is some information. {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.show && <p>Admin Info</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const authentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.show ? <WrappedComponent {...props}/> : <p>Please log in to continue.</p>}
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = authentication(Info);

ReactDOM.render(<AuthInfo show={true} info='sami'/>, document.getElementById('body'));