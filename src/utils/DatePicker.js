import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useEffect, useState } from 'react';
import { FormControl } from '@mui/material';
import { Box } from '@mui/material';
import { useContext } from 'react';
import AppContext from '../components/App/Context';

const DatePicker = ({ label, name }) => {

    const myContext = useContext(AppContext)

    const [value, setValue] = useState("01/01/1990")
    const handleChange = (newValue) => {
        setValue(newValue)

        const tempDate = `${newValue.$D < 10 ? "0" : ""}${newValue.$D}/${newValue.$M + 1 < 10 ? "0" : ""}${newValue.$M + 1}/${newValue.$y}`

        myContext.setUserData({ ...(myContext.userData), [name]: tempDate })
    }

    useEffect(() => {


    }, [])
    return (
        <div className='flex flex-col '>
            <LocalizationProvider dateAdapter={AdapterDayjs} >

                <Box size='small'

                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <FormControl sx={{ minWidth: "60%" }}>
                        <DesktopDatePicker
                            name={label || "Date"}
                            label={label || "Select Date"}
                            inputFormat="DD/MM/YYYY"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField size='small' {...params} />}
                        />
                    </FormControl>
                </Box>
            </LocalizationProvider>
        </div>
    )
}

export default DatePicker