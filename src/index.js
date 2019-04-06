/**
 * simple-img-creator
 * @author <ericwaidesign@gmail.com>
 */

'use strict'

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Constants from './assets/constants';
import './assets/css/styles.css';

/**
 * @description This class returns a div with the given low res 
 * placement image and a high res image. When the high res image 
 * on loaded, the opacity of the low res image change from 1 to 0.
 */
class SimpleImgCreator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lowResImgOpacity: Constants.OPACITY_ONE
        }
    }

    /**
     * @description sets the opacity of the low res image to 0 and 
     * trigger a re-render to update the DOM element
     */
    setLowResImgOpacityTo0 = () => {
        this.setState({ lowResImgOpacity: Constants.OPACITY_ZERO });
    }

    render() {
        return (
            <div 
                className={ `${Constants.IMAGE_CONTAINER}` }
            >
                {/* Low res placeholder image */}
                <img
                    id={ `${this.props.image.lowResFileName}` }
                    className={ `${Constants.IMAGE} ${Constants.LOW_RES} ${this.state.lowResImgOpacity}` }
                    src={ `${this.props.image.lowResPath}` }
                />

                {/* High res image */}
                <img
                    id={ `${this.props.image.highResFileName}` }
                    className={ `${Constants.IMAGE} ${Constants.HIGH_RES}` }
                    src={ `${this.props.image.highResPath}` }
                    onLoad={ this.setLowResImgOpacityTo0 }
                />
            </div>
        )
    }
}

SimpleImgCreator.propTypes = {
    image: PropTypes.shape({
        // The file name of the high res image without extension.
        highResFileName: PropTypes.string.isRequired,
        // The file path of the high res image.
        highResPath: PropTypes.string.isRequired,
        // The file name of the low res image without extension.
        lowResFileName: PropTypes.string.isRequired,
        // The file path of the low res image.
        lowResPath: PropTypes.string.isRequired
    })
};

export default SimpleImgCreator;