import React from "react";

interface Prop {
  text: string;
}

const SubHeadGreen: React.FC<Prop> = ({ text }) => {
  const textArr = text.split(" ");
  const lastText = textArr[textArr.length - 1];
  textArr.pop();
  return (
    <p className="text-4xl mx-2 font-extrabold text-slate-600 mb-6  ">
      {textArr.join(" ")} <span className="text-lime-700">{lastText}</span>
    </p>
  );
};

export default SubHeadGreen;
