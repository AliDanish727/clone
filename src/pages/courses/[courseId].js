import React from 'react'
import Styles from '@/styles/CourseDetails.module.css'
import NSDCLogo from "../../../public/nsdc-logo.png"
import Image from 'next/image'
import Enrollment from "../../../public/online-classes.png"
import Duration from "../../../public/duration.png"
import Price from "../../../public/price.png"
import { useRouter } from 'next/router'
import { PageTracker } from '../../../utils/PageTracker'


const CourseDetails = ({ course }) => {

    const router = useRouter()


    PageTracker(router.asPath)
    return (
        <div className={Styles.courseDetailsContainer}>
            <div className={Styles.backgroungImg}></div>
            <div className={Styles.overview}>
                <div className={Styles.left}>
                    <div className={Styles.newTag}>
                        <span>* New</span>
                    </div>
                    <h2>{course.purpuse}</h2>
                    <div className={Styles.name}>
                        {course.name}
                    </div>
                    <div className={Styles.getStudyMaterialButton}>
                        <button type="submit">Get free study material <span>&gt;&gt;</span></button>
                    </div>
                    <div className={Styles.nsdc}>
                        <div className={Styles.logo}>
                            <Image
                                src={NSDCLogo}
                                alt="nsdclogo"
                            />
                        </div>
                        <div className={Styles.description}>
                            This course is recognized by the National Skill Development Corporation, a PPP under the Ministry of Skill Development and Entrepreneurship of the Government of India. You will receive a certificate cobranded by NSDC and Skill India on successful completion.
                        </div>
                    </div>

                    <div className={Styles.refund}>
                        If you do not like or benefit from the course, you can get a 100% refund after 30 days of full participation.
                        Read the refund policy here
                    </div>
                </div>
                <div className={Styles.right}>
                    <div className={Styles.box}>
                        <h3>ENROLEMENT CLOSED</h3>
                        <p>No prior technical experience is required! All you need is a computer!</p>
                        <div className={Styles.joinbutton}>
                            <button type="submit">Join The Wait List</button>
                        </div>
                        <div className={Styles.courseBreif}>
                            <div className={Styles.logoTitle}>
                                <div className={Styles.logo}>
                                    <Image
                                        src={Enrollment}
                                        alt="enrollment"
                                    />
                                </div>
                                <div className={Styles.title}>
                                    Enrollment Closed
                                </div>
                            </div>
                            <div className={Styles.logoTitle}>

                                <div className={Styles.logo}>
                                    <Image
                                        src={Duration}
                                        alt="duration"
                                    />
                                </div>
                                <div className={Styles.title}>
                                    <p>{course.duration} Month</p>
                                    {/* <span>8-10hrs/Week</span> */}
                                </div>
                            </div>
                            <div className={Styles.logoTitle}>
                                <div className={Styles.logo}>
                                    <Image
                                        src={Price}
                                        alt="price"
                                    />
                                </div>
                                <div className={Styles.title}>
                                    {/* <p>Price</p> */}
                                    <span>Rs. {course.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.details}>
                <div className={Styles.left}></div>
                <div className={Styles.right}></div>
            </div>
        </div>
    )
}

// Here i used getServerSideProps for api calling to make app more faster

export async function getServerSideProps(context) {

    const courseId = context.params.courseId;

    const res = await fetch(`http://localhost:3000/api/course/${courseId}`)
    const data = await res.json()
    console.log("data:", data)
    return {
        props: {
            course: data[0],
        },
    };
}


export default CourseDetails