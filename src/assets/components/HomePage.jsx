import { useEffect, useState } from 'react'

import Sidebar from './Sidebar'

import { animate, motion, stagger } from "framer-motion"

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false)

    const text1 = "Hi, my name is Jin Kikuchi. I am a software engineer.".split(" ")
    const text2 = "Welcome to my Portfolio website, make yourself comfortable. If you like to learn more about me, or want to have a look at my projects, click on the hamburger menu located on the top left.".split(" ")
    const text3 = "Otherwise, you can hang around with me on this page, I have been quite lonely being here all by myself, not going to lie. I do have to warn you though, nothing special really happens, it'd be quite boring if you ask me.".split(" ")
    const text4 = "No, really. It's one of those reverse psychology instance, where you weren't interested at all if something would happen, but because I mentioned \"nothing will happen,\" you're extra curious now, when you would've left 20 seconds ago.".split(" ")
    const text5 = "I mean... you are patient, I'll give you that.".split(" ")
  
    function toggleMenu() {
      setIsOpen(prevState => !prevState)
    }

    const staggerWords = stagger(0.22, { startDelay: 0.5 })
  
    useEffect(() => {
      animate(
        ".titleSentenceWord", 
        isOpen ? { opacity: 0, scale: 0.3, filter: "blur(20px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" },
        {
          duration: 0.5,
          delay: isOpen ? 0 : staggerWords,
        }
      )
      animate(
        ".secretTitleSentence", 
        isOpen ? { opacity: 0, scale: 0.3, filter: "blur(20px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" },
        {
          duration: 0.5,
          delay: isOpen ? 0 : 40,
        }
      )
    }, [isOpen])

    return (
    <>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
      
      <motion.div 
        className="titleSentence"
        initial={{ y: 0 }}
        animate={{
          y: [0, -200, -200, -400, -400, -600, -600, -800, -800, -1000, -1000]
        }}
        transition={{ duration: 45 }}
      >
        {text1.map((elem, idx) => (
          <div key={idx} className='titleSentenceWord'>
            {elem}
          </div>
        ))}
      </motion.div>

      <motion.div 
        className="titleSentence"
        initial={{ y: 0 }}
        animate={{
          y: [0, 0, 0, -200, -200, -400, -400, -600, -600, -800, -800]
        }}
        transition={{ duration: 45 }}
      >
        {text2.map((elem, idx) => (
          <div key={idx} className='titleSentenceWord'>
            {elem}
          </div>
        ))}
      </motion.div>

      <motion.div 
        className="titleSentence"
        initial={{ y: 0 }}
        animate={{
          y: [0, 0, 0, 0, 0, -200, -200, -400, -400, -600, -600]
        }}
        transition={{ duration: 45 }}
      >
        {text3.map((elem, idx) => (
          <div key={idx} className='titleSentenceWord'>
            {elem}
          </div>
        ))}
      </motion.div>

      <motion.div 
        className="titleSentence"
        initial={{ y: 0 }}
        animate={{
          y: [0, 0, 0, 0, 0, 0, 0, -200, -200, -400, -400]
        }}
        transition={{ duration: 45 }}
      >
        {text4.map((elem, idx) => (
          <div key={idx} className='titleSentenceWord'>
            {elem}
          </div>
        ))}
      </motion.div>

      <motion.div 
        className="titleSentence"
        initial={{ y: 0 }}
        animate={{
          y: [0, 0, 0, 0, 0, 0, 0, 0, 0, -200, -200]
        }}
        transition={{ duration: 45 }}
      >
        {text5.map((elem, idx) => (
          <div key={idx} className='titleSentenceWord'>
            {elem}
          </div>
        ))}
      </motion.div>

      <motion.div 
        className="secretTitleSentence"
      >
        Okay, fine, you win. You get a virtual trophy, and a slice of virtual cake.
      </motion.div>

      {/* <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}

      whileHover={{ 
        scale: [null, 1.5, 1.4],
        rotateX: 0,
        rotateY: 20,
        skewX: 0,
        skewY: 0,
        filter: "blur(1px)",
        zIndex: 0,
        color: "rgba(255, 125, 0, 0.87)",
        fontSize: '50px'
      }}
      >
        <h2>test</h2>
      </motion.div> */}
    </>
    )
}