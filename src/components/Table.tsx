import { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}

function Table(props: TableProps) {
  const { children } = props;
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Creation Date</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default Table;
