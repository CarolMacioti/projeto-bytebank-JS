//Classe Abstrata

export class Conta {
    
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo 'Conta' diretamente, pois esta é uma classe abstrata.")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }


// Método Abstrato
    sacar(valor){
    throw new Error("O método 'Sacar' da conta é abstrato.")
    }

/*         if(this._tipo == "corrente"){
            taxa = 1.1; /* taxa de 10% 
        }
 */
/*         if(this._tipo == "salario"){
            taxa = 1.05; /* taxa de 5% 
        } */

/*         if(this._tipo == "empresarial"){
            taxa = 1.15; /* taxa de 15% 
        } */


    _sacar(taxa, valor) {
        const valorSacado = taxa * valor;
      
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
/*         if(valor <= 100)
        {
            return; }*/
        
        this._saldo += valor;           
    }

    tranferir(valor, conta){

/*         if(this._tipo == "salario"){
           return } /* se for conta salário, não poderá transferir valores */
                
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}