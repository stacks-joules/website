import React from 'react';

interface LogoProps {
  src: string;
  className: string;
}

const Logo: React.FC<LogoProps> = ({ src, className }) => {
  return (
    <img
      loading="lazy"
      src={src}
      className={className}
      alt="Partner company logo"
    />
  );
};

export default Logo;
