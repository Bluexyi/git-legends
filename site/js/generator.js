// Génération des cartes. Même nom = même carte : le nom est haché
// puis sert de graine à un générateur pseudo-aléatoire.

(function () {
  "use strict";

  // hash cyrb53 (domaine public)
  function hashString(text) {
    let h1 = 0xdeadbeef;
    let h2 = 0x41c6ce57;
    for (let i = 0; i < text.length; i++) {
      const ch = text.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  }

  // mulberry32 : nombres entre 0 et 1, même suite pour une même graine
  function createRandom(seed) {
    let state = seed >>> 0;
    return function () {
      state = (state + 0x6d2b79f5) >>> 0;
      let t = state;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function pick(random, list) {
    return list[Math.floor(random() * list.length)];
  }

  function pickWeighted(random, list) {
    const total = list.reduce((sum, item) => sum + item.weight, 0);
    let target = random() * total;
    for (const item of list) {
      target -= item.weight;
      if (target < 0) return item;
    }
    return list[list.length - 1];
  }

  // ignore la casse et les espaces en trop
  function normalizeName(name) {
    return name.trim().replace(/\s+/g, " ").toLowerCase();
  }

  // sprite 8x8 symétrique : 0 vide, 1 corps, 2 détail, 3 oeil
  function generateSprite(random) {
    const size = 8;
    const grid = [];
    for (let y = 0; y < size; y++) {
      const row = new Array(size).fill(0);
      for (let x = 0; x < size / 2; x++) {
        const r = random();
        let value = r < 0.5 ? 1 : r < 0.62 ? 2 : 0;
        if (x === 3 && y >= 1 && y <= 6) value = 1; // colonne centrale pleine
        row[x] = value;
        row[size - 1 - x] = value; // symétrie
      }
      grid.push(row);
    }
    const eyeRow = 2 + Math.floor(random() * 2);
    grid[eyeRow][2] = 3;
    grid[eyeRow][5] = 3;
    return grid;
  }

  function generateMember(name, data) {
    const seed = hashString(normalizeName(name));
    const random = createRandom(seed);
    const rarity = pickWeighted(random, data.rarities);

    const stats = data.stats.map((label) => ({
      label: label,
      value: Math.min(99, 10 + Math.floor(random() * 80) + rarity.bonus)
    }));

    return {
      name: name.trim().replace(/\s+/g, " "),
      id: (seed % 0x10000).toString(16).toUpperCase().padStart(4, "0"),
      hue: Math.floor(random() * 360),
      rarity: rarity,
      role: pick(random, data.roles),
      quirk: pick(random, data.quirks),
      item: pick(random, data.items),
      stats: stats,
      power: stats.reduce((sum, stat) => sum + stat.value, 0),
      sprite: generateSprite(random)
    };
  }

  function generateTeam(className, groupName, memberNames, data) {
    const members = memberNames.map((name) => generateMember(name, data));

    const teamKey = [className, groupName]
      .concat(memberNames.map(normalizeName).sort())
      .join("|");
    const random = createRandom(hashString(teamKey));
    const animal = pick(random, data.teamAnimals);
    const adjective = pick(random, data.teamAdjectives);

    const power = members.reduce((sum, member) => sum + member.power, 0);
    const average = members.length ? power / members.length : 0;
    const rank = data.ranks.filter((r) => average >= r.min).pop() || data.ranks[0];

    return {
      name: "Les " + animal.name + " " + adjective[animal.gender],
      motto: pick(random, data.mottos),
      power: power,
      rank: rank.label,
      members: members
    };
  }

  window.GitLegends = {
    hashString: hashString,
    generateTeam: generateTeam
  };
})();
