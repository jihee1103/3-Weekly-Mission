import { CONFIRM_EMAIL } from './constant.js';
import { EMPTY_EMAIL, INVALID_EMAIL } from './constant.js';

const signEmailHandler = function (event, elementShowingError) {
    const emailAddress = event.target.value;
    const confirmEmail = new RegExp(CONFIRM_EMAIL);
    if (emailAddress.trim() === '') {
        elementShowingError.textContent = EMPTY_EMAIL;
    } else if (!confirmEmail.test(emailAddress)) {
        elementShowingError.textContent = INVALID_EMAIL;
    } else {
        elementShowingError.textContent = '';
    }
};

export { signEmailHandler };
