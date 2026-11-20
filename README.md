# Git Legends

> **Chaque équipe mérite ses cartes légendaires.**

![Stack](https://img.shields.io/badge/HTML%20%7C%20CSS%20%7C%20JS-vanilla-F05639?style=flat-square)
![Dépendances](https://img.shields.io/badge/d%C3%A9pendances-0-2DA44E?style=flat-square)
![Build](https://img.shields.io/badge/build-aucun-5B86E5?style=flat-square)

Git Legends transforme chaque membre d'une équipe en **carte à collectionner** : un avatar en pixel art, une rareté, un rôle d'Ops légendaire, des statistiques… et, au dos, une manie inavouable et un objet fétiche.

Donnez-lui une liste de noms, il vous rend une équipe complète, avec son nom, sa devise et son rang.

---

## Fonctionnalités

- **Une carte par membre**, avec un avatar pixel art 8×8 unique
- **Cartes retournables** au clic ou au clavier (`Entrée` / `Espace`)
- **Effet holographique** : la carte s'incline et le reflet suit la souris
- **4 raretés** : Commune, Rare, Épique et la très convoitée **Légendaire**
- **4 stats** : Uptime, Réseau, Scripts et Café
- **Un nom d'équipe généré**, comme « Les Ratons Laveurs Conteneurisés » ou « Les Loutres Haute Dispo »
- **Un rang d'équipe** selon la puissance moyenne, de « Stagiaires du helpdesk » à « Légendes de l'astreinte »

---

## Le principe : un hasard reproductible

```
"Grace Hopper" ──hash──▶ graine ──générateur pseudo-aléatoire──▶ rareté, rôle, stats, avatar…
```

1. Le nom est **normalisé** : la casse et les espaces en trop sont ignorés
2. Il est **haché** (`cyrb53`) pour obtenir une graine
3. La graine alimente un **générateur pseudo-aléatoire** (`mulberry32`), qui tire tout le reste

**Même nom = même carte**, sur toutes les machines, à chaque chargement. Le nom d'équipe et la devise dépendent de la classe, du groupe **et** de la liste des membres : ajouter quelqu'un change l'identité de toute l'équipe.

---

## Démarrage rapide

Aucune installation, aucune dépendance, aucun build.

```bash
# ouvrir directement la page
open site/index.html          # macOS
xdg-open site/index.html      # Linux

# ou servir le dossier en local
python3 -m http.server 8000 --directory site
# → http://localhost:8000
```

---

## Configurer son équipe

Tout se passe dans `site/js/config.js` :

```js
window.TEAM_CONFIG = {
  className: "SRC0",
  groupName: "G0",
  members: [
    "Ada Lovelace",
    "Linus Torvalds",
    "Grace Hopper",
    "Margaret Hamilton"
  ],
  build: null
};
```

Rechargez la page : vos légendes apparaissent. 

Le champ `build` est facultatif. S'il est renseigné (`run`, `commit`, `date`, `actor`), le pied de page affiche la version déployée.

---

## Structure

```
site/
├── index.html          # la page
├── favicon.svg
├── css/
│   └── style.css       # cartes, animations, reflets
└── js/
    ├── config.js       # l'équipe
    ├── data.js         # rôles, manies, objets, devises, raretés, rangs
    ├── generator.js    # hash + générateur pseudo-aléatoire
    └── app.js          # construction de la page
```

---

## Raretés et rangs

| Rareté | Chance | Bonus de stats |
|---|---|---|
| Commune | 50 % | +0 |
| Rare | 30 % | +6 |
| Épique | 15 % | +12 |
| **Légendaire** | **5 %** | **+20** |

| Puissance moyenne par membre | Rang de l'équipe |
|---|---|
| 0 et plus | Stagiaires du helpdesk |
| 170 et plus | Admins sys confirmés |
| 210 et plus | Ingénieurs réseau |
| 250 et plus | Architectes cloud |
| 290 et plus | **Légendes de l'astreinte** |

---

## Ajouter du contenu

Nouveaux rôles, manies, objets fétiches ou devises : tout est dans `site/js/data.js`.

```js
roles: [
  { title: "Chamane du DNS", power: "Sait que c'est toujours le DNS. Même quand ce n'est pas le DNS." },
  // ajoutez le vôtre ici
]
```

> Modifier les listes de `data.js` **change le tirage** : les cartes existantes peuvent changer de rôle, de stats ou de rareté.

---

## Sécurité et accessibilité

- Les noms sont insérés avec `textContent`, **jamais** avec `innerHTML` : un nom piégé ne peut pas injecter de code.
- Les cartes sont utilisables **au clavier** et annoncées aux lecteurs d'écran (`role="button"`, `aria-pressed`).
- Les animations sont coupées si **« réduire les animations »** est activé dans le système.
- Tous les chemins sont **relatifs** : le site fonctionne aussi bien à la racine d'un domaine que dans un sous-dossier.

---

<p align="center"><em>En cas de doute, c'est le DNS.</em></p>
