import React from 'react';
import { GetStaticProps } from 'next';
import Post, { PostProps } from '../../components/Post';
import prisma from '../../lib/prisma';

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

const Blog: React.FC<Props> = (props) => {
  return (
    <div className="page">
      <h1>Public Feed</h1>
      <main>
        {props.feed.map((post) => (
          <div key={post.id} className="post">
            <Post post={post} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Blog;
