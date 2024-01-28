import myImage from '../../assets/squarePIC.jpg';

const About = () => {
  const resumeDownloadLink = 'https://drive.google.com/uc?export=download&id=1QR5NGs7OEzOlFZYV7Daty0CW3NDu2Tg_';

  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-16 container">
      <div className="md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
        <img
          src={myImage}
          alt="Abdur Rahman"
          className="rounded-full h-1/2 w-1/2 object-cover scale-125"
        />
      </div>

      <div className="md:w-1/2 px-8 md:text-start text-center">
        <h2 className="text-4xl font-bold  my-4 md:mt-0 text-primary text-center md:text-left">
          Abdur Rahman
        </h2>
        <p className="text-lg mb-4 text-center md:text-left">
          I&apos;m a React expert, creating top-notch websites. I make things work smoothly, look awesome,
          and run fast. I handle important stuff like managing information flawlessly. My websites
          are user-friendly and stunning!
        </p>
        <a
          href={resumeDownloadLink}
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white hover:text-gray-100 font-bold py-2 px-4 rounded inline-block mx-auto md:mx-0"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
