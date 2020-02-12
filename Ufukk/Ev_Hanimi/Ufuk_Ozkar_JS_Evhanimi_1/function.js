
class EvHanimi{
  
static isaretOlan(x) {
  let islem = x.filter(a => a.startsWith("(x)"));
  return islem;
};

static isaretOlmayan(x) {
  let islem = x.filter(a => !a.startsWith("(x)"));
  return islem;
};

static kontrol(x) {
  let islem = x.every(a => a.startsWith("(x)"));
  return islem;
};

}
