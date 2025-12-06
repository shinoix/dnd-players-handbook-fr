Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
		console.log("BABELE LOADED");
        Babele.get().register({
            module: 'dnd-players-handbook-fr',
            lang: 'fr',
            dir: 'compendium'
        });
    } else {
	console.log("-- /!\ Module BABELE non activé /!\ --");
	}
});