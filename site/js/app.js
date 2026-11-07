// Construit la page à partir de config.js et data.js.
// Les noms sont insérés avec textContent et jamais avec innerHTML.

(function () {
  "use strict";

  const config = window.TEAM_CONFIG || {};
  const data = window.GAME_DATA;
  const className = String(config.className || "SRC?");
  const groupName = String(config.groupName || "G?");
  const memberNames = (Array.isArray(config.members) ? config.members : [])
    .map((name) => String(name).trim())
    .filter((name) => name.length > 0);

  const team = window.GitLegends.generateTeam(className, groupName, memberNames, data);

  // crée un élément avec sa classe et son texte
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = typography(text);
    return node;
  }

  // espaces insécables dans les guillemets
  function typography(text) {
    return String(text).replace(/« /g, "«\u00A0").replace(/ »/g, "\u00A0»");
  }

  // avatar pixel art en SVG
  function buildSprite(member) {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 8 8");
    svg.setAttribute("class", "sprite");
    svg.setAttribute("aria-hidden", "true");
    const colors = {
      1: "hsl(" + member.hue + " 75% 62%)",
      2: "hsl(" + ((member.hue + 50) % 360) + " 85% 72%)",
      3: "#ffffff"
    };
    member.sprite.forEach((row, y) => {
      row.forEach((value, x) => {
        if (!value) return;
        const rect = document.createElementNS(ns, "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", 1.02);
        rect.setAttribute("height", 1.02);
        rect.setAttribute("fill", colors[value]);
        svg.appendChild(rect);
      });
    });
    return svg;
  }

  // une carte, recto et verso
  function buildCard(member, index) {
    const card = el("article", "card card--" + member.rarity.id);
    card.style.setProperty("--hue", member.hue);
    card.style.setProperty("--delay", index * 90 + "ms");
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", "false");
    card.setAttribute("aria-label", "Carte de " + member.name + ", " + member.role.title);

    const inner = el("div", "card__inner");

    // recto
    const front = el("div", "card__face card__front");
    const top = el("div", "card__top");
    top.append(el("span", "card__rarity", member.rarity.label), el("span", "card__power", member.power));
    const avatar = el("div", "card__avatar");
    avatar.append(buildSprite(member));
    const stats = el("ul", "card__stats");
    member.stats.forEach((stat) => {
      const li = el("li", "stat-row");
      const bar = el("span", "stat-row__bar");
      bar.style.setProperty("--value", stat.value + "%");
      li.append(el("span", "stat-row__label", stat.label), bar, el("span", "stat-row__value", stat.value));
      stats.append(li);
    });
    front.append(top, avatar, el("h2", "card__name", member.name), el("p", "card__role", member.role.title), stats);

    // verso
    const back = el("div", "card__face card__back");
    back.append(
      el("p", "card__label", "Pouvoir spécial"),
      el("p", "card__text", member.role.power),
      el("p", "card__label", "Manie"),
      el("p", "card__text", member.quirk),
      el("p", "card__label", "Objet fétiche"),
      el("p", "card__text", member.item),
      el("p", "card__id", "Carte n° " + member.id + " - " + member.rarity.label)
    );

    inner.append(front, back);
    card.append(inner);

    // retournement au clic ou au clavier
    function flip() {
      const flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(flipped));
    }
    card.addEventListener("click", flip);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        flip();
      }
    });

    // reflet qui suit la souris
    card.addEventListener("pointermove", (event) => {
      const box = card.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width;
      const y = (event.clientY - box.top) / box.height;
      card.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
      card.style.setProperty("--my", (y * 100).toFixed(1) + "%");
      card.style.setProperty("--rx", ((0.5 - y) * 12).toFixed(2) + "deg");
      card.style.setProperty("--ry", ((x - 0.5) * 14).toFixed(2) + "deg");
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });

    return card;
  }

  // remplissage de la page
  document.title = team.name + " - " + className + " " + groupName + " - Git Legends";
  document.getElementById("class-name").textContent = className;
  document.getElementById("group-name").textContent = groupName;
  document.getElementById("team-name").textContent = team.name;
  document.getElementById("team-motto").textContent = typography("« " + team.motto + " »");
  document.getElementById("team-power").textContent = team.power;
  document.getElementById("team-rank").textContent = team.rank;
  document.getElementById("team-size").textContent = team.members.length;

  const container = document.getElementById("cards");
  if (team.members.length === 0) {
    container.append(el("p", "empty", "Aucun membre pour l'instant : renseignez la variable TEAM_MEMBERS du dépôt."));
  } else {
    team.members.forEach((member, index) => container.append(buildCard(member, index)));
  }

  // infos de déploiement, ajoutées par le workflow
  const build = config.build;
  if (build && build.commit) {
    const date = new Date(build.date);
    const parts = [
      "Déploiement n° " + build.run,
      "commit " + String(build.commit).slice(0, 7)
    ];
    if (!isNaN(date)) {
      parts.push(date.toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short", timeZone: "Europe/Paris" }));
    }
    if (build.actor) parts.push("lancé par " + build.actor);
    document.getElementById("build-info").textContent = parts.join(" | ");
  }
})();
