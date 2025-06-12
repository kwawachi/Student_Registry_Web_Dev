import React, { useState } from 'react';

export default function DeleteStudents() {
  const [studentId, setStudentId] = useState('');
  const [message, setMessage] = useState('');
  const [confirm, setConfirm] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!confirm) {
      setConfirm(true);
      return;
    }
    const res = await fetch(`http://localhost:3000/student/${studentId}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      setMessage('Student deleted!');
      setStudentId('');
    } else {
      setMessage('Failed to delete student.');
    }
    setConfirm(false);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Delete Student</h1>
      <form onSubmit={handleDelete} style={formStyle}>
        <label style={labelStyle}>Student ID</label>
        <input
          style={inputStyle}
          value={studentId}
          onChange={e => setStudentId(e.target.value)}
          placeholder="Student ID"
          required
        />
        <button style={btnStyle} type="submit">
          {confirm ? "Confirm Delete" : "Delete"}
        </button>
      </form>
      {message && <p style={{ color: "#fff", marginTop: "1rem" }}>{message}</p>}
    </div>
  );
}

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