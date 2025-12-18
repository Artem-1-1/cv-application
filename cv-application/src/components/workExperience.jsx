import { useState } from "react";

export default function WorkExperience({
  entries = [],
  onSubmit,
  onUpdate
}) {
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const resetForm = () => {
    setJobTitle('');
    setCompany('');
    setStartDate('');
    setEndDate('');
    setDescription('');
    setEditingIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { jobTitle, company, startDate, endDate, description };

    if (editingIndex === null) {
      onSubmit(payload)
    } else {
      onUpdate(editingIndex, payload)
    }
    resetForm();
  };

  const handleEditClick = (idx) => {
    const e = entries[idx];
    setJobTitle(e.jobTitle || '');
      setCompany(e.company || '');
      setStartDate(e.startDate || '');
      setEndDate(e.endDate || '');
      setDescription(e.description || '');
  };

  return (
    <>
    <div className="entries-list" style={{ display: entries.length ? 'block' : 'none', marginBottom: 12 }}>
      {entries.map((entry, i) => (
        <div
          key={i}
          className="openFormBtn"
          role="button"
          aria-label={`edit work ${i}`}
          tabIndex={0}
          onClick={() => handleEditClick(i)}
          onKeyDown={(ev) => ev.key === 'Enter' && handleEditClick(i)}
          style={{ marginBottom: 10 }}>
          <h2>{entry.jobTitle}</h2>
          <h3>{entry.company}</h3>
        </div>
        ))}
    </div>

    <form onSubmit={handleSubmit}>
      <label>
        Job Title
        <input 
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Enter Job Title"
          required/>
      </label>
      <label>
        Company
        <input 
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter Company"
          required />
      </label>
      <div>
        <label style={{flex: 1}}>
          Start Date 
          <input type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="dd/mm/yyyy"
          required />
        </label>
        <label style={{flex: 1}}>
          End Date 
          <input type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="dd/mm/yyyy"
          required />
        </label>
      </div>
      <label>
        Description 
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Main Tasks"
          required/>
      </label>
      <div>
          <button type="submit">
            {editingIndex === null ? 'Save' : 'Update'}
          </button>
          {editingIndex !== null && (
            <button type="button" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
    </form>
    </>
  )
}