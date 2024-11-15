import { useRef, useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import Sidebar from './Sidebar'
import { motion, useScroll, useTransform, stagger, animate } from 'framer-motion'
import ImageContainer from './ImageContainer'

import img1 from "../images/project3/image8.png"
import img2 from "../images/project3/trello.png"
import img3 from "../images/project3/image1.png"
import img4 from "../images/project3/image2.png"
import img5 from "../images/project3/image3.png"
import img6 from "../images/project3/image4.png"
import img7 from "../images/project3/image5.png"

export default function ProjectThreePage() {
    const [isOpen, setIsOpen] = useState(false)
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: targetRef })
    const location = useLocation()

    const x = useTransform(scrollYProgress, [0, 1], ['2%', '-83%'])

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
                <h3 className='titleSentenceWord'>PROJECT THREE</h3>
                <h1 className='projectTitleText titleSentenceWord'>Servo SPA</h1>
                <h3 className='marginBottom titleSentenceWord'>Petrol Station Location and Finder App</h3>

                <h2 className='titleSentenceWord'>Node.js / Express.js / PostgreSQL / Google Maps API / Postman</h2>
                <h4 className='titleSentenceWord'>&copy; Jin Kikuchi 2024</h4>
            </motion.section>

            <div className='carousel' ref={targetRef}>
                <div className='contentContainer'>
                    <motion.div className='cards' style={{ x }}>
                        <motion.div className='projectSectionContainer'>
                            <div className='projectSectionTitle'>final_product</div>
                            <div className='projectSectionPara'>
                                <span className='boldText'>Servo SPA</span> achieves a comprehensive and interactive exploration of petrol stations across Australia. The app dynamically responds to user interactions, enabling them to discover stations, track favorites, and access real-time data about nearby stations.<br /><br />
                                The team created a custom RESTful JSON API that integrates with a PostgreSQL database to serve station data, seeded initially through a coordinated team import process. With Google Maps JavaScript API powering the front end, Servo SPA offers users real-time location details, map filtering, and various sidebar features, all deployed through a robust backend structure.
                            </div>
                            <div>
                                Technical Features:
                                <ul>
                                    <li><span className='boldText'>Map Features:</span><br /> Markers on the map represent petrol stations, each with a clickable pop-up window that displays specific location information. Users can also view the latitude and longitude of the map's center location.</li>
                                    <li><span className='boldText'>Clock Component:</span><br /> Displaying the user's local time, day of the week, and a day/night icon, the clock auto-updates for accuracy.</li>
                                    <li><span className='boldText'>Statistics:</span><br /> The sidebar shows the total number of stations, lists owners by their station count (sorted in descending order), and provides general insights into station ownership across Australia.</li>
                                    <li><span className='boldText'>Nearby Stations:</span><br /> A list of the first ten nearby stations, clickable to navigate directly to each station's map location. A toggle allows users to view distances in kilometers or meters.</li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={img1} description={'Servo SPA Final Product'} />
                        </motion.div>
                        <motion.div className='projectSectionContainer'>
                            <div className='projectSectionTitle'>planning_phase</div>
                            <div className='projectSectionPara'>
                                <span className='boldText'>Project Phases and Planning</span><br />On the first day, the team prioritized setting up version control and laying out the workflow. Led by “gitlord” Brittany, everyone set up their Git repositories with structured commit orders and practiced conflict resolution using rebase and push protocols.<br /><br />We organized into small groups of 2-3 members and coordinated through Slack, where we frequently updated one another to prevent overlapping code changes. Tasks were delegated using Trello labels, which made it easy to visualize progress and responsibilities for each feature.
                            </div>
                            <div className='projectSectionPara'>
                                <span className='boldText'>Trello & Wireframes</span><br />In the planning phase, we used Trello to break down tasks by levels, reviewing each to understand the project scope and prioritize milestones. This approach allowed us to assign responsibilities clearly, leveraging labels to track who was working on each feature.<br /><br />We also referred to low-fidelity wireframes to visualize component layouts, helping us plan how best to structure the app's interface and divide work effectively from the start.
                            </div>
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={img2} description={'Trello Board Task List'} />
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={img3} description={'Initial Google Maps API Deployment'} />
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={img4} description={'Expanding Side Nav Features'} />
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={img5} description={'Implemented Google Maps Markers'} />
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={img6} description={'Statistic calculated from Petrol Station Data'} />
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={img7} description={'Final Draft'} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.section 
                className='projectOverviewContainer'
            >
                <h1 className='projectOverviewTitle'>Project Brief</h1>
                
                    <div className='projectOverviewPara'>
                    For my third project, we created <span className='boldText'>Servo SPA</span>, a single-page application that displays petrol station locations across Australia. This app offers a range of features, including statistics, favorites, spotlighted stations, nearby stations, and postcode search. Built with Node.js, Express.js and PostgreSQL, it integrates the Google Maps JavaScript API to enhance the interactive map experience and uses Postman for API testing and validation.< br/>< br/>

                    Our team relied heavily on Trello to organize and track our progress through the project's levels. The Trello board provided a structured breakdown of tasks, arranged from level 0 to level 5, which helped us prioritize features and follow a clear development roadmap. Each level introduced tasks of increasing complexity, allowing us to strategically plan our workflow as we aimed to complete core functions and tackle bonus features. We used Trello labels to assign responsibilities, making it easy to monitor who was working on specific tasks and to avoid overlap. Reviewing tasks on Trello helped us distribute work effectively and maintain momentum by focusing on attainable milestones each day.< br/>< br/>

                    For design guidance, we referred to low-fidelity wireframes provided within the project resources, using them as a visual reference for structuring the interface. The wireframes showed the intended layout and functionality of key components, including sidebars, map views, and interactive elements, enabling us to divide work efficiently across our team. This setup allowed us to collaboratively build the app's core structure while iterating on individual features.
                </div>

                <div className='projectOverviewPara'>
                    <span className='boldText'>Database and API Development</span>< br/>
                    <li>Servo SPA's data layer consisted of a well-structured PostgreSQL database seeded with petrol station data. The team reviewed and defined data types for each field, ensuring uniformity across the dataset. API endpoints were tested with Postman to verify data accuracy and streamline response times, especially when retrieving nearby stations.</li>
                    
                    <li>The app's standout feature—finding the nearest petrol station—uses the Google Maps Distance Matrix API, a functionality that allows users to locate the closest station from their current location in real-time.</li>< br/>< br/>

                    <span className='boldText'>Google Maps Integration and Challenges</span>< br/>
                    <li>Integrating the Google Maps API presented a steep learning curve, especially in understanding its documentation in-depth.</li>
                    
                    <li>Despite the challenge, the team successfully implemented dynamic marker placements and personalized the station markers to reflect each location's unique attributes.</li>

                    <li>Learning to update map markers as users moved the map around was particularly rewarding and enhanced user interaction.</li>

                    <br /><br />

                    <span className='boldText'>Team Reflection</span>< br/>
                    <li>Working with Git in a multi-developer environment offered a valuable simulation of collaborative coding practices. While conflicts during rebasing and merging were challenging, the experience strengthened the team's ability to handle version control issues effectively.</li>
                    
                    <li>Frequent communication and consistent check-ins played a crucial role in keeping the project on track, and the team successfully navigated complex workflows to deliver an engaging final product.</li>
                </div>
            </motion.section>
        </>
    )
}