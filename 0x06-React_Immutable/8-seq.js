import { Seq } from 'immutable';

export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function printBestStudents(grades) {
  const studentsSeq = Seq(grades)
      .filter(student => student.score >= 70)
      .map(student => ({
          ...student,
          firstName: capitalize(student.firstName),
          lastName: capitalize(student.lastName)
      }));

  console.log(studentsSeq.toJS());
}
