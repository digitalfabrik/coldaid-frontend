import React from 'react';
import {usePosition} from './usePosition';
import {useTranslation} from 'react-i18next';
export const UsePositionDemo = () => {
    const {t, it18n} = useTranslation();
    const {latitude, longitude, error} = usePosition();
    return (
        <code>
            {t('latitude')}: {latitude}<br/>
            longitude: {longitude}<br/>
            error: {error}
        </code>
    );
};
