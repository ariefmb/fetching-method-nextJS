import Layout from "@/components/Layout";
import Text from "@/components/Text";
import Image from "next/image";
import profileImg from "@/assets/profile.png";

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home Page">
        <div className="container flex flex-wrap flex-col items-center">
          <Text text="Welcome Ariefmb" />
          <Image
            src={profileImg}
            alt="profile image"
            priority={true}
          />
        </div>
      </Layout>
    </>
  );
}
