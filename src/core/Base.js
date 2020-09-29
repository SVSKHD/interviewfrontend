import React from 'react'
import NAV1 from '../components/Nav';
import FooterPart1 from "../components/footer"
import NAV2 from '../components/Nav2';
 const Base=({children})=> {
    return (
        <div>
            <NAV1/>
            <NAV2/>
            {children}
            <FooterPart1/>
        </div>
    )
}
export default Base;