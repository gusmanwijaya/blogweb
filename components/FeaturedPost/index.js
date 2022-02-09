import Link from "next/link";
import Image from "next/image";
import InfoPost from "../InfoPost";

export default function FeaturedPost() {
  return (
    <article>
      <div className="flex flex-wrap mx-6 lg:mx-24 lg:items-center items-start">
        <div className="px-4 w-full md:w-7/12 lg:w-8/12" data-aos="zoom-in">
          <Link href="/detail" passHref>
            <a type="button">
              <Image
                src="/featured-thumbnail.png"
                width={700}
                height={400}
                alt="Image Post"
                className="rounded-xl mb-4 md:mb-0"
              />
            </a>
          </Link>
        </div>
        <div className="w-full px-4 md:w-5/12 lg:w-4/12">
          <InfoPost
            category="UI DESIGN"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            authorAvatar="/author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden" />
    </article>
  );
}
