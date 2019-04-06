/**
 * simple-img-creator
 * @author <ericwaidesign@gmail.com>
 */

'use strict'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Image from '../../src/assets/Image';
import SimpleImgCreator from "../../src";

class App extends Component {
    render() {
        const newImage = new Image(
                // The file name of the high res image without extension.
                'goldfishB',
                // The file path of the high res image.
                './examples/src/assets/images/goldfishB.jpg',
                // The file name of the low res image without extension.
                'lowRes_goldfishB',
                // The file path of the low res image.
                './examples/src/assets/images/lowRes_goldfishB.jpg'
        );
        
        return (
            <SimpleImgCreator image={newImage} />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('AppRoot'));
