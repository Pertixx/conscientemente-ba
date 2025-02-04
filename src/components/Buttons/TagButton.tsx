import { Tag } from "@/types";
import { UpperCaseText } from "@/utils/upperCaseText";
import Link from "next/link";

export default function TagButton({ tag }: { tag: Tag }) {
  const tagName = tag.name.replace(/\s+/g, '-').toLocaleLowerCase();

  return (
    <Link href={`/tag/${tagName}`} className="mb-2">
      <span 
        className="text-sm text-black bg-white border border-gray-200 rounded-full px-3 py-2 hover:bg-mer 
        hover:text-white hover:font-bold transition-all duration:300"
      >
        {UpperCaseText(tag.name)} {tag.taggings_count}
      </span>
    </Link>
  );
}
