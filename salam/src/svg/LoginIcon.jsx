export const LoginIcon = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="loginGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#1fa0ef', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
        </linearGradient>
      </defs>

      {/* User icon */}
      <circle cx="100" cy="80" r="30" fill="url(#loginGrad)" opacity="0.9"/>
      
      {/* Login form/screen */}
      <rect x="50" y="120" width="100" height="60" rx="8" fill="white" stroke="url(#loginGrad)" strokeWidth="2" opacity="0.9"/>
      
      {/* Login fields */}
      <rect x="60" y="135" width="80" height="8" rx="4" fill="#e5e7eb"/>
      <rect x="60" y="150" width="80" height="8" rx="4" fill="#e5e7eb"/>
      
      {/* Login button */}
      <rect x="60" y="165" width="80" height="10" rx="5" fill="url(#loginGrad)"/>
      
      {/* Decorative elements */}
      <circle cx="30" cy="40" r="8" fill="#fbbf24" opacity="0.6"/>
      <circle cx="170" cy="160" r="12" fill="#f59e0b" opacity="0.5"/>
    </svg>
  );
};

export default LoginIcon;