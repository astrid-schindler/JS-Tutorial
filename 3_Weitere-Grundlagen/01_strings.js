"use strict"

let greeting = " ---Hej Dude!--- "

// Die Anzahl der Zeichen in einem String
console.log(greeting.length)

// Ein einzelnes Zeichen abfragen
console.log(greeting.charAt(3))

// Wo befindet sich das Zeichen in einem String?
console.log(greeting.indexOf("---" , 10))

// Großbuchstaben bzw. Kleinbuchstaben
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// Text ersetzen
console.log(greeting.replace("!","!!!"))

// Zeichen rechts und links vom String entfernen
console.log(greeting.trim())