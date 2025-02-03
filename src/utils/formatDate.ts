export const FormatDate = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return formattedDate.replace(/(\b\w)/g, char => char.toUpperCase());
}