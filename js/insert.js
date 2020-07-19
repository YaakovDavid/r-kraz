let container = document.querySelector("#myUL"), strArticles = "";
audio.forEach(i => {
  strArticles += '<li><div class="cont"><h3 id="title">' + i.title + '</h3><time id="artist">By: ' + i.artist + '</time></div><div class="description"><p>' + i.description + '</p><div class="tags">' + i.tags + '</div></div><a href="' + i.link + '" height="20px" backgroundColor="red" > </a><audio controls class="audio"><source id="url" src="' + i.url + '" type="audio/mp3"></audio></li>' }), container.innerHTML = strArticles;
