import dayjs from "dayjs";

export function CreateCalendarData(year, month) {
  // Befülle immmer zahlen des Vormonats beginnen  ab letzten Montag
  const data = [];
  const lengthOfMonth = dayjs(year + "-" + month + "-01").daysInMonth();

  for (let i = 0; i < lengthOfMonth; i++) {
    data.push({
      day: i + 1,
      month: month,

      year: year,
      fullDate: dayjs(year + "-" + month + "-" + i).format("DD.MM.YYYY"),
    });
  }

  return data;
}
