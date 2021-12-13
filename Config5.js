{/* <script type='text/javascript'> */}

var fit = [document.querySelectorAll('ul.wpc-popover-controls-content')[1].querySelectorAll('li')[0], document.querySelectorAll('ul.wpc-popover-controls-content')[1].querySelectorAll('li')[1]];
var wbsize = [document.querySelectorAll('ul.wpc-popover-controls-content')[4].querySelectorAll('li')[0], document.querySelectorAll('ul.wpc-popover-controls-content')[4].querySelectorAll('li')[1]];
var extend = [
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[0].querySelectorAll('li')[0],
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[0].querySelectorAll('li')[1],
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[0].querySelectorAll('li')[2],
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[0].querySelectorAll('li')[3]
];
var backPocket_placement = [
    document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[0].querySelectorAll('li')[0],
    document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[0].querySelectorAll('li')[1],
    document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[0].querySelectorAll('li')[2],
]
var backPocket_button = [
    document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[17].querySelectorAll('li')[0],
    document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[17].querySelectorAll('li')[1]
]

// Onload Click

window.addEventListener('load',function(){
    fit[0].click()
    wbsize[0].click()
    extend[1].click()
    document.querySelectorAll('ul.wpc-popover-controls-content')[2].querySelectorAll('li')[1].click() // Cuff
    document.querySelectorAll('ul.wpc-popover-controls-content')[3].querySelectorAll('li')[1].click() // Pleat
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[6].click() // Edge
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[3].click() // Belt Loop
    document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[0].click() // Break
    backPocket_placement[2].click()
    backPocket_button[1].click()

})

// Choice Number

var select_choice = {
    'cuff': 0,
    'wbstyle_extend': 0,
    'wbstyle_edge': 0,
    'wbstyle_belt': 0,
    'backpocket_place':0,
    'backpocket_style':0,
    'backpocket_button':0
}

