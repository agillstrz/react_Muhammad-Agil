import React from "react";
import { useState } from "react";

function Form() {
  const formSiswa = {
    nama: "",
    noHp: "",
    email: "",
    pendidikan: "",
    kelas: "",
    surat: "",
    harapan: "",
  };

  const pesanError = {
    nama: "",
    noHp: "",
    email: "",
  };

  const regexNama = /^[a-zA-Z ]*$/;
  const regexHp = /^[0-9]{9,12}$/;
  const regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [data, setDatas] = useState(formSiswa);
  const [formErrors, setFormErrors] = useState(pesanError);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatas({ ...data, [name]: value });

    if (name === "nama") {
      if (!value.match(regexNama)) {
        setFormErrors({
          ...formErrors,
          nama: "*Nama harus berupa huruf",
        });
      } else {
        setFormErrors({
          ...formErrors,
          nama: "",
        });
      }
    }

    if (name === "noHp") {
      if (!value.match(regexHp)) {
        setFormErrors({
          ...formErrors,
          noHp: "*Nomor Hp harus angka dan berjumlah 9-12 karakter",
        });
      } else {
        setFormErrors({
          ...formErrors,
          noHp: "",
        });
      }
    }

    if (name === "email") {
      if (!value.match(regexemail)) {
        setFormErrors({
          ...formErrors,
          email: "*Email tidak sesuai",
        });
      } else {
        setFormErrors({
          ...formErrors,
          email: "",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formErrors.nama && !formErrors.noHp && !formErrors.email) {
      alert(`${data.nama} berhasil mendaftar`);
    } else {
      alert(`Data belum lengkap atau tidak sesuai, ulangi pendaftaran`);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setDatas(formSiswa);
  };

  return (
    <div className="py-5">
      <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="form-body justify-beetwent flex flex-wrap">
          <h1 className="uppercase w-full py-2 border-2 rounded-lg text-center mb-4 font-bold text-lg">
            pendaftaran peserta coding bootcamp
          </h1>
          <div className="forml ">
            <label htmlFor="name">
              Nama Lengkap
              <span className="span-error"> {formErrors.nama}</span>
            </label>
            <input
              onChange={handleChange}
              name="nama"
              id="name"
              className="input"
              type="text"
              value={data.nama}
            />
          </div>

          <div className="forml ">
            <label htmlFor="noHp">
              nomor handphone{" "}
              <span className="span-error"> {formErrors.noHp}</span>
            </label>
            <input
              onChange={handleChange}
              id="noHp"
              name="noHp"
              className="input"
              value={data.noHp}
            />
          </div>

          <div className=" forml">
            <label htmlFor="email">
              Email <span className="span-error"> {formErrors.email}</span>
            </label>
            <input
              onChange={handleChange}
              id="email"
              name="email"
              className="input"
              value={data.email}
            />
          </div>

          <div className=" forml">
            <p>Latar Belakang Pendidikan :</p>
            <div className="flex gap-1">
              <input
                onChange={handleChange}
                value="IT"
                name="pendidikan"
                type="radio"
                required
              />
              <label htmlFor="pendidikan">IT</label>
              <input
                onChange={handleChange}
                id="pendidikan"
                value="Non IT"
                name="pendidikan"
                type="radio"
              />
              <label>non IT</label>
            </div>
          </div>

          <div className=" forml">
            <label>Kelas Coding Yang Dipilih :</label>
            <select
              className="input"
              name="kelas"
              onChange={handleChange}
              value={data.kelas}
              required
            >
              <option>1. Koding backend with golang</option>
              <option>2. Koding frontend with ReactJS</option>
              <option>3. full stack developer</option>
            </select>
          </div>
          <div className="forml">
            <label htmlFor="surat">Foto surat kesungguhan : </label>
            <input
              onChange={handleChange}
              id="surat"
              name="surat"
              className="input"
              type="file"
              value={data.surat}
              required
            />
          </div>

          <div className="forml">
            <label htmlFor="harapan">Harapan untuk coding bootcamp ini :</label>
            <textarea
              id="harapan"
              name="harapan"
              className="input"
              value={data.harapan}
              type="text"
              onChange={handleChange}
            />
          </div>

          <div className="forml flex gap-3 ">
            <button className="btn-submit">SUBMIT</button>
            <button onClick={handleReset} className="btn-reset">
              RESET
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
