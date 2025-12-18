import { useState } from "react";

export default function Education({
  entries = [],
  onSubmit,
  onUpdate,
}) {
  const [degree, setDegree] = useState('');
  const [school, setSchool] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const resetForm = () => {
    setDegree('');
    setSchool('');
    setStartDate('');
    setEndDate('');
    setEditingIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { degree, school, startDate, endDate };

    if (editingIndex === null) {
      onSubmit(payload);
    } else {
      onUpdate(editingIndex, payload);
    }
    resetForm();
  };

  const handleEditClick = (idx) => {
    const entry = entries[idx];
    setEditingIndex(idx);
    setDegree(entry.degree || '');
    setSchool(entry.school || '');
    setStartDate(entry.startDate || '');
    setEndDate(entry.endDate || '');
  };

  return (
    <>
      <div className="entries-list" style={{ display: entries.length ? 'block' : 'none', marginBottom: 12 }}>
        {entries.map((entry, i) => (
          <div
            key={i}
            className="openFormBtn"
            role="button"
            aria-label={`edit education ${i}`}
            tabIndex={0}
            onClick={() => handleEditClick(i)}
            onKeyDown={(ev) => ev.key === 'Enter' && handleEditClick(i)}
            style={{ marginBottom: 10, cursor: 'pointer', border: '1px solid #ccc', padding: '5px' }}>
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
            required />
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
          <label style={{ flex: 1 }}>
            Start date
            <input type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="dd/mm/yyyy"
              required />
          </label>
          <label style={{ flex: 1 }}>
            End date
            <input type="text"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="dd/mm/yyyy"
              required />
          </label>
        </div>
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
  );
}