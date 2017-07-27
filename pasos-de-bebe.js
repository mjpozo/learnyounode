
var suma = 0;
var large = process.argv.length;
for (i=2 ; i<=large-1 ; i++){
	suma += parseInt(process.argv[i]);
}
console.log(suma)