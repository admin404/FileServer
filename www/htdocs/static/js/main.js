let sub = document.getElementById("sub");

sub.addEventListener("click", subfunc);

function subfunc() {
  let fname = document.getElementById("name").value;
  alert(fname);
}
