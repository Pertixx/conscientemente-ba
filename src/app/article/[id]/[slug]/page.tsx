"use client";

import { useArticle } from "@/hooks/useArticle";
import { FormatDate } from "@/utils/formatDate";
import Image from "next/image";
import { useParams } from "next/navigation"
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import RelatedArticlesList from "@/components/ArticlePage/RelatedArticlesList";
import { twMerge } from "tailwind-merge";
import SharingList from "@/components/ArticlePage/SharingList";
import TagsList from "@/components/ArticlePage/TagsList";
import Divider from "@/components/Divider/Divider";
import LoadingIndicator from "@/components/Loader/LoadingIndicator";
import { useEffect } from "react";


export default function ArticlePage() {
  const { id } = useParams();
  const { article, isLoading, error } = useArticle(id as string);

  useEffect(() => {
    if (article?.id) {
      const script = document.createElement('script');
      const data = { id: article.id };
      script.src = `https://ticks.contentor.io/?d=${encodeURIComponent(JSON.stringify(data))}`;
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [article?.id])

  if (isLoading) return <LoadingIndicator />
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!article) return <div className="text-center py-10">Artículo no encontrado</div>;

  const getGridStyles = () => {
    if (article?.relateds.length > 0) {
      return "md:col-span-3";
    } else {
      return "md:col-span-4";
    }
  }

  const gridStyles = getGridStyles();

  return (
    <div className="px-4 flex flex-col gap-10">
      <Image 
        src={article?.cover_image.webp}
        className="w-full h-[450px] object-cover rounded-lg"
        alt={article?.title}
        width={1200}
        height={450}
      />
      <div className="max-w-7xl mx-auto flex flex-col gap-4 w-full">
        <h1 className="text-5xl font-bold">
          {article?.title}
        </h1>
        <div className="flex gap-8 flex-col md:flex-row justify-between">
          <div className="flex items-center gap-4">
            <Image 
              src={article?.author?.profile_image}
              className="w-12 h-12 rounded-full"
              alt={article?.author.account_name}
              width={48}
              height={48}
            />
            <div className="flex items-start md:items-center gap-0 md:gap-8 flex-col md:flex-row">
              <div className="flex items-center gap-2">
                <p className="font-medium hidden">{article?.author.first_name} {article?.author.last_name}</p>
                <span className="text-gray-600 text-xl hidden">&bull;</span>
                <p className="font-medium">{FormatDate(article?.publication_date)}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-medium">{article.entity_name?.charAt(0).toUpperCase() + article.entity_name?.slice(1).toLowerCase()}</p>
                <span className="text-gray-600 text-xl">&bull;</span>
                <p className="font-medium">{article?.unique_views} Vistas</p>
              </div>
            </div>
          </div>
          <SharingList />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className={twMerge(gridStyles, "flex flex-col gap-6")}>
            {/* Body */}
            <Markdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                img: (props ) => (
                  <Image 
                    {...props} 
                    src={props.src || "/images/stock-photo-1.jpg"}
                    className="w-full h-auto object-cover rounded-lg"
                    width={1200}
                    height={600}
                    alt="Article Image"
                  />
                ),
                a: (props) => (
                  <a {...props} className="text-mer hover:font-bold hover:text-mer2 transition-all" />
                ),
                h1: (props) => <h1 {...props} className="text-5xl font-bold" />,
                h2: (props) => <h2 {...props} className="text-4xl font-bold" />,
                h3: (props) => <h3 {...props} className="text-3xl font-bold" />,
                h4: (props) => <h4 {...props} className="text-2xl font-bold" />,
                h5: (props) => <h5 {...props} className="text-2xl font-bold" />,
                h6: (props) => <h6 {...props} className="text-xl font-bold" />,
                ul: (props) => <ul {...props} className="list-disc pl-4" />,
                ol: (props) => <ol {...props} className="list-decimal pl-4" />,
              }}
            >
              {article?.body}
            </Markdown>
          </div>
          {article?.relateds.length > 0 && (
            <div className="md:col-span-1">
              <RelatedArticlesList articles={article?.relateds} />
            </div>
          )}
        </div>

        <SharingList />
        <Divider />
        <TagsList tags={article?.tags} />
      </div>
    </div>
  )
}