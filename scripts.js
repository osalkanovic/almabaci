

$(document).on('ready', function(){
    const NUMBER_ON_SCREENS = $('.screen').length;
    selectScriptForScreen(1);
    let counter = 1;
    $(".screen").swipe( {
        swipeUp:function(event, direction, distance, duration) {
            //const currentActiveScreen = Number(event.target.getAttribute('data-attr-id'))
            handleScreenChange(counter, counter + 1);
            console.log(counter);
            selectScriptForScreen(counter + 1);
            counter++
        },
        // swipeDown:function(event, direction, distance, duration) {
        //     console.log("EVENT JE:", event.target.getAttribute('data-attr-id'), event.target);
        //     const currentActiveScreen = Number(event.target.getAttribute('data-attr-id'))
        //     handleScreenChange(currentActiveScreen, currentActiveScreen === 1? 1: currentActiveScreen - 1); 
        // },
        threshold:10,
        //allowPageScroll:"vertical"
      });
    // $('#arrow').click(function(){
    //     console.log('click')
    //     const currentActiveScreen = Number(event.target.getAttribute('data-attr-id'));
    //     console.log(currentActiveScreen);
    //     handleScreenChange(currentActiveScreen, currentActiveScreen === NUMBER_ON_SCREENS? null: currentActiveScreen + 1);
    //     selectScriptForScreen(currentActiveScreen + 1);
    // })

      function handleScreenChange (currentActive, nextScreen){
        hideScreen($('#screen' + currentActive));

        // if(!nextScreen){
        //     $('#nije-zivot-jedna-zena').show();
        //     $('#nije-zivot-jedna-zena').fadeIn();
        // }

        showScreen($('#screen' + nextScreen));
      }

      function hideScreen(el){
          el.hide();
          el.fadeOut();
      }
      function showScreen(el){
          el.show();
          el.fadeIn();
      }

})
function screen1(){
    let startDate = $('#start-date');
    let message = $('#screen1-message');
    let image1 = $('#screen1-pic1');
    let image2 = $('#screen1-pic2');
    let title = $('#screen1-title');
    let heart = $('#screen1-heart');
    let content = $('#screen1-content');
    move(heart,0, 350);
    move(title,0, 350);
    fadeOut(heart, 2000);
    fadeOut(title, 2000);
    fadeIn(startDate, 2100);
    move(content,0, -180);
    fadeIn(message, 3500);
    fadeIn(image1, 4500);
    fadeIn(image2, 5500);
    
}
function screen2(){
    let startDate = $('#next-date');
    let message = $('#screen2-message');
    let image1 = $('#screen2-pic1');
    let image2 = $('#screen2-pic2');
    let content = $('#screen2-content');
    fadeIn(startDate, 700);
    move(content,0, 70);
    fadeIn(message, 1500);
    fadeIn(image1, 2500);
    fadeIn(image2, 4500);
    
}
function screen3(){
    let startDate = $('#screen3-date');
    let message = $('#screen3-message');
    let place = $('#screen3-place');
    let title = $('#screen3-title');
    let heart = $('#screen3-heart');
    let content = $('#screen3-content');
    let startDate1 = $('#screen3-date1');
    let message1 = $('#screen3-message1');
    let place1 = $('#screen3-place1');
    let startDate2 = $('#screen3-date2');
    let message2 = $('#screen3-message2');
    let place2 = $('#screen3-place2');
    let startDate3 = $('#screen3-date3');
    let message3 = $('#screen3-message3');
    let place3 = $('#screen3-place3');
    move(heart,0, 350);
    move(title,0, 350);
    fadeOut(heart, 2000);
    fadeOut(title, 2000);
    fadeIn(startDate, 2100);
    move(content,0, -180);
    fadeIn(place, 2400);
    fadeIn(message, 3500);
    fadeIn(startDate1, 4500);
    fadeIn(place1, 5500);
    fadeIn(message1, 6500);
    fadeIn(startDate2, 7500);
    fadeIn(place2, 8500);
    fadeIn(message2, 9500);
    fadeIn(startDate3, 10500);
    fadeIn(place3, 11500);
    fadeIn(message3, 12500);
}
function screen4() {
    let title = $('#screen4-title');
    let lottie = $('#screen4-heart');
    move(title,0, 50);
    move(lottie, 0, 20);
    fadeIn(title, 1000);
    fadeIn(lottie, 1000);
}

function screen5() {
    let title = $('#screen5-title');
    let date = $('#screen5-date');
    move(title,0, 0);
    fadeIn(title, 1000);
    setTimeout(() => {
        fadeOut(title, 1000)
    }, 1000)
    move(date, 0, 0);
    fadeIn(date, 1200);
}
function screen6() {
    let title = $('#screen6-title');
    let date = $('#screen6-date');
    move(title,0, 0);
    fadeIn(title, 1000);
    setTimeout(() => {
        fadeOut(title, 1000)
    }, 1000)
    move(date, 0, 0);
    fadeIn(date, 1200);
}
function screen7() {
    let title = $('#screen7-title');
    let date = $('#screen7-date');
    move(title,0, 0);
    fadeIn(title, 1000);
    setTimeout(() => {
        fadeOut(title, 1000)
    }, 1000)
    move(date, 0, 0);
    fadeIn(date, 1200);
}
function screen8() {
    let title = $('#screen8-title');
    let date = $('#screen8-date');
    move(title,0, 0);
    fadeIn(title, 1000);
    setTimeout(() => {
        fadeOut(title, 1000)
    }, 1000)
    move(date, 0, 0);
    fadeIn(date, 1200);
}
function screen9() {
    let title = $('#screen9-title');
    let yes = $('#yes')
    let no = $('#no');
    move(title,0, 0);
    fadeIn(title, 1000);
    setTimeout(() => {
        fadeOut(title, 1000);
        fadeIn(yes);
        fadeIn(no);
    }, 10000)
    
    yes.click(function(){
        alert('Da li si sigurna?');
    })
    no.click(function(){
        let el = `<lottie-player src='https://assets2.lottiefiles.com/datafiles/U1I3rWEyksM9cCH/data.json'  background='transparent'  speed='1'  style='width: 300px; height: 300px;'  loop  autoplay > </lottie-player>`;
        $('#screen9-container').append(el);
        no.hide();
        yes.hide();

    })

}
function fadeIn(el, interval){
    setTimeout(() => {
        el.addClass("fade-in");
    }, interval)
}
function fadeOut(el, interval){
    setTimeout(() => {
        el.addClass("fade-out");
    }, interval)
}
function move(el,x, y){
    el.css({
        'transform':'translate('+x+'px,' + y +'px)', 
    });
    el.addClass('transition-element')
}
function selectScriptForScreen(id){
    switch(id){
        case 1: screen1(); break;
        case 2: screen2(); break;
        case 3: screen3(); break;
        case 4: screen4(); break;
        case 5: screen5(); break;
        case 6: screen6(); break;
        case 7: screen7(); break;
        case 8: screen8(); break;
        case 9: screen9(); break;

        default: return;
    }
}