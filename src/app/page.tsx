import Hero from "../components/Hero/Hero";
import ArticlesListContainer from "../components/ArticlesList/ArticlesListContainer";
import CardCarousel from "@/components/Carousel/CardCarousel";

export default function Home() {

  return (
    <div>
      <Hero />
      <ArticlesListContainer />
      <CardCarousel />
    </div>
  );
}
