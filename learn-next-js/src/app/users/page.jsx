import Head from 'next/head'
import React from 'react'
import LearnUseReactRouter from '../componets/LearnUseReactRouter'
import '../css/module.css'

const page = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24 textStyle">
        This is users page
        <LearnUseReactRouter />
      </div>
    </>
  )
}

export default page