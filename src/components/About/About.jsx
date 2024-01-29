import myImage from '../../assets/squarePIC.jpg';
import { useTypewriter , Cursor } from 'react-simple-typewriter'

const About = () => {
  const resumeDownloadLink = 'https://drive.google.com/uc?export=download&id=1QR5NGs7OEzOlFZYV7Daty0CW3NDu2Tg_';

    const [text] = useTypewriter({
    words: ['Web Developer', 'Web Designer', 'Frontend Developer', 'React Developer', 'Full Stack Developer'],
    loop: 0
  })

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
        <h3 className="text-2xl mb-4 text-center md:text-left">I&apos;m a <span className='font-black text-yellow-500'>{text}</span> <span><Cursor /></span> </h3>
        <p className="text-lg mb-4 text-center md:text-left">
          I&apos;m a React expert, creating top-notch websites. I make things work smoothly, look awesome,
          and run fast. I handle important stuff like managing information flawlessly. My websites
          are user-friendly and stunning!
        </p>
        <a
          href={resumeDownloadLink}
          rel="noopener noreferrer"
          className="bg-primary hover:bg-yellow-600 text-yellow-500 hover:text-yellow-50 font-bold py-2 px-4 rounded inline-block mx-auto md:mx-0"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