// Cuff Choice

    document.querySelectorAll('ul.wpc-popover-controls-content')[2]
    .querySelectorAll('li')[0]
    .addEventListener('click', function(){
        select_choice['cuff'] = 0
    });
    
    document.querySelectorAll('ul.wpc-popover-controls-content')[2]
    .querySelectorAll('li')[1]
    .addEventListener('click', function(){
        select_choice['cuff'] = 1
    });
    
    document.querySelectorAll('ul.wpc-popover-controls-content')[2]
    .querySelectorAll('li')[2]
    .addEventListener('click', function(){
        select_choice['cuff'] = 2
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[2]
    .querySelectorAll('li')[3]
    .addEventListener('click', function(){
        select_choice['cuff'] = 3
    });

// Waistband Style >> Extend Choice

    extend[0]
    .addEventListener('click', function(){
        select_choice['wbstyle_extend'] = 0
    });

    extend[1]
    .addEventListener('click', function(){
        select_choice['wbstyle_extend'] = 1
    });

    extend[2]
    .addEventListener('click', function(){
        select_choice['wbstyle_extend'] = 2
    });

    extend[3]
    .addEventListener('click', function(){
        select_choice['wbstyle_extend'] = 3
    });

// Waistband Style >> Edge Choice

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[0]
    .addEventListener('click', function(){
        select_choice['wbstyle_edge'] = 0
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[1]
    .addEventListener('click', function(){
        select_choice['wbstyle_edge'] = 1
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[2]
    .addEventListener('click', function(){
        select_choice['wbstyle_edge'] = 2
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[3]
    .addEventListener('click', function(){
        select_choice['wbstyle_edge'] = 3
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[4]
    .addEventListener('click', function(){
        select_choice['wbstyle_edge'] = 4
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[5]
    .addEventListener('click', function(){
        select_choice['wbstyle_edge'] = 5
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[6]
    .addEventListener('click', function(){
        select_choice['wbstyle_edge'] = 6
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[7]
    .addEventListener('click', function(){
        select_choice['wbstyle_edge'] = 7
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[8]
    .addEventListener('click', function(){
        select_choice['wbstyle_edge'] = 8
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[9]
    .addEventListener('click', function(){
        select_choice['wbstyle_edge'] = 9
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[10]
    .addEventListener('click', function(){
        select_choice['wbstyle_edge'] = 10
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[11]
    .addEventListener('click', function(){
        select_choice['wbstyle_edge'] = 11
    });

// Waistband Style >> Belt Loop Choice

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[18]
    .querySelectorAll('li')[0]
    .addEventListener('click', function(){
        select_choice['wbstyle_belt'] = 0
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[18]
    .querySelectorAll('li')[1]
    .addEventListener('click', function(){
        select_choice['wbstyle_belt'] = 1
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[18]
    .querySelectorAll('li')[2]
    .addEventListener('click', function(){
        select_choice['wbstyle_belt'] = 2
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[18]
    .querySelectorAll('li')[3]
    .addEventListener('click', function(){
        select_choice['wbstyle_belt'] = 3
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[18]
    .querySelectorAll('li')[4]
    .addEventListener('click', function(){
        select_choice['wbstyle_belt'] = 4
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[18]
    .querySelectorAll('li')[5]
    .addEventListener('click', function(){
        select_choice['wbstyle_belt'] = 5
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[18]
    .querySelectorAll('li')[6]
    .addEventListener('click', function(){
        select_choice['wbstyle_belt'] = 6
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[18]
    .querySelectorAll('li')[7]
    .addEventListener('click', function(){
        select_choice['wbstyle_belt'] = 7
    });

// Back Pocket >> Place Choice

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[0]
    .querySelectorAll('li')[0]
    .addEventListener('click', function(){
        select_choice['backpocket_place'] = 0
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[0]
    .querySelectorAll('li')[1]
    .addEventListener('click', function(){
        select_choice['backpocket_place'] = 1
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[0]
    .querySelectorAll('li')[2]
    .addEventListener('click', function(){
        select_choice['backpocket_place'] = 2
    });

// Back Pocket >> Style Choice

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[4]
    .querySelectorAll('li')[0]
    .addEventListener('click', function(){
        select_choice['backpocket_style'] = 0
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[4]
    .querySelectorAll('li')[1]
    .addEventListener('click', function(){
        select_choice['backpocket_style'] = 1
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[4]
    .querySelectorAll('li')[2]
    .addEventListener('click', function(){
        select_choice['backpocket_style'] = 2
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[4]
    .querySelectorAll('li')[3]
    .addEventListener('click', function(){
        select_choice['backpocket_style'] = 3
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[4]
    .querySelectorAll('li')[4]
    .addEventListener('click', function(){
        select_choice['backpocket_style'] = 4
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[4]
    .querySelectorAll('li')[5]
    .addEventListener('click', function(){
        select_choice['backpocket_style'] = 5
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[4]
    .querySelectorAll('li')[6]
    .addEventListener('click', function(){
        select_choice['backpocket_style'] = 6
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[4]
    .querySelectorAll('li')[7]
    .addEventListener('click', function(){
        select_choice['backpocket_style'] = 7
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[4]
    .querySelectorAll('li')[8]
    .addEventListener('click', function(){
        select_choice['backpocket_style'] = 8
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[4]
    .querySelectorAll('li')[9]
    .addEventListener('click', function(){
        select_choice['backpocket_style'] = 9
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[4]
    .querySelectorAll('li')[10]
    .addEventListener('click', function(){
        select_choice['backpocket_style'] = 10
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[4]
    .querySelectorAll('li')[11]
    .addEventListener('click', function(){
        select_choice['backpocket_style'] = 11
    });

// Back Pocket >> Button Choice

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[17]
    .querySelectorAll('li')[0]
    .addEventListener('click', function(){
        select_choice['backpocket_button'] = 0
    });

    document.querySelectorAll('ul.wpc-popover-controls-content')[7]
    .querySelectorAll('li')[17]
    .querySelectorAll('li')[1]
    .addEventListener('click', function(){
        select_choice['backpocket_button'] = 1
    });


{/* Fit show & hide */}

fit[0].addEventListener('click', function(){
    document.querySelectorAll('ul.wpc-popover-controls-content')[2].querySelectorAll('li')[0].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[2].querySelectorAll('li')[1].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[2].querySelectorAll('li')[2].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[2].querySelectorAll('li')[3].style.display="none";

    // change select "Cuff"

    if(select_choice['cuff']-2 >= 0){
        select_choice['cuff'] = select_choice['cuff'] - 2;
    }
    document.querySelectorAll('ul.wpc-popover-controls-content')[2]
    .querySelectorAll('li')[select_choice['cuff']]
    .click()

});

fit[1].addEventListener('click', function(){
    document.querySelectorAll('ul.wpc-popover-controls-content')[2].querySelectorAll('li')[0].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[2].querySelectorAll('li')[1].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[2].querySelectorAll('li')[2].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[2].querySelectorAll('li')[3].style.display="block";

    // change select "Cuff"

    if(select_choice['cuff']-2 < 0){
        select_choice['cuff'] = select_choice['cuff'] + 2;
    }
    document.querySelectorAll('ul.wpc-popover-controls-content')[2]
    .querySelectorAll('li')[select_choice['cuff']]
    .click()

});

{/* Waistband Size show & hide */}

wbsize[0].addEventListener('click', function(){

    // Extend

    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[0].querySelectorAll('li')[0].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[0].querySelectorAll('li')[1].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[0].querySelectorAll('li')[2].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[0].querySelectorAll('li')[3].style.display="none";

    // change select "Extend"

    if(select_choice['wbstyle_extend']-2 >= 0){
        select_choice['wbstyle_extend'] = select_choice['wbstyle_extend'] - 2;
    }
    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[0]
    .querySelectorAll('li')[select_choice['wbstyle_extend']]
    .click()

    // Belt Loop

    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[0].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[1].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[2].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[3].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[4].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[5].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[6].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[7].style.display="none";

    // change select "Belt Loop"

    if(select_choice['wbstyle_belt']-4 >= 0){
        select_choice['wbstyle_belt'] = select_choice['wbstyle_belt'] - 4;
    }
    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[18]
    .querySelectorAll('li')[select_choice['wbstyle_belt']]
    .click()

});

wbsize[1].addEventListener('click', function(){

    // Extend

    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[0].querySelectorAll('li')[0].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[0].querySelectorAll('li')[1].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[0].querySelectorAll('li')[2].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[0].querySelectorAll('li')[3].style.display="block";

    // change select "Extend"

    if(select_choice['wbstyle_extend']-2 < 0){
        select_choice['wbstyle_extend'] = select_choice['wbstyle_extend'] + 2;
    }
    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[0]
    .querySelectorAll('li')[select_choice['wbstyle_extend']]
    .click()

    // Belt Loop

    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[0].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[1].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[2].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[3].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[4].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[5].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[6].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[18].querySelectorAll('li')[7].style.display="block";

    // change select "Belt Loop"

    if(select_choice['wbstyle_belt']-4 < 0){
        select_choice['wbstyle_belt'] = select_choice['wbstyle_belt'] + 4;
    }
    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[18]
    .querySelectorAll('li')[select_choice['wbstyle_belt']]
    .click()

});

{/* Extend show & hide */}

extend[0].addEventListener('click', function(){ // Short Regular

    // Edge

    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[0].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[1].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[2].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[3].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[4].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[5].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[6].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[7].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[8].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[9].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[10].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[11].style.display="none";

    // change select "Edge"

    switch (select_choice['wbstyle_edge']) {
        case 0:
        case 1:
        case 2:
            break;
        case 3:
        case 6:
        case 9:
            select_choice['wbstyle_edge'] = 0
            break;
        case 4:
        case 7:
        case 10:
            select_choice['wbstyle_edge'] = 1
            break;
        case 5:
        case 8:
        case 11:    
            select_choice['wbstyle_edge'] = 2
            break;   
    }
    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[select_choice['wbstyle_edge']]
    .click()

})

extend[1].addEventListener('click', function(){ // Long Regular

    // Edge

    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[0].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[1].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[2].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[3].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[4].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[5].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[6].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[7].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[8].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[9].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[10].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[11].style.display="none";

    // change select "Edge"

    switch (select_choice['wbstyle_edge']) {
        case 6:
        case 7:
        case 8:
            break;
        case 3:
        case 0:
        case 9:
            select_choice['wbstyle_edge'] = 6
            break;
        case 4:
        case 1:
        case 10:
            select_choice['wbstyle_edge'] = 7
            break;
        case 5:
        case 2:
        case 11:    
            select_choice['wbstyle_edge'] = 8
            break;   
    }
    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[select_choice['wbstyle_edge']]
    .click()


}) 

extend[2].addEventListener('click', function(){ // Short Large

    // Edge

    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[0].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[1].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[2].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[3].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[4].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[5].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[6].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[7].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[8].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[9].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[10].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[11].style.display="none";

    // change select "Edge"

    switch (select_choice['wbstyle_edge']) {
        case 3:
        case 4:
        case 5:
            break;
        case 0:
        case 6:
        case 9:
            select_choice['wbstyle_edge'] = 3
            break;
        case 1:
        case 7:
        case 10:
            select_choice['wbstyle_edge'] = 4
            break;
        case 2:
        case 8:
        case 11:    
            select_choice['wbstyle_edge'] = 5
            break;   
    }
    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[select_choice['wbstyle_edge']]
    .click()

})

extend[3].addEventListener('click', function(){ // Long Large
    
    // Edge

    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[0].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[1].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[2].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[3].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[4].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[5].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[6].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[7].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[8].style.display="none";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[9].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[10].style.display="block";
    document.querySelectorAll('ul.wpc-popover-controls-content')[5].querySelectorAll('li')[5].querySelectorAll('li')[11].style.display="block";

    // change select "Edge"

    switch (select_choice['wbstyle_edge']) {
        case 9:
        case 10:
        case 11:
            break;
        case 3:
        case 6:
        case 0:
            select_choice['wbstyle_edge'] = 9
            break;
        case 4:
        case 7:
        case 1:
            select_choice['wbstyle_edge'] = 10
            break;
        case 5:
        case 8:
        case 2:    
            select_choice['wbstyle_edge'] = 11
            break;   
    }
    document.querySelectorAll('ul.wpc-popover-controls-content')[5]
    .querySelectorAll('li')[5]
    .querySelectorAll('li')[select_choice['wbstyle_edge']]
    .click()

})

{/* Back Pocket Placement show & hide */}

backPocket_placement[0].addEventListener('click', function(){ // No Pocket
    
    // Style

    if (select_choice['backpocket_button'] == 0) { // No Button

        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[0].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[1].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[2].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[3].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[4].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[5].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[6].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[7].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[8].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[9].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[10].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[11].style.display="none";

        // change select "Style"

        switch (select_choice['backpocket_style']) {
            case 0:
            case 1:
                break;
            case 4:
            case 8:
                select_choice['backpocket_style'] = 0
                break;
            case 5:
            case 9:
                select_choice['backpocket_style'] = 1
                break; 
        }
        document.querySelectorAll('ul.wpc-popover-controls-content')[7]
        .querySelectorAll('li')[4]
        .querySelectorAll('li')[select_choice['backpocket_style']]
        .click()

    }

    if (select_choice['backpocket_button'] == 1) { // With Button

        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[0].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[1].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[2].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[3].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[4].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[5].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[6].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[7].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[8].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[9].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[10].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[11].style.display="none";

        // change select "Style"

        switch (select_choice['backpocket_style']) {
            case 2:
            case 3:
                break;
            case 6:
            case 10:
                select_choice['backpocket_style'] = 2
                break;
            case 7:
            case 11:
                select_choice['backpocket_style'] = 3
                break; 
        }
        document.querySelectorAll('ul.wpc-popover-controls-content')[7]
        .querySelectorAll('li')[4]
        .querySelectorAll('li')[select_choice['backpocket_style']]
        .click()

    }

})

backPocket_placement[1].addEventListener('click', function(){ // Right
    
    // Style

    if (select_choice['backpocket_button'] == 0) { // No Button

        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[0].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[1].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[2].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[3].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[4].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[5].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[6].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[7].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[8].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[9].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[10].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[11].style.display="none";

        // change select "Style"

        switch (select_choice['backpocket_style']) {
            case 4:
            case 5:
                break;
            case 0:
            case 8:
                select_choice['backpocket_style'] = 4
                break;
            case 1:
            case 9:
                select_choice['backpocket_style'] = 5
                break; 
        }
        document.querySelectorAll('ul.wpc-popover-controls-content')[7]
        .querySelectorAll('li')[4]
        .querySelectorAll('li')[select_choice['backpocket_style']]
        .click()

    }

    if (select_choice['backpocket_button'] == 1) { // With Button

        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[0].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[1].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[2].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[3].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[4].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[5].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[6].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[7].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[8].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[9].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[10].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[11].style.display="none";

        // change select "Style"

        switch (select_choice['backpocket_style']) {
            case 6:
            case 7:
                break;
            case 2:
            case 10:
                select_choice['backpocket_style'] = 6
                break;
            case 3:
            case 11:
                select_choice['backpocket_style'] = 7
                break; 
        }
        document.querySelectorAll('ul.wpc-popover-controls-content')[7]
        .querySelectorAll('li')[4]
        .querySelectorAll('li')[select_choice['backpocket_style']]
        .click()

    }

})

backPocket_placement[2].addEventListener('click', function(){ // Both
    
    // Style

    if (select_choice['backpocket_button'] == 0) { // No Button

        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[0].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[1].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[2].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[3].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[4].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[5].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[6].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[7].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[8].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[9].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[10].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[11].style.display="none";

        // change select "Style"

        switch (select_choice['backpocket_style']) {
            case 8:
            case 9:
                break;
            case 0:
            case 4:
                select_choice['backpocket_style'] = 8
                break;
            case 1:
            case 5:
                select_choice['backpocket_style'] = 9
                break; 
        }
        document.querySelectorAll('ul.wpc-popover-controls-content')[7]
        .querySelectorAll('li')[4]
        .querySelectorAll('li')[select_choice['backpocket_style']]
        .click()

    }

    if (select_choice['backpocket_button'] == 1) { // With Button

        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[0].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[1].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[2].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[3].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[4].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[5].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[6].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[7].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[8].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[9].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[10].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[11].style.display="block";

        // change select "Style"

        switch (select_choice['backpocket_style']) {
            case 10:
            case 11:
                break;
            case 2:
            case 6:
                select_choice['backpocket_style'] = 10
                break;
            case 3:
            case 7:
                select_choice['backpocket_style'] = 11
                break; 
        }
        document.querySelectorAll('ul.wpc-popover-controls-content')[7]
        .querySelectorAll('li')[4]
        .querySelectorAll('li')[select_choice['backpocket_style']]
        .click()

    }

})

{/* Back Pocket Button show & hide */}

backPocket_button[0].addEventListener('click', function(){ // No Button
    
    // Style

    if (select_choice['backpocket_place'] == 0) { // No Pocket

        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[0].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[1].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[2].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[3].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[4].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[5].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[6].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[7].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[8].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[9].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[10].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[11].style.display="none";

        // change select "Style"

        switch (select_choice['backpocket_style']) {
            case 0:
            case 1:
                break;
            case 2:
                select_choice['backpocket_style'] = 0
                break;
            case 3:
                select_choice['backpocket_style'] = 1
                break; 
        }
        document.querySelectorAll('ul.wpc-popover-controls-content')[7]
        .querySelectorAll('li')[4]
        .querySelectorAll('li')[select_choice['backpocket_style']]
        .click()

    }

    if (select_choice['backpocket_place'] == 1) { // Right

        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[0].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[1].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[2].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[3].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[4].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[5].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[6].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[7].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[8].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[9].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[10].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[11].style.display="none";
        
        // change select "Style"

        switch (select_choice['backpocket_style']) {
            case 4:
            case 5:
                break;
            case 6:
                select_choice['backpocket_style'] = 4
                break;
            case 7:
                select_choice['backpocket_style'] = 5
                break; 
        }
        document.querySelectorAll('ul.wpc-popover-controls-content')[7]
        .querySelectorAll('li')[4]
        .querySelectorAll('li')[select_choice['backpocket_style']]
        .click()

    }

    if (select_choice['backpocket_place'] == 2) { // Both

        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[0].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[1].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[2].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[3].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[4].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[5].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[6].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[7].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[8].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[9].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[10].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[11].style.display="none";

        // change select "Style"

        switch (select_choice['backpocket_style']) {
            case 8:
            case 9:
                break;
            case 10:
                select_choice['backpocket_style'] = 8
                break;
            case 11:
                select_choice['backpocket_style'] = 9
                break; 
        }
        document.querySelectorAll('ul.wpc-popover-controls-content')[7]
        .querySelectorAll('li')[4]
        .querySelectorAll('li')[select_choice['backpocket_style']]
        .click()

    }

})

backPocket_button[1].addEventListener('click', function(){ // With Button
    
    // Style

    if (select_choice['backpocket_place'] == 0) { // No Pocket

        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[0].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[1].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[2].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[3].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[4].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[5].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[6].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[7].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[8].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[9].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[10].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[11].style.display="none";

        // change select "Style"

        switch (select_choice['backpocket_style']) {
            case 2:
            case 3:
                break;
            case 0:
                select_choice['backpocket_style'] = 2
                break;
            case 1:
                select_choice['backpocket_style'] = 3
                break; 
        }
        document.querySelectorAll('ul.wpc-popover-controls-content')[7]
        .querySelectorAll('li')[4]
        .querySelectorAll('li')[select_choice['backpocket_style']]
        .click()

    }

    if (select_choice['backpocket_place'] == 1) { // Right

        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[0].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[1].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[2].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[3].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[4].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[5].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[6].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[7].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[8].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[9].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[10].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[11].style.display="none";
        
        // change select "Style"

        switch (select_choice['backpocket_style']) {
            case 6:
            case 7:
                break;
            case 4:
                select_choice['backpocket_style'] = 6
                break;
            case 5:
                select_choice['backpocket_style'] = 7
                break; 
        }
        document.querySelectorAll('ul.wpc-popover-controls-content')[7]
        .querySelectorAll('li')[4]
        .querySelectorAll('li')[select_choice['backpocket_style']]
        .click()

    }

    if (select_choice['backpocket_place'] == 2) { // Both

        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[0].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[1].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[2].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[3].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[4].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[5].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[6].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[7].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[8].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[9].style.display="none";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[10].style.display="block";
        document.querySelectorAll('ul.wpc-popover-controls-content')[7].querySelectorAll('li')[4].querySelectorAll('li')[11].style.display="block";

        // change select "Style"

        switch (select_choice['backpocket_style']) {
            case 10:
            case 11:
                break;
            case 8:
                select_choice['backpocket_style'] = 10
                break;
            case 9:
                select_choice['backpocket_style'] = 11
                break; 
        }
        document.querySelectorAll('ul.wpc-popover-controls-content')[7]
        .querySelectorAll('li')[4]
        .querySelectorAll('li')[select_choice['backpocket_style']]
        .click()

    }

})


// Fabric Redirect
var maincolor = [
    document.querySelectorAll('ul.wpc-popover-controls-content')[0].querySelectorAll('li')[0], 
    document.querySelectorAll('ul.wpc-popover-controls-content')[0].querySelectorAll('li')[1]
];

maincolor[0].addEventListener('click', function(){
    window.location.href = "http://www.uxmetailor.com/product/mockup-1-blue/";
});
maincolor[1].addEventListener('click', function(){
    window.location.href = "http://www.uxmetailor.com/product/mockup-1-blue/";
});

{/* </script> */}