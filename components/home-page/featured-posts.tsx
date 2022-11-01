import classes from './featured-posts.module.scss';
import PostsGrid from "../posts/posts-grid";

const FeaturedPosts = (props: any) => {
  const { posts } = props;
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  );
};

export default FeaturedPosts;
