

/**
 * Bu applikasyon kullanicidan, yapilacak islerini alir ve bunlari yönetmesini saglar
 * 
 * Akis
 * - Kullanici html üzerinden yapacagi isleri sisteme girer
 * - Applikasyon bu isleri girisi sirasina bir listede gösterir
 * - Kullanici bitirdigi isleri listeden silebilir
 * - Kullanici istedigi takdirde silinmis olan isleri de görebilecek.
 * 
 * 
 * Analysis kismi
 * - Ekranda bir input alani ve buton olmali
 * - Bunlarin altinda bitirilmis isleri kapatip acabilen bit buton olmali
 * - Butona basildiginda input alanindaki bilgi bir array'e aktarilir
 * - Hemen ardindan bu array listeye yazdiririlir.
 * - Listede görünen her eleman silinebilir (x) olmaldir.
 * - Silinen elemanlar array'de silindi olarak isaretlenir.
 * - Hemen ardindan yeni array tekrar listeye basilir.
 *      - Bitirilen islerin gösterilip gösterilmemsi durumuna göre bastirilir
 */


 // Bütün yapilacak isler bu array'de tutulacak
 let todoList = new Array();
 let isDoneFilterActive = false;
 
 addEventListenerToTriggerElement();
 addEventListenerToFilterElement();