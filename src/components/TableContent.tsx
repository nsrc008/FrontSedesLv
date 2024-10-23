interface TableContentProps {
  code?: number;
  image?: string;
  name?: string;
  creationDate?: string;
}

export function TableContent(props: TableContentProps) {
  const { code, name, image, creationDate } = props;

  return (
    <tr>
      <th scope="row">{code}</th>
      <td>
        <img
          src={image}
          alt={name}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </td>
      <td>{name}</td>
      <td>{creationDate}</td>
    </tr>
  );
}

export default TableContent;
