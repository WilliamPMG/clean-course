/* 
Clean Coat y Deuda Tecnica 
Deuda tecnica: falta de calidad en nuestro codigo o falta de calidad
en algun proceso de desarrollo de software (Falta de documentacion, falta de pruebas, falta de refactorizacion).
La falta de calidad en el codigo, que genera una deuda que repercutira en costos futuros.
La deuda tecnica genera costos economicos (Tiempo en realizar mantenimientos, Tiempo en refactorizar codigos, tiempo en comprender en codigo, tiempo en la transferencia del codigo)

Para pagar la deuda tecnica se paga con la refactorizacion
Refactorizar es simplemente un proceso que tiene como objetivo mejorar el codigo sin alterar su comportamiento para que sea mas entendible y tolerante a cambios.

Clean Code
- Nombres pronunciables y expresivos
- Ausencia de informacion tecnica en  nombres MAL => class UserClass Correcto=> class User
interface UserInterface Correcto=> interface User

Consideraciones para variables por tipo de dato
- Los nombres deben ser pronunciables y expresivos. 

Consideraciones de las clases 
- Las clases deben estar formados por un sustantivo y frase de sustantivo
- El nombre es lo mas importante de la clase
- No deben ser muy genericos
- Usar UpperCamelCase
*** 3 Preguntas para determinar saber si es un buen nombre para la  clase
Que exactamente hace la clase?
Como exactamente esta clase realiza cierta tarea?
Hay algo especifico sobre su ubicacion?

Tener en cuenta si algo no tiene sentido, remuevelo o refactoriza.

mas palabras !== mejor nombre

Nombres de funciones, argumentos y parametros

-- Sabemos que estamos desarrollando código limpio cuando cada función hace exactamente lo que su nombre lo indica. Ward Cunningham
Los parametros deben ser limitados a 3 parametros o 1 en las funciones para tener un codigo limpio.


*/