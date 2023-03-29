import React from 'react'
import Styles from "./courseCard.module.css"
// import CourseDetailsImg from "../../../public/courseDetailsBackground.jpg"
import Image from 'next/image'
import NSDCLogo from "../../../public/nsdc-logo.png"
import Link from 'next/link'

const CourseCard = ({ course }) => {
    return (
        <div className={Styles.courseCardContainer}>
            <div className={Styles.courseImg}>
                <div className={Styles.image}>
                    <div className={Styles.new}>
                        <span>New</span>
                    </div>
                    <div className={Styles.nsdclImg}>
                        <Image
                            src={NSDCLogo}
                            alt="nsdclogo"
                        />
                    </div>

                </div>
            </div>
            <div className={Styles.box}>
                <span>{course.purpuse}</span>
                <h3>{course.name}</h3>
            </div>
            <Link href={`/courses/${course._id}`}>
                <button type="submit">Veiw details</button>
            </Link>
        </div>

    )
}

export default CourseCard