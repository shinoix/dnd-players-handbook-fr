Hooks.on('init', () => {
  if (typeof Babele === 'undefined') {
    console.log("BABELE NON ACTIF pour dnd-players-handbook-fr");
    return;
  }

  console.log("BABELE LOADED pour dnd-players-handbook-fr");

  Babele.get().register({
    module: 'dnd-players-handbook-fr',
    lang: 'fr',
    dir: 'compendium'
  });
});

// Traduction des titres "App. A / B / C / D" dans la navigation du livre PHB (colonne de gauche)

Hooks.on("ready", () => {
  // Dictionnaire des remplacements (on travaille en MAJUSCULES pour être sûrs)
  const replacements = {
    "APP. A: THE MULTIVERSE": "Annexe A : Le multivers",
	"APP. B: CREATURE STAT BLOCKS": "Annexe B: Profils de créature",
	"APP. C: RULES GLOSSARY": "Annexe C: Glossaire de règles",
	"CREDITS": "Crédits",
	"WELCOME TO ADVENTURE": "Aux portes de l'aventure",
	"CH. 1: PLAYING THE GAME": "Ch. 1: Comment jouer",
	"CH. 2: CREATING A CHARACTER": "Ch. 2: Création de personnage",
	"CH. 3: CHARACTER CLASSES": "Ch. 3: Classes de personnage",
	"CH. 4 CHARACTER ORIGINS": "Ch. 4: Origines des personnages",
	"CH. 5 FEATS": "Ch. 5: Dons",
	"CH. 6: EQUIPMENT": "Ch. 6: Équipement",
	"CH. 7: SPELLS": "Ch. 7: Sorts"
    // tu pourras ajouter les autres ensuite :
    // "APP. B: CREATURE STAT BLOCKS": "Annexe B : Profils de créature",
    // "APP. C: RULES GLOSSARY": "Annexe C : Glossaire de règles",
    // "APP. D: RULE REFERENCES": "Annexe D : Références"
  };

  // Fonction qui scanne la page et remplace les textes concernés
  const translateBookNav = () => {
    // On cible tous les liens de navigation du "livre"
    const links = document.querySelectorAll("a.journal-entry-link");

    links.forEach((el) => {
      const key = el.textContent.trim().toUpperCase();
      const newText = replacements[key];
      if (newText && el.textContent.trim() !== newText) {
        el.textContent = newText;
      }
    });
  };

  // 1) On lance une première fois (si le livre est déjà ouvert)
  translateBookNav();

  // 2) On installe un observer pour ré-appliquer à chaque changement du DOM
  const observer = new MutationObserver(() => translateBookNav());
  observer.observe(document.body, { childList: true, subtree: true });
});






