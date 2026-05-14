// This is file with demos of your component
// Each export is one usecase for your component

import { CursorDitherTrail } from "./cursor-dither-trail";

export default function DemoTail() {
  return (
    <CursorDitherTrail
      className="w-screen h-screen bg-black"
      trailColor="#D0FBB6"
      dotSize={6}
      fadeDuration={1000}
    />
  );
}
