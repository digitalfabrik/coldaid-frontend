import React from 'react';
import {usePosition} from '../components/usePosition';
import {useTranslation} from 'react-i18next';

export default function Map (){
  const {t}                   = useTranslation();
  const {latitude, longitude, error} = usePosition();
  return (
      <code>
        {t('latitude')}: {latitude}<br/>
        {t('longitude')}: {longitude}<br/>
        error: {error}
      </code>
  );
};
