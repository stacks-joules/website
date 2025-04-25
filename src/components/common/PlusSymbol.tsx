import { useState, useRef, useEffect } from 'react';

export const PlusSymbol: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const verticalLineRef = useRef(null);

  // Handle the toggle with alternating rotations
  useEffect(() => {
    if (!verticalLineRef.current) return;

    if (isOpen) {
      // Rotate to 90 degrees when opening
      verticalLineRef.current.style.transform = 'rotate(90deg)';
    } else {
      verticalLineRef.current.style.transform = 'rotate(0deg)';
    }
  }, [isOpen]);

  // CSS styles directly in the component
  const styles = {
    container: {},
    button: {
      position: 'relative',
      width: '40px',
      height: '40px',
      backgroundColor: 'transparent',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
    },
    plusSymbol: {
      position: 'relative',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    horizontalLine: {
      position: 'absolute',
      width: '20px',
      height: '2px',
      backgroundColor: '#151515',
      borderRadius: '1px',
    },
    verticalLine: {
      position: 'absolute',
      width: '2px',
      height: '20px',
      backgroundColor: '#151515',
      borderRadius: '1px',
      transition: 'transform 0.3s ease-in-out',
    },
    stateIndicator: {
      color: '#151515',
    },
  };

  return (
    <div style={styles.container}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          onClick();
        }}
        style={styles.button}
        aria-label={isOpen ? 'Collapse' : 'Expand'}
      >
        <div style={styles.plusSymbol}>
          <span style={styles.horizontalLine}></span>
          <span ref={verticalLineRef} style={styles.verticalLine}></span>
        </div>
      </button>
    </div>
  );
};
