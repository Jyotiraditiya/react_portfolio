import React from "react";

const SkillList = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
          <p className="text-gray-400">{skill.level}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillList;