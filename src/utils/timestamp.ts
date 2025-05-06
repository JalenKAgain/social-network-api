import dayjs from 'dayjs';

const getFormatDate = (date: Date | string | number): string => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};

export default getFormatDate;
