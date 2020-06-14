import React from 'react'
import ContentLimiter from '../components/theme/ContentLimiter'
import { useTranslation } from 'react-i18next'
import CmsStylingContainer from '../components/cmsStylingContainer/cmsStylingContainer'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <ContentLimiter withBoxShadow>
      <CmsStylingContainer>
        <h1>{t('contact.navigationLabel')}</h1>
        <h2>Haben Sie Fragen? Dann kontaktieren Sie uns!</h2>
        <p><strong>Postanschrift:</strong></p>
        <p>TU Projects<br/>Straße des 17. Juni 135<br/>10623 Berlin</p>
        <p><strong>Vertretungsberechtigt:</strong></p>
        <p>Prof. Dr. Ulli Holtgrave<br/>Geschäftsführer</p>
        <p>Straße des 17. Juni 135<br/>10623 Berlin</p>
        <p><a href="mailto:bildungskoordination@berlin.de">ceo@berlin.de</a><br/><a
          href="tel:+493043584530">030-345893640</a> oder <a href="tel:tel:+493023094509">030-2340952503</a><br/></p>
        <p><strong>Verantwortlichkeit f&uuml;r den Inhalt:</strong></p>
        <p>Dr. Ulli Holtgrave Junior<br/>Leiter des B&uuml;ros f&uuml;r Migration, Interkultur und Vielfalt</p>
        <p>Straße des 17. Juni 135<br/>10623 Berlin</p>
        <p><a href="mailto:bildungskoordination@berlin.de">bildungskoordination@berlin.de</a><br/><a
          href="tel:+493043584530">030-43584530</a> oder <a href="tel:tel:+493023094509">030-23094509</a><br/></p>
      </CmsStylingContainer>
    </ContentLimiter>
  )
}
