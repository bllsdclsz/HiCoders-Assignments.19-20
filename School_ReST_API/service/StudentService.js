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
        this.database.push(pStudent)
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
        return this.database.find(student => student.id == pId);
    }

    putStudent(pId) {

    }

    /**
     * 
     * @param {integer} pId sahip olan objeyi siler.
     */
    deleteStudentById(pId) {
        this.database = this.database.filter(student => student.id != pId);
    }
}

/**
 * classi disariya gönderiyoruz.
 */
module.exports = new StudentService();