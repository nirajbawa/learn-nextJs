import Link from 'next/link'
import React from 'react'

const LearnLink = () => {
    const id = 2;
    return (
        <div>
            <Link href="admin/dashboard">
                Go to Admin Dashboard
            </Link>
            <br />
            <Link href={`/users/profile/${id}`}>
                Go to user Profile
            </Link>
        </div>
    )
}

export default LearnLink