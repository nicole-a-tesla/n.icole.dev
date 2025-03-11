import { motion } from "motion/react"

const OldBoi = () => {
    const headStyle = {
        transform: 'translate(180px, 35px)',
        width: '180px',
    }

    const leftArmStyle = {
        translate: '300px -145px',
        width: '115px',
    }
    const rightArmStyle = {
        translate: '250px -180px',
        width: '185px',
    }
    const laptopStyle = {
        width: '250px',
        transform: 'translate(290px, -240px)',
    }

    return (
        <div style={{minWidth: '448px' }} className="-translate-x-[75px] md:-translate-x-[30px]">
            <img style={headStyle} className="absolute z-3" src="/OB-head.png" />
            <img className="relative z-2" src="/OB1-body.png" />
            <motion.img
                style={leftArmStyle}
                animate={{ rotate: -20 }}
                transition={{ repeat: Infinity, repeatType: "reverse", bounce: 0, duration: 0.1 }}
                className="absolute z-1 origin-[10px]"
                src="/OB-left-arm.png" />
            <motion.img
                style={rightArmStyle}
                animate={{ rotate: 20 }}
                transition={{ repeat: Infinity, repeatType: "reverse", bounce: 0, duration: 0.1 }}
                className="absolute z-4 origin-[20px]"
                src="/OB-right-arm.png" />
            <img style={laptopStyle} className="absolute z-0" src="/laptop.png" />
        </div>
    )
}

export default OldBoi