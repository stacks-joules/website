import React from 'react';

interface BufferProps {
  height: string;
}

export const Buffer: React.FC<BufferProps> = ({ height }) => {
  return <div style={{ height: height }} />;
};
