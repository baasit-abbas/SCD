import NavBar from '@/Components/NavBar'
import Main from '@/Components/Main'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white h-screen selection:bg-gray-800 selection:text-white '>
      <NavBar img_src='/My photo.png' name='Basit Abbas' />
      <Main 
      img_src='/My photo.png' 
      name='Basit Abbas' 
      linkedin='https://www.linkedin.com/in/basit-abbas/' 
      github='https://github.com/baasit-abbas' 
      intro="I am from Lahore, currently pursuing my BS in Data Science at Superior University. With a strong foundation in Computer Science from my ICS background, I am passionate about leveraging data-driven insights to solve real-world problems and create meaningful impact through technology." />
    </div>
  )
}

export default page
