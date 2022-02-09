import Link from "next/link";

export default function PostMetaTitle({ category, title, date, center }) {
  return (
    <>
      <div className="flex items-center text-white/60 space-x-4 mt-4 md:mt-0">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className={`text-2xl mt-4 ${center ? "text-center" : ""}`}>
        <Link href="/detail" passHref>
          <a type="button">{title}</a>
        </Link>
      </h2>
    </>
  );
}
