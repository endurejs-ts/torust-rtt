export function panic(...args: any[]): never {
    if (args.length === 0) {
        throw new Error("An error occurred");
    } else {
        throw new Error(args.map(arg => String(arg)).join(' '));
    }
}

export function print(...args: any[]): void {
    process.stdout.write(args.map(arg => String(arg)).join(' '));
}

export function println(...args: any[]): void {
    if (args.length === 0) {
        console.log();  // 개행만 출력
    } else {
        console.log(...args);  // 전달받은 인자들을 출력
    }
}

export function eprint(...args: any[]): void {
    process.stderr.write(args.map(arg => String(arg)).join(' '));
}

export function eprintln(...args: any[]): void {
    if (args.length === 0) {
        process.stderr.write("\n");
    } else {
        process.stderr.write(args.map(arg => String(arg)).join(' ') + "\n");
    }
}

export function dbg<T>(...vals: T[]): T | T[] {
    const getLocation = () => {
        const err = new Error();
        const stack = err.stack?.split("\n")[2]?.trim() || '';
        const location = stack.match(/\((.*):(\d+):(\d+)\)/);
        if (location) {
            const [, file, line, column] = location;
            return `[${file}:${line}:${column}]`;
        }
        return "[unknown location]";
    };

    if (vals.length === 0) {
        console.error(getLocation());
        return undefined as never;
    } else if (vals.length === 1) {
        const val = vals[0];
        console.error(`${getLocation()} ${String(val)} =`, val);
        return val;
    } else {
        console.error(getLocation());
        return vals.map(val => {
            console.error(`${String(val)} =`, val);
            return val;
        });
    }
}

export function assertApproxEq(a: number, b: number, epsilon: number = 1.0e-6): void {
    if (Math.abs(a - b) >= epsilon) {
        throw new Error(`${a} is not approximately equal to ${b}`);
    }
}
