var url = "http://localhost:3000/buku";

function setup() {
  noCanvas();
  loadJSON(url, gotData);
}

function gotData(data) {
  var api = data.id_buku;

 
}