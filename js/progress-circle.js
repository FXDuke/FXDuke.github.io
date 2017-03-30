/*
* Progress Circle
*/

'use strict';

function progressCircle(selector, options) {
    let cnv = document.querySelectorAll(selector);

    let optionsCircle = {
        percent: 50,
        radius: 30,
        lineWidth: options.lineWidth || 10,
        color_backgroud: options.color_backgroud || '#333',
        color_arc: options.color_arc || '#2dade8',
        font: options.font || 'bold 24px Arial',
        fontColor: options.fontColor || '#333'
    };

    for (let i = 0, len = cnv.length; i < len; i++) {
        optionsCircle = {
            percent: parseFloat(cnv[i].textContent),
            radius: (cnv[i].width - options.lineWidth) / 2,
            lineWidth: options.lineWidth || 10,
            color_backgroud: options.color_backgroud || '#333',
            color_arc: options.color_arc || '#2dade8',
            font: options.font || 'bold 24px Arial',
            fontColor: options.fontColor || '#333'
        };
        drawCircle(cnv[i], optionsCircle);
        // запуск анимации при клике мышкой по элементу, длительностью 1 секунда
        cnv[i].addEventListener('click', ()=> {
            animate(cnv[i], draw, 1000);
        });
        // запуск анимации при старте
        animate(cnv[i], draw, 1000);
    }

    // Функция анимации на основе requestAnimationFrame
    function animate(element, draw, duration) {
        var start = performance.now();

        requestAnimationFrame(function animate(time) {
            // определить, сколько прошло времени с начала анимации
            var timePassed = time - start;

            // возможно небольшое превышение времени, в этом случае зафиксировать конец
            if (timePassed > duration) timePassed = duration;

            // нарисовать состояние анимации в момент timePassed
            draw(element, timePassed);

            // если время анимации не закончилось - запланировать ещё кадр
            if (timePassed < duration) {
                requestAnimationFrame(animate);
            }

        });
    }

    // изменения при анимации
    function draw(element, timePassed) {
        optionsCircle.percent = parseFloat(element.textContent) * timePassed / 1000;
        drawCircle(element, optionsCircle);
    }

    function drawCircle(canvas, optionsCircle) {
        let cnvC = canvas.getContext('2d');
        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;

        cnvC.clearRect(0,0,canvas.width,canvas.height);

        // text in center
        cnvC.font = optionsCircle.font;
        cnvC.fillStyle = optionsCircle.fontColor;
        cnvC.textBaseline = 'middle';
        cnvC.textAlign = 'center';
        cnvC.fillText(Math.round(optionsCircle.percent) + '%', centerX, centerY);

        // circle in background
        cnvC.save();
        cnvC.strokeStyle = optionsCircle.color_backgroud;
        cnvC.lineWidth = optionsCircle.lineWidth * 0.9;
        cnvC.beginPath();
        cnvC.arc(centerX, centerY, optionsCircle.radius, 0, Math.PI * 2, false);
        cnvC.closePath();
        cnvC.stroke();
        cnvC.restore();

        // arc
        cnvC.save();
        cnvC.translate(centerX, centerY);
        cnvC.rotate(-Math.PI / 2);
        cnvC.strokeStyle = optionsCircle.color_arc;
        cnvC.lineWidth = optionsCircle.lineWidth;
        cnvC.beginPath();
        cnvC.arc(0, 0, optionsCircle.radius, 0, Math.PI * optionsCircle.percent / 50, false);
        cnvC.stroke();
        cnvC.closePath();
        cnvC.restore();
    }
}
