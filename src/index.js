// Import react and ReactDOM from libs

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

// Create a react component
const App = () => {

    return (
        <div className="ui container comments">
            {/*comment 1*/}
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 2 PM </span>
                    </div>
                    <div className="text">Nice blog post!</div>

                </div>
            </div>

            {/*comment 2*/}
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 2 PM </span>
                    </div>
                    <div className="text">Nice blog post!</div>

                </div>
            </div>

            {/*comment 3*/}
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 2 PM </span>
                    </div>
                    <div className="text">Nice blog post!</div>

                </div>
            </div>

        </div> // closing div


        );
};

// Take the component and display on screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
