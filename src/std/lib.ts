import { createHash } from 'crypto';
import seedrandom from 'seedrandom';

// 테스트에서 사용하는 랜덤 숫자 생성기 함수
export function testRng(): seedrandom.PRNG {
    // 현재 위치 정보로부터 해시 생성
    const location = new Error().stack?.split("\n")[2] || '';
    
    // 해시를 생성하여 고유한 시드로 사용
    const hash = createHash('sha256');
    hash.update(location);
    const seedHex = hash.digest('hex').slice(0, 16); // 16 바이트 길이로 자름
    
    // 시드를 사용하여 랜덤 숫자 생성기 반환
    return seedrandom(seedHex);
}
