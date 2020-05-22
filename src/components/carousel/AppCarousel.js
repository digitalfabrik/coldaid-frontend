import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from './CarouselItem'
import { useTranslation } from 'react-i18next'
import { APP_ROUTES } from '../app/App'

export default function AppCarousel() {
  const { t } = useTranslation()

  const items = [
    {
      infoText: t('map.imageText'),
      src: 'https://images.unsplash.com/photo-1500333070776-343c73e1eb4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
      alt: 'map image',
      to: APP_ROUTES.map,
    },
    {
      infoText: t('overview.imageText'),
      src: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      alt: 'shelter overview image',
      to: APP_ROUTES.shelterOverview,
    },
    {
      infoText: t('kaeltebus.imageText'),
      src: 'https://images.unsplash.com/photo-1517249178445-764e21836f70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      alt: 'kaeltebus image',
      to: APP_ROUTES.kaeltebus,
    },
    {
      infoText: t('legal.imageText'),
      src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      alt: 'legal image',
      to: APP_ROUTES.kaeltebus,
    },
    {
      infoText: t('healthRelatedInformation.imageText'),
      src: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      alt: 'health image',
      to: APP_ROUTES.healthRelatedInformation,
    },
    {
      infoText: t('advice.imageText'),
      src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      alt: 'advice image',
      to: APP_ROUTES.adviceInformation,
    },
  ]

  return (
    <Carousel
      autoPlay={true}
      interval={6000}
      indicators={false}
      animation={'fade'}
      timeout={0}
    >
      {items.map((item, key) => {
        return <CarouselItem key={key} item={item}/>
      })}
    </Carousel>
  )
}
