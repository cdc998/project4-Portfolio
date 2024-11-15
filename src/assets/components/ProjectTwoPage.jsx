import { useRef, useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import Sidebar from './Sidebar'
import { motion, useScroll, useTransform, stagger, animate } from 'framer-motion'
import ImageContainer from './ImageContainer'

import One from "../images/project2/images/landing-page.png"
import Two from "../images/project2/images/player-history-page.png"
import Three from "../images/project2/images/highlight-hands-page.png"
import Four from "../images/project2/images/detailed-hand-comment-page.png"
import Five from "../images/project2/images/Wireframe.png"
import Six from "../images/project2/images/TrelloLists.png"
import Seven from "../images/project1/screenshots/screenshot7.png"
import Eight from "../images/project1/screenshots/flowchart1.png"
import Nine from "../images/project1/screenshots/flowchart2.png"

import OneGif from "../images/project1/screenshots/gif1.gif"
import TwoGif from "../images/project1/screenshots/screenshot7.png"
import ThreeGif from "../images/project1/screenshots/screenshot7.png"

import aceSpadesImg from "../cards/0.svg"
import jackSpadesImg from "../cards/10.svg"

export default function ProjectTwoPage() {
    const [isOpen, setIsOpen] = useState(false)
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: targetRef })
    const location = useLocation()

    const x = useTransform(scrollYProgress, [0, 1], ['2%', '-81%'])

    function toggleMenu() {
        setIsOpen(prevState => !prevState)
    }

    const staggerWords = stagger(0.2, { startDelay: 0.1 })
  
    useEffect(() => {
        animate(
            ".titleSentenceWord", 
            isOpen ? { opacity: 0, scale: 0.3, filter: "blur(20px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" },
            {
            duration: 0.5,
            delay: isOpen ? 0 : staggerWords,
            }
        )
    }, [isOpen, location])

    useEffect(() => {
        window.scrollTo(0, 0)
        setIsOpen(false)
    }, [location])

    return (
        <>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />

            <motion.section
                className='projectTitleContainer'
            >
                <h3 className='titleSentenceWord'>PROJECT TWO</h3>
                <h1 className='projectTitleText titleSentenceWord'>StackTrack</h1>
                <h3 className='marginBottom titleSentenceWord'>Poker Bankroll Management App</h3>

                <h2 className='titleSentenceWord'>Node.js / Express.js / PostgreSQL</h2>
                <h4 className='titleSentenceWord'>&copy; Jin Kikuchi 2024</h4>
            </motion.section>

            <div className='carousel' ref={targetRef}>
                <div className='contentContainer'>
                    <motion.div className='cards' style={{ x }}>
                        <motion.div className='projectSectionContainer'>
                            <div className='projectSectionTitle'>final_product</div>
                            <div className='projectSectionPara'>
                                <span className='boldText'>StackTrack</span> is a comprehensive poker bankroll management app that allows players to track their performance across different blind levels and manage their wins and losses. Users can record poker sessions, share highlight plays, and receive feedback from the community.<br /><br />The app features secure user authentication, full-CRUD capabilities for session management, and an interactive comment system for engaging with others. With a clean and responsive interface, StackTrack makes it easy for players to track their progress and improve their strategy in real-time.
                            </div>
                            <div>
                                Technical Features:
                                <ul>
                                    <li><span className='boldText'>Session Tracking:</span> Record wins, losses, and session details across different blind levels.</li>
                                    <li><span className='boldText'>Highlight Plays:</span> Save and share your most exciting hands with the community.</li>
                                    <li><span className='boldText'>Commenting System:</span> Leave feedback on other users' hands to help them improve their gameplay.</li>
                                    <li><span className='boldText'>Authentication & Authorization:</span> Secure login with session authentication and role-based access control to restrict certain actions to authenticated users.</li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={One} description={'Landing Page'} />
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={Two} description={'User Playing History'} />
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={Three} description={'Community Highlight Hands Page'} />
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={Four} description={'Detailed Highlight Page'} />
                        </motion.div>
                        <motion.div className='projectSectionContainer'>
                            <div className='projectSectionTitle'>planning_phase</div>
                            <div className='projectSectionPara'>
                                <span className='boldText'>Initial Planning:</span><br />At the beginning of the project, I focused on understanding the requirements and defining the main data entities, such as users and poker sessions.<br /><br />I created an Entity-Relationship (ER) Diagram to outline the relationships between different data models, such as users, sessions, and comments. This helped me visualize the necessary database tables and their relationships, ensuring that I had a clear structure before diving into development.
                            </div>
                            <div className='projectSectionPara'>
                                <span className='boldText'>User Stories & Wireframes:</span><br />I created detailed user stories and wireframes for the app, focusing on core features like session tracking, commenting on highlight plays, and viewing session history.<br /><br />I broke the app down into manageable features, starting with the core CRUD operations before adding community-oriented functionality like comments and feedback.
                            </div>
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={Five} description={'Planning RESTful CRUD'} />
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={Six} description={'Trello for User Stories and Workflow'} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.section 
                className='projectOverviewContainer'
            >
                <h1 className='projectOverviewTitle'>Project Brief</h1>
                
                <div className='projectOverviewPara'>
                For my second project, I created <span className='boldText'>StackTrack</span>, a full-stack web application aimed at poker players who want to efficiently track their bankroll, review past play sessions, and engage with the poker community. The app is built using Node.js, Express.js, and PostgreSQL, with EJS as the templating engine for rendering dynamic content on the frontend.< br/>< br/>

                The application allows users to record their play history across different blind levels, save highlight plays, and interact by providing feedback on others' plays. It offers CRUD functionality, session-based authentication, and user authorization, ensuring that only authenticated users can perform certain actions like updating or deleting their data.
                </div>

                <div className='projectOverviewPara'>
                    <span className='boldText'>Coding Workflow</span><br /><br />
                    Authentication & Authorization:<br />
                    <ul>
                        <li><span className='boldText'>Session authentication</span> was implemented using <span className='boldText'>Express-session</span> for user logins. I utilized <span className='boldText'>bcrypt</span> to hash passwords securely, allowing users to register and log in.</li>
                        <li>For <span className='boldText'>authorization</span>, I protected routes with middleware to ensure that only logged-in users could perform sensitive operations like adding, updating, and deleting their data.</li>
                    </ul>
                    Backend Development:<br />
                    <ul>
                        <li>I created RESTful routes for handling CRUD operations on poker sessions, including routes to add, view, update, and delete session data.</li>
                        <li>I implemented a comment system for users to engage with each other's highlight plays.</li>
                    </ul>
                    Frontend Design:<br />
                    <ul>
                        <li>The frontend was designed with HTML, CSS, and JavaScript, ensuring a clean and user-friendly interface.</li>
                        <li>EJS was used to dynamically render pages and display user data, like session history and highlight plays.</li>
                    </ul>
                    Polished User Interface:<br />
                    <ul>
                        <li>I focused on a consistent and polished design for the app, aiming to make it feel intuitive and accessible for users. It has a responsive layout to support both desktop and mobile views.</li>
                    </ul>
                    Refactoring & Code Quality:<br />
                    <ul>
                        <li>Throughout the development, I followed DRY principles (Don't Repeat Yourself) to ensure clean and maintainable code.</li>
                        <li>Modularized the code to separate concerns and simplify updates.</li>
                    </ul>
                </div>
            </motion.section>
        </>
    )
}