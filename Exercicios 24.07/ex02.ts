// 2. Imprimir números pares de 1 a 10.

export function ex02() {

    for(let contador: number = 1; contador <= 10; contador++) {
        if( contador % 2 == 0) {
            console.log(contador)
        }
    }

}