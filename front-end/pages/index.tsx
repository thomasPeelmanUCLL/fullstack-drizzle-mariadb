import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Error fetching from API'));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Drizzle Fullstack</h1>
      <p className="mb-2">API says: <strong className="text-emerald-400">{message}</strong></p>
      <p className="text-sm text-gray-400">
        Frontend: Next.js + Tailwind<br />
        Backend: Express + TypeScript + Drizzle ORM<br />
        Database: MariaDB (via Docker), Nix-ready with `nix develop`
      </p>
    </div>
  );
}
