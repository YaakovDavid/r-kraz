function search() {
  var description = document.getElementsByClassName("description");

  var input, filter, ul, li, h3, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    h3 = li[i].getElementsByTagName("h3")[0];
    description = li[i].getElementsByClassName("description")[0];

    txtValue = h3.textContent || h3.innerText
    descriptValue = description.textContent || description.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1 || descriptValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
