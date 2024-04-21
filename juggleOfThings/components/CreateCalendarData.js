import dayjs from "dayjs";

export function CreateCalendarData(year, month) {
  // befülle so oft wie monat im jahr tage hat collection
  //ausnahme für februar bei schaltjahren
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
