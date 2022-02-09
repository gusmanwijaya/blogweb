import TitleHeader from "../components/TitleHeader";
import Layout from "../components/Layout";
import FeaturedPost from "../components/FeaturedPost";
import PostJson from "../data/posts.json";
import CardPost from "../components/CardPost";

export default function Home() {
  const getDataPost = PostJson;
  return (
    <>
      <TitleHeader title="Home" />
      <Layout>
        <FeaturedPost />
        <div className="flex mx-6 lg:mx-24 flex-wrap mt-6 lg:mt-7">
          {getDataPost.map((value, index) => (
            <div key={index} className="w-full md:w-4/12 px-4 py-6">
              <CardPost {...value} />
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
