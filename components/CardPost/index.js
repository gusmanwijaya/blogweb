import Link from "next/link";
import Image from "next/image";
import InfoPost from "../InfoPost";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article data-aos="fade-up">
      <Link href="/detail" passHref>
        <a type="button" className="mb-0 md:mb-4">
          <Image
            src={thumbnail}
            width={500}
            height={300}
            alt="Card Post"
            className="rounded"
          />
        </a>
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}
