import { HELLO } from 'constants';

export function sayHello(extra) {
    return `${HELLO}${extra}`;
}
