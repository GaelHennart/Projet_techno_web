import HomePage from './pages/home/page';
import 'tailwindcss/tailwind.css';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col bg-black w-full mx-auto px-4 md:px-12 py-2 md:py-4">  {/* pour le bg blanc-[#F5F5F5] */}
      <HomePage />
    </main>
  );
}