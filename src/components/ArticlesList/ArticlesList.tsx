import ArticleCard from "./ArticleCard";
import { Article } from "@/types";


export default function ArticlesList({ articles }: { articles: Article[] }) {
  
  return (
    <div className="flex flex-col mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mx-auto">
        {
          articles.map((article, index) => (
            <ArticleCard article={article} key={index} />
          ))
        }
      </div>
    </div>
  );
}