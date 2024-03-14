"use strict";

function darkmode() {
    const body = document.body
    const wadDarkmode = localStorage.getItem('darkmode') === 'true'

    localStorage.setItem('darkmode', !wadDarkmode)
    body.classList.toggle('dark-mode', !wadDarkmode)
}

document.querySelector('#sun_button_div').addEventListener('click', darkmode)

function Choosed() {
    var langButton = document.getElementById('lang_button');
    if (langButton.classList.contains('active')) {
        langButton.classList.remove('active');
    } else {
        langButton.classList.add('active');
    }
}

function langChoose(clickedElement) {
    var allItems = document.querySelectorAll('.dropdown-item');
    allItems.forEach(function(item) {
        item.classList.remove('active');
    });

    clickedElement.classList.add('active');
}

function openVideoModal() {
    var video = document.getElementById('Video').querySelector('video');
    video.play();

    var videoModal = document.getElementById('myModal2');
    videoModal.addEventListener('hidden.bs.modal', function() {
        video.pause();
        video.currentTime = 0;
    });

    var myModal = new bootstrap.Modal(videoModal, {
        keyboard: false
    });
    myModal.show();
}

function stopVideo() {
    var video = document.getElementById('Video').querySelector('video');
    video.pause();
    video.currentTime = 0;
}

function openAudioModal() {
    var audio = document.getElementById('Audio').querySelector('audio');
    audio.play();

    var audioModal = document.getElementById('myModal3');
    audioModal.addEventListener('hidden.bs.modal', function() {
        audio.pause();
        audio.currentTime = 0;
    });

    var myModal = new bootstrap.Modal(audioModal, {
        keyboard: false
    });
    myModal.show();
}

function stopAudio() {
    var audio = document.getElementById('Audio').querySelector('audio');
    audio.pause();
    audio.currentTime = 0;
}

document.getElementById('myModal2').addEventListener('hide.bs.modal', stopVideo);
document.getElementById('myModal3').addEventListener('hide.bs.modal', stopAudio);

document.getElementById('myModal2').addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-close')) {
        stopVideo();
    }
});

document.getElementById('myModal3').addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-close')) {
        stopAudio();
    }
});

// Обработка закрытия модального окна при клике на кнопку "x"
document.querySelectorAll('.btn-close').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var modal = this.closest('.modal');
        var video = modal.querySelector('video');
        var audio = modal.querySelector('audio');

        if (video) {
            video.pause();
            video.currentTime = 0;
        }

        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});
