import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props: any) => {
  const { posts } = props;
  return (
    <Fragment>
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
