import React from 'react';
import './style.scss';

import HeaderImage from '../../components/HeaderImage';
import BasicHeader from '../../components/HeaderImage/BasicHeader';
import Divider from '../../components/Divider';
import Page from '../PageHOC';

import MEDIA_KEYS from '../../redux/staticmedia/keys';

const NotFoundPage = () => {
    return (
        <Page className="NotFoundPage" pageTitle="404">
            <HeaderImage
                imageKey={MEDIA_KEYS.notFoundPageHeaderImage}
                alt="Header image"
            >
                <BasicHeader title={'Page not found'} body={"It seems like the page you were looking for doesn't exist..."} />
            </HeaderImage>
            <Divider lg />
        </Page>
    );
};

export default NotFoundPage
