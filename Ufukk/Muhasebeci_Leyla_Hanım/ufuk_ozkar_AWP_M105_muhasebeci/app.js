/**
 * Bu applikasyon, yeni kisi kaydeder. Kayitli kisileri tabloda listeler ve tabloda siralama ve filtreleme secenegi de sunar.
 * 
 * Applikasyon akisi
 *   - Kullanici solda bulunan formdan isim, soyisim ve kanton bilgilerini girer.
 *   - Bilgileri girdikten sonra Kaydet butonuna tiklar ve bu bilgiler tabloda yazdirilir.
 *   - Tiklama isleminden sonra form temizlenir.
 *   - Listelenen tabloda isim, soyisim ve kantona gore siralama yapilabilir. (Hem a'dan z'ye hem de z'den a'ya)
 *   - Isim veya soyisime gore filtreleme islemi yapilabilir.
 */
let statuler = new Statuler();
let kisi = new Kisi();
let kanton = new Kanton();
let siralama = new Siralama();
let arama = new Arama();
let dom = new Dom();
let manager = new Manager();

/**
 * Programi baslatir
 */
manager.start();