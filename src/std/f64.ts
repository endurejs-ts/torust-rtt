/** @description Only the number part of Rust's functions that cannot be replaced by the math library in TypeScript were changed. */
/** @description gamma function is exclusion */

export function roundTiesEven(value: number): number {
    const rounded = Math.round(value);
    if (rounded % 2 === 0) {
        return rounded;
    } else if (value % 1 === 0.5 || value % 1 === -0.5) {
        return Math.round(value / 2) * 2;
    }
    return rounded;
}

export function fract(value: number): number {
    return value - Math.trunc(value);
}

export function signum(value: number): number {
    if (Number.isNaN(value)) {
        return NaN;  // NaN을 반환
    }
    return Math.sign(value);  // 부호를 반환
}

export function copysign(value: number, sign: number): number {
    return sign < 0 ? -Math.abs(value) : Math.abs(value);
}

export function mul_add(value: number, a: number, b: number): number {
    return value * a + b;
}

export function div_euclid(value: number, rhs: number): number {
    const q = Math.floor(value / rhs);
    if (value % rhs < 0) {
        return rhs > 0 ? q - 1 : q + 1;
    }
    return q;
}

export function rem_euclid(value: number, rhs: number): number {
    const r = value % rhs;
    return r < 0 ? r + Math.abs(rhs) : r;
}
