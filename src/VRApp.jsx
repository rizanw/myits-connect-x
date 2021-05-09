import { h } from 'preact';
import { useState } from "preact/hooks";
import { Entity, Scene } from 'aframe-react';
import Navigation from './components/Navigation';

import sky from './assets/img/sky.jpg';
import rektorat from './assets/environtment/360-rektorat-pole.jpg';

export default function VRApp() {
  const [background, setBackground] = useState(rektorat);

  return (
    <Scene>
      <Entity
        src={background}
        primitive="a-sky"
        height="2048"
        width="2048"
        phi-start="-90"
      />
      <Navigation />
    </Scene>
  );
}
