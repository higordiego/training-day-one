import { Config } from '../config/config';
import { compose } from '../helpers/compose';
import { putInWrapper } from '../helpers/putInWrapper';
import { fromArrayToString } from '../helpers/fromArrayToString';
import { tab } from '../helpers/tab';
import { flatten } from '../helpers/flatten';
import { getForm } from '../helpers/getForm';
import { inputSubmit } from '../inputs/inputSubmit';
import { inputPassword } from '../inputs/inputPassword';
import { inputEmail } from '../inputs/inputEmail';
import { inputText } from '../inputs/inputText';

export const makeForm = (CONFIG: Config): string =>
    compose(
        putInWrapper,
        fromArrayToString,
        tab,
        flatten,
        getForm,
        inputSubmit,
        inputPassword,
        inputEmail,
        inputText
    )([[], CONFIG]);