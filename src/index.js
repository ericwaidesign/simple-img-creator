/**
 * simple-img-creator
 * @author <ericwaidesign@gmail.com>
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Constants from './assets/constants';
import './assets/css/styles.css';

/**
 * @description This class creates and return a div that contains a low 
 * resolution image and a high resolution image. The low resolution will
 * be rendered as a placement. When the high resolution image loaded, the
 * opacity will change from 0 to 1 to cover the placement image.
 */
class SimpleImgCreator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            highResImg: null,
            highResImgClassOpacity: Constants.OPACITY_ZERO
        }
    }

    componentDidMount() {
        const highResImg = new Image();
        highResImg.addEventListener(Constants.LOAD, this.highResImgOnload, false);
        highResImg.src = this.props.params.highResImgUrl;
    }

    highResImgOnload = () => {
        this.state.highResImgNode.setAttribute(Constants.STYLE, 'background-image');
        setHighResImgOpacityToOne();
    }

    setHighResImgOpacityToOne = () => {
        // Set the high resolution image opacity to 1.
        this.setState({ highResImgClassOpacity: Constants.OPACITY_ONE });
    }

    render() {
        return (
            <div
                id={ `${this.props.params.uniqueImgName}` }
                className={ `${Constants.IMAGE_CONTAINER}` }
            >
                {/* high resolution image */}
                <div
                    className={ `${Constants.SIMPLE_IMG_CREATOR}` }
                    ref={ highResImgNode => this.highResImg = highResImgNode }
                >
                </div>

                {/* low resolution image for placement */}
                <div
                    className={ `${Constants.SIMPLE_IMG_CREATOR}` }   
                    style={{ backgroundImage: `url(${this.props.params.lowResImgUrl})` }}
                >
                </div>
            </div>
        )
    }
}

SimpleImgCreator.propTypes = {
    params: PropTypes.shape({
        // name of the img use as the is for the container
        uniqueImgName: PropTypes.string.isRequired,
        // path to the low resolution img
        lowResImgUrl: PropTypes.string.isRequired,
        // path to the high resolution img
        highResImgUrl: PropTypes.string.isRequired,
    })
};

export default SimpleImgCreator;