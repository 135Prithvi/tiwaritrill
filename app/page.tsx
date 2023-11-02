import Image from 'next/image';
import CardC from './_components/Card';

export default function Home() {
  return (
    <main className='min-h-screen z-0'>
      <div className="bg-gray-100">
        {/* Navigation bar can go here */}

        {/* Hero Section */}
        <section style={{ backgroundPosition: '60% 22%' }} className="hero bg-[url('/images/sleeker.jpg')] text-white py-14 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Web Developer Portfolio</h1>
            <p className="text-lg">Showcasing My Work</p>
          </div>
        </section>
      </div>

      {/* Portfolio Projects */}
      <section className="container mx-auto my-10">
        <h2 className="text-center md:text-start text-2xl font-semibold mb-4">Portfolio Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 group ease-in-out transition-all duration-500">
          {/* Display your portfolio projects using CardC */}
          <CardC url="https://instagram-lite-mobile-india-public-version.vercel.app/t" title='Insta Clone Next.js (UI only)' imageSrc='https://pbs.twimg.com/media/F6hsUnVWsAAt_Ct?format=jpg' />
          <CardC url="https://my-ai-supabase-hf.vercel.app/chat" title='ChatBot with Palm 2 Model API' imageSrc='/images/chatbot.png' />
          <CardC url="https://next-upgrade-135prithvi.vercel.app/" title='Blog using Next.js & Sanity CMS' imageSrc='/images/blog.png' />
        </div>
      </section>

      {/* Other Sections (About, Testimonials, Contact, Blog) can be added similarly with appropriate styling and content */}
    </main>
  );
}
