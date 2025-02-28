import { useEffect, useState } from "react";

export const LoadingScreen = ({ onCompleteLoad }) => {
  const [text, setText] = useState("");
  const fullText = "<Welcome to my Portfolio/>";

  useEffect(() => {
    let index = 0;

    // interval to show the full text letter by letter
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onCompleteLoad();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onCompleteLoad]);

  return (
    <div className="fixed inset-0 z-50 bg-[#1f1a24] text-gray-100 flex flex-col items-center justify-center">
      <div
        style={{ marginBottom: "15px" }}
        className="text-4xl mb-4 font-mono font-bold"
      >
        {text} <span className="animate-blink ml-1">|</span>
      </div>

      <div className=" w-[200px] h-[5px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#382d86] shadow-[0_0_15px_#0c2855] animate-loading-bar"></div>
      </div>
    </div>
  );
};
