import Layout from "@/components/Layout";
import Text from "@/components/Text";
import Image from "next/image";
import profileImg from "@/assets/profile.png";

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home Page">
        <div className="flex flex-wrap flex-col items-center">
          <Text text="Welcome Ariefmb" />
          <Image
            src={profileImg}
            alt="profile image"
            priority={true}
            className="duration-200 ease-in-out hover:drop-shadow-[2px_5px_10px_rgb(77,77,77)]"
          />
        </div>
      </Layout>
    </>
  );
}
