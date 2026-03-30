import React, { useState } from 'react';
import { Starfield } from './StarField';
import { ErrorModal } from './404-modal';

export const NotFoundIsland: React.FC = () => {
  const [warpSpeed, setWarpSpeed] = useState(false);

  return (
    <Starfield warpSpeed={warpSpeed}>
      <ErrorModal
        warpSpeed={warpSpeed}
        toggle={() => setWarpSpeed(!warpSpeed)}
      />
    </Starfield>
  );
};
