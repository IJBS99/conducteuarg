import dynamic from "next/dynamic";

const Quiz = dynamic(() => import("@/components/Quiz"), { ssr: false });

export default function QuestionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Preguntas de práctica</h1>
      <Quiz />
    </main>
  );
}