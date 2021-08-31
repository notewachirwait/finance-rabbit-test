import {
	randomEmail
} from '../../helpers/random.js';

export const randomEmailUser = {
	email: `${randomEmail}@ku.th`,
	password: 'Maqe1234_+',
	confirmedPassword: 'Maqe1234_+',
	isConsent: 'true',
	versionId: 1,
};
export const userEmailInvalid = {
	email: 'note.wachirawit+14@maqe.com',
	password: 'Maqe1234+',
};
export const userEmailIsnotVerify = {
	email: 'admin@maqe.com',
	password: 'Maqe12345+',
};
export const userEmail = {
	email: 'note.wachirawit+14@maqe.com',
	password: 'Maqe12345+',
};