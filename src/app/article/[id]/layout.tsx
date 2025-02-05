/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from "next";
import { getArticleById } from "@/endpoints";

type Props = {
  params: {
    id: string;
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { id, slug } = params;
  
  try {
    const article = await getArticleById(id);

    if (!article) {
      return {
        title: 'Artículo no encontrado'
      }
    }

    return {
      title: article.title,
      description: article.lead,
      authors: [{ name: article.author.account_name }],
      openGraph: {
        title: article.title,
        description: article.lead,
        images: [{
          url: article.cover_image.webp,
          width: 1200,
          height: 630,
          alt: article.title
        }]
      },
      twitter: {
        card: 'summary_large_image',
        title: article.title,
        description: article.lead,
        images: [article.cover_image.webp],
      },
      alternates: {
        canonical: `/article/${id}/${slug}`
      },
      robots: {
        index: true,
        follow: true,
      }
    }
  } catch {
    return {
      title: 'Error cargando artículo',
      description: 'No se pudo cargar el artículo solicitado'
    }
  }
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="py-24">
      {children}
    </article>
  )
}