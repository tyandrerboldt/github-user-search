import * as dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
import 'dayjs/locale/pt-br';

dayjs.extend(utcPlugin);
dayjs.locale('pt-br');

const formatDate = (utcDate:string, dateFormat:string) => {
  let date = dayjs.utc(utcDate);
  return date.format(dateFormat);
}

export default formatDate;