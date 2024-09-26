import { Config } from '../config/config';

export const inputSubmit = ([form, CONFIG]: [string[], Config]): [string[], Config] => {
    const input = `<input type="submit" name="${CONFIG.input.submit.name}">`;
    return [form.concat(input), CONFIG];
};