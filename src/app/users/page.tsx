import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Text from "@/components/Text";
import styles from '@/components/Text/Text.module.css'

async function getUsersData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const dataUsers = await res.json();

  return dataUsers;
} 

export default async function Users() {
  const dataUsers = await getUsersData();

  return (
    <Layout pageTitle="Users Page">
      <Text text="Users Page" />
      <div className="users-list flex flex-col text-center my-16">
        <h1 className={`text-3xl font-bold ${styles.container}`}>List of Users :</h1>
        <Card dataUsers={dataUsers}/>
      </div>
    </Layout>
  );
}
