import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diario Espiritual',
  description: 'Un espacio de reflexión y guía sobre sanación energética, tarot, amor propio y abundancia. Encuentra las respuestas que tu alma busca en el Diario Espiritual de Santuario de Amor.',
};

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen text-gray-200 pt-24 md:pt-32 bg-gray-900/50">
      <main className="container mx-auto px-6 pb-20">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-pink-300 mb-4 [text-shadow:0_2px_5px_rgba(236,72,153,0.7)]">
            Diario Espiritual
          </h1>
          <p className="text-lg md:text-xl text-gray-300 [text-shadow:0_2px_4px_rgba(0,0,0,0.8)] max-w-2xl mx-auto">
            Un refugio de sabiduría y luz para acompañarte en tu viaje de autodescubrimiento y sanación.
          </p>
        </header>

        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          {allPostsData.map(({ id, date, title }) => (
            <article key={id} className="bg-gray-800/50 border border-white/10 rounded-xl p-6 hover:border-pink-400/50 transition-colors duration-300">
              <Link href={`/blog/${id}`} className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-pink-400 hover:text-pink-300 transition-colors">
                  {title}
                </h2>
                <p className="text-sm text-gray-400">
                  {new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
