import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Bienvenido al simulador EU</h1>
      <p className="mb-6">Hacé clic abajo para comenzar a practicar preguntas:</p>
      <Link href="/questions">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Ir al cuestionario
        </button>
      </Link>
    </main>
  );
}