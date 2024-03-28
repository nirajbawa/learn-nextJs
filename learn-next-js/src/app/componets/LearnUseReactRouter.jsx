'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const LearnUseReactRouter = () => {
    const router = useRouter()
    return (
        <div>
            <button className='mytext' onClick={() => router.push("/")} >go to Home</button>
        </div>
    )
}

export default LearnUseReactRouter