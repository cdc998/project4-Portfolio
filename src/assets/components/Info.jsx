import { useRef, useState, useEffect } from 'react'

import Sidebar from "./Sidebar"
import { motion, useScroll, useTransform, stagger, animate } from 'framer-motion'

import profilePic from "../images/misc/profilePic.jpg"

export default function Info() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(prevState => !prevState)
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
            <motion.div>
                <motion.div
                    className="infoTitlesContainer"
                >
                    <div className='infoProfile'>Profile</div>
                    <div className='infoContact'>Contact</div>
                </motion.div>
                <motion.div
                    className="infoContentContainer"
                >
                    <div className='infoProfileContent'>
                        <img className="profilePic" src={profilePic} alt="" />
                        <div className='profileText'>
                            <div>
                                Jin Kikuchi
                            </div>
                            <div>
                                <br />As a Software Engineer, I thrive on creating solutions that blend technical precision with adaptability. My diverse experiences in fast-paced environments have equipped me with a unique ability to remain focused under pressure while continuously evolving my skills. I am passionate about problem-solving and dedicated to building scalable, user-centric applications.
                            </div>
                        </div>
                    </div>
                    <div className='infoContactContent'>
                        <div className='contactText'>
                            <a href="https://github.com/cdc998">https://github.com/cdc998</a>
                           
                            <div><br />jin.kikuchi98@gmail.com</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}