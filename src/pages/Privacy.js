import React from 'react'
import ContentLimiter from '../components/theme/ContentLimiter'
import ContentText from '../components/theme/ContentText'
import { useTranslation } from 'react-i18next'

/**
 * Placeholer text. Simple styling. Copy-paste https://integreat-app.de/datenschutz/
 */
function Privacy() {
  const { t } = useTranslation()
  return (
    <ContentLimiter withBoxShadow>
      <h1 style={{ textAlign: 'center' }}>{t('privacy.navigationLabel')}</h1>
      <ContentText>
        <p>Bei der Nutzung der Integreat-App f&uuml;r Smartphones und der Integreat-Web-Application (zusammen &bdquo;
          <strong>Apps</strong>&bdquo;) erhebt die TU Projects Obdachlosenhilfe gGmbH (von nun an &bdquo;<strong>Beste
            Firma</strong>&ldquo; oder &bdquo;<strong>wir</strong>&bdquo;) als Verantwortlicher Daten. In dieser
          Datenschutzerkl&auml;rung erl&auml;utern wir, wie wir die erhobenen Daten verarbeiten. Personenbezogene Daten
          sind alle Informationen, die sich auf eine identifizierte oder identifizierbare nat&uuml;rliche Person
          beziehen.</p>
        <p><strong>Welche Daten wir erheben und verarbeiten</strong></p>
        <p>Bei jedem Zugriff auf Inhalte auf integreat.app / web.integreat-app.de / cms.integreat-app.de oder der
          Aktualisierung der dazugeh&ouml;rigen App (Android/iOS/Windows) werden folgende Nutzungsdaten anonym, d.h.
          ohne Zuordnung zu einer bestimmten Person oder IP-Adresse, erhoben, wenn eine aktive Internetverbindung
          besteht:</p>
        <ul>
          <li>Datum und Uhrzeit des Abrufs;</li>
          <li>Name des aufgerufenen Internetdienstes, der aufgerufenen Ressource und der verwendeten Aktion;</li>
          <li>Abfrage, die der Client gestellt hat;</li>
          <li>&uuml;bertragene Datenmenge;</li>
          <li>Meldung, ob der Abruf erfolgreich war;</li>
          <li>Browser-Identifikation (enth&auml;lt in der Regel die Browserversion, sowie das Betriebssystem).</li>
        </ul>
        <p>Folgende Informationen werden zu einem Server der Besten Firma &uuml;bertragen, falls sich die App auf dem
          Smartphone nicht erwartungsgem&auml;&szlig; verh&auml;lt:</p>
        <ul>
          <li>Hardware-Modell</li>
          <li>Betriebssystem-Version</li>
          <li>Ger&auml;te-Name</li>
          <li>Eindeutige Identifikationsnummer</li>
          <li>Status der Netzwerkverbindungen</li>
          <li>Die letzten in der App aufgerufenen Seiten und Aktionen<br/>Diese Informationen werden 6 Monate
            gespeichert und um Fehler in der App zu finden und zu beheben.
          </li>
        </ul>
        <p>Sonstige Daten werden bei Ihrer Nutzung nicht automatisch erhoben und nicht an unsere Server gesendet. Nach
          dem Grundsatz der Datenvermeidung und der Datensparsamkeit, sowie dem Grundsatz der anonymen und pseudonymen
          Nutzung, wird nur das Minimum an Nutzungsdaten erhoben, soweit dies f&uuml;r den technischen Betrieb der Apps
          sowie die Ermittlung der aufgerufenen Inhate erforderlich ist.</p>
        <p>Die erhobenen Informationen k&ouml;nnen weder direkt noch mit Hilfe von Zusatzwissen auf eine bestimmte
          Person zur&uuml;ckgef&uuml;hrt werden. Die einzelnen Nutzer k&ouml;nnen somit nicht identifiziert werden. Wir
          erstellen keine Nutzungsprofile.</p>
        <p><strong>F&uuml;r welche Zwecke und auf welcher Rechtsgrundlage wir Ihre Daten verarbeiten</strong></p>
        <p>Die Nutzung der Apps ist ohne Angabe Ihrer personenbezogenen Daten m&ouml;glich.</p>
        <p>Wenn Sie uns anrufen oder eine Anfrage per E-Mail stellen, verarbeiten wir die von Ihnen uns
          m&ouml;glicherweise mitgeteilten personenbezogenen Daten nur f&uuml;r das berechtigte Interesse, Ihre Anfrage
          zu bearbeiten.</p>
        <p><strong>An wen wir Ihre Daten weitergeben</strong></p>
        <p>Daten, die beim Zugriff auf die Apps oder f&uuml;r einen speziellen Dienst erhoben werden, werden nur dann an
          Dritte au&szlig;erhalb unseres Unternehmens &uuml;bermittelt,</p>
        <ul>
          <li>soweit wir gesetzlich oder durch richterliche bzw. staatsanwaltliche Anordnung dazu verpflichtet sind
            oder,
          </li>
          <li>soweit die Weitergabe der Daten im Falle von Angriffen auf die Internetinfrastruktur unseres Unternehmens
            zur Rechts- oder Strafverfolgung erforderlich ist.
          </li>
        </ul>
        <p>Eine Weitergabe der Daten zu kommerziellen Zwecken erfolgt nicht. Dabei gilt weiterhin, dass die Daten anonym
          sind, also keiner bestimmten oder bestimmbaren Person zugeordnet werden k&ouml;nnen.</p>
        <p>Eine &Uuml;bermittlung der Daten in andere Staaten erfolgt nicht. Der Serverstandort ist Deutschland.</p>
        <p><strong>Wie lange wir Ihre Daten aufbewahren</strong></p>
        <p>Die erhobenen Nutzungsdaten werden anonymisiert gespeichert solange sie f&uuml;r Auswertungen ben&ouml;tigt
          werden und anschlie&szlig;end vollst&auml;ndig gel&ouml;scht.</p>
        <p>Wenn Sie uns eine Anfrage schicken &uuml;ber die App schicken, speichern wir Ihre personenbezogenen Daten nur
          solange, wie dies f&uuml;r die Bearbeitung der Anfrage erforderlich ist. Abschlie&szlig;end l&ouml;schen wir
          Ihre personenbezogenen Daten vollst&auml;ndig.</p>
        <p><strong>Ihre Rechte</strong></p>
        <p>Soweit wir personenbezogene Daten von Ihnen verarbeiten, haben Sie das Recht auf Auskunft &uuml;ber die von
          uns verarbeiteten personenbezogenen Daten sowie auf Berichtigung oder L&ouml;schung oder Einschr&auml;nkung
          der Verarbeitung oder ein Widerspruchsrecht gegen die Verarbeitung. Zur Geltendmachung Ihrer Rechte wenden Sie
          sich einfach an die unten angegebenen Kontaktdaten.</p>
        <p>Daneben haben Sie in Bezug auf die Verarbeitung personenbezogener Daten das Recht, sich bei der
          zust&auml;ndigen Aufsichtsbeschwerde zu beschweren.</p>
        <p>Eine ausschlie&szlig;lich auf einer automatisierten Verarbeitung beruhende Entscheidung findet nicht
          statt.</p>
        <p><strong>&Auml;nderungen dieser Datenschutzerkl&auml;rung</strong></p>
        <p>K&uuml;nftig kann diese Datenschutzerkl&auml;rung ge&auml;ndert werden. Die jeweils aktuelle Version der
          Datenschutzerkl&auml;rung finden Sie auf unserer Webseite.</p>
        <p><strong>Datenschutzbeauftragter</strong></p>
        <p>Wir haben einen Datenschutzbeauftragten ernannt. Dieser ist erreichbar unter:</p>
        <p>Ulli Holtgrave<br/>TU Projects TU Berlin<br/>ulli@tu-projects.de<br/>Straße des 17. Juni 135<br/>10623 Berlin
        </p>
      </ContentText>
    </ContentLimiter>
  )
}

export default Privacy
