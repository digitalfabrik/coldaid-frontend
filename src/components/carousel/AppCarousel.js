import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from './CarouselItem'
import { useTranslation } from 'react-i18next'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { APP_ROUTES } from '../app/App'

const useStyles = makeStyles({
  root: {
    // marginTop: '3px',
    // zIndex: -99,
  },
})

export default function AppCarousel() {
  const {t} = useTranslation()

  const items = [
    {
      infoText: t('advice.imageText'),
      src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      alt: 'advice image',
      to: APP_ROUTES.adviceInformation,
    },
    {
      infoText: t('healthRelatedInformation.imageText'),
      src: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      alt: 'health image',
      to: APP_ROUTES.healthRelatedInformation,
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
      {items.map((item,key) => {
        return <CarouselItem key={key} item={item}/>
      })}
    </Carousel>
  )
}
