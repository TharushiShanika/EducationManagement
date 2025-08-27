function handleGenerateReport() {
    const doc = new jsPDF();
  
    
    const tableRows = [];
  
    studentsResult.forEach((studentResult) => {
      tableRows.push([studentResult.studentName, studentResult.score, studentResult.grade]);
    });
  
    doc.autoTable({
      head: [['Student Name', 'Score', 'Grade']],
      body: tableRows,
    });
  
    // save the PDF
    doc.save('student_result.pdf');
  }
  