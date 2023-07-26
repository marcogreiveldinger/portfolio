import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import HomeSection from "@/components/HomeSection";
import AboutMeSection from "@/components/AboutMe";
import ProjectsSection from "@/components/Projects";

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <>
      <div className="dark:bg-gray-900 flex-col">
        <div className="container mx-auto px-4">
          <HomeSection />
          <AboutMeSection />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
            <div className="w-full md:w-1/2 leading-loose">
              <div className="mx-auto max-w-xl items-center mb-8 flex justify-center">
                <ProjectsSection />
              </div>
            </div>
            <div className="w-full md:w-1/2 leading-loose">
              <div className="mx-auto max-w-xl py-8">
                <h1 className="mb-8 text-center text-3xl text-white font-bold ">
                  <Link href={"/blog"}>Blog section</Link>
                </h1>
                {posts.map((post, idx) => (
                  <PostCard key={idx} {...post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
