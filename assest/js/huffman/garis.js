function alurGaris(pohon, garis, jalur, turunan) {
  turunan = typeof turunan !== 'undefined' ? turunan : '';

  if (jalur === undefined) return alurGaris(pohon, garis, pohon);

  if (jalur.children.length == 0) {
    garis[jalur.name] = turunan != '' ? turunan : '0';
    return;
  }

  alurGaris(pohon, garis, jalur.children[0], turunan + '0');
  alurGaris(pohon, garis, jalur.children[1], turunan + '1');
}
