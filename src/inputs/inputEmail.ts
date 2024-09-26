import { Config } from '../config/config';

export const inputEmail = ([form, CONFIG]: [string[], Config]): [string[], Config] => {
    const input = `<input type="email" name="${CONFIG.input.email.name}">`;
    return [form.concat(input), CONFIG];
};