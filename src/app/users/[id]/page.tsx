import Layout from "@/components/Layout";
import textStyle from "@/components/Text/Text.module.css"
import cardStyle from "@/components/Card/Card.module.css";

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
      <div className={`${textStyle.container} w-full h-80 flex justify-center items-center`}>
        <div
          className={`flex flex-col justify-center text-center ${cardStyle.card} cursor-default text-xl`}
        >
          <p className="font-bold">{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      </div>
    </Layout>
  );
}
