function OddEven() {
    var newPage = window.open('', 'Wap to find odd or even.');
    var cCode = "#include \<stdio.h\>\nvoid main() {\n\tint number;\n\tprintf(\"Enter an integer: \");\n\tscanf(\"%d\", &number);\n\tif (number % 2 == 0) {\n\t\tprintf(\"%d is even.\\n\", number);\n\t} else {\n\t\tprintf(\"%d is odd.\\n\", number);\n\t}\n\n}";
    newPage.document.write("<h1>C Code:</h1>");
    newPage.document.write("<pre>" + cCode + "</pre>");
}
function Positive(){
    var newPage = window.open('', 'find positive negative or zero');
    var cCode ="#include <stdio.h>\nvoid main() {\n\tint number;\n\tprintf(\"Enter a number: \");\n\tscanf(\"%d\", &number);\n\tif (number > 0){\n\t\tprintf(\"The entered number is positive.\\n\");\n\t} \n\telse if (number < 0) {\n\t\tprintf(\"The entered number is negative.\\n\");\n\t}\n\telse {\n\t\tprintf(\"The entered number is zero.\\n\");\n\t}\n}";
    newPage.document.write("<h1>C Code</h1>");
    newPage.document.write("<pre>" + cCode + "</pre>");

}
function VS() {
    var newPage = window.open('', 'VS code on android');
    newPage.document.write("<h1>Vs-codeode (code-server)</h1>")
    newPage.document.write("<pre>1.Install termux\n2.run command 'termux-setup-storage'\n3.run command'pkg update && upgrade'\n4.Run command'pkg install tur-repo'\n5.Run command 'pkg install code-server'</pre> ");
    newPage.document.write("\n\n\nNote* Command can be only written below the sign  '~$'");
    newPage.document.write("(only of 38mb)");

        }
                           
