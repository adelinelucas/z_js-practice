/// La notion d'évènement
const EventEmitter = require('events');


let monEcouteur = new EventEmitter()

monEcouteur.on('saute', function(){
    console.log('je saute')
})

// monEcouteur.once('saute', function(){
//     console.log('je saute')
// })
// Dans ce cas là l'évènement n'est pris en compte qu'une seule fois
monEcouteur.emit('saute')
monEcouteur.emit('saute')

