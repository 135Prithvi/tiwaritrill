import Image from 'next/image';
import ManDoll from "./_components/Modal";
export default function Home() {
  return (
    <main className='min-h-screen z-0'>
      <div className="bg-gray-100">
        {/* Navigation bar can go here */}

        {/* Hero Section */}
        <section style={{ backgroundPosition: '60% 22%' }} className="hero bg-[url('/images/bg.jpg')] sm:dark:bg-[url('/images/sleeker.webp')] sm:dark:text-white py-14 md:py-28 bg-no-repeat bg-cover">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Web Developer Portfolio</h1>
            <p className="text-xl">Showcasing My Work</p>
          </div>
        </section>
      </div>

      {/* Portfolio Projects */}
      <section className=" mx-5 sm:mx-9 my-10">
                <h2 className="text-center md:text-start text-2xl font-semibold mb-4">Portfolio Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 group ease-in-out transition-all duration-500">
                    <ManDoll
                        url="https://dicord-135prithvi.vercel.app/"
                        title="Discord Clone Using Web3"
                        description="Discord Clone Using Web3 is a web development project that replicates the user interface and functionality of Discord using Web3 technologies."
                        gurl=""
                        imageSrc="/images/dicord.webp"
                    />
                    <ManDoll
                        url="https://instagram-lite-mobile-india-public-version.vercel.app/t"
                        title="Insta Clone Next.js (UI only)"
                        description="Insta Clone Next.js (UI only) is a web development project that replicates the user interface of Instagram using the Next.js framework. It focuses solely on creating a visually similar frontend experience without backend functionality."
                        gurl=""
                        imageSrc="https://pbs.twimg.com/media/F6hsUnVWsAAt_Ct?format=jpg"
                    />
                    <ManDoll
                        url="https://next-upgrade-135prithvi.vercel.app/"
                        title="Blog using Next.js & Sanity CMS"
                        description="Blog using Next.js & Sanity CMS is a web development project that combines Next.js and Sanity CMS to create a blog website."
                        imageSrc="/images/blog.png"
                        gurl=""
                    />
                    <ManDoll
                        url="https://my-ai-supabase-hf.vercel.app/chat"
                        title="ChatBot with Palm 2 Model API"
                        description="ChatBot with Palm 2 Model API is a project that uses the Palm 2 Model API to create a chatbot application."
                        imageSrc="/images/chatbot.png"
                        gurl=""
                    />
                    <ManDoll
                        url="https://topt.vercel.app/"
                        title="Twitter Clone (Shut Downed)"
                        description="Twitter Clone (Shut Downed) was a project that aimed to replicate the functionality of Twitter but has since been shut down."
                        imageSrc="/images/topt.webp"
                        gurl=""
                    />
                    <ManDoll
                        url="https://st-xaviers-ac.vercel.app/"
                        title="My College Website Rebuild"
                        description="My College Website Rebuild is a web development project that involves rebuilding the website for my college."
                        imageSrc="/images/st-xaviers.webp"
                        gurl=""
                    />
                </div>

            </section>

      {/* Other Sections (About, Testimonials, Contact, Blog) can be added similarly with appropriate styling and content */}
    </main>
  );
}
