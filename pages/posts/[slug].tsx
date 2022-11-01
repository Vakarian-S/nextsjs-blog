import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import { GetStaticPropsContext } from "next";

const PostDetailPage = (props: any) => {
  const { post } = props;
  return (
    <PostContent post={post}/>
  );
};

export const getStaticProps = (context: GetStaticPropsContext) => {
  const { params } = context;
  const { slug = '' } = params || {};

  const postData = getPostData(Array.isArray(slug) ? slug[0] : slug);

  return {
    props: {
      post: postData
    },
    revalidate: 600
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map(filename => filename.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: 'blocking'
  };
};

export default PostDetailPage;
