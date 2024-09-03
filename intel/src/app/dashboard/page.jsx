// pages/intellectuals.js
import IntellectualList from '../../components/IntellectulasList';

export default function IntellectualsPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center my-6">Intellectuals</h1>
      <IntellectualList />
    </main>
  );
}
