function OddEven() {
    var newPage = window.open('', 'Wap to find odd or even.');
    var cCode = "\n\nint main() {\n\tint number;\n\n\t// Input from the user\n\tprintf(\"Enter an integer: \");\n\tscanf(\"%d\", &number);\n\n\t// Check if the number is even or odd\n\tif (number % 2 == 0) {\n\t\tprintf(\"%d is even.\\n\", number);\n\t} else {\n\t\tprintf(\"%d is odd.\\n\", number);\n\t}\n\n\treturn 0;\n}";
    newPage.document.write("<h1>Wap to find odd or even.</h1>");
    newPage.document.write("<pre>" + cCode + "</pre>");
}

function Mul(){

    var newPage = window.open('', 'Wap to find odd or even.');
    var cCode = "\n\nint main() {\n\tint number,i;\n\tprintf(\"Enter an integer: \");\n\tscanf(\"%d\", &number);\n\tfor(i=1;i<=10;i++){\n\t\tprintf(\"%d * %d = %d\n\",number,i,number*i);\n\t}\n\n\treturn 0;\n}";
    newPage.document.write("<h1>Wap to find odd or even.</h1>");
    newPage.document.write("<pre>" + cCode + "</pre>");
}

function palindrome(){
    var newPage = window.open('', '');
    var cCode = "\nint main(){\n\tint reverse=0,remainder=0,number,temp=0;\n\tprintf(\"Enter nnumber:\");\n\tscanf(\"%d\",&number);\n\ttemp= number;\n\twhile (number > 0) {\n\t\tremainder = number % 10;\n\t\treverse = reverse * 10 + remainder;\n\t\tnumber /= 10;\n\t}\n\tnumber = temp;\n\tif(number==reverse){\n\t\tprintf(\"The number %d is palindrome\",number);\n\t}\n\telse {\n\t printf(\"The number %d isn't palindrome\",number);\n\t}\n\treturn 0;\n}";
    newPage.document.write("<h1>Wap to find wearher the given number is palindrome or not.</h1>");
    newPage.document.write("<pre>" + cCode + "</pre>");


}

function Positive(){
    var newPage = window.open('', 'find positive negative or zero');
    var cCode ="\nvoid main() {\n\tint number;\n\tprintf(\"Enter a number: \");\n\tscanf(\"%d\", &number);\n\tif (number > 0)\n\t\t\tprintf(\"The entered number is positive.\"); \n\telse if (number < 0) \n\t\t\tprintf(\"The entered number is negative.\");\n\telse \n\t\tprintf(\"The entered number is zero.\");\n}";
    newPage.document.write("<h1>find positive negative or zero</h1>");
    newPage.document.write("<pre>" + cCode + "</pre>");

}

function Prime(){
    var newPage = window.open('', 'find prime');
    var cCode = "void main(){\n\tint number,i,count =0;\n\tprintf(\"Enter number:\");\n\tscanf(\"%d\",&number);\n\tfor(i=1;i<=number;i++){\n\t\tif(number%i==0){\n\t\t\tcount++;\n\t\t}\n\t}\n\tif(count == 2){\n\t\tprintf(\"The number %d is prime.\",number);\n\t}\n\telse{\n\t\tprintf(\"The number %d is composite\",number);\n\t}\n}";
    newPage.document.write("<h1>Wap to find prime or composite.</h1>");
    newPage.document.write("<pre>" + cCode + "</pre>");
}

function VS() {
    var newPage = window.open('', 'VS code on android');
    newPage.document.write("<h1>Vs-codeode (code-server)</h1>")
    newPage.document.write("<pre>1.Install termux\n2.run command 'termux-setup-storage'\n3.run command'pkg update && upgrade'\n4.Run command'pkg install tur-repo'\n5.Run command 'pkg install code-server'</pre> ");
    newPage.document.write("\n\n\nNote* Command can be only written below the sign  '~$'");
    newPage.document.write("(only of 38mb)");

}
