function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    // resolve: funçao que será chamada quando a promessa for resolvida
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}

falarDepoisDe(3, 'que legal').then(frase => frase.concat('?!?')).then(outrafrase => console.log(outrafrase))
