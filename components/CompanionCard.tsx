"use client";
import { addBookmark, removeBookmark } from "@/lib/actions/companions.actions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
  bookmarked,
}: CompanionCardProps) => {
  const pathname = usePathname();

  const handleBookmark = async () => {
    if (bookmarked) {
      await removeBookmark(id, pathname);
    } else {
      await addBookmark(id, pathname);
    }
  };

  return (
    <article
      className="flex flex-col rounded-4xl border border-black p-4 gap-5 w-full min-lg:max-w-[410px] justify-between"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between items-center">
        <div className="bg-black text-white rounded-4xl text-sm px-2 py-1 capitalize">
          {subject}
        </div>
        <button
          className="px-2 bg-black rounded-4xl flex items-center h-full aspect-square cursor-pointer"
          onClick={handleBookmark}
          type="button"
          title="Bookmark Button"
        >
          <Image
            src={
              bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
            }
            alt="bookmark"
            width={12.5}
            height={15}
          />
        </button>
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <p className="text-sm">{duration} minutes</p>
      </div>
      <Link
        className="w-full bg-primary text-white rounded-xl cursor-pointer px-4 py-2 flex items-center gap-2 justify-center"
        href={`/companions/${id}`}
      >
        Launch Lesson
      </Link>
    </article>
  );
};

export default CompanionCard;
