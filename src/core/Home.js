import React from 'react'
import { API } from '../backend'
import Base from "./Base"

export default function Home() {
    console.log("API IS",API)
    return (
        <div>
            <Base>
            <h1>hello front end</h1>
             </Base>        
        </div>
    )
}
