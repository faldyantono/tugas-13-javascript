function belanja() {
  var buah = ["Pisang", "Jeruk"];
  console.log(buah)
  buah.unshift("Apel", "Mangga");
  return buah;
}
console.log(belanja());