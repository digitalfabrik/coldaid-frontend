import React, { useEffect, useState } from 'react'
import ContentLimiter from '../../components/theme/ContentLimiter'

const test_url = 'http://localhost:8000/api/augsburg/de-de/page/?url=augsburg/de-de/willkommen/wissenswertes-uber-augsburg';
const base_url = 'http://130.149.22.44:8000/api/';

export default function LegalInformation() {
  const [information, setInformation] = useState([])

  useEffect(() => {
    const getInformation = async () => {
      const response = await fetch(test_url);
      const information = await response.json();
      console.log(information);
      setInformation(information);
    }
    getInformation()
  }, [])


  return (
    <ContentLimiter withBoxShadow>
      <h1>{information.title}</h1>
      <div style={{whiteSpace: "pre-wrap"}}>{information.content}</div>
      <br/>
      <div>Letzte Änderung: {new Date(information.modified_gmt).toLocaleDateString()}</div>
    </ContentLimiter>
  )
}

/*
augsburg/de-de/willkommen/wissenswertes-uber-augsburg     //legal
augsburg/de-de/willkommen/uber-die-app-integreat-augsburg //health
augsburg/de-de/willkommen/kontakt-zu-app-team-augsburg    //advice
 */
