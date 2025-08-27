import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


function Report({ studentsResult }) {
    // Define styles for the PDF report
    const styles = StyleSheet.create({
      page: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
      subtitle: {
        fontSize: 18,
        marginBottom: 10,
      },
      table: {
        display: 'table',
        width: 'auto',
        marginVertical: 10,
      },
      tableRow: {
        flexDirection: 'row',
        backgroundColor: '#ECECEC',
      },
      tableColHeader: {
        width: '33.33%',
        border: '1px solid black',
        borderRightWidth: 0,
        borderBottomWidth: 2,
        paddingHorizontal: 5,
        paddingVertical: 3,
        fontWeight: 'bold',
      },
      tableCol: {
        width: '33.33%',
        border: '1px solid black',
        borderRightWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: 5,
        paddingVertical: 3,
      },
      tableColLast: {
        width: '33.33%',
        border: '1px solid black',
        borderBottomWidth: 0,
        paddingHorizontal: 5,
        paddingVertical: 3,
      },
    });
  
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.title}>Student Results</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text>Student Name</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Score</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text>Grade</Text>
              </View>
            </View>
            {studentsResult.map((studentResult) => (
              <View style={styles.tableRow} key={studentResult._id}>
                <View style={styles.tableCol}>
                  <Text>{studentResult.studentName}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text>{studentResult.score}</Text>
                </View>
                <View style={styles.tableColLast}>
                  <Text>{studentResult.grade}</Text>
                </View>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    );
  }
  