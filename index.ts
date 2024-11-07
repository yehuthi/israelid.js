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

/** Calcualtes the checksum digit for the given ID. */
export const checksum_digit = (
	id: string
): '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' => {
    const rem = checksum(id) % 10;
    return rem === 0 ?
		'0' :
		String.fromCharCode(58 - rem) as ReturnType<typeof checksum_digit>;
}

/** Computes a conotrol digit that would make the ID valid. */
export function control_complement(
	id: string
): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 {
	const rem = checksum(id) % 10;
	if (rem == 0) return 0;
	const is_doubled_position = id.length % 2;
	const delta = 10 - rem;
	const delta_is_even = delta % 2 == 0;

	let result = delta;
	if (!delta_is_even && is_doubled_position) result += 9;
	// ^ this gets us a two-digit number that sums up to the delta
	if (is_doubled_position) result /= 2;
	return result as ReturnType<typeof control_complement>;
}
