/**
 * ögrenci class olusturur.
 */
class Student {
    constructor(pId, pName, pAge, pGrade) {
        this.id = pId;
        this.name = pName;
        this.age = pAge;
        this.grade = pGrade;
    }
}

/**
 * classi disariya gönderiyoruz.
 */
module.exports = Student;