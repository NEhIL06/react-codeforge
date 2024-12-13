import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export const useMouseTracker = () => {
  const lastX = useRef(0);
  const lastY = useRef(0);
  const rapidMovementStartTime = useRef<number | null>(null);
  const staticMovementStartTime = useRef<number | null>(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const MOVEMENT_THRESHOLD = 5;
  const RAPID_MOVEMENT_DURATION = 2000;
  const STATIC_MOVEMENT_DURATION = 1500;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setCoordinates({ x, y });

      // Check for rapid movement
      if (
        Math.abs(x - lastX.current) > MOVEMENT_THRESHOLD ||
        Math.abs(y - lastY.current) > MOVEMENT_THRESHOLD
      ) {
        if (!rapidMovementStartTime.current) {
          rapidMovementStartTime.current = Date.now();
        }

        if (
          Date.now() - (rapidMovementStartTime.current || 0) >
          RAPID_MOVEMENT_DURATION
        ) {
          toast.warning("Calm down! You're moving too fast.");
          rapidMovementStartTime.current = null;
        }

        staticMovementStartTime.current = null;
      } else {
        if (!staticMovementStartTime.current) {
          staticMovementStartTime.current = Date.now();
        }

        if (
          Date.now() - (staticMovementStartTime.current || 0) >
          STATIC_MOVEMENT_DURATION
        ) {
          toast.warning("You've been static for a while! Please move your mouse.");
          staticMovementStartTime.current = null;
        }
      }

      lastX.current = x;
      lastY.current = y;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return coordinates;
};