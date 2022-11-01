import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework built for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
    date: '2022-11-01'
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework built for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
    date: '2022-11-01'
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework built for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
    date: '2022-11-01'
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework built for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
    date: '2022-11-01'
  }
];

const HomePage = () => {
  return (
    <Fragment>
      <Hero></Hero>
      <FeaturedPosts posts={DUMMY_POSTS}></FeaturedPosts>
    </Fragment>
  );
};

export default HomePage;
