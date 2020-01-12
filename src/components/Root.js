import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';

class Root extends Component {

    render() {
        return(
            <div className="container">
                <Header />
                <Posts />
                <Footer />
            </div>
        );
    }
}

export default Root;