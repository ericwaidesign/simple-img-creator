/**
 * simple-img-creator
 * @author <ericwaidesign@gmail.com>
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import SimpleImgCreator from "../../src";

class App extends Component {
    render() {
        const params = {
            uniqueImgName: 'goldfishB',
            // low resolution image
            lowResImgUrl: './examples/src/assets/images/lowRes_goldfishB.jpg',
            // high resolution image
            highResImgUrl: './examples/src/assets/images/goldfishB.jpg'
        }
        
        return (
            <SimpleImgCreator params={params} />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('AppRoot'));
