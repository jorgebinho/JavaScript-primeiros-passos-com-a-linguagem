/*
* Ser autenticavel significa ter o método "Autenticar"
*/
export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        } else {
            return false;
        }
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel
    }
}