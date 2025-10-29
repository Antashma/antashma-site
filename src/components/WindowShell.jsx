import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import WindowTitleBar from "./WindowTitleBar";

export default function WindowShell({ title, children, windowId }) {

    const navigate = useNavigate();

    const handleClose = () => navigate("/");

    return (
            <motion.section
                id = {windowId}
                className="window"
                role="dialog"
                aria-modal="true"
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
                exit={{ opacity: 0, scale: 0.98, y: 8, transition: { duration: 0.15 } }}
            >
                <WindowTitleBar titleText={title} close={handleClose}/>

                {children}
            </motion.section>
    )
}