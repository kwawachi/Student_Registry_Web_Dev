import React, { useState } from 'react';

const initialForm = {
  studentId: '',
  name: '',
  program: '',
  city: '',
  gpa: '',
  gender: '',
  contactEmail: ''
};

export default function UpdateStudents() {
  const [searchId, setSearchId] = useState('');
  const [form, setForm] = useState(initialForm);
  const [found, setFound] = useState(false);
  const [message, setMessage] = useState('');

  const handleSearch = async () => {
    setMessage('');
    const res = await fetch(`http://localhost:3000/student`);
    const data = await res.json();
    const student = data.find((s) => String(s.studentId) === String(searchId));
    if (student) {
      setForm({
        studentId: student.studentId,
        name: student.name,
        program: student.program,
        city: student.city,
        gpa: student.gpa,
        gender: student.gender,
        contactEmail: student.contactEmail
      });
      setFound(true);
      setMessage('');
    } else {
      setFound(false);
      setForm(initialForm);
      setMessage('Student not found.');
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/student/${searchId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, gpa: parseFloat(form.gpa) }),
    });
    if (res.ok) {
      setMessage('Student updated!');
    } else {
      setMessage('Failed to update student.');
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Update Student</h1>
      {!found && (
        <div style={{ ...formStyle, alignItems: "stretch" }}>
          <label style={labelStyle}>Enter Student ID to Update:</label>
          <input
            style={inputStyle}
            value={searchId}
            onChange={e => setSearchId(e.target.value)}
            placeholder="Student ID"
          />
          <button style={btnStyle} onClick={handleSearch}>Search</button>
        </div>
      )}
      {found && (
        <form onSubmit={handleSubmit} style={formStyle}>
          <Input label="Student ID" name="studentId" value={form.studentId} onChange={handleChange} required />
          <Input label="Name" name="name" value={form.name} onChange={handleChange} required />
          <Input label="Program" name="program" value={form.program} onChange={handleChange} required />
          <Input label="City of Residence" name="city" value={form.city} onChange={handleChange} required />
          <Input label="GPA" name="gpa" type="number" step="0.01" value={form.gpa} onChange={handleChange} required />
          <Select label="Gender" name="gender" value={form.gender} onChange={handleChange} required />
          <Input label="Contact Email" name="contactEmail" type="email" value={form.contactEmail} onChange={handleChange} required />
          <button style={btnStyle} type="submit">Update</button>
        </form>
      )}
      {message && <p style={{ color: "#fff", marginTop: "1rem" }}>{message}</p>}
    </div>
  );
}

const Input = ({ label, ...props }) => (
  <div style={inputGroupStyle}>
    <label style={labelStyle}>{label}</label>
    <input style={inputStyle} {...props} />
  </div>
);

const Select = ({ label, ...props }) => (
  <div style={inputGroupStyle}>
    <label style={labelStyle}>{label}</label>
    <select style={inputStyle} {...props}>
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  </div>
);

const containerStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #1565c0 0%, #90caf9 100%)",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

const headingStyle = { fontSize: "2rem", marginBottom: "1rem", letterSpacing: "1px" };

const formStyle = {
  background: "rgba(21,101,192,0.95)",
  padding: "2rem",
  borderRadius: "12px",
  width: "100%",
  maxWidth: "400px",
  boxShadow: "0 4px 24px #1976d2aa",
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
};

const inputGroupStyle = { display: "flex", flexDirection: "column", gap: "0.5rem" };
const labelStyle = { fontWeight: 600 };
const inputStyle = { padding: "0.75rem", borderRadius: "6px", border: "none", fontSize: "1rem" };

const btnStyle = {
  background: "#0d47a1",
  color: "#fff",
  border: "none",
  padding: "0.75rem 1rem",
  borderRadius: "6px",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
  marginTop: "0.5rem"
};