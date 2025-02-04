import Image from "next/image";
import TestApiButton from '../components/TestApiButton';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <header className="py-6">
        <h1 className="text-3xl font-bold text-center">Welcome to ruizTechServices</h1>
      </header>
      <main className="flex-grow">
        <section className="max-w-2xl mx-auto text-center border-2 border-gray-300 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Payment Service</h2>
          <p className="text-gray-600 mb-6">
            I am thrilled to announce that ruizTechServices is excited to introduce our new Payment service. This API endpoint will revolutionize 
            how ruizTechServices, our customers, and applications process payments securely and efficiently.
          </p>
          <TestApiButton />
          <p>7:10pm; 2/3/2025: Started working on this project</p>
          <p>7:11pm; 2/3/2025: Initiated NextJS project</p>
        </section>
      </main>
      <footer className="py-4 mt-8 border-t">
        <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} ruizTechServices. All rights reserved.</p>
      </footer>
    </div>
  );
}
