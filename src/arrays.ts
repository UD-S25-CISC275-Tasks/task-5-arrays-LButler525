/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let numRet: number[] = [];
    if (numbers.length === 1) {
        numRet = [...numbers, ...numbers];
    } else if (numbers.length > 1) {
        numRet = [numbers[0], numbers[numbers.length - 1]];
    }
    return numRet;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((trip: number): number => trip * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((val: string): number =>
        isNaN(parseInt(val)) ? 0 : parseInt(val),
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let rmDols: string[] = amounts.map((val: string): string =>
        val[0] === "$" ? val.slice(1, val.length) : val,
    );
    return rmDols.map((val2: string): number =>
        isNaN(parseInt(val2)) ? 0 : parseInt(val2),
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let rmQM: string[] = messages.filter(
        (val: string): boolean => val[val.length - 1] !== "?",
    );
    return rmQM.map((mess: string): string =>
        mess[mess.length - 1] === "!" ? mess.toUpperCase() : mess,
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let rmLong: string[] = words.filter(
        (val: string): boolean => val.length < 4,
    );
    return rmLong.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    return colors.every(
        (val: string): boolean =>
            val === "red" || val === "blue" || val === "green",
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let sum: number = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    let math: string = addends.join("+");
    return sum + "=" + math;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let idx: number = values.findIndex((val: number): boolean => val < 0);
    if (idx === -1) {
        let sum: number = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        return [...values, sum];
    }
    let seg: number[] = values.slice(0, idx);
    let sum: number = seg.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    return [...seg, values[idx], sum, ...values.slice(idx + 1, values.length)];
}
