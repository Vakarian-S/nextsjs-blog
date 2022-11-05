import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import { GetStaticPropsContext } from "next";
import { Fragment } from "react";
import Head from "next/head";

const PostDetailPage = (props: any) => {
  const { post } = props;
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta
          name={'description'}
          content={props.post.excerpt}
        />
      </Head>
      <PostContent post={post}/>
    </Fragment>

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
