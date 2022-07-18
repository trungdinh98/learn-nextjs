import * as React from 'react';
import { useRouter } from 'next/router';

export interface PostDetailPageProps {}

export default function PostDetailPage(props: PostDetailPageProps) {
  const router = useRouter();
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>This post's ID is {JSON.stringify(router.query)}</p>
    </div>
  );
}