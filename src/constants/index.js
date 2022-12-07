import { facebook, instagram, twitter, google, linkedin, brenda_joyce, product_vector } from "../assets";

export const lists = [ 
  { id: 'home',
    title: 'Home'
  },
  { id: 'about',
     title: 'About'
  },
  { id: 'blog',
   title: 'Blog',
  },
  { id: 'contact',
   title: 'Contact'
  }
];

export const features = [
  {
    id: 'feature-1',
    title: 'Collaborating',
    content: 'Brainstorm with team members and colleagues to organise for your next project',
  },
  {
    id: 'feature-2',
    title: 'Timing',
    content: 'Set a stipulated time for your project completion and get informed when time is most up.',
  },
  {
    id: 'feature-3',
    title: 'Track',
    content: 'Track the progress of your project without having to break a sweat.',
  },
];

export const label = [
  {
    id: 'label-1',
    title: 'Members',
    content: 'Keep everyone accountable without having to ask who is doing that by adding members to task and cards',
  },
  {
    id: 'label-2',
    title: 'Checklists',
    contents: 'Your best tools to overpower overwhelming tasks. Break big task to a small ones, check things off the list and watch that status bar go to 100% complete.'
  },
];

export const feedbacks = [
  {
    id: 'feedback-1',
    feedback: 'Taski is an amazing tool to work collaboratively with my team members.',
    reviewer: 'Stewart Butterfield',
    image: brenda_joyce,
  },
  {
    id: 'feedback-2',
    feedback: 'Taski helps me in organizing my projects and remind me when is almost deadline.',
    reviewer: 'Brenda Joyce',
    image: brenda_joyce,
  },
  {
    id: 'feedback-3',
    feedback: 'Have being experience tremendious reduction in stress level since i started using Taski, so excited about that.',
    reviewer: 'Hulgate Fred',
    image: brenda_joyce,
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        name: "About us",
        link: "https://www.taski.com/about-us/",
      },
      {
        name: "Newspost",
        link: "https://www.taski.com/newspost/",
      },
      {
        name: "Blog",
        link: "https://www.taski.com/blog/",
      },
      {
        name: "Career",
        link: "https://www.taski.com/career/",
      },
    ],
  },
  {
    title: "Product",
    links: [
      {
        name: "Apps",
        link: "https://www.taski.com/apps/",
      },
      {
        name: "Features",
        link: "https://www.taski.com/features/",
      },
      {
        name: "Pricing",
        link: "https://www.taski.com/pricing/",
      },
      {
        name: "Integration",
        link: "https://www.taski.com/intregration/",
      },
    ],
  },
  {
    title: "Customer Services",
    links: [
      {
        name: "Newsletter",
        link: "https://www.taski.com/newsletter/",
      },
      {
        name: "Tutorials",
        link: "https://www.taski.com/tutorials/",
      },
      {
        name: "Usecases",
        link: "https://www.taski.com/usecases/",
      },
      {
        name: "Documentation",
        link: "https://www.taski.com/documentation/",
      },
    ],
  },
];

export const cards = [
  {
    plan: 'Basic',
    benefits: [ 'Unlimited Personal Boards, Lists, Members, Checklists', 'File attachments upto 15MB', 'Basic power ups' ],
  },
  {
    plan: 'Premium',
    benefits: [ 'Everything in the basic plan', 'Premium Power-Ups including integration with Google drive, Slack, Dropbox', 'File attachments upto 300MB', 'Observer' ],
  },
  {
    plan: 'Standard',
    benefits: [ 'Everything in the basic plan', 'File attachments upto 250MB', 'Priority supports', 'Custom backgrounds and stickers' ],
  },
];