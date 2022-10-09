import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react"
import { Box } from '@mui/material';
import AppContext from '../components/App/Context';
import { useContext } from 'react';
import { useEffect } from 'react';


const SelectDropDown = ({ element, name, label, }) => {
    const myContext= useContext(AppContext)
    const [value, setValue] = useState("")
    const handleChange = (event) => {
        event.preventDefault()
        setValue(event.target.value)
        myContext.setUserData({ ...(myContext.userData), [event.target.name]: event.target.value })
    }




    useEffect(() => {
        if(myContext.userData[name]) 
        setValue( myContext.userData[name])
    }, [])

    return (<div className=' flex flex-col '>
        <Box

            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >



            <FormControl size='small' sx={{ minWidth: '60%' }}>
                <InputLabel id="demo-simple-select-label" >{label}</InputLabel>
                <Select
                    sx={{ "&:hover": { bgcolor: 'transparent' }, 'textAlign': 'left' }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name={label}
                    value={value}
                    label={label}
                    onChange={handleChange}
                    displayEmpty
                >

                    {element.map((el, index) => {

                        return (<MenuItem key={index} value={el}>{el}</MenuItem>)


                    })}


                </Select>
            </FormControl>




        </Box>

    </div>)
}

export default SelectDropDown