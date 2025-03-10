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
        transform: 'translate(305px, -145px)',
        width: '115px',
        zIndex: '1'
    }
    const rightArmStyle = {
        transform: 'translate(250px, -180px)',
        width: '185px',
        zIndex: '4'
    }
    const laptopStyle = {
        width: '250px',
        transform: 'translate(290px, -240px)',
        zIndex: '0'
    }
    return (
        <div style={{width: '448px'}}>
            <img style={headStyle} className="absolute" src="/OB-head.png" />
            <img style={bodyStyle} className="relative" src="/OB1-body.png" />
            <img style={leftArmStyle} className="absolute" src="/OB-left-arm.png" />
            <img style={rightArmStyle} className="absolute" src="/OB-right-arm.png" />
            <img style={laptopStyle} className="absolute" src="/laptop.png" />
        </div>
    )
}

export default OldBoi