import Layout from "@/components/Layout";
import Text from "@/components/Text";

const UsersId = ({ params }: { params: { id: string } }) => {
  return (
    <Layout pageTitle="Users Page">
      <Text text={`Hai users ${params.id}`} />
    </Layout>
  );
};

export default UsersId;
