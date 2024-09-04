import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <div className="border-t border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl">
                Contact
            </motion.h2>
            <div className="text-center tracking-tighter">
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <a href="#" target="_blank" className="border-b">{CONTACT.email}</a>
            </div>
        </div>
    )
}

export default Contact