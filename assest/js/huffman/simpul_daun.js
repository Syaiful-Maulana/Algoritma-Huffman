function simpul_daun(input) {
  var simpul = [];

  for (i = 0; i < input.length; i++) {
    var ada = false;

    for (j = 0; j < simpul.length && !ada; j++) {
      if (simpul[j].name == input.charAt(i)) {
        simpul[j].frequency++;
        ada = true;
      }
    }

    if (!ada) {
      simpul[simpul.length] = {
        id: '0', //mengubah pohon.js
        name: input.charAt(i),
        children: [], // ditugaskan di pohon.js
        frequency: 1,
      };
    }
  }
  for (i = 0; i < simpul.length; i++) {
    //Membuat tabel kolom untuk semua frekuensi.
    tabelFrekuensi(simpul[i].name, simpul[i].frequency);
  }
  return simpul;
}
