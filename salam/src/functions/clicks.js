import { useEffect } from "react";

export default function useClickOutSide(ref, cb) {
  useEffect(() => {
    const click = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return false;
      }
      cb();
    };

    document.addEventListener("mousedown", click);
    document.addEventListener("touchstart", click);

    return () => {
      document.removeEventListener("mousedown", click);
      document.removeEventListener("touchstart", click);
    };
  }, [ref, cb]);
}
