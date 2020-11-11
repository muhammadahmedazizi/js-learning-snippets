star = "   *   ";

for (var i=1; i <= 7; i++){
        document.write(star);
        star = star[0] = "*";
        document.write(star)
        //document.write(star.repeat(i))
        document.write("<br />")
    }