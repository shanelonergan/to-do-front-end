import React from 'react';
import ListHeader from './ListHeader';
import ListItem from './ListItem'

const List = () => {
    return (
        <div className="box">
            < ListHeader />
            <div>
                < ListItem />
            </div>
        </div>
    );
}

export default List;
