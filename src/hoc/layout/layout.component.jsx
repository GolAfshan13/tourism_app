import React from 'react';
import Header from '../../components/header/header.component';

class Layout extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }
};

export default Layout ;