// Import React and useState, useEffect hooks
"use client"
import React, { useState, useEffect } from "react";

// Define a component that takes the text as a prop
function TextWithAnimation({ text }: { text:any}) {
  // Use a state variable to store the animation class
  const [animationClass, setAnimationClass] = useState("");
  const [animationClass2, setAnimationClass2] = useState("");
  const [isLonger, setIsLonger] = useState(false);

  // Use an effect hook to update the animation class based on the text length
  useEffect(() => {
    // Check the length of the text
    if (text.length > 30) {
      // Set the animation class to scroll-rtl
      setAnimationClass("marqueeStyle");
      setAnimationClass2("marqueeStyle2")
      setIsLonger(true)
    } else {
      // Set the animation class to empty
      setAnimationClass("noSpace");
      setAnimationClass2("noSpace")
      setIsLonger(false)
    }
    
  }, [text]); // Run the effect whenever the text prop changes
  // Return the JSX element with the text and the animation class
  return (
      //   <div className="relative moving-text-button">
      //   <div className={animationClass}>{text}</div>
      // </div>

      <div id='rssBlock'>
   <p className="cnnContents">
       <span className={animationClass}>&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        {isLonger && <span className={animationClass2}>&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;</span>}
      </p>
      </div>
  )
}

// Export the component
export default TextWithAnimation;