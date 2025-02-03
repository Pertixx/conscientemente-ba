"use client";

import { useArticles } from "@/hooks/useArticles";
import ArticlesList from "./ArticlesList";
import CustomTab from "./CustomTab";
import { Entity, Filter } from "@/types";
import Pagination from "../Pagination/Pagination";
import LoadingIndicator from "../Loader/LoadingIndicator";
import EmptyList from "../ui/EmptyList";

export default function ArticlesListContainer() {
  const { articles, isLoading, error, hasMore, entity, filter, setEntity, setFilter, loadMore, isLoadingMore } = useArticles();

  const tabs = [
    { id: 'all', label: 'Todos' },
    { id: 'journal', label: 'Journal' },
    { id: 'vinculos', label: 'Vínculos' },
    { id: 'mindfulness', label: 'Mindfulness' },
    { id: 'psico-debate', label: 'Psico Debate' },
  ] as const;

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as Filter);
  }

  const handleEntityChange = (id: Entity) => {
    setEntity(id);
    setFilter('newest');
  }

  return (
    <div id="articles-list-container" className="w-full py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-3 md:gap-0 mb-12 px-[2%] md:px-[16%]"> 
        <div className="flex-wrap gap-4">
          {tabs.map((tab) => (
            <CustomTab 
              key={tab.id} 
              isActive={entity === tab.id} 
              onClick={() => handleEntityChange(tab.id)}
              text={tab.label}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-gray-500 font-semibold">
            Ordenar por:
          </p>
          <select 
            value={filter} 
            onChange={handleFilterChange} 
            className="block bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="newest">Más Reciente</option>
            <option value="oldest">Más Antiguo</option>
            <option value="mostPopular">Más Popular</option>
          </select>
        </div>
      </div>
      {isLoading ? (
        <LoadingIndicator />
      ) : !articles.length ? (
        <EmptyList text="¡Próximamente!" />
      ) : (
        <>
          <ArticlesList articles={articles} />
          <Pagination isLoading={isLoadingMore} loadMore={loadMore} hasMore={hasMore} />
        </>
      )}
    </div>
  )
}