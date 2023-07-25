// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.


export function ex05() { 

    let anterior: number = 0
    let prox: number = 1
    
    console.log(anterior)
    console.log(prox)
    
    for ( let contador: number = 3; contador <= 10; contador++ ) {
    
        let fib: number = anterior + prox
    
        anterior = prox
        prox = fib
        console.log(fib)
    }
    
    // 0 1 1 2 3 5 8 
}
    