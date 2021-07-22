<?php require_once './function.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Practics. Unit 04</title>
    <link rel="stylesheet" href="css/mustard-ui.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <h1>Unit 04. Циклы в PHP. Цикл for</h1>
    <h2><a href="https://itgid.info/course/php" target="_blank">PHP Практический. Stage 2 - курс Лущенко
            Александра</a></h2>
    <section>
        <p><b>Task 1.</b></p>
        <?php
        // Task 1
        // Функция t1 дожна присвоить в переменную $out1 строку от a до b через пробел. И вывести строку на экран с помощью echo.
        // Ввели 4 и 8 получили 4 5 6 7 8
        $a = 5;
        $b = 22;
        $out1 = '';
        t1(); // запускаем функцию

        ?>
    </section>
    <section>
        <p><b>Task 2.</b></p>
        <?php
        // Task 2
        // Функция t2 дожна присвоить в переменную $out2 строку от d до e через пробел c шагом 2. Т.е. ввели 4 и 10 и получили строку
        // 4 6 8 10.  Вывести строку на экран с помощью echo.

        $d = 22;
        $e = 38;
        $out2 = '';
        t2();

        ?>
    </section>
    <section>
        <p><b>Task 3.</b></p>
        <?php
        // Task 3
        // Функция t3 дожна присвоить в переменную $out3 строку от f до g через пробел c шагом 2. Т.е. ввели 14 и 2 и получили строку
        // 14 12 10 8 6 4 2.  Вывести строку на экран с помощью echo.

        $f = 102;
        $g = 94;
        $out3 = '';

        t3();


        ?>
    </section>
    <section>
        <p><b>Task 4.</b></p>
        <?php
        // Task 4
        // Функция t4 дожна присвоить в переменную $out4 строку от введенных переменных $num1 и $num2.
        // Функция должна выводить строку от меньшего к большему через пробел. Т.е. если числа 3 и 6 то выводим
        // 3 4 5 6
        // и если 6 и 3 то результат такой же. Т.е. мы не знаем какая из переменных будет больше.
        // Вывести строку на экран с помощью echo.

        $num1 = 6;
        $num2 = 8;
        $out4 = '';

        t4();


        ?>
    </section>
    <section>
        <p><b>Task 5.</b></p>
        <?php
        // Task 5
        // Функция t5 должна выводить строку вида 5 0 4 1 3 2 2 3 1 4 0 5 в $out5. Делается с помощью одного цикла.
        // Вывести на страницу.

        $out5 ='';
        t5();

        ?>
    </section>

    <section>
        <p><b>Task 6.</b></p>
        <?php
        // Task 6
        // Функция t6 должна выводить строку вида 1 * 2 * 3 * 4 * в $out6. Конечное число берется из переменной $k.
        // Делается с помощью одного цикла.
        // Вывести на страницу.

        $k = 6;
        $out6 ='';
        t6();

        ?>
    </section>

    <section>
        <p><b>Task 7.</b></p>
        <?php
        // Task 7
        // Функция t7 должна выводить строку вида 1 * 2 ** 3 * 4 ** в $out7. Конечное число берется из переменной $m.
        // Количество звездочек зависит от четности ли не четности числа.
        // Делается с помощью одного цикла.
        // Вывести на страницу.

        $m = 6;
        $out7 ='';
        t7();

        ?>
    </section>

    <section>
        <p><b>Task 8.</b></p>
        <?php
        // Task 8
        // Функция t8 должна выводить строку вида 1 0 3 0 4 0 5 0 в $out8. Конечное число берется из переменной $n.
        // Все четные числа заменяются на 0
        // Делается с помощью одного цикла.
        // Вывести на страницу.

        $n = 6;
        $out8 ='';
        t8();

        ?>
    </section>
    <section>
        <p><b>Task 9.</b></p>
        <?php
        // Task 9
        // Функция t9 должна выводить в out9 3 ряда звездочек по 3 звездочки в ряду в  $out9.
        // ***<br>
        // ***<br>
        // ***<br>
        // Делается с помощью одного цикла - который рисует строку '***<br>'
        // Вывести на страницу.

        $out9 ='';
        t9();

        ?>
    </section>
    <section>
        <p><b>Task 10.</b></p>
        <?php
        // Task 10
        // Функция t10 должна выводить в out10 четные года начиная с указанного, до 2020 года.
        // Также выводить на экран с помощью echo. Указанный год брать с переменной t.

        $out10 ='';
        $t = 2012;
        t10();

        ?>
    </section>
</div>
</body>
</html>
