import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import { Fragment } from "react";
import Head from "next/head";

const AllPostsPage = (props: any) => {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name={'description'}
          content={'A list of all programming-related tutorials and posts'}
        />
      </Head>
      <AllPosts posts={posts}/>
    </Fragment>

  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts
    }
  };
};

export default AllPostsPage;
