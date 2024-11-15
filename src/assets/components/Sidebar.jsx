import { animate, motion, stagger } from "framer-motion"
import Menu from "./Menu"
import { useEffect } from "react"

export default function Sidebar({ isOpen, toggleMenu }) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = i
          return {
            pathLength: [0, 1],
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
              opacity: { delay, duration: 0.01 }
          }
        }}
    }

    const staggerMenu = stagger(0.1, {startDelay: 0.1})

    useEffect(() => {
        animate(
            ".menuTitle",
            isOpen ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
            {
              duration: 0.5,
              delay: isOpen ? staggerMenu : 0,
            }
        )
    }, [isOpen])

    return (
        <>
            <div className='sidebarContainer'>
                <nav className='sidebar'>
                <motion.div 
                    className='hamburger'
                    onClick={toggleMenu}
                    whileHover={{ backgroundColor: "rgba(144, 144, 144, 1)" }}
                    whileTap={{scale: 0.9 }}
                >
                    <motion.svg
                    width="50"
                    height="110"
                    viewBox="0 0 110 50"
                    initial="hidden"
                    animate="visible"
                    whileHover="visible"
                    >
                    <motion.line
                        x1="13"
                        y1="0"
                        x2="90"
                        y2="0"
                        stroke="#000000"
                        strokeWidth="4"
                        variants={draw}
                        custom={0}
                    />
                    <motion.line
                        x1="13"
                        y1="15"
                        x2="70"
                        y2="15"
                        stroke="#000000"
                        strokeWidth="4"
                        variants={draw}
                        custom={0.25}
                    />
                    <motion.line
                        x1="13"
                        y1="30"
                        x2="50"
                        y2="30"
                        stroke="#000000"
                        strokeWidth="4"
                        variants={draw}
                        custom={0.5}
                    />
                    </motion.svg>
                </motion.div>
                <h5 className="sidebarText">Portfolio</h5>
                </nav>
            </div>

            <Menu isOpen={isOpen} toggleMenu={toggleMenu} draw={draw} />
        </>
    )
}