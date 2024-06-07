function ReportCard() {
  let marks = 89;
  let grade;
  if (marks >= 75 && marks <= 100) {
    grade = "A+";
  } else if (marks >= 60 && marks < 75) {
    grade = "A";
  } else if (marks >= 45 && marks < 60) {
    grade = "B";
  } else if (marks >= 35 && marks < 45) {
    grade = "C";
  }

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Marks</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{marks}</td>
            <td>{grade}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default ReportCard;