function analyzeBigO() {
  // 사용자가 입력한 for문 개수와 재귀 여부, 이진 탐색 여부를 가져옵니다
  const loopCount = parseInt(document.getElementById("loopCount").value) || 0;
  const hasRecursion = document.getElementById("hasRecursion").checked;
  const hasBinarySearch = document.getElementById("hasBinarySearch").checked;

  // 시간 복잡도 추정
  let bigO = "O(1)"; // 기본 값

  if (hasRecursion && loopCount === 0 && !hasBinarySearch) {
    // 단순 재귀의 경우 (예: 피보나치)
    bigO = "O(2^n)";
  } else if (!hasRecursion && loopCount === 1 && !hasBinarySearch) {
    // 단일 루프 (O(n))
    bigO = "O(n)";
  } else if (!hasRecursion && loopCount === 2 && !hasBinarySearch) {
    // 이중 루프 (O(n^2))
    bigO = "O(n^2)";
  } else if (!hasRecursion && loopCount === 3 && !hasBinarySearch) {
    // 삼중 루프 (O(n^3))
    bigO = "O(n^3)";
  } else if (hasRecursion && loopCount === 1 && !hasBinarySearch) {
    // 단일 루프와 재귀가 있는 경우 (O(n * 2^n))
    bigO = "O(n * 2^n)";
  } else if (!hasRecursion && loopCount > 0 && hasBinarySearch) {
    // 루프와 이진 탐색이 혼합된 경우
    bigO = `O(n^${loopCount} * log n)`;
  } else if (hasRecursion && hasBinarySearch && loopCount > 0) {
    // 루프, 재귀, 이진 탐색이 모두 있는 복합적인 경우
    bigO = `O(n^${loopCount} * 2^n * log n)`;
  } else if (hasBinarySearch && loopCount === 0) {
    // 단독 이진 탐색
    bigO = "O(log n)";
  } else if (loopCount > 3 && !hasRecursion && !hasBinarySearch) {
    // 3개 이상의 루프 (O(n^k))
    bigO = `O(n^${loopCount})`;
  }

  // 결과 출력
  document.getElementById("bigOResult").innerText = bigO;
}
