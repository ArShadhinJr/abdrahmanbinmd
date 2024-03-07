import React from 'react';

const Skills = () => {
  // Define skills with corresponding percentages
  const skills = [
    { name: 'HTML5', percentage: 90 },
    { name: 'CSS3', percentage: 85 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'TailwindCSS', percentage: 85 },
    { name: 'Bootstrap', percentage: 80 },
    { name: 'React.js', percentage: 85 },
    { name: 'Firebase', percentage: 70 },
    { name: 'Node.js', percentage: 70 },
    { name: 'Express.js', percentage: 75 },
    { name: 'MongoDB', percentage: 70 },
  ];

  return (
    <div className="container my-8">
      <h2 className="text-5xl font-bold mb-4 text-center text-primary">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-primary p-4 rounded-md">
            <div className="text-center mb-2 font-black text-white">{skill.name} - {skill.percentage}%</div>
            <div className="relative h-4 bg-gray-700 rounded-md">
              <div
                className="absolute top-0 left-0 h-full bg-yellow-500 rounded-md"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
