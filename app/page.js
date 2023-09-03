import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-gradient-to-r from-black to-gray-500 overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <Insights />
    <WhatsNew />
    <GetStarted />
    <Feedback />
    <World />
    <Footer />
  </div>
);

export default Page;
