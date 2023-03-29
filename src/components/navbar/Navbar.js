import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Logo from "../../../public/logo-red.svg"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPhoneVolume, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Profile from "../../../public/icon-user-dark.svg"
import CallBack from "../../../public/callback.png"

const Navbar = () => {
    const router = useRouter();

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Image
                        src={Logo}
                        alt="logo"
                        width={200}
                    />
                </div>
            </div>
            <div className={styles.middle}>
                <nav>
                    <ul>
                        <li className={`${router.pathname === '/' && styles.active}`}>
                            <Link href="/" className={styles.item}>
                                HOME
                            </Link>
                        </li>
                        <li className={`${router.pathname === '/courses' && styles.active}`}>
                            <Link href="/courses" className={styles.item}>
                                COURSES
                            </Link>
                        </li>
                        <li className={`${router.pathname === '/library' && styles.active}`}>
                            <Link href="/" className={styles.item}>
                                LIBRARY
                            </Link>
                        </li>
                        <li className={`${router.pathname === '/webinars' && styles.active}`}>
                            <Link href="/" className={styles.item}>
                                WEBINARS
                            </Link>
                        </li>
                        <li className={`${router.pathname === '/blog' && styles.active}`}>
                            <Link href="/" className={styles.item}>
                                BLOG
                            </Link>
                        </li>
                        <li className={`${router.pathname === '/opportunities' && styles.active}`}>
                            <Link href="/" className={styles.item}>
                                OPPORTUNITIES
                            </Link>
                        </li>
                    </ul>

                </nav>

            </div>
            <div className={styles.right}>
                <div className={styles.phoneNumber}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faPhone} size="1x" color="#ff4e50" className={styles.phoneIcon} />
                    </div>
                    <div className={styles.number}>
                        <p>+91 9818678383</p>
                    </div>
                </div>
                <div className={styles.callButton}>

                    <button className={styles.requestCallbackBtn}>
                        <Image
                            src={CallBack}
                            alt="callBack"
                            width={200}
                            className={styles.callIcon}
                        />

                        Request Callback
                    </button>
                </div>
                <div className={styles.profile}>
                
                    <Image
                        src={Profile}
                        alt="profile"
                        width={200}
                        className={styles.profileIcon}
                    />

                </div>
            </div>
        </div>
    )
}

export default Navbar