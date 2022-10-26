import User from '../components/user';

const UserList = ({ users }) => {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </>
  );
};

export default UserList;

export async function getStaticProps() {
  const data = await (
    await fetch('https://jsonplaceholder.typicode.com/users')
  ).json();

  return {
    props: {
      users: data,
    },
  };
}
