import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

const GitHub = () => {
    const data = useLoaderData()


    // Method 1: without loader
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/shrey4369')
    //         .then((res) => res.json())
    //         .then((data) => setData(data))
    // }, [])

    return (
        <div className=' bg-gray-600 flex justify-center gap-4 items-center'>
            <img src={data.avatar_url} alt="Github profile photo" className='rounded-full w-52 m-5' />
            <h1 className='text-center text-2xl text-white'>Github API Link: <Link to={data.url} target='_blank'>{data.url}</Link></h1>
        </div>
    )

}

export default GitHub


// Method 2: with loader
export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shrey4369')
    return response.json()
}