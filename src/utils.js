import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;
const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

function getRandomInteger(a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

function getRandomValue(items) {
  return items[getRandomInteger(0, items.length - 1)];
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function formatStringToDateTime(date) {
  return dayjs(date).format('YYYY-MM-DDTHH:mm');
}

function formatStringToShortDate(date) {
  return dayjs(date).format('MMM D');
}

function formatStringToTime(date) {
  return dayjs(date).format('HH:mm');
}

function capitalize(string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

function getPointDuration(dateFrom, dateTo) {
  const timeDiff = dayjs(dateTo).diff(dayjs(dateFrom));
  let pointDuration = 0;

  switch (true) {
    case(timeDiff >= MSEC_IN_DAY):
      pointDuration = dayjs.duration(timeDiff).format('D[D] H[H] m[M]');
      break;
    case(timeDiff >= MSEC_IN_HOUR):
      pointDuration = dayjs.duration(timeDiff).format('H[H] m[M]');
      break;
    case(timeDiff < MSEC_IN_HOUR):
      pointDuration = dayjs.duration(timeDiff).format('m[M]');
      break;
  }

  return pointDuration;
}

function getScheduleDate(date) {
  return dayjs(date).format('DD/MM/YY HH:mm');
}

export {
  getRandomInteger,
  getRandomValue,
  getRandomArrayElement,
  formatStringToDateTime,
  formatStringToShortDate,
  formatStringToTime,
  capitalize,
  getPointDuration,
  getScheduleDate
};
