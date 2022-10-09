import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState,useRef } from 'react';
import { TaskAlt } from '@mui/icons-material';
import { display, upload } from '../services/utililtyService';
import AppContext from "../components/App/Context"
import { useContext } from "react"
import { useReactToPrint } from 'react-to-print';
import ComponentToPrint from '../components/ComponentToPrint'
import ReactToPrint from 'react-to-print';
import { useNavigate } from 'react-router-dom';

export default function StepperForm({ Component, steps, for_form }) {



    const [activeStep, setActiveStep] = useState(0);


    const myContext = useContext(AppContext)
 const navigate = useNavigate()
    const handleSubmit = () => {
             navigate('/print')
        // upload(myContext.userData)
        // myContext.setUserData({})

        // handleReset();
    }
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };



    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }}>

            {activeStep !== steps.length && <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {

                    return (
                        <Step key={index} >
                            <StepLabel >{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>}
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography className='' sx={{ alignItems: 'center', gap: 2, mt: 2, mb: 1, textAlign: 'center', minWidth: '500px' }}>
                        <TaskAlt sx={{ color: 'green' }} fontSize='large' />
                        <div style={{ fontSize: '1.2rem' }} className="form w-[60%] text-center">I, <strong>{myContext.userData.mem_name}</strong> DECLARE ALL THIS INFORMATION OF ME AS VALID</div>

                    </Typography>

                    
                    <Box sx={{ flex: '1 1 auto', textAlign: 'center', justifyContent: 'center', mt: 2 }} >
                        <Button onClick={handleSubmit}>REGISTER</Button>
                    </Box>

                </React.Fragment>
            ) : (
                <React.Fragment>


                    <Component stepNo={activeStep} />


                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />


                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
