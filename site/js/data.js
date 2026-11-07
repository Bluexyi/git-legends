window.GAME_DATA = {

  // rôles des membres
  roles: [
    { title: "Mage du Terraform",         power: "Détruit et recrée toute une infra sans perdre un seul octet." },
    { title: "Paladin du Pare-feu",       power: "Ferme tous les ports. Ouvre le 443 après trois réunions." },
    { title: "Druide du Subnet",          power: "Découpe un /16 en sous-réseaux de tête, sans calculatrice." },
    { title: "Gardien du Root",           power: "Ne se connecte jamais en root. Sauf en cas d'incendie." },
    { title: "Ninja du SSH",              power: "Rebondit sur trois bastions sans taper un seul mot de passe." },
    { title: "Alchimiste du Pipeline",    power: "Transforme un push en déploiement en moins de deux minutes." },
    { title: "Chamane du DNS",            power: "Sait que c'est toujours le DNS. Même quand ce n'est pas le DNS." },
    { title: "Archiviste des Logs",       power: "Retrouve l'erreur dans 4 Go de journaux avec un seul grep." },
    { title: "Chasseur de Latence",       power: "Gagne 3 ms sur un ping et en parle pendant une semaine." },
    { title: "Sentinelle du Monitoring",  power: "Reçoit l'alerte avant que le serveur ne tombe." },
    { title: "Oracle des Backups",        power: "A testé la restauration. Pas seulement la sauvegarde." },
    { title: "Pilote du Kubernetes",      power: "Redémarre un pod sans réveiller tout le cluster." },
    { title: "Dompteur de VLAN",          power: "Isole un réseau entier avec deux lignes de configuration." },
    { title: "Templier de l'Astreinte",   power: "Répond à 3 h du matin, et de bonne humeur." },
    { title: "Spectre du Rollback",       power: "Revient à la version d'hier avant que le client ne remarque." },
    { title: "Forgeron des Certificats",  power: "Renouvelle les certificats avant leur expiration. Toujours." },
    { title: "Maître du Load Balancer",   power: "Répartit la charge si bien que personne ne la sent." },
    { title: "Sorcier du Shell",          power: "Écrit un script bash de 200 lignes qui marche du premier coup." }
  ],

  // manies (dos de la carte)
  quirks: [
    "Nomme ses serveurs d'après des planètes.",
    "Tape ls après chaque cd, par réflexe.",
    "Lit les messages d'erreur en entier. Si, si.",
    "Lance un ping 8.8.8.8 avant de dire bonjour.",
    "Refuse de travailler sans thème sombre.",
    "A plus de terminaux ouverts que d'onglets.",
    "Explique ses problèmes réseau à un canard en plastique.",
    "Ne redémarre jamais un serveur un vendredi.",
    "Connaît son adresse IP publique par cœur.",
    "Met des alias partout, même pour ls.",
    "Vérifie trois fois avant un rm -rf.",
    "Documente ses scripts. Vraiment."
  ],

  // objets fétiches
  items: [
    "Câble RJ45 serti à la main",
    "Tasse « It works on my machine »",
    "Clé USB bootable de secours",
    "Second écran vertical rempli de logs",
    "Raspberry Pi qui héberge tout son réseau",
    "Carnet rempli d'adresses IP",
    "Casque antibruit pour la salle serveur",
    "Câble console bleu de Cisco"
  ],

  // devises d'équipe
  mottos: [
    "Si ça marche, on n'y touche pas.",
    "Nos serveurs ne dorment jamais. Nous si.",
    "Infrastructure as Code, ou rien.",
    "Le vendredi, on ne déploie pas. On surveille.",
    "Une sauvegarde non testée n'est pas une sauvegarde.",
    "Automatiser une fois, dormir pour toujours.",
    "Zéro downtime, zéro stress.",
    "Le pipeline est vert, tout va bien."
  ],

  // nom d'équipe : animal + adjectif accordé
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
    { m: "Conteneurisés", f: "Conteneurisées" },
    { m: "Virtualisés",   f: "Virtualisées" },
    { m: "Redondants",    f: "Redondantes" },
    { m: "Chiffrés",      f: "Chiffrées" },
    { m: "Orchestrés",    f: "Orchestrées" },
    { m: "Scalables",     f: "Scalables" },
    { m: "Immuables",     f: "Immuables" },
    { m: "Haute Dispo",   f: "Haute Dispo" },
    { m: "Sans Downtime", f: "Sans Downtime" },
    { m: "en Production", f: "en Production" }
  ],

  // statistiques
  stats: ["Uptime", "Réseau", "Scripts", "Café"],

  // raretés : plus le poids est grand, plus elle est fréquente
  rarities: [
    { id: "commune",    label: "Commune",    weight: 50, bonus: 0 },
    { id: "rare",       label: "Rare",       weight: 30, bonus: 6 },
    { id: "epique",     label: "Épique",     weight: 15, bonus: 12 },
    { id: "legendaire", label: "Légendaire", weight: 5,  bonus: 20 }
  ],

  // rangs d'équipe selon la puissance moyenne par membre
  ranks: [
    { min: 0,   label: "Stagiaires du helpdesk" },
    { min: 170, label: "Admins sys confirmés" },
    { min: 210, label: "Ingénieurs réseau" },
    { min: 250, label: "Architectes cloud" },
    { min: 290, label: "Légendes de l'astreinte" }
  ]
};
