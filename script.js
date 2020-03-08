const tag = document.getElementsByClassName("audio_row__performer_title");
list = [];

for (let i = 0; i < tag.length; i++) {
    list[i] = tag[i].innerText.replace(['\n'], ' ')
}

window.open().document.write(list.join('<br/>'));