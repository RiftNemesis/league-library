import React from 'react';
import Search from './search';

class TopContainer extends React.Component {
    render() {
    return(
        <div id = "top-container">
            <span id = "updated">Last Updated: 2021/01/08</span>
            <h1 className = "title non-selectable">League Library</h1>
            <Search />
        </div>
        )
    }
}

export default TopContainer;