let fs = require("fs");

// Première méthode
// fs.readFile('./video.mp4', (err,data)=> {
//     if(err) throw err;
//     fs.writeFile('copy.mp4', data, (err)=>{
//         if(err) throw err;
//         console.log("Le fichier a bien été copié!")
//     })
// })
// ici le pb c'est que l'on va lire tout le fichier et stocker toutes les informations dans data => /!\  performances.
//En plus on doit attendre la lecture de l'ensemble de notre fichier avant de commencer l'écriture.

// l'idée serait de lire un fichier bloc par bloc, c'est là qu'intervient ReadStream

// Seconde méthode avec les Streams
let file = "video.mp4";

fs.stat(file, (err, stat) => {
  let sizetotal = stat.size;
  let progress = 0;

  let read = fs.createReadStream(file);
  let write = fs.createWriteStream("copy.pm4");
  let write2 = fs.createWriteStream("copy2.pm4");

  read.on("data", (chunck) => {
    // console.log("J'ai lu "+ chunck.length);
    progress += chunck.length;
    //console.log("J'ai lu " + Math.round((progress/sizetotal)*100) + "%");
  });

  // read.on('end', ()=>{
  //     console.log("J'ai fini de lire le fichier")
  // })

  // dans les cas ou on doit manager la lecture en fonction de la vitesse d'écriture pour ourra utiliser des pipes.
  // ici on connecte la lecture au pipe d'écriture pour éviter que l'on continue de lire le fichier si l'on a pas pu tout écrire en raison de la vitesse d'écriture.

  read.pipe(write);
  read.pipe(write2); // on peut gérer la lecture et l'écriture de 2 fichiers en parrallèle
  // on vérifié à la fin que fichier a bien eu le comportement souhaité
  write.on("finish", () => {
    console.log("Le fichier a bien été copié.");
  });
});
// Ici on parcours progressivement le fichier ce qui pour des gros fichier peut permettre de gagner en efficacité.
// Dans chunck on retrouve qu'une petite partie du fichier.
// l'autre avantage c'est que les flux peuvent etre greffés les uns aux autres.  createWriteStream

// règle petit fichier => on peut rester avec readFile
//          gros fichiers / plusieurs fichier a traiter en parrallèle  => on utilise les streams.
