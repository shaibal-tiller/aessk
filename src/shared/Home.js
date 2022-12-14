import React from 'react'
import StepperForm from '../utils/StepperForm'
import Form from '../components/Forms/Form'
import Header from './Header'
import Title from './Title'

const Home = () => {
  const steps=['Step 1','Step 2','Step 3']
  return (
    <div className='w-[100%]'>
      <Header />
      <div className='flex justify-center'>

        <Title title={"4th Grand Reunion"} />
      </div>
      <div className='form-container 
      flex justify-center text-center mt-4 mx-4'>
        <StepperForm Component={Form} steps={steps}/>
      </div>

    </div>
  )
}

export default Home