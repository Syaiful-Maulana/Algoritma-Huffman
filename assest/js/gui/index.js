var hasil; // pohon dan teks kode disimpan dalam hasil
var count = 0; //jumlah klik
document.getElementById('encode-button').onclick = function () {
  //Tombol encode -> anonymous function
  count++;

  //Refresh dan hapus tabel frekuensi untuk setiap input.
  if (document.getElementById('kalimat').hasChildNodes) {
    kalimat = document.getElementById('kalimat');
    kalimat.innerHTML = '';
  }
  if (document.getElementById('frekuensi').hasChildNodes) {
    frekuensi = document.getElementById('frekuensi');
    frekuensi.innerHTML = '';
  }

  if (count > 1) {
    document.getElementById('div').innerHTML = '<div id="agac" style="height:500px;"><i style="line-height:500px;">Type to see the graph...</i></div>';
  }
  hasil = enableEncode();
  document.getElementById('output').innerHTML = hasil.kode_string;
  document.getElementById('persentase').innerHTML = hasil.persentase;
  agacHasil(hasil);
};

function enableEncode() {
  //klik encode membuat array pohon dan mengembalikannya.
  return inputData(document.getElementById('input').value);
}

function agacHasil(hasil) {
  //gambaran bentuk yang dibutuhkan ke dalam elemen pohon.
  document.getElementById('agac').getElementsByTagName('i')[0].style.display = 'none'; //information divini gizler

  if (document.getElementById('agac-canvaswidget')) {
    //Menghapus pohon sebelumnya jika ada di area tersebut
    canvas = document.getElementById('agac-canvaswidget');
    document.getElementById('agac-canvaswidget').parentNode.removeChild(canvas);
  }
  visualize(hasil.agac, true);
}

function tabelFrekuensi(name, frequency) {
  //Membuat dan mengisi tabel dalam htm sesuai dengan parameter yang dimasukkan. Bekerja di dalam leaf_development_create.
  var harf = document.createElement('th');
  harf.innerHTML = name;
  document.getElementById('kalimat').appendChild(harf);

  var frekans = document.createElement('td');
  frekans.innerHTML = frequency;
  document.getElementById('frekuensi').appendChild(frekans);
}
