function OddEven() {
    var newPage = window.open('', 'Wap to find odd or even.');
    var cCode = "#include <stdio.h>\n\nint main() {\n\tint number;\n\n\t// Input from the user\n\tprintf(\"Enter an integer: \");\n\tscanf(\"%d\", &number);\n\n\t// Check if the number is even or odd\n\tif (number % 2 == 0) {\n\t\tprintf(\"%d is even.\\n\", number);\n\t} else {\n\t\tprintf(\"%d is odd.\\n\", number);\n\t}\n\n\treturn 0;\n}";
    newPage.document.write("<h1>C Code:</h1>");
    newPage.document.write("<pre>" + cCode + "</pre>");
  
}
