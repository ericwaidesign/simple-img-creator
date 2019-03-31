/**
 * simple-image-slider
 * @author <ericwaidesign@gmail.com>
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Constants from './constants';
import './css/styles.css';

/**
 * @description This class loads the given images.
 */
class ImgCreator extends Component {

    /** */
    constructor(props) {
        super(props);

        this.state = {
            highResImage: null
        }
    }

    componentDidMount() {
        const newHighResImg = new Image();
        newHighResImg.src = this.props.highResImage;
        newHighResImg.addEventListener(Constants.LOAD, highResImgOnload, false);
    }

    highResImgOnload = () => {
        this.state.highResImgNode.setAttribute(Constants.STYLE, background - image);
        setHighResImgOpacityToOne();
    }

    setHighResImgOpacityToOne = () => {
        // Set the high resolution image opacity to 1.
        this.setState({ highResImgOpacity: Constants.OPACITY_ONE });
    }

    render() {
        
    }
}

ImgCreator.propTypes = {
    // path of the high resolution image
    highResImage: PropTypes.string.isRequired,
    // path of the low resolution image
    lowResImage: PropTypes.string.isRequired
};

export default ImgCreator;