// TypeScript의 숫자 타입에 대한 제네릭 연산 함수 정의
function add<T>(a: T, b: T): T {
    return (a as unknown as number) + (b as unknown as number) as unknown as T;
}

function sub<T>(a: T, b: T): T {
    return (a as unknown as number) - (b as unknown as number) as unknown as T;
}

function mul<T>(a: T, b: T): T {
    return (a as unknown as number) * (b as unknown as number) as unknown as T;
}

function div<T>(a: T, b: T): T {
    return (a as unknown as number) / (b as unknown as number) as unknown as T;
}

function rem<T>(a: T, b: T): T {
    return (a as unknown as number) % (b as unknown as number) as unknown as T;
}

// 테스트 함수
export function testNum<T extends number>(ten: T, two: T): void {
    console.assert(add(ten, two) === ten + two, `${ten} + ${two} should be ${ten + two}`);
    console.assert(sub(ten, two) === ten - two, `${ten} - ${two} should be ${ten - two}`);
    console.assert(mul(ten, two) === ten * two, `${ten} * ${two} should be ${ten * two}`);
    console.assert(div(ten, two) === ten / two, `${ten} / ${two} should be ${ten / two}`);
    console.assert(rem(ten, two) === ten % two, `${ten} % ${two} should be ${ten % two}`);
}