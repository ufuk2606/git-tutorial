/**
 * ögretmen class olusturur.
 */
class Teacher {
    constructor(pId, pName, pAge, pProfession) {
        this.id = pId;
        this.name = pName;
        this.age = pAge;
        this.profession = pProfession;
    }
}

/**
 * classi disariya gönderiyoruz.
 */
module.exports = Teacher;