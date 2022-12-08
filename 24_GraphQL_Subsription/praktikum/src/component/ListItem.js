import "./Home.css";
const ListItem = (props) => {
  const { id, nama, Umur, Jenis_Kelamin } = props.data;

  return (
    <tr>
      <td>{nama}</td>
      <td>{Umur}</td>
      <td>{Jenis_Kelamin}</td>
      <td className="removeBorder" onClick={() => props.deletePassanger(id)}>
        <button>Hapus</button>
      </td>
    </tr>
  );
};

export default ListItem;
