export default function Header() {
    return (
      <header className="sticky top-0 z-50 w-full bg-white/90 shadow-lg backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between gap-3 rounded-2xl px-3">
            {/* Site Branding */}
            <div className="flex flex-1 items-center">
              <h1 className="text-lg font-bold text-gray-800">
                Chicanos Por La Causa, Inc. Form Request
              </h1>
            </div>
          </div>
        </div>
      </header>
    );
  }