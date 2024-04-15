import Layout from "@/components/Layout";
import Text from "@/components/Text";
import textStyle from "@/components/Text/Text.module.css";
import cardStyle from "@/components/Card/Card.module.css";

async function getDataBlog() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const dataBlog = res.json();

  return dataBlog;
}

export default async function Blog() {
  const dataBlog = await getDataBlog();

  return (
    <Layout pageTitle="Blog Page">
      <Text text="Blog Page" />
      <div
        className={`wrapper mt-40 flex-wrap ${textStyle.container} ${cardStyle.wrapper}`}
      >
        {dataBlog.map((blog: any) => (
          <div className={cardStyle.card} key={blog.id}>
            <h3 className="font-bold text-xl">{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
