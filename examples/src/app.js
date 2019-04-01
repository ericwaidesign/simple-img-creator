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
        const uniqueImgName = 'goldfishB';
        const lowResImgUrl = './assets/images/lowRes_goldfishB.jpg';
        const highResImgUrl = './assets/images/goldfishB.jpg';

        const params = {
            uniqueImgName: uniqueImgName,
            // low resolution image
            lowResImgUrl: lowResImgUrl,
            // high resolution image
            highResImgUrl: highResImgUrl
        }

        return (
            <SimpleImgCreator params={params} />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('AppRoot'));
