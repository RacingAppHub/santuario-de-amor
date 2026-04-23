import { getAllPostIds, getPostData } from '../../../lib/posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Generate metadata dynamically
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const postData = await getPostData(params.id);
    return {
      title: postData.title,
      description: `Lee el artículo completo: ${postData.title} en el Diario Espiritual de Santuario de Amor.`
    };
  } catch (error) {
    return {
      title: 'Artículo no encontrado',
      description: 'Este artículo no existe o ha sido movido.'
    }
  }
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function PostPage({ params }: { params: { id: string } }) {
  try {
    const postData = await getPostData(params.id);

    return (
      <div className="min-h-screen text-gray-200 pt-24 md:pt-32 bg-gray-900/50">
        <main className="container mx-auto px-6 pb-20">
          <article className="max-w-2xl mx-auto">
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold text-pink-300 mb-4 [text-shadow:0_2px_5px_rgba(236,72,153,0.7)]">
                {postData.title}
              </h1>
              <p className="text-md text-gray-400">
                Publicado el {new Date(postData.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </header>

            <div
              className="prose prose-invert prose-lg max-w-none mx-auto 
                         prose-headings:text-pink-400 prose-a:text-pink-400 prose-a:no-underline hover:prose-a:underline 
                         prose-strong:text-white prose-blockquote:border-l-pink-400 prose-blockquote:text-gray-300"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />

          </article>
        </main>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
