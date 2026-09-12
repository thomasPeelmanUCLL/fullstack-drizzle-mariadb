import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Error fetching from API'));
  }, []);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>Drizzle Fullstack</h1>
      <p>API says: <strong>{message}</strong></p>
      <p style={{ color: '#666' }}>
        Frontend: React + Vite<br />
        Backend: Express + TypeScript + Drizzle ORM<br />
        Database: MariaDB (via Docker), Nix-ready with `nix develop`
      </p>
    </div>
  );
}
