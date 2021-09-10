function bentukPohon(simpul) {
  var jumlah_simpul_daun = simpul.length;

  var queue = new PriorityQueue({
    comparator: function (a, b) {
      return a.frequency - b.frequency;
    },
  });

  for (i = 0; i < jumlah_simpul_daun; i++) {
    queue.queue(simpul[i]);
  }

  var id_jumlah = 1;

  for (i = 0; i < jumlah_simpul_daun - 1; i++) {
    var baru = {
      id: '0',
      name: '',
      children: [queue.dequeue(), queue.dequeue()],
      frequency: null,
    };

    baru.children[0].id = id_jumlah++;
    baru.children[1].id = id_jumlah++;

    baru.frequency = baru.children[0].frequency + baru.children[1].frequency;
    baru.name = baru.frequency;
    queue.queue(baru);
  }

  return queue.dequeue();
}
