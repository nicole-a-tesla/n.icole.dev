import { motion } from "motion/react"
import Image from "next/image"

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
            <div style={headStyle} className="absolute z-3">
                <Image priority={true} src="/OB-head.png" width={435} height={447} />
            </div>
            <div className="relative z-2">
                <Image priority={true} src="/OB1-body.png" width={1140} height={855} />
            </div>
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
            <div style={laptopStyle} className="absolute z-0">
                <Image priority={true} src="/laptop-sm.png" width={5311} height={3733} />
            </div>
        </div>
    )
}

export default OldBoi