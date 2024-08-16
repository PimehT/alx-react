import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const studentsSeq = Seq(object)
    .filter(student => student.score >= 70)
    .map(student => ({
      ...student,
      firstName: capitalize(student.firstName),
      lastName: capitalize(student.lastName)
    }));
  
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  console.log(studentsSeq.toJS());
}
