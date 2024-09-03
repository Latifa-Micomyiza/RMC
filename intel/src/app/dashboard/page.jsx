
import IntellectualList from '../../components/IntellectulasList';

export default function IntellectualsPage() {
  return (
    <main className="min-h-screen bg-green-100 flex flex-col items-center">
      <img src="/RMC.png" className="justify-center mt-12" alt="rmc" />
      <p className="text-2xl font-bold text-center my-6 text-main capitalize py-2">
        List of Intellectuals
      </p>
      <IntellectualList />
    </main>
  );
}
