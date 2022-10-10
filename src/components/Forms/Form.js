import React from 'react'
import DatePicker from '../../utils/DatePicker'
import RadioComponent from '../../utils/RadioComponent'
import SelectDropDown from '../../utils/SelectDropDown'
import TextFieldInput from '../../utils/TextFieldInput'
import TextFieldInput1 from '../../utils/TextFieldInput1'
const Form = ({ stepNo }) => {
  return (
    <div>
      {stepNo == 0 ? <form className='form'>
        <SelectDropDown label={'SELECT CATEGORY'} name={"mem_category"} element={['PRIMARY', 'GEN-RENEW', 'GENERAL', 'LIFE']} />
        <TextFieldInput label={'Full Name'} name={'mem_name'} inputType="text" />
        <DatePicker label={"Date of Birth"} name='mem_dob' />
        <SelectDropDown label={'Sex'} name={'mem_sex'} element={['Male', 'Female', 'Other']} />
        <SelectDropDown label={'Blood Group'} name={'mem_bg'} element={['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-']} />
      {/*   <TextFieldInput label={'Attach Photo'} name='mem_photo' inputType='file' /> */}
        <TextFieldInput label={'NID/PASSPORT No.'} name='mem_nid' inputType='text' />
        {/* <TextFieldInput label={'Attach ID'} name='mem_idProof' inputType='file' /> */}
        <TextFieldInput label={'Father\'s name'} name='mem_fatherName' inputType='text' />
        <TextFieldInput label={'Mother\'s name'} name='mem_motherName' inputType='text' />
        <TextFieldInput label={'Spouse\'s name'} name='mem_spouseName' inputType='text' />
        <TextFieldInput label={'Number of Children'} name='mem_child' inputType='number' />
      </form> :
        stepNo == 1 ?
          <form className='form'>
            <TextFieldInput1 label={"Mobile No."} name='mem_mobile' inputType='text' />
            <TextFieldInput1 label={"Email"} name="mem_email" inputType='email' />
            <TextFieldInput1 label={"Whatsapp No."} name='mem_whatsapp' inputType='text' />
            <TextFieldInput1 label={"Facebook ID"} name='mem_fb' inputType='text' />
            <TextFieldInput1 label={"Profession"} name='mem_profession' inputType='text' />
            <TextFieldInput1 label={"Name of Company"} name='mem_company' inputType='text' />
            <TextFieldInput1 label={"Designation"} name='mem_designation' inputType='text' />
            <TextFieldInput1 label={"Company Address"} name="mem_companyAddress" inputType='text' />
            <TextFieldInput1 label={"Present Address"} name="mem_presentAddress" />
            <TextFieldInput1 label={"Permanent Address"} name="mem_permanentAddress" />


          </form> :
          <form className='form'>
            <RadioComponent label={"DID YOU ATTEND ANY BOARD EXAM FROM BAFSK"} elements={['YES', 'NO']} />
            <div>
              <TextFieldInput label={'SSC Passing Year'} name="mem_sscPassYear" inputType='number' />
              <TextFieldInput label={'HSC Passing Year'} name="mem_hscPassYear" inputType='number' />
            </div>
            <div>
            STUDY PERIOD
              <TextFieldInput label={'Start Year'} name="mem_startYear" inputType='number' />
              <TextFieldInput label={'End Year '} name="mem_endYear" inputType='number' />
            </div>


          </form>}
    </div>
  )
}

export default Form