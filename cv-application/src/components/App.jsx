import { useState } from 'react'
import '../styles/App.css'
import GeneralInfo from './generalInfo'
import DropDown from './dropDown';
import Education from './education';
import Resume from './resume';
import People from '../assets/people.svg'
import Hat from '../assets/education.svg'

function App() {
  const [general, setGeneral] = useState({
    name: '',
    email: '', 
    phoneNum: '',
  });

  const [education, setEducation] = useState([]);

  const handleGeneralSubmit = (data) => setGeneral(data);

  const handleEducationSubmit = (entry) =>
    setEducation((prev) => [...prev, entry]);
  
  const updateEducation = (index, newEntry) =>
    setEducation((prev) => prev.map((e, i) => (i === index ? newEntry : e)));

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

      <DropDown
        FormComponent={
          <Education 
          entries={education}
          onSubmit={handleEducationSubmit}
          onUpdate={updateEducation}/>
        }
        formClass='education-form'
        formName={
          <>
          <img src={Hat} alt="" />
          Education
          </>
        }
      ariaLabel="education dropdown"
      />

      </div>
    <Resume general={general} education={education}/> 
    </>
  )
}


export default App
