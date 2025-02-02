import { Canvas } from "@react-three/fiber";
import Experience from "../Experience/Experience";
import { Suspense } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function Landing() {
  return (
    <>
      <Canvas id="landingExperience">
        <Suspense fallback={<LoadingScreen />}>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}
