// =====================================================================
//  Données du jeu Git Legends
// ---------------------------------------------------------------------
//  C'est LE fichier à enrichir pendant le TP : ajoutez vos propres rôles,
//  manies, objets fétiches, devises…
//
//  Chaque ajout change les cartes générées : un bon moyen de voir l'effet
//  de chaque commit une fois déployé !
//
//  Règle d'or : une virgule après chaque élément, sauf le dernier.
// =====================================================================

window.GAME_DATA = {

  // Les rôles fictifs attribués aux membres de l'équipe.
  roles: [
    { title: "Mage du Rebase",            power: "Réécrit l'historique si proprement que personne ne remarque rien." },
    { title: "Paladin du Merge",          power: "Résout n'importe quel conflit avec calme et un grand café." },
    { title: "Druide des Branches",       power: "Fait pousser une branche par fonctionnalité, jamais deux fois la même." },
    { title: "Barde du Commit",           power: "Écrit des messages de commit si clairs qu'on les lit pour le plaisir." },
    { title: "Ninja du Cherry-pick",      power: "Récupère LE commit qu'il faut, sur n'importe quelle branche." },
    { title: "Alchimiste du Pipeline",    power: "Transforme un push en site déployé en moins de deux minutes." },
    { title: "Gardien du .gitignore",     power: "Aucun node_modules ne passera. Jamais." },
    { title: "Archiviste du git log",     power: "Retrouve qui a écrit cette ligne, et surtout pourquoi." },
    { title: "Chasseur de Bugs",          power: "Pratique git bisect comme un sport de compétition." },
    { title: "Sentinelle de la Revue",    power: "Repère la faute de frappe à la ligne 482 d'une pull request." },
    { title: "Oracle du Stash",           power: "Met son travail de côté et le retrouve intact trois jours plus tard." },
    { title: "Architecte du README",      power: "Rédige une documentation que les gens lisent vraiment." },
    { title: "Dompteur de HEAD détachée", power: "Ne panique pas en lisant « detached HEAD ». Sourit, même." },
    { title: "Templier du Tag",           power: "Marque chaque version comme on grave une stèle." },
    { title: "Spectre du Revert",         power: "Annule l'erreur d'hier sans effacer l'histoire." },
    { title: "Forgeron des Secrets",      power: "Ne commite jamais un mot de passe. Même pas « pour tester »." },
    { title: "Shaman du Blame",           power: "Invoque git blame… et découvre souvent que c'était lui-même." },
    { title: "Pilote du Fast-forward",    power: "Fusionne en ligne droite, sans le moindre commit de merge." }
  ],

  // Une petite manie, affichée au dos de la carte.
  quirks: [
    "Nomme ses branches d'après ses plats préférés.",
    "Fait un commit toutes les quatre minutes, chrono en main.",
    "Lit les messages d'erreur en entier. Si, si.",
    "Tape git status avant même de dire bonjour.",
    "Refuse de travailler sans thème sombre.",
    "Range ses onglets par ordre alphabétique.",
    "Parle à son canard en plastique pour déboguer.",
    "Écrit « fix » dans un commit uniquement en cas d'urgence absolue.",
    "Connaît par cœur la différence entre merge et rebase. Et l'explique.",
    "Pousse sur main le vendredi soir. Dangereux.",
    "A toujours un terminal ouvert, même pendant les repas.",
    "Commente son code en alexandrins."
  ],

  // L'objet fétiche de chaque légende.
  items: [
    "Clavier mécanique aux touches qui claquent",
    "Tasse « It works on my machine »",
    "Canard en plastique certifié debug",
    "Second écran vertical",
    "Sweat à capuche à l'effigie d'un octocat",
    "Carnet rempli de commandes git",
    "Casque antibruit de compétition",
    "Plante verte prénommée Commit"
  ],

  // La devise de l'équipe (une seule par équipe).
  mottos: [
    "Un commit par jour éloigne le conflit pour toujours.",
    "Chez nous, on ne pousse pas sur main sans relecture.",
    "Petits commits, grandes victoires.",
    "Notre historique Git est une œuvre d'art.",
    "Le vendredi, on ne déploie pas. On admire le pipeline.",
    "Branche, commite, fusionne, recommence.",
    "Zéro conflit, zéro stress.",
    "Le pipeline est vert, tout va bien."
  ],

  // Le nom d'équipe = un animal + un adjectif accordé en genre.
  teamAnimals: [
    { name: "Pandas",          gender: "m" },
    { name: "Licornes",        gender: "f" },
    { name: "Ratons Laveurs",  gender: "m" },
    { name: "Loutres",         gender: "f" },
    { name: "Hiboux",          gender: "m" },
    { name: "Pieuvres",        gender: "f" },
    { name: "Lamas",           gender: "m" },
    { name: "Tortues",         gender: "f" },
    { name: "Axolotls",        gender: "m" },
    { name: "Mouettes",        gender: "f" },
    { name: "Yétis",           gender: "m" },
    { name: "Baleines",        gender: "f" }
  ],
  teamAdjectives: [
    { m: "Asynchrones", f: "Asynchrones" },
    { m: "Fusionnés",   f: "Fusionnées" },
    { m: "Détachés",    f: "Détachées" },
    { m: "Compilés",    f: "Compilées" },
    { m: "Déployés",    f: "Déployées" },
    { m: "Récursifs",   f: "Récursives" },
    { m: "Quantiques",  f: "Quantiques" },
    { m: "Immuables",   f: "Immuables" },
    { m: "Sans Conflit", f: "Sans Conflit" },
    { m: "en Production", f: "en Production" }
  ],

  // Les quatre statistiques de chaque carte.
  stats: ["Commits", "Merge", "Debug", "Café"],

  // Les raretés : plus le poids est élevé, plus la rareté est fréquente.
  rarities: [
    { id: "commune",    label: "Commune",    weight: 50, bonus: 0 },
    { id: "rare",       label: "Rare",       weight: 30, bonus: 6 },
    { id: "epique",     label: "Épique",     weight: 15, bonus: 12 },
    { id: "legendaire", label: "Légendaire", weight: 5,  bonus: 20 }
  ],

  // Les rangs d'équipe, selon la puissance moyenne par membre.
  ranks: [
    { min: 0,   label: "Stagiaires prometteurs" },
    { min: 170, label: "Développeurs confirmés" },
    { min: 210, label: "Experts du terminal" },
    { min: 250, label: "Maîtres du dépôt" },
    { min: 290, label: "Légendes du Commit" }
  ]
};
