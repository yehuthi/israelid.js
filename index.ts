/**  Calculates the checksum for the given digits. */
const checksum = (id: string): number => {
    let sum = 0;
    for (let i = 0; i < id.length; i++) {
        const n = (id.charCodeAt(i) - 48) * ((i % 2) + 1);
        sum += n > 9 ? n - 9 : n;
    }
    return sum;
}

/** Validates the given ID. */
export const valid = (id: string): boolean => checksum(id) % 10 === 0

/// A digit character.
export type DigitChar = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

/** Calcualtes the checksum digit for the given ID. */
export const checksum_digit = (id: string): DigitChar => {
    const rem = checksum(id) % 10;
    return rem === 0 ? '0' : String.fromCharCode(58 - rem) as unknown as DigitChar;
}