


 README
1. Cifrado César

Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha



Pseudocódigo:

1. Pedir al usuario que ingrese una frase por medio de un prompt
2. Crear función que verifique que texto no contenga números ni este vacia.
4. Crear función cipher con dos parámetros(texto, display)
5. Crear condiciones, si contiene números no entra y manda mensaje ("Frase no valida! solo strings")
6. Crear una variable que almacene el texto
7. Se crea una variable que almacene el rango de desplazamiento en este caso 26, que corresponde a las letras del abecedario.
8. Se vuelve a recorrer el texto
9. Si el texto es >= a "a" y texto es <= indice
