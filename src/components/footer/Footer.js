import React from 'react'
import Styles from "./footer.module.css"
import Image from 'next/image'
import Logo from "../../../public/logo-red.svg"
import Fb from "../../../public/fb.svg"
import Instagram from "../../../public/instagram.svg"
import Linkedin from "../../../public/linkedin.svg"
import Tiktok from "../../../public/tiktok.svg"
import Youtube from "../../../public/youtube.svg"
import Twitter from "../../../public/twitter.svg"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className={Styles.footerContainer}>
            <div className={Styles.footer}>
                <div className={Styles.top}>
                    <div className={Styles.logo}>
                        <Image
                            src={Logo}
                            alt="logo"
                            width={200}
                        />
                    </div>
                    <div className={Styles.address}>
                        ADDICTIVE LEARNING TECHNOLOGY PRIVATE LIMITED<br />
                        CIN: U74110DL2017PTC323508<br />
                        GST: 06AAQCA0212K1ZV<br />
                        576, Block C, Sushant Lok Phase I,<br />
                        Sector 43, Gurugram, Haryana 122002<br />
                    </div>
                    <div className={Styles.socialMedia}>
                        <div className={Styles.title}>
                            <h3>We are social</h3>
                        </div>
                        <div className={Styles.socialMediaLogos}>
                            <div className={Styles.icon}>
                                <Image
                                    src={Fb}
                                    alt="fb"
                                />
                            </div>
                            <div className={Styles.icon}>
                                <Image
                                    src={Instagram}
                                    alt="instagram"
                                />
                            </div>
                            <div className={Styles.icon}>
                                <Image
                                    src={Linkedin}
                                    alt="linkedin"
                                />
                            </div>
                            <div className={Styles.icon}>
                                <Image
                                    src={Tiktok}
                                    alt="tiktok"
                                />
                            </div>
                            <div className={Styles.icon}>
                                <Image
                                    src={Youtube}
                                    alt="youtube"
                                />
                            </div>
                            <div className={Styles.icon}>
                                <Image
                                    src={Twitter}
                                    alt="twitter"
                                />
                            </div>


                        </div>
                    </div>
                </div>
                <div className={Styles.mid}>
                    <div className={Styles.box}>
                        <div className={Styles.heading}>
                            <h3>COMPANY</h3>
                        </div>
                        <div className={Styles.list}>
                            <ul>
                                <li>
                                    About
                                </li>
                                <li>
                                    Terms and conditions
                                </li>
                                <li>
                                    POSH Complaint Committee
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={Styles.box}>
                        <div className={Styles.heading}>
                            <h3>RESOURCES</h3>
                        </div>
                        <div className={Styles.list}>
                            <ul>
                                <li>
                                    Success Stories
                                </li>
                                <li>
                                    LawSikho Network
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={Styles.box}>
                        <div className={Styles.heading}>
                            <h3>SUPPORT</h3>
                        </div>
                        <div className={Styles.list}>
                            <ul>
                                <li>
                                    Refund Policy
                                </li>
                                <li>
                                    Legal & Privacy
                                </li>
                                <li>
                                    Fair Criticism Policy
                                </li>
                                <li>
                                    POSH Policy
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={Styles.box}>
                        <div className={Styles.heading}>
                            <h3>BUSINESS</h3>
                        </div>
                        <div className={Styles.list}>
                            <ul>
                                <li>
                                    Corporate Training
                                </li>
                                <li>
                                    Hire Graduates
                                </li>
                                <li>
                                    LawSikho for Business
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={Styles.box}>
                        <div className={Styles.heading}>
                            <h3>ONLY AT LAWSIKHO</h3>
                        </div>
                        <div className={Styles.list}>
                            <ul>
                                <li>
                                    Commercial Contract Law
                                </li>
                                <li>
                                    Technology Contract Law
                                </li>
                                <li>
                                    Ace your Internship
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className={Styles.bottom}>
                <p>&copy; 2011 - {currentYear} ADDICTIVE LEARNING TECHNOLOGY PRIVATE LIMITED. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer