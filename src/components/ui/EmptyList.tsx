export default function EmptyList({ text = '¡Próximamente!' }: { text?: string }) {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <p className="text-gray-500 text-lg font-semibold">
        {text}
      </p>
    </div>
  );
}