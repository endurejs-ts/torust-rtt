/** @description I just made it, but it's incomplete. Rather use Error. */

interface ExtendedError extends Error {
    cause?: Error; // cause 메서드가 있을 수 있음
}

class Report<E extends ExtendedError> {
    error: E;
    showBacktrace: boolean;
    pretty: boolean;

    constructor(error: E, showBacktrace: boolean = false, pretty: boolean = false) {
        this.error = error;
        this.showBacktrace = showBacktrace;
        this.pretty = pretty;
    }

    // backtrace: 에러가 발생한 백트레이스를 반환
    backtrace(): string | null {
        let backtrace: string | null = this.error.stack || null;
        if (!backtrace && this.error.cause) {
            // 에러의 cause 체인을 순회하며 백트레이스 가져오기
            let source = this.error.cause;
            while (source) {
                if (source.stack) {
                    backtrace = source.stack;
                    break;
                }
            }
        }
        return backtrace;
    }

    // Single-line 에러 메시지 출력
    fmtSingleLine(): string {
        let output = `${this.error.message}`;
        let source = this.error.cause;
        while (source) {
            output += `: ${source.message}`;
        }
        return output;
    }

    // Multi-line 에러 메시지 출력
    fmtMultiLine(): string {
        let output = `${this.error.message}`;
        let source = this.error.cause;
        if (source) {
            output += `\n\nCaused by:`;
            let index = 1;
            while (source) {
                output += `\n    ${index}: ${source.message}`;
                index++;
            }
        }

        if (this.showBacktrace) {
            const backtrace = this.backtrace();
            if (backtrace) {
                output += `\n\nStack backtrace:\n${backtrace.trim()}`;
            }
        }

        return output;
    }

    // toString: pretty 여부에 따라 출력 형식 다르게
    toString(): string {
        return this.pretty ? this.fmtMultiLine() : this.fmtSingleLine();
    }

    // Debug 문자열로 출력
    toDebugString(): string {
        return this.toString();
    }
}
