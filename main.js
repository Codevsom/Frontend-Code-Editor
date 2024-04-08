function run() {
   var html = document.getElementById("html").value;
   var css = document.getElementById("css").value;
   var js = document.getElementById("js").value;
   var output = document.getElementById("output");
   output.srcdoc = html+'<style>'+css+'</style>'+'<script>'+js+'</script>'
}
function showhtml() {
  document.getElementById("html").hidden=false;
  document.getElementById("css").hidden=true;
  document.getElementById("js").hidden=true;
}
function showcss() {
 document.getElementById("html").hidden=true;
document.getElementById("js").hidden=true;
document.getElementById("css").hidden=false;
}
function showjs() {
   document.getElementById("html").hidden=true;
document.getElementById("js").hidden=false;
document.getElementById("css").hidden=true;
}