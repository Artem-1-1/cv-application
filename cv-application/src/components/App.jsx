import { useState } from 'react'
import '../styles/App.css'
import GeneralInfo from './generalInfo'
import DropDown from './dropDown';
import Resume from './resume';
import People from '../assets/people.svg'

function App() {
  const [general, setGeneral] = useState({
    name: '',
    email: '', 
    phoneNum: '',
  });

  const handleGeneralSubmit = (data) => setGeneral(data);

  return (
    <>
      <div className='form'>
        <DropDown
        FormComponent={<GeneralInfo onSubmit={handleGeneralSubmit} />}
        formClass="general-form"
        formName={
        <>
          <img src={People} alt="" />
          General Information
        </>
      }
      ariaLabel="general information dropdown"
      />
      </div>
    <Resume general={general}/> 
    </>
  )
}


export default App
