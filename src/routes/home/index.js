// @ts-ignore
import { h } from "preact";
// @ts-ignore
import { Entity, Scene } from "aframe-react";

// @ts-ignore
import floor from "../../assets/floor.jpg";
// @ts-ignore
import sky from "../../assets/sky.jpg";

const Home = () => {
  return (
    <Scene>
      <Entity
        src={sky}
        primitive="a-sky"
        height="2048"
        radius="30"
        theta-length="90"
        width="2048"
      />
      <Entity
        src={floor}
        primitive="a-plane"
        rotation="-90 0 0"
        height="100"
        width="100"
      />
      <Entity particle-system={{ preset: "snow", particleCount: 2000 }} />
      <Entity
        text={{ value: "Welcome to", align: "center" }}
        position={{ x: 0, y: 1.9, z: -1 }}
      />
      <Entity
        text={{ value: "myITS Connect X", align: "center" }}
        position={{ x: 0, y: 1.8, z: -1 }}
      />
    </Scene>
  );
};

export default Home;
