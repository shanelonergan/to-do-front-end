import React from 'react';

export default class ListItem extends React.Component {

    state = {
        done: false
    }

    render(){
        return (
            <div>
                <input type="checkbox"></input>eat pizza
            </div>
        );
    }
}


