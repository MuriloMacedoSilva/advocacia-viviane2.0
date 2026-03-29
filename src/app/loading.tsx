// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-white">
      {/* Aqui você pode colocar um Spinner do Tailwind ou seu Logo pulsando */}
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 font-medium">Carregando...</p>
      </div>
    </div>
  );
}