/* window.onload = function() {
                    var selector = ".nav li";

                    var lis = document.querySelectorAll(selector);

                    var workWithLi = function(li) {
                        li.addEventListener('click', function() {
                            lis.forEach(function(it) {
                                it.classList.remove('active');
                            });

                            li.classList.add('active');
                        });
                    };

                    lis.forEach(workWithLi);
                }*/

        $(window).ready(function() { // ждем готовности окна
        		var lis = $('.nav li'); // сохраняем ссылки на элементы
            lis.on('click', function() { // вешаем на каждый элемент обработчик клик
                $(this).toggleClass('active');	//в переменной this хранится текущий элемент, ставим ему active если его нет и наоборот
            })
        });