import React from 'react'
import { Typography } from '@material-ui/core'
import ContentLimiter from '../components/theme/ContentLimiter'
import {useTranslation} from "react-i18next";
import ContentText from "../components/theme/ContentText";

function Imprint() {
  const { t } = useTranslation();

  return (
    <ContentLimiter withBoxShadow>
      <h1 style={{textAlign: "center"}}>{t("imprint.navigationLabel")}</h1>
      <ContentText>
        <p>Die Inhalte werden herausgegeben durch:</p>
        <p><strong>Herausgeber:</strong></p>
        <p>TU Projects<br />(Gebietsk&ouml;rperschaft des &ouml;ffentlichen Rechts)<br />Straße des 17. Juni 135<br />10623 Berlin</p>
        <p><strong>Postanschrift:</strong></p>
        <p>Stadt Berlin<br />10623 Berlin</p>
        <p><strong>Vertretungsberechtigt:</strong></p>
        <p>Oberb&uuml;rgermeister Prof. Dr. Ulli Holtgrave</p>
        <p>Umsatzsteueridentifikationsnummer gem&auml;&szlig; &sect; 27a des Umsatzsteuergesetzes: DE 1234567890</p>
        <p><strong>Verantwortlichkeit f&uuml;r den Inhalt:</strong></p>
        <p>Dr. Ulli Holtgrave Junior<br />Leiter des B&uuml;ros f&uuml;r Migration, Interkultur und Vielfalt</p>
        <p>Straße des 17. Juni 135<br />10623 Berlin</p>
        <p><a href="mailto:bildungskoordination@berlin.de">bildungskoordination@berlin.de</a><br /><a href="tel:+493043584530">030-43584530</a> oder <a href="tel:tel:+493023094509">030-23094509</a><br /><strong>Urheberrecht</strong></p>
        <p>Texte, Bilder, Grafiken sowie die Gestaltung dieser Internetseiten unterliegen dem deutschen Urheberrecht. Sie d&uuml;rfen von Ihnen nur zum privaten und sonstigen eigenen Gebrauch im Rahmen des &sect; 53 Urheberrechtsgesetz (UrhG) verwendet werden. Eine Vervielf&auml;ltigung oder Verwendung dieser Seiten oder Teilen davon in anderen elektronischen oder gedruckten Publikationen und deren Ver&ouml;ffentlichung ist nur mit unserer Einwilligung gestattet. Diese erteilt auf Anfrage die Onlineredaktion der Stadt Berlin unter onlineredaktion(at)berlin.de. Weiterhin k&ouml;nnen Texte, Bilder, Grafiken und sonstige Dateien ganz oder teilweise dem Urheberrecht Dritter unterliegen. &Uuml;ber das Bestehen m&ouml;glicher Rechte Dritter erhalten Sie n&auml;here Ausk&uuml;nfte unter onlineredaktion(at)berlin.de.</p>
        <p>Der Nachdruck und die Auswertung von Pressemitteilungen und Reden sind mit Quellenangabe allgemein gestattet.</p>
        <p><strong>Inhalte des Website-Angebots</strong></p>
        <p>Alle auf dieser Internetseite bereitgestellten Informationen haben wir nach bestem Wissen und Gewissen erarbeitet und gepr&uuml;ft. Eine Gew&auml;hr f&uuml;r die jederzeitige Aktualit&auml;t, Richtigkeit, Vollst&auml;ndigkeit und Verf&uuml;gbarkeit der bereit gestellten Informationen k&ouml;nnen wir allerdings nicht &uuml;bernehmen. Dies gilt nicht f&uuml;r Informationen, die den Anwendungsbereich der Europ&auml;ischen Dienstleistungsrichtlinie (Richtlinie 2006/123/EG - DLRL) fallen. F&uuml;r diese Informationen wird die Richtigkeit und Aktualit&auml;t gew&auml;hrleistet.</p>
        <p>Die Stadt Berlin ist als Dienstanbieter f&uuml;r eigene Informationen auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich (&sect; 7 I TMG). Ein Vertragsverh&auml;ltnis mit den Nutzern dieses Informationsangebotes kommt nicht zustande.</p>
        <p>Die Stadt Berlin beh&auml;lt es sich ausdr&uuml;cklich vor, einzelne Webseiten oder das gesamte Angebot ohne gesonderte Ank&uuml;ndigung zu ver&auml;ndern, zu erg&auml;nzen, zu l&ouml;schen oder die Ver&ouml;ffentlichung zeitweise oder endg&uuml;ltig einzustellen.</p>
        <p><strong>Links auf fremde Inhalte/Fremdeintr&auml;ge</strong></p>
        <p>Von unseren eigenen Inhalten sind die Querverweise (&bdquo;Links&ldquo;) auf die Webseiten anderer Anbieter zu unterscheiden. Durch die Links erm&ouml;glichen wir lediglich den Zugang zur Nutzung &bdquo;fremder Inhalte&ldquo;. Wir haben jedoch keinen Einfluss auf den Inhalt und die Gestaltung dieser externen Websites und machen uns die Inhalte dieser verlinkten Seiten nicht zu eigen. F&uuml;r deren Inhalte und Richtigkeit ist allein der jeweilige Anbieter verantwortlich.</p>
        <p>Bei der erstmaligen Verkn&uuml;pfung mit diesen Internetangeboten haben wir diese fremden Inhalte auf Rechtsverletzungen &uuml;berpr&uuml;ft. Zum Zeitpunkt der Verkn&uuml;pfung waren keine Rechtsverst&ouml;&szlig;e erkennbar. Sobald die Stadt Berlin eine Rechtsverletzung feststellt oder von anderen darauf hingewiesen wird, wird sie die Verkn&uuml;pfung zu den jeweiligen Websites unverz&uuml;glich entfernen.</p>
        <p>Ferner distanzieren wir uns von Fremdeintr&auml;gen in Social-Media-Angeboten unserer st&auml;dtischen &Auml;mter und Einrichtungen, die unter der Social Media verzeichnet sind. Diese geben nicht unsere eigene Meinung wieder, sondern die pers&ouml;nliche Auffassung Dritter. Soweit wir Kenntnis von strafbaren oder rechtswidrigen Inhalten erlangen, werden diese Fremdeintr&auml;ge umgehend von uns gel&ouml;scht.</p>
        <p>F&uuml;r die Inhalte der werblichen Eintr&auml;ge auf dem Portal www.berlin-city.de sind die jeweils eintragenden Unternehmen selbst verantwortlich.</p>
      </ContentText>
    </ContentLimiter>
  )
}

export default Imprint
