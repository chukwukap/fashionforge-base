const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">FashionForge</h3>
          <p>Bringing Fashion Creators Onchain</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Showcase
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Community
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Discord
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
          <p className="mb-4">Stay updated with our latest news and offers</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-r-full hover:bg-purple-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 FashionForge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
