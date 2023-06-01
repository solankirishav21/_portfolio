// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

const minusIcon = '-'
const plusIcon = '+'


const Resume = () => {

// eslint-disable-next-line react/prop-types
    const Accordion= ({ title, position, year, content, grade }) => {
        const [expanded, setExpanded] = useState(false)
        const toggleExpanded = () => setExpanded((current) => !current)
      
        return (
          <div name='resume'className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-black rounded-2xl" onClick={toggleExpanded}>
            <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row text-white font-semibold">
              <h5 className="flex-1">
                {title}
              </h5>
              <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div>
            </div>
            <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${expanded ? "max-h-40" : "max-h-0"}`}>
                <div className='flex gap-x-36'>
                    <div className=''>
              <p className="pb-4 text-left text-white font-semibold ">
                {position}
              </p>
              </div>
              <div>
              <p className="pb-4 text-left text-white font-semibold">
                {year}
              </p>
              </div>
                </div>
              <p className="pb-2  text-white font-semibold ">
                {content}
              </p>
              <p className="pb-7 lg:pb-20 text-left text-white font-semibold">
                {grade}
              </p>
                
            </div>
          </div>
        )
      }



  return (
    <div name='resume' className='bg-gradient-to-b from-black to-gray-700'>
        <h2 className=' text-yellow-400 text-4xl font-semibold text-center py-10 underline decoration-gray-300 decoration-4 lg:text-left lg:mx-96 lg:px-60 '>
           Resume
           </h2>

    <div className=' mx-2 md:mx-20 lg:flex  lg:mx-36'>

        <div className=' items-center lg:mr-9 '>
    <h3 className='text-yellow-200 text-center text-xl font-semibold py-3'>Education</h3>
    <Accordion 
    title ='Birla Institute of Technology, Mesra' 
    position='Bachelors of Technology'
     year ='2020-2024' 
     content="Course Work - Programming Fundamentals in C, Data Structures and Algorithm, Object Oriented Programming"
     grade ="CGPA - 8.58
     "/>
    <Accordion
     title ='Emmanuel Mission Sr Secondary School' 
     position='Intermediate' 
     year = '2017-2019'
     content = 'Course Work: Physics, Chemistry, Maths, English, Physical Education'
    grade = 'Percentage = 84.6%' 
     />
    <Accordion 
    title ="St. Karen's High School" 
    position='Matric' 
    year = '2017' 
    content="Co-Cirricular Activities = Red House Captain, School Quiz Team Member, Member of One-Act Play Team"
    grade = "CGPA = 10"/>
    </div>

    <div className='items-center pb-2'>
    <h3 className='text-yellow-200 text-center text-xl font-semibold py-3' >Experience</h3>
    <Accordion 
    title ='VP @ Tech' 
    position='The Venture Labs'
    year = '2023-Present'
    content="Responsible for overseeing organization's web development tasks and designing client websites." 
    />
    <Accordion 
    title ='Web Developer' 
    position='GDSC, BIT Mesra'
    year ='2021-2023'
    content = 'Successfully delivering all web development projects assigned by the senior lead while efficiently managing event management tasks related to web development.'
    />
    <Accordion 
    title ='Joint President' 
    position='EDC, BIT Mesra'
    year ='2023-Present'
    content = 'In charge of managing a team of 150+ members, coordinating event management activities, securing sponsors, and ensuring timely task completion.' 
    grade='Past Experience: 2022-2023 General Secretary'
    />
    </div>
    </div>
    </div>
  )
}

export default Resume