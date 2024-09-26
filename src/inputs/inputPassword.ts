import { Config } from '../config/config';

export const inputPassword = ([form, CONFIG]: [string[], Config]): [string[], Config] => {
    const input = `<input type="password" name="${CONFIG.input.password.name}">`;
    return [form.concat(input), CONFIG];
};