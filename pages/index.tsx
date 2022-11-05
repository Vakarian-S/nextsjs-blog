import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

const HomePage = (props: any) => {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>Sebastian&apos; NextJS Blog</title>
        <meta
          name={'description'}
          content={'I post about programming and Web development'}
        />
      </Head>
      <Hero></Hero>
      <FeaturedPosts posts={posts}></FeaturedPosts>
    </Fragment>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  
  return {
    props: {
      posts: featuredPosts
    }
  };
};

export default HomePage;
