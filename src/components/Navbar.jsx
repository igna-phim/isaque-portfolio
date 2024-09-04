import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <motion.div
                className="flex flex-shrink-0 items-center"
                whileHover={{ width: "auto" }}>
                <motion.div
                    className="mx-2 text-5xl font-bold tracking-wide"
                    whileHover={{ width: "auto" }}
                    style={{ width: "2ch" }}>IV.
                </motion.div>
            </motion.div>
            <motion.div className="m-8 flex intems-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/isaquevicoso/" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/igna-phim" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://x.com/isaquevicoso" target="_blank">
                    <FaSquareXTwitter />
                </a>
            </motion.div>
        </nav>
    )
}

export default Navbar;
