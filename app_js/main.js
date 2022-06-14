
function n(p, q) {
  return p * q;
}
/* Tinh  phi  */
function phi(p, q) {
  return (p - 1) * (q - 1);
}
// Tinh GCD
function gcd(a, b) {
  var R;
  while ((a % b) > 0) {
    R = a % b;
    a = b;
    b = R;
  }
  if (b !== 1) {
    alert("GCD(e,m) của bạn không thỏa mãn! ");
  }
  return b;

}
// Tinh module nghịch đảo
function modInverse(a, m) {
  // validate inputs
  [a, m] = [Number(a), Number(m)]
  if (Number.isNaN(a) || Number.isNaN(m)) {
    return NaN // invalid input
  }
  a = (a % m + m) % m
  if (!a || m < 2) {
    return NaN // invalid input
  }
  // find the gcd
  const s = []
  let b = m
  while (b) {
    [a, b] = [b, a % b]
    s.push({
      a,
      b
    })
  }
  if (a !== 1) {
    return NaN // inverse does not exists
  }
  // find the inverse
  let x = 1
  let y = 0
  for (let i = s.length - 2; i >= 0; --i) {
    [x, y] = [y, x - y * Math.floor(s[i].a / s[i].b)]
  }
  return (y % m + m) % m
}
// Tính mod: a^e mod n
function mpmod(base, exponent, modulus) {
  if ((base < 1) || (exponent < 0) || (modulus < 1)) {
    return ("invalid");
  }
  result = 1;
  while (exponent > 0) {
    if ((exponent % 2) == 1) {
      result = (result * base) % modulus;
    }
    base = (base * base) % modulus;
    exponent = Math.floor(exponent / 2);
  }
  return (result);
}



 function getInputValue() {

  var x = document.getElementById("x").value;
  var p = document.getElementById("p").value;
  var q = document.getElementById("q").value;
  var e = document.getElementById("e").value;

  document.getElementById("divx").innerHTML = x;
  document.getElementById("divq").innerHTML = q;
  document.getElementById("dive").innerHTML = e;
  document.getElementById("divp").innerHTML = p;
  document.getElementById("divn").innerHTML = n(p, q);
  document.getElementById("divd").innerHTML = modInverse(e, phi(p, q));

  //
  document.getElementById("inx").innerHTML = x;
  document.getElementById("n").innerHTML = n(p, q);
  document.getElementById("phi").innerHTML = phi(p, q);
  document.getElementById("gcd").innerHTML = gcd(e, phi(p, q));
  document.getElementById('d').innerHTML = modInverse(e, phi(p, q));
  document.getElementById("mahoa").innerHTML = mpmod(x, e, n(p, q));
  document.getElementById("giaima").innerHTML = mpmod(mpmod(x, e, n(p, q)), modInverse(e, phi(p, q)), n(p, q));
  /*  */
  document.getElementById("banma").innerHTML = mpmod(x, e, n(p, q));
  document.getElementById("khoad").innerHTML = modInverse(e, phi(p, q));
  document.getElementById("nhan").innerHTML = n(p, q);

  //
  document.getElementById("khoacongkhai").innerHTML = e;
  document.getElementById("khoacongkhai2").innerHTML = n(p, q);

  //
  document.getElementById("banro").innerHTML = x;
  document.getElementById("banma2").innerHTML = mpmod(x, e, n(p, q));


  document.getElementById("khoabimat").innerHTML = modInverse(e, phi(p, q));
  document.getElementById("khoabimat2").innerHTML = n(p, q);
}