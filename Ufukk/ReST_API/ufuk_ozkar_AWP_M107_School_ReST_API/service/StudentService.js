/**
 * Student classini test etmek icin olusturulmustur.
 */
class StudentService {
    constructor() {
        this.database = [];
    }

    /**
     * 
     * @param {object} pStudent nesnesini database'e ekler.
     */
    addStudent(pStudent) {
        this.database.push(pStudent);
    }

    /**
     * database'i döndüür.
     */
    getStudents() {
        return this.database;
    }

    /**
     * 
     * @param {integer} pId sahip olan objeyi döndürür.
     */
    getStudentById(pId) {
        return this.database.find(s => st.id == pId);
    }

    /**
     * 
     * @param {object} pStudent yeni girilen deger.
     * @param {integer} pId sahip olan cikarilip yeni bilgiler girilerek güncelleniyor.
     */
    updateStudent(pStudent, pId) {
        this.database = this.database.filter(s => s.id!=pId);
        this.database.push(pStudent);
    }

    /**
     * 
     * @param {integer} pId sahip olan objeyi siler.
     */
    deleteStudentById(pId) {
        this.database = this.database.filter(s => s.id != pId);
    }
}

/**
 * classi disariya gönderiyoruz.
 */
module.exports = new StudentService();