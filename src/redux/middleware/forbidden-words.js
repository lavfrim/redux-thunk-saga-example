import { FORBIDDEN_WORDS_ARRAY } from '../../constants/forbidden-words';
import { FORBIDDEN_WORDS_MESSAGE } from '../../constants/alert-message';
import { CREATE_POST } from '../types';
import { showAlert, hideAlert } from '../actions';

export function forbiddenWordsMeddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === CREATE_POST) {
                const foundArray = FORBIDDEN_WORDS_ARRAY.filter(word => action.payload.title.includes(word));
                if (foundArray.length) {
                    dispatch(showAlert(FORBIDDEN_WORDS_MESSAGE));
                    setTimeout(() => dispatch(hideAlert()), 3000);
                    return;
                }
            }

            return next(action);
        }
    }
};