

var maincolor = document.querySelectorAll('ul.wpc-popover-controls-content')[0].querySelectorAll('li')
var maincolor_num = maincolor.length;

for (var i=0;i < maincolor.length;i++){
    maincolor[i].addEventListener('click', function(){
        var fitSection = document.querySelectorAll('ul.wpc-popover-controls-content')[1].querySelectorAll('li');
        
        // หาจำนวน List ของแต่ละผ้า
        var fitSection_num = fitSection.length;
        var fitSection_listNum = fitSection_num / maincolor_num

        // หาตำแหน่งที่ต้องใส่ none/block
        for (var n=0; n < fitSection_num ; n++) {
            var start =  i * fitSection_listNum
            var last = (i * fitSection_listNum) + fitSection_listNum - 1
            if (n >= start && n <= last) {
                document.querySelectorAll('ul.wpc-popover-controls-content')[1].querySelectorAll('li')[n].style.display = "block";
            } else {
                document.querySelectorAll('ul.wpc-popover-controls-content')[1].querySelectorAll('li')[n].style.display = "none";
            }
        }
    });
}
