import { useEffect, useRef, useState } from "react";

export default function useCheckMultiline() {
  const [isMultiLine, setIsMultiLine] = useState(false);
  const paragraphRef = useRef(null);

  // Effect to make the feature responsive
  useEffect(() => {
    const checkMultiline = () => {
      if (paragraphRef.current) {
        const paragraph = paragraphRef.current;

        // Check if the element is truncated
        const isElementTruncated =
          paragraph.scrollHeight > paragraph.clientHeight ||
          paragraph.scrollWidth > paragraph.clientWidth;

        // Update state based on truncation check
        setIsMultiLine(isElementTruncated);
      }
    };

    // Run on mount
    checkMultiline();

    // Attach resize listener
    window.addEventListener("resize", checkMultiline);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", checkMultiline);
  }, []);

  return (
    { isMultiLine, paragraphRef }
  )
}
