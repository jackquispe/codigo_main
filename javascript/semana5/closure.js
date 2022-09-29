function primerFuncion(){
    let valor1 ="valor 1"

    function segundaFuncion(){
        console.log(valor1)

        function terceraFuncion(){
            console.log("tercera funcion "+ valor1)

            function cuartaFuncion(){
                console.log("Cuarta funcion "+ valor1 + " valor4")

            }
            return cuartaFuncion();
        }
        return terceraFuncion();
    }
    return segundaFuncion();
}
primerFuncion()