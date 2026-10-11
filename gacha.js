// 확률 로직 (게임 내 '보물 확률 안내' 기준)
(function (root) {
  const GRADES = ["legend", "rare", "unique", "uncommon", "common"];
  const BASE = { legend: 0.00005, rare: 0.00082, unique: 0.102, uncommon: 0.54725, common: 0.34988 };
  const PITY = { legend: 200, rare: 60, unique: 10 };

  function newState() {
    // 각 등급을 마지막으로 얻은 뒤 연속으로 못 얻은 횟수
    return { sinceLegend: 0, sinceRare: 0, sinceUnique: 0, total: 0 };
  }

  // 다음 1회 뽑기의 등급별 확률
  function odds(s) {
    const nL = s.sinceLegend + 1, nR = s.sinceRare + 1, nU = s.sinceUnique + 1;
    // 희대: 초기 0.005%, 실패할 때마다 +0.005%, 200번째 확정
    const pL = nL >= PITY.legend ? 1 : Math.min(1, BASE.legend * nL);
    // 진귀: 초기 0.082%, 실패할 때마다 +0.082%, 희대 확률 계산 후 적용, 60번째 확정(진귀 또는 희대)
    const rR = nR >= PITY.rare ? 1 : Math.min(1, BASE.rare * nR);
    const pR = (1 - pL) * rR;
    const rest = Math.max(0, 1 - pL - pR);
    let pU, pUc, pC;
    if (nU >= PITY.unique) {
      // 독특: 10번째 확정 (독특 이상)
      pU = rest; pUc = 0; pC = 0;
    } else {
      // 남은 확률을 독특/드문/일반에 기본 비율대로 배분 (비선형 감소)
      const sum = BASE.unique + BASE.uncommon + BASE.common;
      pU = rest * BASE.unique / sum;
      pUc = rest * BASE.uncommon / sum;
      pC = rest * BASE.common / sum;
    }
    return { legend: pL, rare: pR, unique: pU, uncommon: pUc, common: pC };
  }

  function roll(s, rng) {
    rng = rng || Math.random;
    const o = odds(s);
    let r = rng(), grade = "common";
    for (const g of GRADES) {
      if (r < o[g]) { grade = g; break; }
      r -= o[g];
    }
    s.total++;
    // 각 카운터는 '자기 등급'을 얻었을 때만 초기화됩니다.
    // (이 방식으로 시뮬레이션해야 공식 종합 확률 0.7/2.5/15.3/49.8/31.7%와 일치)
    s.sinceLegend = grade === "legend" ? 0 : s.sinceLegend + 1;
    s.sinceRare = grade === "rare" ? 0 : s.sinceRare + 1;
    s.sinceUnique = grade === "unique" ? 0 : s.sinceUnique + 1;
    return grade;
  }

  root.Gacha = { GRADES, BASE, PITY, newState, odds, roll };
  if (typeof module !== "undefined") module.exports = root.Gacha;
})(typeof window !== "undefined" ? window : globalThis);
