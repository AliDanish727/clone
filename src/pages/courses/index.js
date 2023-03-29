import React, { useState, useEffect, useRef } from 'react'
import Styles from '@/styles/Courses.module.css'
import CourseCard from '@/components/courseCard/CourseCard'
const AWS = require('aws-sdk');
const axios = require('axios');
import { useRouter } from 'next/router'
import { PageTracker } from '../../../utils/PageTracker';

// Set the AWS region and bucket name
const s3 = new AWS.S3({ region: process.env.AWS_REGION });
const bucketName = process.env.AWS_BUCKET;


const Courses = ({ courses, courseType }) => {

    const router = useRouter()


    PageTracker(router.asPath)


    return (
        <div className={Styles.courseContainer}>
            <div className={Styles.left}>
                <div className={Styles.titleDesc}>
                    <h1>Why join us?</h1>
                    <p>Today LawSikho is one of the Premium Online Legal Education Platforms in India. We get success by helping you succeed.
                        Join us today and be a part of the future Elite Indian Legal Community that we’re building.</p>
                </div>
                <div className={Styles.programmes}>
                    <div className={Styles.titleDesc}>
                        <span>Programmes</span>
                        <h1>Courses For Remote International Work</h1>
                    </div>
                    <div className={Styles.course}>
                        {courses?.map((item, index) => (
                            <CourseCard course={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={Styles.right}>
                <h2>Choose a course from our <br /> course catalog</h2>
                <p>Type in what you are looking for</p>
                <div className={Styles.searchbox}>
                    <input type="text" placeholder="Search e.g. Contract drafting" />
                </div>


                <h2>Select course type</h2>
                <ul>
                    {courseType.map((item, index) => (
                        <div key={index}>
                            <li>{item.name}</li>
                        </div>
                    ))}
                </ul>

            </div>
        </div>
    )
}

// Here i used getServerSideProps for api calling to make app more faster
export async function getServerSideProps() {
    let courseJsonAwsURL = "https://snap-attachments.s3.amazonaws.com/courses.json";

    // Fetch the Course API response and store it in S3
    await axios.get('http://localhost:3000/api/course')
        .then(response => {
            const json = JSON.stringify(response.data);
            const params = {
                Bucket: bucketName,
                Key: 'courses.json',
                Body: json
            };
            s3.upload(params, async function (err, data) {
                if (err) {
                    console.error(err);
                } else {
                    console.log('API response stored in S3')
                }
            });
        })
        .catch(error => {
            console.error(error);
        });


    // Fetching Course data from Cloud (AWS S3) and sending as a props and this props display in the UI
    const res = await fetch(courseJsonAwsURL)
    const data = await res.json()
    const resCourseType = await fetch("http://localhost:3000/api/courseType")
    const courseTypeData = await resCourseType.json();
    return {
        props: {
            courses: data,
            courseType: courseTypeData
        },
    };
}



export default Courses