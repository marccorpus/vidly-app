const TableBody = ({ headers, data }) => {
  return (
    <tbody>
      {data.map((d) => (
        <tr key={d.id}>
          {headers.map((header) => (
            <td key={header.id} className={header.className}>
              {d[header.column]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
