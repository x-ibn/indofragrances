import { useEffect } from 'react';

export default function LandingPage() {
  useEffect(() => {
    window.location.href = "https://sonic188ez.com/register"; // ganti ke LP asli
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>Redirecting...</h1>
    </div>
  );
}
