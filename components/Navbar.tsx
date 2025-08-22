import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link href="/">
              PadelMaster
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/tournaments" className="py-2 px-3 hover:bg-gray-700 rounded">
              Turnuvalar
            </Link>
            <Link href="/rankings" className="py-2 px-3 hover:bg-gray-700 rounded">
              Sıralama
            </Link>
            <Link href="/players" className="py-2 px-3 hover:bg-gray-700 rounded">
              Oyuncular
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/login" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm font-medium">
              Giriş Yap
            </Link>
            <Link href="/register" className="py-2 px-4 bg-gray-600 hover:bg-gray-700 rounded-md text-sm font-medium">
              Kayıt Ol
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
