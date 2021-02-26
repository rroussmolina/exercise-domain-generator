/*let pronombres = ['el', 'nosotros', 'ella', 'ellos'];
let adjetivo = ['bueno', 'grande', 'lindo', 'pequeño'];
let sustantivo = ['perro', 'lapiz', 'flores', 'gato'];
let dominios = ['com', 'net', 'org', 'es'];

for (let i = 0; i < pronombres.length; i++) {
    for (let j = 0; j < adjetivo.length; j++) {
        for (let k = 0; k < sustantivo.length; k++) {
            for (let l = 0; l < dominios.length; l++) {
                
                let tamDominios = dominios.length;
                let tamSustantivo = sustantivo.length;

                let newSustantivo = sustantivo[k].slice()

                let dom = pronombres[i] + adjetivo[j] + sustantivo[k] + '.' + dominios[l];
                console.log(dom);
            }
        }
    }
}*/

let pronombres = ['el','ella', 'ellos', 'nosotros'];
let adjetivos = ['genial', 'gran', 'lindos', 'bella' ];
let sustantivos = ['perros','casas', 'amor', 'profesores'];
let dominios = ['com','net', 'es'];

for(let i = 0; i<pronombres.length;i++){
    for(let j = 0; j<adjetivos.length;j++){
        for(let k = 0; k<sustantivos.length;k++){
            for(m = 0; m<dominios.length;m++){
                
                if(sustantivos[k].slice(-dominios[m].length)==dominios[m]){

                    let nuevosust = sustantivos[k].slice(0, -dominios.length+1);
                    x = pronombres[i]+adjetivos[j]+nuevosust+"."+dominios[m];
                    console.log(x);

                }
                    let res = pronombres[i]+adjetivos[j]+sustantivos[k] +"."+dominios[m]
                    console.log(res); 
            }
        }
    }
}