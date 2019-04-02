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
            lowResImgOpacity: Constants.OPACITY_ONE
        }
    }

    /**
     * @description instance property that sets the CSS class name 
     * in state to trigger a re-render to update a DOM element's 
     * opacity setting to 0.
     */
    setLowResImgOpacityTo0 = () => {
        // Set class name to change the DOM element opacity to 0.
        this.setState({ lowResImgOpacity: Constants.OPACITY_ZERO });
    }

    render() {
        return (
            <div
                id={ `${this.props.params.uniqueImgName}` }
                className={ `${Constants.IMAGE_CONTAINER}` }
            >
                {/* Low res placeholder image */}
                <img
                    className={ `${Constants.IMAGE} ${Constants.LOW_RES} ${this.state.lowResImgOpacity}` }
                    src={ this.props.params.lowResImgUrl }
                />

                {/* High res image */}
                <img
                    className={ `${Constants.IMAGE} ${Constants.HIGH_RES}` }
                    src={ this.props.params.highResImgUrl }
                    onLoad={ this.setLowResImgOpacityTo0 }
                />
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
        highResImgUrl: PropTypes.string.isRequired
    })
};

export default SimpleImgCreator;