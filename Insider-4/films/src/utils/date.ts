export function getBrazilianDate(date: string) {
  const splitedDate = date.split("-");
  const [year, month, day] = splitedDate;
  return `${day} / ${month} / ${year}`;
}
