// menggunakan contoh aaabbh
function inputData(input) {
  //mengambil masukan yang diketik
  var hasil = {
    input: input, //masukan diterima
    kode_string: '', //Bentuk input berkode bit (a = 0, b = 11, h = 10 end string = 000111110)
    agac: {}, // pohon huffman
    persentase: 0.0, //persentase kompresi (81,25%)
  };

  var simpul = simpul_daun(input); // (membuat node terpisah untuk a b h)
  var agac = bentukPohon(simpul); // membentuk node lain (6, 3)

  hasil.agac = agac;

  var garis = {};
  alurGaris(agac, garis); // membuat jalur setiap karakter (a = 0, b = 11, h = 10)

  var bit_string = encode(input, garis); //(000111110)

  hasil.kode_string = bit_string;

  hasil.persentase = (1 - bit_string.length / (input.length * 8)) * 100;

  // apa yang dibutuhkan sesuai dengan komponen dalam desain di bawah :)
  // frekuensi = simpul.frequency (a = 3, b = 2, h = 1)
  // output = hasil.kode_string atau bit_string

  return hasil;
}
