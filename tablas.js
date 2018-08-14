function Tablas() {
    var x = 0;
    var y = 0;
    for (x = 1; x <= 10; x++) {
        document.write("<h2>Tabla del " + x + "</h2>")
        document.write("<table border='1'>");
        for (y = 0; y <= 10; y++) {
            tabel = x * y;
            document.write("<tr><td>");
            document.write(x + "x" + y + "=" + tabel + "<br>");
            document.write("</td></tr>");
        }
        document.write("</table>");
        document.write("<br>")
    }

}