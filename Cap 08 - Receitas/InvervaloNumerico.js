const texto = `0 1 10 192 199 201 249 254 255 256 312 1010 1512`

// números entre 0-255
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))

// \d{1,2} - qualquer número em 2 digitos (0,1,2,3...99)
// 1\d{2} - números que começam em 1 e tem 2 digitos seguidos(100,101,102...199)
// 2[0-4]\d - números que começam em 2 e tem o SEGUNDO digito entre 0,1,2,3,4 e o TERCEIRO digito \d é qualquer
// 25[0-5] - número que tem os DOIS PRIMEIROS dois digitos igual a 25 e ULTIMO ente 0,1,2,3,4,5
 