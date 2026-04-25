$('#ok').on('click', function () {
    $('.pop').fadeOut(300)
})

$('#btn1').on('click', function () {
    $('body').css('pointer-events', 'none')
    setTimeout(() => {
        $('body').css('pointer-events', 'auto')
    }, 1000);

    random(0)
    setTimeout(() => {
        $('.roll').append(
            `
            <div class="card `+ lv + `">
                <div class="img"></div>
                <div class="frame"></div>
                <div class="card_name">`+ reName + `</div>
            </div>
            `
        )
        $('.card').css('animation', 'card_ani 0.3s 1 ease-in-out forwards')
        $('.img').css('background-image', 'url(img/card/' + reCard + '.png)')
        $('.frame').css('background-image', 'url(img/' + reFrame + '.png)')
    }, 500);

    $('.event').fadeIn(300)
    $('.light').fadeIn(300)
    if (lv == "UR") {
        $('.UReffect').fadeIn(300)
        setTimeout(() => {
            $('.UReffect').fadeOut(300)
        }, 8000);
    }
    $('.eventBG').delay(300).fadeIn(500)
    $('.light').delay(100).fadeOut(500)
})

$('#btn10').on('click', function () {
    $('body').css('pointer-events', 'none')
    setTimeout(() => {
        $('body').css('pointer-events', 'auto')
    }, 1000);

    let c = 0, timer, ani = 0
    timer = setInterval(() => {

        if (c == 9) {
            random(10)
        } else {
            random(0)
        }
        c++
        $('.roll').append(
            `
            <div class="card `+ lv + `" style="animation: card_ani2 0.3s ` + (ani += 0.05) + `s 1 ease-in-out forwards;">
                <div class="img" style="background-image:url(img/card/`+ reCard + `.png);"></div>
                <div class="frame" style="background-image:url(img/`+ reFrame + `.png);"></div>
                <div class="card_name">`+ reName + `</div>
            </div>
            `
        )

        if (lv == "UR") {
            $('.event').fadeIn(300)
            $('.UReffect').fadeIn(300)
            setTimeout(() => {
                $('.UReffect').fadeOut(300)
            }, 8000);
        }

        if (c === 10) {
            clearInterval(timer);
        }

    }, 0);


    $('.event').fadeIn(300)
    $('.light').fadeIn(300)
    $('.eventBG').delay(300).fadeIn(500)
    $('.light').delay(100).fadeOut(500)

})

$('.event').on('click', function () {
    $(this).fadeOut(300)
    $('.eventBG').fadeOut(300)
    $('.light').css('background', 'none')
    $('.roll').html('')
})

let N_nameArray = ['Blessing', '戰鬥修女', '玉米裝', '性感睡衣', '嚕咪帽T', '外出服', '櫻花下', '黑手黨', '祈禱']
let R_nameArray = ['夏日祭典', '學士服', '殭屍', '枕邊細語', '週年愉快', '質恋', '任務']
let SR_nameArray = ['泳衣', '旗袍', '學生制服']
let SSR_nameArray = ['繃帶', '情人節']
let UR_nameArray = ['血月降臨', '浪漫歌德夜間擁抱']

let level = ['N', 'R', 'SR', 'SSR', 'UR']

let reName = '', reCard = '', reFrame = ''

let lv = ''


function random(x) {

    let r
    let randomLv = Math.random() * 100

    if (x == 10) {
        if (randomLv <= 99) {

            lv = level[3]
            reCard = level[3]
            reFrame = 'frame-SSR'
            r = Math.floor(Math.random() * 2)
            reName = SSR_nameArray[r]
            reCard += r

        } else if (randomLv > 99) {

            lv = level[4]
            reCard = level[4]
            reFrame = 'frame-UR'
            r = Math.floor(Math.random() * 2)
            reName = UR_nameArray[r]
            reCard += r

        }

    } else {
        if (randomLv <= 50) {

            lv = level[0]
            reCard = level[0]
            reFrame = 'frame-N'
            r = Math.floor(Math.random() * 9)
            reName = N_nameArray[r]
            reCard += r

        } else if (randomLv <= 86 && randomLv > 50) {

            lv = level[1]
            reCard = level[1]
            reFrame = 'frame-R'
            r = Math.floor(Math.random() * 7)
            reName = R_nameArray[r]
            reCard += r

        } else if (randomLv <= 96 && randomLv > 86) {

            lv = level[2]
            reCard = level[2]
            reFrame = 'frame-SR'
            r = Math.floor(Math.random() * 3)
            reName = SR_nameArray[r]
            reCard += r

        } else if (randomLv <= 99 && randomLv > 96) {

            lv = level[3]
            reCard = level[3]
            reFrame = 'frame-SSR'
            r = Math.floor(Math.random() * 2)
            reName = SSR_nameArray[r]
            reCard += r

        } else if (randomLv > 99) {

            lv = level[4]
            reCard = level[4]
            reFrame = 'frame-UR'
            r = Math.floor(Math.random() * 2)
            reName = UR_nameArray[r]
            reCard += r

        }

    }

    if (lv == 'SR') {
        $('.light').css('background', 'linear-gradient(60deg,#da549d,#fcd6ff)')
    }
    if (lv == 'SSR') {
        $('.light').css('background', 'linear-gradient(60deg,#dab654,#fff7ca)')
    }
    if (lv == 'UR') {
        $('.light').css('background', 'linear-gradient(60deg,#ffb3b3,#ffe1b9,#fffab9,#daffcf,#c1e3ff,#fbd1ff)')
    }

    if (reCard == 'UR0') {
        $('.UReffect').css('background-image', 'url(img/card/UR0A.png)')
    }

    if (reCard == 'UR1') {
        $('.UReffect').css('background-image', 'url(img/card/UR1A.png)')
    }

}