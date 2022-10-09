import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';

const RadioComponent = ({ elements, label }) => {

    const handleChange = (e) => {


        // myContext.setBasicData({ ...(myContext.basicData), [e.target.name]: e.target.value })
        // // //updateData({ [e.target.name]: e.target.value })

    }
    return (<Box

        sx={{
            '& > :not(style)': { ml: 2, },
        }}
        noValidate
        autoComplete="off"
    >
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
            <RadioGroup
                name={label}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"

                sx={{ gap: 3 }}
            >
                {elements.map((el, index) => {
                    return (<FormControlLabel onChange={handleChange} key={index} value={el} control={<Radio />} label={el} />)
                })}



            </RadioGroup>
        </FormControl></Box>
    )
}

export default RadioComponent