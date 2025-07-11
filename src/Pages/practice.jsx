import {motion} from 'framer-motion'

const Practice = () => {

    return(
        <div className="text-black h-screen text-center justify-center m-16">
            <motion.h3 animate={{ fontSize: '70px', color:'#ff2449', rotate: 45}} > 
                practice 
            </motion.h3>
        </div>
    )
}

export default Practice;