import { RelatedArticle } from "@/types";
import { FormatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";


export default function RelatedArticleCard({ article }: { article: RelatedArticle }) {

  return (
    <Link href={`/article/${article.id}/${article.slug}`}>
      <div className="flex flex-col gap-2 hover:text-blue-500 transition-all">
        <Image
          src={article.cover_image.webp}
          alt={article.title}
          className="rounded-lg w-full h-[200px] object-cover"
          width={200}
          height={200}
        />
        <p className="text-gray-600 text-sm">{FormatDate(article.publication_date)}</p>
        <h3 className="text-xl font-bold mb-2">{article.title}</h3>
      </div>
    </Link>
  );
}