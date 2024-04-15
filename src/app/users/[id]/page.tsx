import Layout from "@/components/Layout";

interface UserDetailProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const dataUsers = await res.json();

  return dataUsers.map((user: any) => ({ id: `${user.id}` }));
}

async function getUsersData(params: UserDetailProps) {
  const id: number = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return user;
}

export default async function UsersDetail({
  params,
}: {
  params: UserDetailProps;
}) {
  const user = await getUsersData(params);

  return (
    <Layout pageTitle="Users Page">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  );
}
