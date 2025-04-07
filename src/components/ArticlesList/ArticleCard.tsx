import { Article } from "@/types";
import Image from "next/image";
import { FormatDate } from "@/utils/formatDate";
import Link from "next/link";
import { UpperCaseText } from "@/utils/upperCaseText";

export default function ArticleCard({ article }: { article: Article }) {

  return (
    <Link
      href={`/article/${article.id}/${article.slug}`}
      passHref
    >
      <div className="flex flex-col relative w-[370px] h-[450px] gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg p-2 rounded-lg">
        <Image 
          src={article.cover_image.webp}
          className="object-cover w-full h-[250px] rounded-lg"
          alt={article.title}
          width={400}
          height={200}
        />
        <div className="absolute top-3 left-3 bg-white/60 p-2 rounded-full">
            <p className="text-black font-medium">
              {UpperCaseText(article.entity_name)}
            </p>
        </div>
        <div className="flex text-gray-400 font-medium gap-2">
          <p>
            {FormatDate(article.publication_date)}
          </p>
          <span>&bull;</span>
          <p>
            {article.unique_views} vistas
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl">
            {article.title}
          </h1>
          <p className="text-gray-500 line-clamp-2 text-sm">
            {article.lead}
          </p>
        </div>
        <div className="hidden items-center gap-2">
          <Image 
            src={article.author?.profile_image}
            className="object-cover w-10 h-10 rounded-full"
            alt={article.author.account_name}
            width={40}
            height={40}
          />
          <p className="font-medium text-gray-500">
            {article.author.account_name}
          </p>
        </div>
      </div>
    </Link>
  )
}