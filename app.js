
        var tooltipSpan = document.querySelector('.tag_name');

        window.onmousemove = function (e) {
            var x = e.clientX,
                y = e.clientY;
            tooltipSpan.style.top = (y + 20) + 'px';
            tooltipSpan.style.left = (x + 20) + 'px';
        };
   