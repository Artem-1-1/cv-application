import { useState } from 'react'
import '../styles/App.css'
import DropDown from './dropDown';
import GeneralInfo from './generalInfo'
import Education from './education';
import WorkExperience from './workExperience';
import Resume from './resume';
import People from '../assets/people.svg'
import Hat from '../assets/education.svg'
import Workcase from '../assets/work-case.svg'


export default function App() {
  const [general, setGeneral] = useState({
    name: '',
    email: '', 
    phoneNum: '',
  });

  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  const handleGeneralSubmit = (data) => setGeneral(data);

  const handleEducationSubmit = (entry) =>
    setEducation((prev) => [...prev, entry]);
  
  const updateEducation = (index, newEntry) =>
    setEducation((prev) => prev.map((e, i) => (i === index ? newEntry : e)));

  const handleWorkSubmit = (entry) => setWork((prev) => [...prev, entry]);

  const updateWork = (index, newEntry) =>
    setWork((prev) => prev.map((w, i) => (i === index ? newEntry : w)));

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

      <DropDown
      FormComponent={
        <WorkExperience
        entries={work}
        onSubmit={handleWorkSubmit}
        onUpdate={updateWork}
        />
      }
      formClass='work-form'
      formName={
        <>
        <img src={Workcase} alt="" />
        Work Experience
        </>
      }
      ariaLabel='work experience dropdown'
      />
    </div>
    <Resume general={general} education={education} work={work}/> 
    </>
  )
}
