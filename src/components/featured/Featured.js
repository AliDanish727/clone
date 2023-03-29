import React from 'react'
import Styles from "./featured.module.css"
import Tedx from "../../../public/tedx.png"
import TheHindu from "../../../public/thehindu.png"
import Economic from "../../../public/etlogo.png"
import TimesOfIndia from "../../../public/timesofindialogo.png"
import Yahoo from "../../../public/yahoonewslogo.jpg"
import TheTribun from "../../../public/logoeng.png"
import TheWire from "../../../public/wire.png"
import ThePrint from "../../../public/theprintlogo.png"
import HindusthanTimes from "../../../public/hindustantimeslogo.png"
import Deccan from "../../../public/deccan.png"
import Image from 'next/image'


const Featured = () => {
  return (
    <div className={Styles.featuredContainer}>
      <div className={Styles.heading}>
        <h1>Featured in</h1>
      </div>
      <div className={Styles.logoContainer}>
        <div className={Styles.row1}>
          <div className={Styles.col1}>
            <Image
              src={Tedx}
              alt="tedx"
              className={Styles.logos}
            />
          </div>
          <div className={Styles.col2}>
            <Image
              src={TheHindu}
              alt="theHindu"
              className={Styles.logos}
            />
          </div>
          <div className={Styles.col3}>
            <Image
              src={Economic}
              alt="economic"
              className={Styles.logos}
            />
          </div>
          <div className={Styles.col4}>
            <Image
              src={TimesOfIndia}
              alt="timesOfIndia"
              className={Styles.logos}
            />
          </div>
          <div className={Styles.col5}>
            <Image
              src={Yahoo}
              alt="yahoo"
              className={Styles.logos}
            />
          </div>
          <div className={Styles.col6}>
            <Image
              src={TheTribun}
              alt="theTribun"
              className={Styles.logos}
            />
          </div>
        </div>
        <div className={Styles.row2}>
          <div className={Styles.col1}>

            <Image
              src={TheWire}
              alt="theWire"
              className={Styles.logos}
            />
          </div>
          <div className={Styles.col2}>
            <Image
              src={ThePrint}
              alt="thePrint"
              className={Styles.logos}
            />
          </div>
          <div className={Styles.col3}>
            <Image
              src={HindusthanTimes}
              alt="hindusthanTimes"
              className={Styles.logos}
            />
          </div>
          <div className={Styles.col4}>
            <Image
              src={Deccan}
              alt="deccan"
              className={Styles.logos}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured