let container = document.querySelector('#myUL');
let strArticles = "";

audio.forEach((x) => {

  strArticles += '<article">' +
    '<li>' +
    '<div class="cont">' +
    '<h3>' + x.title + '</h3>' +
    '<time id="artist">' + 'By: ' + x.artist + '</time>' +
    '</div>' +
    '<div class="description">' +
    '<p>' + x.description + '</p>' +
    '<div class="tags">' + x.tags + '</div>' +
    '</div>' +
    '<audio class="audio"  controls="controls" controlsList="nodownload">' +
    '<source id="url" src="' + x.url + '" type="audio/mp3">' +
    '</audio>' +

    '</li>' +
    '</article>';
});

container.innerHTML = strArticles;
