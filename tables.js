

function table(num){
for (var i=1; i<=10; i++ )  {
    document.write (num + " X " + i +" = " + (num * i))
    document.write('<br/>')
}
}

for (var i=2; i<=50; i++) {
    table(i);
    document.write("-----------\n")
    document.write('<br/>')
}