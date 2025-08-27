import { PDFDownloadLink, Page, Text, View, Document } from '@react-pdf/renderer';
function StudentResultPDF({ studentsResult }) {
  return (
    <Document>
      <Page>
        <View>
          <Text>Student Results</Text>
          {studentsResult.map((result, index) => (
            <View key={index}>
              <Text>{result.studentName}</Text>
              <Text>{result.score}</Text>
              <Text>{result.grade}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

