import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold leading-tight">
          PadelMaster: Turnuva Deneyiminizi Zirveye Taşıyın
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Americano formatında padel turnuvaları düzenleyin, oyuncu sıralamalarını takip edin ve rekabetin tadını çıkarın. Her şey tek bir yerde.
        </p>
        <div className="mt-8">
          <Link href="/tournaments" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Turnuvaları Keşfet
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Adil Fikstür</h3>
              <p className="text-gray-400">Dengeli ve adil maçlar için geliştirilmiş Americano turnuva algoritması.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Anlık Sıralama</h3>
              <p className="text-gray-400">Maç sonuçlarına göre anında güncellenen dinamik oyuncu rating ve sıralamaları.</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Kolay Yönetim</h3>
              <p className="text-gray-400">Admin paneli üzerinden turnuvaları, oyuncuları ve maç sonuçlarını kolayca yönetin.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
