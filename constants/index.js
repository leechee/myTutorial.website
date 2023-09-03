export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/vs code.png',
    title: 'VS Code ',
  },
  {
    id: 'world-2',
    imgUrl: '/nodejs.png',
    title: 'Node.js',
  },
  {
    id: 'world-3',
    imgUrl: '/tailwind.png',
    title: 'Tailwind css',
  },
  {
    id: 'world-4',
    imgUrl: '/css inteli.png',
    title: 'Tailwind CSS IntelliSense',
  },
  {
    id: 'world-5',
    imgUrl: '/github.png',
    title: 'any starter_repo via GitHub',
  },
];

export const startingFeatures = [
  'First, import Framer Motion! Just add this line of code to the top of every page: \'import { motion } from \'framer-motion\';\' ',
  'Secondly, custom make your own animation methods. Using the picture on the left as reference, simply create methods by declaring different attributes of the animation you want! Edit the x and y directions, the type of animation (spin, fade in, fade out, etc.), opacity, transition, delay, and more! ',
  'Finally, to add these custom animations to your text and images, simply use a </motion.div> tag to encapsulate your chosen code with text or images. Then, call on the specific animation right before the desired area you want to animate by declaring variants = \'your animation\'.',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'Organize your website into sections',
    subtitle:
        'A majority of websites have required sections such as a header and footer. Once you decide what other pages your website should have, declare each page with a const value. Then, encapsulate these constants with data such as text, images, and color. Finally, export the constants so your work will be displayed on the localhost:3000.',
  },
  {
    imgUrl: '/headset.svg',
    title: 'JavaScript usefulness',
    subtitle:
        'Some pages are more complex than others, but overall they each follow a simple layout of: imports, declared const/borders/shapes/colors, and Framer Motion tags surrounding the content. JavaScript may seem intimindating at first, but it is much more straightforward than Java, especially at building websites.',
  },
];

export const insights = [
  {
    imgUrl: '/new terminal.png',
    title: 'Step 1: Install node.js into your VS Code repository',
    subtitle:
        'Open a new terminal in VS Code and run the command: \'npm install\'. Wait for the node.js to install and then run the command \'npm run dev\'. This will prompt your terminal to host a localhost:3000 that will be linked to your default browser.',
  },
  {
    imgUrl: '/terminal 2.png',
    title: 'Step 2: Get comfortable with your coding setup.',
    subtitle:
        'Once \'npm run dev\' hosts a localhost:3000, (Ctrl + click) the link prompted by the terminal. This will redirect you to your browser in a window with the url: localhost:3000. This is where you will be able to see your website being developed live. To make things easier, split screen your monitor so both VS Code and the localhost:3000 are visible. Additionally, localhost:3000 will only refresh your coding changes after your VS Code file is saved. Here is a tip: enable autosave so any changes to the code will be updated automatically without having to constantly press Ctrl+S. To do so, go to file -> check Auto Save.',
  },
  {
    imgUrl: '/terminal 3.png',
    title: 'Step 3: Get ready to code!',
    subtitle:
        'This tutorial is assuming you know the basics of JavaScript already. With this set up complete, you are now ready to code! Right now, depending on what starter file you chose from GitHub, there will be different sections of your website. Do not worry, this tutorial will teach you how to add animations to every page using Framer Motion, a simple yet powerful motion library for React!',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];
