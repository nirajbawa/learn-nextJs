import React from 'react'

const page = ({params}) => {
    console.log(params)
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      your user id is {params.id}
    </div>
  )
}

export default page