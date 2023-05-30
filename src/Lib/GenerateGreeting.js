import moment from 'moment';

export default function generateGreetings() {
  const currentHour = moment().format('HH');

  if (currentHour >= 3 && currentHour < 12) {
    return 'Selamat Pagii';
  } else if (currentHour >= 12 && currentHour < 15) {
    return 'Selamat Siangg';
  } else if (currentHour >= 15 && currentHour < 20) {
    return 'Selamat Sore';
  } else if (currentHour >= 20 || currentHour < 3) {
    return 'Selamat Malem';
  } else {
    return 'Hello';
  }
}
