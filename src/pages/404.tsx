import { useState } from 'react';
import { Starfield } from '../components/common/StarField';
import { ErrorModal } from '../components/common/404-Modal';

export default function NotFound() {
  const [warpSpeed, setWarpSpeed] = useState(false);

  return (
    <main>
      <Starfield warpSpeed={warpSpeed}>
        <ErrorModal
          warpSpeed={warpSpeed}
          toggle={() => setWarpSpeed(!warpSpeed)}
        />
      </Starfield>
    </main>
  );
}
