import { Config } from '../config/config';

export const inputText = ([form, CONFIG]: [string[], Config]): [string[], Config] => {
    const input = `<input type="text" name="${CONFIG.input.text.name}">`;
    return [form.concat(input), CONFIG];
};