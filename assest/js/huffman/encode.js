function encode(input, garis) {
  var bit_string = '';

  for (i = 0; i < input.length; i++) {
    bit_string += garis[input.charAt(i)];
  }

  return bit_string;
}
