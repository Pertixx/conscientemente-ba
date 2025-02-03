import { RelatedArticle } from "@/types";
import RelatedArticleCard from "./RelatedArticleCard";


export default function RelatedArticlesList({ articles }: { articles: RelatedArticle[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-4">Artículos Relacionados</h2>
      <div className="flex flex-col gap-8">
        {
          articles.map((article, index) => (
            <RelatedArticleCard article={article} key={index} />
          ))
        }
      </div>
    </div>
  );
}