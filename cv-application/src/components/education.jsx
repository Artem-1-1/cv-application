import { useState, useEffect } from "react";

export default function Education({
  entries = [],
  onSubmit,
  onUpdate,
  degreeInit = '',
  schoolInit = '',
  startDateInit = '',
  endDateInit = ''
 }) {
  const [degree, setDegree] = useState(degreeInit);
  const [school, setSchool] = useState(schoolInit);
  const [startDate, setStartDate] = useState(startDateInit);
  const [endDate, setEndDate] = useState(endDateInit);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    if (editingIndex === null) {
      setDegree('');
      setSchool('');
      setStartDate('');
      setEndDate('');
    } else {
      const e = entries[editingIndex] || {};
      setDegree(e.degree || '');
      setSchool(e.school || '');
      setStartDate(e.startDate || '');
      setEndDate(e.endDate || '');
    }
  }, [editingIndex, entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const playload = {degree, school, startDate, endDate};
    if (editingIndex === null) {
      onSubmit(playload)
    } else {
      onUpdate(editingIndex, playload);
    }
    setEditingIndex(null);
    setDegree(''),
    setSchool('');
    setStartDate('');
    setEndDate('');
  };

  const handleEditClick = (idx) => {
    setEditingIndex(idx);
  };

  return (
    <>
    <div className="entries-list"
    style={{ display: entries.length ? 'block' : 'none', marginBottom: 12 }}>
      {entries.map((entry, i) => (
        <div
          key={i}
          className="openFormBtn"
          role="button"
          aria-label={`edit education ${i}`}
          tabIndex={0}
          onClick={() => handleEditClick(i)}
          onKeyDown={(ev) => ev.key === 'Enter' && handleEditClick(i)}
          style={{ marginBottom: 10 }}>
            <h2>{entry.school}</h2>
            <h3>{entry.degree}</h3>
          </div>
        ))}
      </div>

    <form onSubmit={handleSubmit}>
      <label>
        Degree
        <input type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          placeholder="Enter Degree / Field of Study"
          required/>
      </label>
      <label>
        School
        <input type="text"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        placeholder="Enter School / University"
        required />
      </label>
      <div>
        <label style={{flex: 1}}>
          Start date
          <input type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="dd/mm/yyyy" 
          required/>
        </label>
        <label style={{flex: 1}}>
          End date
          <input type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="dd/mm/yyyy"
          required />
        </label>
      </div>
      <button type="submit">
        {editingIndex === null ? 'Save': 'Update'}
      </button>
    </form>
    </>
  )
}
