import { motion } from "motion/react"

const OldBoi = () => {
    const headStyle = {
        transform: 'translate(180px, 35px)',
        width: '180px',
        zIndex: '3'
    }

    const bodyStyle = {
        zIndex: '2'
    }
    const leftArmStyle = {
        translate: '300px -145px',
        width: '115px',
        zIndex: '1',
        transformOrigin: '10px'
    }
    const rightArmStyle = {
        translate: '250px -180px',
        width: '185px',
        zIndex: '4',
        transformOrigin: '20px',
    }
    const laptopStyle = {
        width: '250px',
        transform: 'translate(290px, -240px)',
        zIndex: '0'
    }

    return (
        <div style={{minWidth: '448px' }} className="-translate-x-[75px] md:-translate-x-[30px]">
            <img style={headStyle} className="absolute" src="/OB-head.png" />
            <img style={bodyStyle} className="relative" src="/OB1-body.png" />
            <motion.img
                style={leftArmStyle}
                animate={{ rotate: -20 }}
                transition={{ repeat: Infinity, repeatType: "reverse", bounce: 0, duration: 0.1 }}
                className="absolute"
                src="/OB-left-arm.png" />
            <motion.img
                style={rightArmStyle}
                animate={{ rotate: 20 }}
                transition={{ repeat: Infinity, repeatType: "reverse", bounce: 0, duration: 0.1 }}
                className="absolute"
                src="/OB-right-arm.png" />
            <img style={laptopStyle} className="absolute" src="/laptop.png" />
        </div>
    )
}

export default OldBoi