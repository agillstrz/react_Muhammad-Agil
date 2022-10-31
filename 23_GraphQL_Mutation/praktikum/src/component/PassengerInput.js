import { useEffect, useState } from "react";
import "./Home.css";

function PassengerInput({ addPassanger }) {
  const [state, setState] = useState({
    nama: "",
    Umur: "",
    Jenis_Kelamin: "pria",
    editing: true,
  });
  console.log(state.Jenis_Kelamin);
  const onChange = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    if (state.nama.trim() && state.Umur && state.Jenis_Kelamin) {
      const { nama, Umur, Jenis_Kelamin } = state;
      if (Umur >= 75 || Umur <= 12) {
        alert("Umur tidak sesuai");
      } else {
        const newUser = {
          nama: state.nama,
          Umur: state.Umur,
          Jenis_Kelamin: state.Jenis_Kelamin,
        };
        addPassanger(newUser);
        setState({
          ...state,
          nama: "",
          Umur: "",
          Jenis_Kelamin: "",
        });
      }
    } else {
      alert("Data masih ada yang kosong");
    }
  };

  return (
    <div>
      <div>
        <p>Masukkan Nama Anda</p>
        <input
          type="text"
          className="input-text"
          placeholder="Nama anda ..."
          value={state.nama}
          name="nama"
          onChange={onChange}
        />
        <p>Masukkan Umur Anda</p>
        <input
          type="number"
          className="input-text"
          placeholder="Umur anda ..."
          value={state.Umur}
          name="Umur"
          onChange={onChange}
        />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={onchange} name="jeniskel">
          <option value="Pria" selected={state.Jenis_Kelamin === "Pria"}>
            Pria
          </option>
          <option value="Wanita" selected={state.Jenis_Kelamin === "wanita"}>
            Wanita
          </option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default PassengerInput;
