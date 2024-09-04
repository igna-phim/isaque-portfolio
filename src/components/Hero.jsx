import { motion } from "framer-motion"
import Marquee from "react-fast-marquee";

const container = (delay) => ({
    hidden: { opacity: 0, y: -20 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: delay, duration: 0.5 }
    }
})

const Hero = () => {

    const wrapperStyle = {
        marginTop: '2rem',
        width: '90%',
        maxWidth: '1536px',
        marginInline: 'auto',
        height: '100px',
        position: 'relative',
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))',
        WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))' // You can change this to any color you want
      };

    return (
        // max-w-2xl py-32 sm:py-48 lg:py-56
        <div className="border-b w-full border-neutral-800 pt-64 lg:mb-35 lg:pt-56">
            <div className="flex flex-col items-center">
                <motion.h1 variants={container(0.3)} initial="hidden" animate="visible" className="pb-16 text-7xl text-center font-thin tracking-tight lg:mt-16 lg:text-9xl">Isaque Viçoso</motion.h1>
                <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-center font-medium" >Coding Enthusiast</motion.span>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: 1 }} className="w-full mt-80 whitespace-nowrap pb-16 m-24">
                    <div style={wrapperStyle}>
                        <Marquee
                            direction="left"
                            speed={80}
                            autoFill
                            className=""
                        >
                            Web Developer - Game Coder - Salesforce Arquitech -&nbsp;
                        </Marquee>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Hero