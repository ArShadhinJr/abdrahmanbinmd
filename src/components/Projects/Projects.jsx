import React from 'react';

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ project }) => {
  // eslint-disable-next-line react/prop-types
  const { image, projectName, details, technology, githubLink, liveSiteLink } = project;

  return (
    <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg mb-4">
      {/* Image Section */}
      <div className="mb-4">
        <img src={image} alt={projectName} className="w-full h-40 object-cover rounded-md" />
      </div>

      {/* Project Details Section */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">{projectName}</h3>
        <p className="text-gray-600 mb-2">{details}</p>
        <p className="text-gray-600"><span className="font-bold text-gray-900">Tech: </span> {technology}</p>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-between gap-x-2">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 w-1/2 text-center hover:text-gray-100  text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          GitHub
        </a>
        <a
          href={liveSiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 w-1/2 text-center hover:text-gray-100 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Live Site
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  // Sample project data (replace this with your actual data)
  const projectData = [
    {
      image: 'https://i.ibb.co/Qf0LRb5/kothabarta.png',
      projectName: 'Kothabarta',
      details: 'Create account, log in, change profile photo, send friend requests, view, accept, block. Responsive design. Messages, groups, Firebase for data.',
      technology: 'React, Tailwind, Firebase',
      githubLink: 'https://github.com/ArShadhinJr/kothabarta',
      liveSiteLink: 'https://kothabarta-ar.vercel.app/',
    },
    {
      image: 'https://i.ibb.co/hBXFCc7/Finsweet.png',
      projectName: 'Finsweet',
      details: 'A 12-page Bootstrap-powered multi-page website with responsive design, catering to various devices for optimal user experience.',
      technology: 'Bootstrap 5, Responsive design',
      githubLink: 'https://github.com/ArShadhinJr/finsweet',
      liveSiteLink: 'https://finsweet-ar.netlify.app/',
    },
    {
      image: 'https://i.ibb.co/jrp3Tbc/Backgram.png',
      projectName: 'Backgram',
      details: 'Users sign in with Google, upload profile/cover photos, and create posts on this platform, fostering a dynamic user experience.',
      technology: 'React js, Firebase, Tailwind',
      githubLink: 'https://github.com/example/project3',
      liveSiteLink: 'https://example-project3.com',
    },
  ];

  return (
    <div className="container my-8">
      <h2 className="text-5xl font-bold mb-4 text-center text-primary">My Projects</h2>
      <div className="grid grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
