import { useInView, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

const VerticalTypingEffect = ({ text }) => {

    const [displayedText, setDisplayedText] = useState('');
    const [isInView, setIsInView] = useState(false);
    const ref = useRef();

    const inView = useInView(ref, {once: true});

    useEffect(() => {
        if(inView){
            setIsInView(true);
        }
    }, [inView]);

    useEffect(()=> {
        if(isInView){
            let i=0;
            const interval = setInterval(() => {
                if (i < text.length) {
                    setDisplayedText((prev) =>  [...prev, text[i]]);
                    i++;
                    console.log('interval: ', text.length)
                } else {
                    clearInterval(interval)
                }
            }, 70)
        }
    }, [isInView, text])

  return (
    <motion.div
        ref = {ref}
        initial = {{opacity:0}}
        animate = {{ opacity: isInView ? 1 : 0}}
        transition = {{duration: 0.5}}
        className='font-banery text-7xl font-bold text-[#E7DFCF]'
    >
        {displayedText.length > 0 && displayedText.map((char, index) => (
            <> 
                <span key={index}>{char}</span> <br/></>// Display each character as a separate <span>
      ))}
    </motion.div>
  )
}

export default VerticalTypingEffect