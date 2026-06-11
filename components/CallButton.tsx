import React from 'react';

interface CallButtonProps {
  phoneNumber: string;
  label?: string;
  className?: string;
}

const CallButton: React.FC<CallButtonProps> = ({
  phoneNumber,
  label = 'Call Now',
  className = '',
}) => {
  const normalizedPhone = phoneNumber.replace(/[^+0-9]/g, '');
  return (
    <a
      href={`tel:${normalizedPhone}`}
      className={`call-button ${className}`}
      aria-label={`Call ${phoneNumber}`}
      style={styles.button}
    >
      <span style={styles.icon} aria-hidden="true">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.72 19.72 0 0 1-8.63-3.07 19.32 19.32 0 0 1-6-6A19.72 19.72 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span>{label}</span>
    </a>
  );
};

const styles: Record<string, React.CSSProperties> = {
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    padding: '0.9rem 1.3rem',
    minWidth: '170px',
    width: 'auto',
    maxWidth: '100%',
    backgroundColor: '#1E6BF6',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '999px',
    fontWeight: 600,
    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
    transition: 'transform 0.18s ease, box-shadow 0.18s ease',
    boxShadow: '0 10px 25px rgba(30, 107, 246, 0.18)',
    border: '1px solid transparent',
    whiteSpace: 'nowrap',
  },
  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.4em',
    height: '1.4em',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    color: '#ffffff',
  },
};

export default CallButton;
