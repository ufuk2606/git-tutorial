/**
 * Teacher classini test etmek icin olusturulmustur.
 */
class TeacherService {
    constructor() {
        this.database = [];
    }

    /**
     * 
     * @param {object} pTeacher nesnesini database'e ekler.
     */
    addTeacher(pTeacher) {
        this.database.push(pTeacher);
    }

    /**
     * database'i döndüür.
     */
    getTeachers() {
        return this.database;
    }

    /**
     * 
     * @param {integer} pId sahip olan objeyi döndürür.
     */
    getTeacherById(pId) {
        return this.database.find(t => t.id == pId);
    }

    /**
     * 
     * @param {object} pTeacher yeni girilen deger
     * @param {integer} pId sahip olan cikarilip yeni girilen deger ile güncelleniyor.
     */
    updateTeacher(pTeacher, pId) {
        this.database = this.database.filter(t => t.id!=pId)
        this.database.push(pTeacher);
    }

    /**
     * 
     * @param {integer} pId sahip olan objeyi siler.
     */
    deleteTeacherById(pId) {
        return this.database.filter(t => t.id != pId);
    }
}

/**
 * classi disariya gönderiyoruz.
 */
module.exports = new TeacherService();