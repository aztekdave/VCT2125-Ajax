import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1 style={{color: this.props.color}}>
                    {this.props.msg}
                    </h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Message color="blue" msg="how are you?"/>,
    document.getElementById('root')
)
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
