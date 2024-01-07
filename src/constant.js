export const TIMES = {
  ONE_MINUTE_AGO: '1 minute ago',
  MINUTES_AGO: ' minutes ago',
  ONE_HOUR_AGO: '1 hour ago',
  HOURS_AGO: ' hours ago',
  ONE_DAY_AGO: '1 day ago',
  DAYS_AGO: ' days ago',
  ONE_MONTH_AGO: '1 month ago',
  MONTHS_AGO: ' months ago',
  ONE_YEAR_AGO: '1 year ago',
  YEARS_AGO: ' years ago',
};

const BASE_URL = 'https://bootcamp-api.codeit.kr';
const USER_URL = `${BASE_URL}/api/users/1`;

export const API = {
  ROOT: `${BASE_URL}`,
  USER_SAMPLE: `${BASE_URL}/api/sample/user`,
  FOLDER_SAMPLE: `${BASE_URL}/api/sample/folder`,
  USER: USER_URL,
  USER_LINKS: `${USER_URL}/links`,
  USER_FOLDERS: `${USER_URL}/folders`,
};
