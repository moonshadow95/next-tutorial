import Link from 'next/link';
import UserList from './users';

export default function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <br />
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  );
}
