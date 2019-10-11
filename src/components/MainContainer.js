import React from 'react';
import ListContainer from './ListContainer';
import Sidebar from './Sidebar'

const MainContainer = () => {
    return (
    <div className="flex-container">
        <Sidebar />
        <ListContainer />
    </div>
    )
}

export default MainContainer
