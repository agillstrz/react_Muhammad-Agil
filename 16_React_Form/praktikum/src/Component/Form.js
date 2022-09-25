import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Validasi from "./Validasi";

function Form() {
  const formSiswa = {
    nama: "",
    nohp: "",
    email: "",
    pendidikan: "",
    kelas: "",
    surat: "",
    harapan: "",
  };

  const [data, setDatas] = useState(formSiswa);
  const [btn, setbtn] = useState(true);
  const [formErrors, setformErrorr] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatas({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${data.nama} Berhasil Mendaftar`);
    setDatas(formSiswa);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setDatas(formSiswa);
  };

  useEffect(() => {
    setformErrorr(Validasi(data));
  }, [data]);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      setbtn(false);
    } else {
      setbtn(true);
    }
  }, [formErrors]);

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
              <span className="span-error"> {formErrors.nohp}</span>
            </label>
            <input
              onChange={handleChange}
              id="noHp"
              name="nohp"
              className="input"
              value={data.nohp}
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
            <p>
              Latar Belakang Pendidikan :
              <span className="span-error"> {formErrors.pendidikan}</span>
            </p>
            <div className="flex gap-1">
              <input
                onChange={handleChange}
                value="IT"
                name="pendidikan"
                type="radio"
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
            <label>
              Kelas Coding Yang Dipilih :
              <span className="span-error"> {formErrors.kelas}</span>
            </label>
            <select
              className="input"
              name="kelas"
              onChange={handleChange}
              value={data.kelas}
            >
              <option>1. Koding backend with golang</option>
              <option>2. Koding frontend with ReactJS</option>
              <option>3. full stack developer</option>
            </select>
          </div>
          <div className="forml">
            <label htmlFor="surat">
              Foto surat kesungguhan :{" "}
              <span className="span-error">{formErrors.surat}</span>
            </label>
            <input
              onChange={handleChange}
              id="surat"
              name="surat"
              className="input"
              type="file"
              value={data.surat}
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
            <button
              disabled={btn}
              className={`${!btn ? "btn-submit" : "btn-error"}`}
            >
              SUBMIT
            </button>
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
