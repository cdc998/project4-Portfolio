import { useRef, useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import Sidebar from './Sidebar'
import { motion, useScroll, useTransform, stagger, animate } from 'framer-motion'
import ImageContainer from './ImageContainer'

import img1 from "../images/project1/screenshots/screenshot1.png"
import img2 from "../images/project1/screenshots/screenshot2.png"
import img3 from "../images/project1/screenshots/screenshot3.png"
import img4 from "../images/project1/screenshots/screenshot4.png"
import img5 from "../images/project1/screenshots/screenshot5.png"
import img6 from "../images/project1/screenshots/screenshot6.png"
import img7 from "../images/project1/screenshots/screenshot7.png"
import img8 from "../images/project1/screenshots/flowchart1.png"
import img9 from "../images/project1/screenshots/flowchart2.png"

import gif1 from "../images/project1/screenshots/gif1.gif"
import gif2 from "../images/project1/screenshots/gif2.gif"
import gif3 from "../images/project1/screenshots/gif3.gif"

import aceSpadesImg from "../cards/0.svg"
import jackSpadesImg from "../cards/10.svg"

export default function ProjectTwoPage() {
    const [isOpen, setIsOpen] = useState(false)
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: targetRef })
    const location = useLocation()

    const x = useTransform(scrollYProgress, [0, 1], ['2%', '-88%'])

    function toggleMenu() {
        setIsOpen(prevState => !prevState)
    }

    const staggerWords = stagger(0.2, { startDelay: 0.1 })

    useEffect(() => {
      animate(
        ".projectTitleWord", 
        isOpen ? { opacity: 0, scale: 0.3, filter: "blur(20px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" },
        {
          duration: 0.5,
          delay: isOpen ? 0 : staggerWords,
        }
      )
    }, [isOpen])

    useEffect(() => {
        window.scrollTo(0, 0)
        setIsOpen(false)
    }, [location])

    return (
        <>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />

            <section
                className='projectTitleContainer'
            >
                <h3 className='projectTitleWord'>PROJECT ONE</h3>
                <h1 className='projectTitleText projectTitleWord'>Blackjack</h1>
                <h3 className='marginBottom projectTitleWord'>Browser-based Game</h3>

                <h2 className='projectTitleWord'>HTML / CSS / JavaScript</h2>
                <h4 className='projectTitleWord'>&copy; Jin Kikuchi 2024</h4>
            </section>

            <div className='carousel' ref={targetRef}>
                <div className='contentContainer'>
                    <motion.div className='cards' style={{ x }}>
                        <motion.div className='projectSectionContainer'>
                            <div className='projectSectionTitle'>final_product</div>
                            <div className='projectSectionPara'>
                                <span className='boldText'>Semi-Classic Blackjack</span> offers an immersive experience where players can make strategic choices and wager with a starting bankroll of 200. Game phases include dealing cards, selecting actions, and watching dealer responses as win/loss conditions are evaluated in real-time. Blackjack pays 2.5x, with all game states rendered seamlessly.
                            </div>
                            <div>
                                Technical Features:
                                <ul>
                                    <li><span className='boldText'>Gameplay Logic:</span> Win/loss conditions based on traditional blackjack rules.</li>
                                    <li><span className='boldText'>UI & Animation:</span> Visual polish with CSS animations and hover effects.</li>
                                    <li><span className='boldText'>Bankroll Management:</span> Betting feature with customizable wager increments.</li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={img1} description={'Splash Screen'} />
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={img2} description={'Wagering Screen'} />
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={img3} description={'Playing Screen'} />
                        </motion.div>
                        <motion.div 
                            className='imgCollage'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div>
                                <img src={img4} alt="" />
                                <p className='date'>Player Win Screen</p>
                            </div>
                            <div>
                                <img src={img5} alt="" />
                                <p className='date'>Player Bankruptcy Screen</p>
                            </div>
                            <div>
                                <img src={img6} alt="" />
                                <p className='date'>Player Lose Screen</p>
                            </div>
                            <div>
                                <img src={img7} alt="" />
                                <p className='date'>Player Blackjack Screen</p>
                            </div>
                        </motion.div>
                        <motion.div className='projectSectionContainer'>
                            <div className='projectSectionTitle'>screen_recordings</div>
                            <div className='projectSectionPara'>
                            </div>
                            <div>
                                <ul>
                                </ul>
                            </div>
                            
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={gif1} description={'CSS Hover to Flip Cards'} />
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={gif2} description={'CSS Animation on Splash Screen'} />
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={gif3} description={'CSS Transformation to simulate Flipping Cards'} />
                        </motion.div>
                        <motion.div className='projectSectionContainer'>
                            <div className='projectSectionTitle'>planning_phase</div>
                            <div className='projectSectionPara'>
                                <span className='boldText'>Research & Wireframing:</span><br />Created a wireframe for the main game interface, focusing on player and dealer areas, buttons for player actions, and a display for win/loss messages and bankroll balance.
                            </div>
                            <div className='projectSectionPara'>
                                <span className='boldText'>Pseudocode Outline:</span><br />Wrote out the game flow in pseudocode, covering steps from dealing cards to win/loss checks.<br /><br />Defined necessary functions, such as dealCards(), calculateScore(), handleDecision(), and updateBankroll(), which would later drive the game logic.
                            </div>
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={img8} description={'Player Decision Flowchart'} />
                        </motion.div>
                        <motion.div 
                            className='imageItem'
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0, threshold: 0.99 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <ImageContainer imageSource={img9} description={'Coding Flowchart'} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.section 
                className='projectOverviewContainer'
            >
                <h1 className='projectOverviewTitle'>Project Brief</h1>
                
                <div className='projectOverviewPara'>
                    For my first software engineering bootcamp project, I was tasked with creating a browser-based game using HTML, CSS, and JavaScript. This project emphasized developing core programming logic and applying DOM manipulation techniques. We were encouraged to pick a game that would challenge us to think like developers, utilizing our creativity and problem-solving skills.
                </div>

                <div className='projectOverviewPara'>
                    <span className='boldText'>Game Choice: Classic Blackjack</span><br />I chose to develop a blackjack game because it offers rich logic with card mechanics, win/loss conditions, and decision-making – perfect for practicing fundamental programming concepts. My version of blackjack follows classic rules, with win conditions, wagering, and a streamlined game interface for intuitive play.
                </div>

                <div className='projectOverviewPara'>
                    <span className='boldText'>Coding Workflow</span><br /><br />
                    Core Game Logic:<br />
                    <ul>
                        <li>Built functions to manage deck creation, card shuffling, and drawing.</li>
                        <li>Implemented win/loss logic that considers special conditions like busting, blackjack, and pushes.</li>
                        <li>Developed the dealer's automated decision-making to "hit" or "stand" according to the standard rules.</li>
                    </ul>
                    User Interface Development:<br />
                    <ul>
                        <li>Created separate HTML, CSS, and JavaScript files for code organization and clarity.</li>
                        <li>Designed an interface with buttons for player actions (Hit, Stand, Double) and displays for hand scores and bankroll.</li>
                        <li>Added win/loss messages to guide the player through each game outcome.</li>
                    </ul>
                    Animation & Interactivity:<br />
                    <ul>
                        <li>Implemented CSS keyframe animations for a more dynamic game experience, such as card flips and splash screen transitions.</li>
                        <li>Used event listeners for game interactions and hover effects to enhance interactivity.</li>
                    </ul>
                    Audio & Visual Polish:<br />
                    <ul>
                        <li>Integrated audio effects triggered by game events like wins, losses, and busts.</li>
                        <li>Utilized a CSS card library for a polished, casino-like feel.</li>
                    </ul>
                </div>
            </motion.section>
        </>
    )
}