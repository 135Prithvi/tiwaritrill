import Image from 'next/image';
export default function About() {
  return (
    <main className='relative min-h-screen z-0 container px-5 sm:px-0 mx-auto'>


      <div className="absolute top-0 -left-4 w-72 h-72 dark:bg-purple-950 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-40 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 dark:bg-yellow-950 bg-yellow-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 dark:bg-pink-950 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-40 animate-blob animation-delay-4000"></div><div className='h-5' />
      <article className="relative"><h1>Greetings,</h1>
        <h2>I'm Prithviraj Tiwari, </h2>
        <div className="h-2" />
        an experienced developer passionate about creating cutting-edge digital experiences. Proficient in crafting responsive, high-performance UIs and utilizing cloud technologies like <strong>Amazon S3</strong>. My focus is on meaningful user experiences and advancing web development, akin to Elon Musk's space exploration endeavors.</article>
    </main>
  );
}
