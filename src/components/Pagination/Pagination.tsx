
export default function Pagination({ isLoading, loadMore, hasMore }: { isLoading: boolean, loadMore: () => void, hasMore: boolean }) {
  if (!hasMore) return null;

  return (
    <div className="w-full flex justify-center mt-8">
      <button
        onClick={loadMore}
        disabled={isLoading}
        className="px-6 py-2 border text-gray-500 border-gray-300 bg-white/55 rounded-lg hover:bg-mer hover:text-white hover:font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Cargando...' : 'Cargar más'}
      </button>
    </div>
  )
}