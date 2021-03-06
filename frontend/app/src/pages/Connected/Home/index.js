import React, { useEffect } from 'react'
import './style.scss'

import KEYS from '../../../redux/staticcontent/keys'
import MEDIA_KEYS from '../../../redux/staticmedia/keys'
import { updateEvents } from '../../../redux/events/actions'

import SectionImage from '../../../components/SectionImage'
import NewsLetterForm from '../../../components/NewsLetterForm'
import BlockSection from '../../../components/BlockSection'

import DividerLine from '../../../components/DividerLine'
import HeaderSection from '../../../components/HeaderSection'

import HeaderVideo from '../../../components/HeaderVideo'

import { content as selectContent } from '../../../redux/staticcontent/selectors'
import { connect } from 'react-redux'

import { Link, Element } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Page from '../../PageHOC'
import Button from '../../../components/Button'
//HELMET
import { Helmet } from 'react-helmet'

const textsJSON = require('./texts.json')

const ConnectedHome = (props) => {
  useEffect(() => {
    props.updateEvents()
  })

  return (
    <Page
      //   metaDescKey={KEYS.whoAreWeBody}
      className="Connected ConnectedContent ConnectedHome"
      pageTitle="Junction 2020 Connected"
    //   metaDescKey={KEYS.whoAreWeBody}
    //   ogImageKey={MEDIA_KEYS.homePageHeaderImage}
    >
      <div className="Connected-parallax">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Junction 2020 Connected</title>
          <meta
            name="keywords"
            content="junction 2020 connected, connected, junction, junction 2020"
          />
          <meta name="title" content="Junction 2020 Connected" />
          <meta property="og:title" content="Junction 2020 Connected" />
          <meta name="twitter:title" content="Junction 2020 Connected" />
          <meta
            name="description"
            content="Junction 2020 Connected is a new take on the established concept of a hackathon; participants all over the world can join physical locations hosted by Junction and other organizations, or participate in the event fully online."
          />
          <meta
            property="og:description"
            content="Junction 2020 Connected is a new take on the established concept of a hackathon; participants all over the world can join physical locations hosted by Junction and other organizations, or participate in the event fully online."
          />
          <meta
            name="twitter:description"
            content="Junction 2020 Connected is a new take on the established concept of a hackathon; participants all over the world can join physical locations hosted by Junction and other organizations, or participate in the event fully online."
          />

          <meta name="og:type" content="website" />
          <meta
            property="og:image"
            content={require('../../../assets/images/photo-hub-visualisation.svg')}
          />
          <meta
            name="twitter:image"
            content={require('../../../assets/images/photo-hub-visualisation.svg')}
          />
        </Helmet>
        <Link
          activeClass="active"
          to="mainContent"
          spy={true}
          smooth={true}
          duration={500}
        >
          <p>Apply now!</p>
          <FontAwesomeIcon icon="angle-down" size="4x" color="#f5d2a2" />
        </Link>
        <video autoPlay loop muted playsInline className="HeaderVideo--video">
          <source
            src={require('../../../assets/videos/J2020C_Animation_Main.webm')}
            type="video/webm"
          ></source>
          <source
            src={require('../../../assets/videos/J2020C_Animation_Main.mp4')}
            type="video/mp4"
          ></source>
          Your browser does not support the video tag.
        </video>
      </div>
      <DividerLine />
      <Element name="mainContent" />
      <HeaderSection
        className="ScrollSnapElem wholePage"
        logo={require('../../../assets/logos/connected_logo.svg')}
        title={props.HeaderTitle}
        body={props.HeaderBody}
      >
        <div className="Button-row">
          <Button
            className="Button-small Button-apply"
            to="https://app.hackjunction.com/events/junction-2020-connected"
            text="Apply Here"
          />

          <Button className="Button-small" to="/info" text="Event info" />

          <Button
            className="Button-small"
            to="https://hackjunction.com/partners"
            text="Partner with us"
          />
        </div>
      </HeaderSection>
      <DividerLine />
      <SectionImage
        image={{
          url: require('../../../assets/images/connected/website5.webp'),
        }}
        alt="Junction 2020 Connected"
      />
      <DividerLine />

      <BlockSection
        className="ScrollSnapElem"
        halfpage
        title={props.Section1Title}
        subtitle={props.Section1Body}
        extra={
          <Button
            className="Button-default"
            to="/info"
            text="Learn more about the event"
          />
        }
      >
        <img
          src={require('../../../assets/images/photo-hub-visualisation.svg')}
          alt="connected-logo-here"
        />
      </BlockSection>
      <BlockSection
        halfpage
        inverted
        title={props.Section2Title}
        subtitle={props.Section2Body}
        extra={
          <Button
            className="Button-default"
            to="/hubs"
            text="Learn more about hubs"
          />
        }
      >
        <img
          src={require('../../../assets/images/hub_globe.svg')}
          alt="connected-logo-here"
        />
      </BlockSection>
      <div className="hide">
        {' '}
        <DividerLine />
      </div>
      <BlockSection
        halfpage
        title={props.Section3Title}
        subtitle={props.Section3Body}
        className="ScrollSnapElem Footer RemoveBorder"
        extra={
          <div className="RemoveBorder--flex">
            <NewsLetterForm />
          </div>
        }
      >
        <img
          src={require('../../../assets/images/3part-chain.svg')}
          alt="connected-logo-here"
        />
      </BlockSection>
      <DividerLine />

      <div className="YouTube--wrapper">
        <div className="YouTube--inside">
          <h2>{props.YouTubeWrapperTitle}</h2>
          <h3>{props.YouTubeWrapperBody}</h3>
          <iframe
            style={{
              width: '70%',
              height: '70%',
            }}
            src={props.YouTubeWrapperLink}
            frameBorder="0"
          />
        </div>
      </div>
      <DividerLine />

      <HeaderSection className="ScrollSnapElem PartnerSection" title="Partners">
        <h2 className="partnerHeading">Main Partners</h2>
        <div className="logoBGR">
          <div class="logoContainer">
            <a href="https://www.genelec.com/" target="_blank">
              <img
                className="BIGLOGO"
                src={require('../../../assets/logos/partner/genelec.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://www.espoo.fi/en-US" target="_blank">
              <img
                className="BIGLOGO"
                src={require('../../../assets/logos/partner/espoo.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a
              href="https://www.businessfinland.fi/suomalaisille-asiakkaille/etusivu/"
              target="_blank"
            >
              <img
                className="BIGLOGO"
                src={require('../../../assets/logos/partner/business finland.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://www.hkscan.com/en/" target="_blank">
              <img
                className="BIGLOGO"
                src={require('../../../assets/logos/partner/hkscan.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://www.pauliggroup.com/" target="_blank">
              <img
                className="BIGLOGO"
                src={require('../../../assets/logos/partner/paulig.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://www.smartly.io/" target="_blank">
              <img
                className="BIGLOGO"
                src={require('../../../assets/logos/partner/smartly.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
        </div>
        <h2 className="partnerHeading">Online Partners</h2>
        <div class="logoBGR">
          <div class="logoContainer">
            <a href="https://aito.ai/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/partner/aito.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://www.brella.io/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/partner/brella.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://www.op.fi/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/partner/op.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://www.columbiaroad.com/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/partner/columbia road.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://www.rovio.com/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/partner/rovio.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://www.hus.fi/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/partner/hus.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://just-ai.com/en/" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/partner/just ai.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
          <div class="logoContainer">
            <a href="https://www.d-fence.fi/home" target="_blank">
              <img
                className="logoIMG"
                src={require('../../../assets/logos/partner/defence.png')}
                alt="connected-logo-here"
              />
            </a>
          </div>
        </div>
      </HeaderSection>
    </Page>
  )
}

const mapStateToProps = (state) => {
  const content = selectContent(state)
  let contentTexts = {}
  for (let key of Object.keys(textsJSON)) {
    //Find key in strapi if exists, else use fallback in texts.json
    contentTexts[key] = content[textsJSON.prefix + key] || textsJSON[key]
  }

  return contentTexts
}

const mapDispatchToProps = (dispatch) => ({
  updateEvents: () => dispatch(updateEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedHome)
