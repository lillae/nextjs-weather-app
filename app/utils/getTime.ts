import moment from 'moment';

export const getLocalTime = (timezone: number) => {
	return moment().utcOffset(timezone).format('HH mm');
};

export const getLocalSunrise = (sunrise: number, timezone: number) => {
	return moment.utc(sunrise, 'X').add(timezone, 'seconds').format('HH:mm');
};

export const getLocalSunset = (sunset: number, timezone: number) => {
	return moment.utc(sunset, 'X').add(timezone, 'seconds').format('HH:mm');
};
