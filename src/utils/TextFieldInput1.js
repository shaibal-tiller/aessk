import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import AppContext from '../components/App/Context';
const TextFieldInput1 = ({ label, inputType = 'text', name }) => {
    const myContext = useContext(AppContext)
    const [value, setValue] = useState("")
    const handleChange = (e) => {
        setValue(e.target.value)
        myContext.setUserData({ ...(myContext.userData), [e.target.name]: e.target.value })
    }

    useEffect(() => {

      if(myContext.userData[name]) 
      setValue( myContext.userData[name])
      

    }, [])

    return (
        <Box

            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl sx={{ minWidth: '60%' }}>
                <TextField size='small'
                    label={label}
                    name={name || label}
                    variant="outlined"
                    onChange={handleChange}
                    value={value}
                    type={inputType} />
            </FormControl>
        </Box>
    );
}

export default TextFieldInput1