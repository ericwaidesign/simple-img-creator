/**
 * simple-img-creator
 * @author <ericwaidesign@gmail.com>
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Constants from './assets/constants';
import './assets/css/styles.css';

/**
 * @description This class returns a div contains with the given low res 
 * placement image and a high res image. When the high res image on loaded, 
 * the opacity of the low res image change from 1 to 0.
 */
class SimpleImgCreator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lowResImgOpacity: Constants.OPACITY_ONE
        }
    }

    /**
     * @description sets the opacity of the low res image to 0 and trigger a 
     * re-render to update the DOM element
     */
    setLowResImgOpacityTo0 = () => {
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
        // name of the image
        uniqueImgName: PropTypes.string.isRequired,
        // path to the low resolution image
        lowResImgUrl: PropTypes.string.isRequired,
        // path to the high resolution image
        highResImgUrl: PropTypes.string.isRequired
    })
};

export default SimpleImgCreator;