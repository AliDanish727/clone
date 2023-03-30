import React, { useState, useEffect } from 'react'
import styles from './topFormSection.module.css'
import Lawman from "../../../public/lawman.png"
import Image from 'next/image';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Featured from '../featured/Featured';
import Check from "../../../public/check.png"
import { PageTracker } from '../../../utils/PageTracker';
import { useRouter } from 'next/router'



const countries = [
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "Argentina",
    "Chile",
    // Add more countries here
];


const TopFormSection = ({ content }) => {

    const router = useRouter()



    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        phone: "",
        message: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data, like sending it to an API or server
        console.log(formData);
        // Reset the form fields
        setFormData({
            name: "",
            email: "",
            country: "",
            phone: "",
            message: "",
        });

        // __reactProps$fxm9thmg82s

        console.log("Clicked:", event)

    };

    const ClickMeFunction = (event) => {
        console.log("Clicked:", event.target.innerText)
    }


    return (

        <div className={styles.topFormSectionContainer}>
            <div className={styles.left}>
                <div className={styles.form}>
                    <div className={styles.title}>
                        <h1>Tell us more about you</h1>
                    </div>
                    <div className={styles.description}>
                        <p>so we can send you relevant free resources</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputField}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="country">Select your country</label>
                            <select
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select a country</option>
                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Phone"
                                required
                            />
                        </div>
                        <div className={styles.inputField}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <div className={styles.termsAndCondition}>
                            <span>By submitting this form, I agree to Lawsikho and its representatives contacting me through <strong>call, SMS, email or WhatsApp</strong> even if I am registered under NDNC. I also agree that I have read and understood the <a href='' style={{ color: "blue", borderBottom: "#9CDBF9" }}> Terms and conditions </a>and agree to abide by the same</span>
                        </div>
                        <button type="submit">Send to us</button>
                    </form>

                    <button type="submit" onClick={ClickMeFunction}>Click me immediatly</button>

                </div>
                <div className={styles.LawmanImage}>
                    <Image
                        src={Lawman}
                        alt="lawyer"
                        width={250}
                        height={400}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.right} dangerouslySetInnerHTML={{ __html: content }}>
                {/* <div className={styles.box1}>
                    <div className={styles.heading}>
                        <h1>Acquire practical legal skills</h1>
                    </div>
                    <div className={styles.content}>
                        <p>LawSikho occupies the leadership space in online legal education. We offer the most advanced legal courses you can find anywhere, helping you to acquire skills and knowledge you can bank on to bag the best legal jobs, crack difficult competitive exams, serve your own clients, build a law practice, or outperform others in internships. Maybe you are just looking to learn more about a cutting edge area of law practice, or aiming at an international legal career - LawSikho can help you all the way.</p>
                    </div>
                </div>
                <div className={styles.box2}>
                    <div className={styles.heading}>
                        <h1>How to engage with us:</h1>
                    </div>
                    <div className={styles.content}>

                        <p>
                            <Image
                                src={Check}
                                alt="check"
                                className={styles.checkIcon}
                            />
                            Download free resources</p>
                        <p>
                            <Image
                                src={Check}
                                alt="check"
                                className={styles.checkIcon}
                            />  Sign up for a career counseling session</p>
                        <p>
                            <Image
                                src={Check}
                                alt="check"
                                className={styles.checkIcon}
                            />  Explore different legal careers</p>
                        <p>
                            <Image
                                src={Check}
                                alt="check"
                                className={styles.checkIcon}
                            />  Join a community</p>
                    </div>
                </div>
                <div className={styles.box3}>
                    <div className={styles.content}>
                        <p>We have endless free resources waiting for you. Tell us a little more about yourself, what you do, and what your goals are so that we can email you the right resources and add you to our exclusive WhatsApp groups where you can get access to free webinars, free ebooks, internships, jobs, client opportunities, career counseling and more related to your area of interest.</p>
                    </div>
                </div> */}
            </div>
        </div>

    )
}






export default TopFormSection