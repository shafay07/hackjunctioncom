import React, { useState } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import Image from '../Image';
import { media as selectMedia } from '../../redux/staticmedia/selectors'

const HeaderImage = ({ image, alt, children }) => {
    return (
        <div className={`HeaderImage`}>
            <Image image={image} width={1920} height={900} alt={alt} className="HeaderImage--img" />
            <div className="HeaderImage--content">
                {children}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const media = selectMedia(state)

    return {
        image: media[ownProps.imageKey] || ownProps.image
    }
}

export default connect(mapStateToProps)(HeaderImage);
