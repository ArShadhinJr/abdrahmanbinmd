import myImage from '../../assets/squarePIC.jpg';

const About = () => {
  const resumeDownloadLink = 'google-drive-link';

  return (
    <section className="flex items-center justify-center py-16 container">
      <div className="w-1/2 flex items-center justify-center">
        <img
            src={myImage}
            alt="Abdur Rahman"
            className="rounded-full h-1/2 w-1/2 object-cover scale-125"
          />
      </div>

      <div className="w-1/2 px-8">
        <h2 className="text-4xl font-bold mb-4 text-primary">Abdur Rahman</h2>
        <p className="text-lg mb-4">
          I'm a React expert, creating top-notch websites. I make things work smoothly, look awesome, and run fast. I handle important stuff like managing information flawlessly. My websites are user-friendly and stunning!
        </p>
        <a
          href={resumeDownloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white hover:text-gray-100 font-bold py-2 px-4 rounded inline-block"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
