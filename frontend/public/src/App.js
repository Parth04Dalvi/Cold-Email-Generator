import React, { useState } from 'react';

function App() {
  const [recipient, setRecipient] = useState('');
  const [purpose, setPurpose] = useState('');
  const [sender, setSender] = useState('');
  const [tone, setTone] = useState('friendly');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/generate-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipient, purpose, sender, tone })
    });
    const data = await res.json();
    setEmail(data.email);
  };

  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <h2>🎯 Cold Email Generator</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)} required style={{ width: '100%', padding: 8, margin: 5 }} />
        <textarea placeholder="Purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)} required rows={4} style={{ width: '100%', padding: 8, margin: 5 }} />
        <input placeholder="Your Name" value={sender} onChange={(e) => setSender(e.target.value)} required style={{ width: '100%', padding: 8, margin: 5 }} />
        <select value={tone} onChange={(e) => setTone(e.target.value)} style={{ width: '100%', padding: 8, margin: 5 }}>
          <option value="friendly">Friendly</option>
          <option value="formal">Formal</option>
          <option value="persuasive">Persuasive</option>
        </select>
        <button type="submit" style={{ marginTop: 10 }}>Generate Email</button>
      </form>
      <div style={{ marginTop: 20, whiteSpace: 'pre-wrap' }}>
        <h4>📧 Generated Email:</h4>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default App;
