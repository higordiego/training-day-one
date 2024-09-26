export type ConfigInput = {
    name: string;
};

export type Config = {
    input: {
        text: ConfigInput;
        email: ConfigInput;
        password: ConfigInput;
        submit: ConfigInput;
    };
};

export const CONFIG: Config = {
    input: {
        text: { name: 'name' },
        email: { name: 'email' },
        password: { name: 'password' },
        submit: { name: 'sendForm' }
    }
};