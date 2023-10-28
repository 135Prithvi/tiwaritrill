
const Footer = () => {
  return (
    <footer className=" py-6">
      <div className="grid grid-cols-1 w-full p-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
            <h2 className="text-lg font-semibold mb-2">Links</h2>
            <ul className="flex flex-col lg:flex-row gap-4">
              <li><a href="/">Home</a></li>
              <li><a href="/">Portfolio</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
            <h2 className="text-lg font-semibold mb-2">Social Media</h2>
            <ul className="flex flex-col lg:flex-row gap-4">
              <li><a href="https://twitter.com/tiwaritrill" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/dickinson-tiwari-0b0a82294/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/135Prithvi" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4">
            <h2 className="text-lg font-semibold mb-2">Contact</h2>
            <p className="text-sm">mydogiscereberus@gmail.com</p>
            
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
