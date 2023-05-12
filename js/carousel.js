let picIndex = 1;
showPics(picIndex);

function plusPics(n) {
    showPics(picIndex = picIndex + n);
}

function currentPic(n) {
    showPics(picIndex = n);
}

function showPics(n) {
    let i;
    let pics = document.getElementsByClassName("hiding_pic");
    if (n > pics.length) {
        picIndex = 1
    }
    if (n < 1) {
        picIndex = pics.length
    }
    for (i = 0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }
    pics[picIndex - 1].style.display = "block";
}
