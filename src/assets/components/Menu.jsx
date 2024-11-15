import { Link, Navigate, useNavigate } from "react-router-dom"
import { animate, motion, stagger } from "framer-motion"

import home from "../images/misc/home.svg"
import avatar from "../images/misc/avatar.svg"

export default function Menu({ isOpen, toggleMenu, draw }) {
  const navigate = useNavigate()

    return (
        <motion.div
        className='menu'
        initial={{ opacity: 0, display: 'none' }}
        animate={{
          opacity: isOpen ? 1 : 0,
          display: isOpen ? 'block' : 'none',
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="menuContainer">
          <motion.div 
            className='menuClose'
            whileHover={{ backgroundColor: "rgba(144, 144, 144, 1)" }}
            onClick={toggleMenu}
            whileTap={{scale: 0.97 }}
          >
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              initial="hidden"
              animate="visible"
              whileHover="visible"
            >
              <motion.line
                x1="23"
                y1="20"
                x2="77"
                y2="80"
                stroke="#000000"
                strokeWidth="4"
                variants={draw}
                custom={0}
              />
              <motion.line
                x1="23"
                y1="80"
                x2="77"
                y2="20"
                stroke="#000000"
                strokeWidth="4"
                variants={draw}
                custom={0.25}
              />
            </motion.svg>
          </motion.div>
          <div className='menuCategories'>
            <Link to="/p1" style={{ textDecoration: 'none' }}>
              <motion.div
                className='menuCategory'
                whileHover={{ backgroundColor: "rgba(144, 144, 144, 1)" }}
                whileTap={{scale: 0.97 }}
              >
                project1_generalAssembly<span className="menuTitle">Blackjack</span>
              </motion.div>
            </Link>
  
            <Link to="/p2" style={{ textDecoration: 'none' }}>
              <motion.div
                className='menuCategory'
                whileHover={{ backgroundColor: "rgba(144, 144, 144, 1)" }}
                whileTap={{scale: 0.97 }}
              >
                project2_generalAssembly<span className="menuTitle">StackTrack</span>
              </motion.div>
            </Link>

            <Link to="/p3" style={{ textDecoration: 'none' }}>
              <motion.div
                className='menuCategory'
                whileHover={{ backgroundColor: "rgba(144, 144, 144, 1)" }}
                whileTap={{scale: 0.97 }}
              >
                project3_generalAssembly<span className="menuTitle">Servo SPA</span>
              </motion.div>
            </Link>

            <motion.div
              className='menuCategory'
              whileHover={{ backgroundColor: "rgba(144, 144, 144, 1)" }}
              whileTap={{scale: 0.97 }}
            >
              project4_generalAssembly<span className="menuTitle">Portfolio SPA</span>
            </motion.div>
            <motion.div
              className='iconsContainer'
            >
      
              <motion.img
                className="icon1"
                whileHover={{ backgroundColor: "rgba(144, 144, 144, 1)" }}
                whileTap={{scale: 0.97 }}
                src={home} alt=""
                onClick={() => navigate('/')} 
              />
          
              <motion.img
                className="icon2"
                whileHover={{ backgroundColor: "rgba(144, 144, 144, 1)" }}
                whileTap={{scale: 0.97 }}
                src={avatar}
                onClick={() => navigate('/info')} alt="" 
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    )
}