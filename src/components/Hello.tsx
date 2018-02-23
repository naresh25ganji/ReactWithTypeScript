import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from './Hello.style';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <span className={css(styles.red)}>
                    This is red.
            </span>
                <span className={css(styles.hover)}>
                    This turns red on hover.
            </span>
                <span className={css(styles.small)}>
                    This turns red when the browser is less than 600px width.
            </span>
                <span className={css(styles.red, styles.blue)}>
                    This is blue.
            </span>
                <span className={css(styles.blue, styles.small)}>
                    This is blue and turns red when the browser is less than
                    600px width.
            </span>
            </div>
        </div>
    );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}