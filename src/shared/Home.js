import React from 'react'
import HorizontalLinearStepper from '../utils/StepperForm'
import Header from './Header'
import Title from './Title'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='flex justify-center'>

        <Title title={"4th Grand Reunion"} />
      </div>
      <div className='form-container w-[70%]
      flex justify-center text-center mt-4 ml-[10%]'>
        <HorizontalLinearStepper />
      </div>

    </div>
  )
}

export default Home