import { useState } from 'react';
import './StyleHomePage.css';

export function HomePage() {
  const [value, setValue] = useState('');

  return (
    <label className="inp">
      <input
        type="password"
        placeholder="Password"
        minLength={6}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={value.length >= 6 ? 'valid' : ''}
      />
      <svg
        className="border"
        width="280"
        height="18"
        viewBox="0 0 280 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="border-path"
          d="M0,12 L280,12"
          stroke="#C8CCD4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className={`check ${value.length >= 6 ? 'show' : ''}`}
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7L5.5 11L13 1"
          stroke="#0077FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </label>
  );
}

export default HomePage