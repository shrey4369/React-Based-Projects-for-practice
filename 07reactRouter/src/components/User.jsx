import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { userId } = useParams()
    return (
        <div className='bg-gray-600 text-center text-white text-3xl'>Users: {userId}</div>
    )
}

export default User