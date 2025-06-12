import React, { useEffect, useState } from 'react';

export default function GetStudents() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/student')
      .then(res => res.json())
      .then(data => {
        setStudents(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    setFiltered(
      students.filter(s =>
        (s.studentId || '').toLowerCase().includes(term) ||
        (s.name || '').toLowerCase().includes(term) ||
        (s.program || '').toLowerCase().includes(term) ||
        (s.city || '').toLowerCase().includes(term) ||
        (s.contactEmail || '').toLowerCase().includes(term)
      )
    );
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>All Students</h1>
      <div style={{ marginBottom: "1rem" }}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Search students by any field"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button style={btnStyle} onClick={handleSearch}>
          Search
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {filtered.length === 0 && <div style={{ color: "#fff" }}>No students found.</div>}
        {filtered.map((student) => (
          <div
            key={student.studentId}
            style={cardStyle}
          >
            <div><strong>Student ID:</strong> {student.studentId}</div>
            <div><strong>Name:</strong> {student.name}</div>
            <div><strong>Program:</strong> {student.program}</div>
            <div><strong>City:</strong> {student.city}</div>
            <div><strong>GPA:</strong> {student.gpa}</div>
            <div><strong>Gender:</strong> {student.gender}</div>
            <div><strong>Contact Email:</strong> {student.contactEmail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const containerStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #1565c0 0%, #90caf9 100%)",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  padding: "2rem",
};

const headingStyle = { fontSize: "2rem", marginBottom: "1rem", letterSpacing: "1px" };

const inputStyle = {
  padding: "0.75rem",
  borderRadius: "6px",
  border: "none",
  fontSize: "1rem",
  marginRight: "0.5rem",
  minWidth: "250px"
};

const cardStyle = {
  background: "#1976d2",
  borderRadius: "10px",
  boxShadow: "0 4px 18px #0d47a1cc",
  padding: "1.5rem",
  color: "#fff",
  maxWidth: "400px"
};

const btnStyle = {
  background: "#0d47a1",
  color: "#fff",
  border: "none",
  padding: "0.75rem 1rem",
  borderRadius: "6px",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
  marginLeft: "0.5rem"
};