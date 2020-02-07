function isaretOlan(x) {
  let islem = x.filter(a => a.startsWith("(x)"));
  return islem;
}

function isaretOlmayan(x) {
  let islem = x.filter(a => !a.startsWith("(x)"));
  return islem;
}

function kontrol(x) {
  let islem = x.every(a => a.startsWith("(x)"));
  return islem;
}