import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from "axios";

const ResultTable = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      const res = await axios.get("http://localhost:8090/api/Result/all");
      setResults(res.data);
      setLoading(false);
    };
    fetchResults();
  }, []);

  const deleteResult = async (Moduleid) => {
    if (window.confirm("Are you sure you want to delete this result?")) {
      await axios.delete(`/api/Result/${Moduleid}`);
      setResults(results.filter((result) => result.Moduleid !== Moduleid));
    }
  };

  const columns = [
    {
      dataField: "Moduleid",
      text: "Module ID",
      sort: true,
    },
    {
      dataField: "StudentName",
      text: "Student Name",
      sort: true,
    },
    {
      dataField: "Score",
      text: "Score",
      sort: true,
    },
    {
      dataField: "Grade",
      text: "Grade",
      sort: true,
    },
    {
      dataField: "actions",
      text: "Actions",
      formatter: (cell, row) => (
        <>
          <button
            className="btn btn-sm btn-warning mr-2"
            onClick={() => editResult(row.Moduleid)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteResult(row.Moduleid)}
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  const editResult = (Moduleid) => {
    // Your edit result logic here
  };

  return (
    <div>
      <h1>Results</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <BootstrapTable
          keyField="Moduleid"
          data={results}
          columns={columns}
          pagination={paginationFactory()}
        />
      )}
    </div>
  );
};

export default ResultTable;


