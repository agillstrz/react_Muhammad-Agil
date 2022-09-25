const Validasi = (value) => {
  const error = {};
  const regexNama = /[a-zA-Z]$/;
  const regexHp = /^[0-9]{9,12}$/;
  const regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!value.nama) {
    error.nama = "*Nama lengkap wajib diisi";
  }
  if (value.nama && !value.nama.match(regexNama)) {
    error.nama = "*Nama hanya boleh mengandung huruf";
  }
  if (!value.nohp) {
    error.nohp = "*Nomor wajib diisi";
  }
  if (value.nohp && !value.nohp.match(regexHp)) {
    error.nohp = "*Nomor Hp harus angka dan berjumlah 9-12 karakter";
  }

  if (!value.email) {
    error.email = "*Email wajib diisi";
  }

  if (value.email && !value.email.match(regexemail)) {
    error.email = "*Email tidak sesuai";
  }
  if (!value.pendidikan) {
    error.pendidikan = "*Pendidikan wajib diisi";
  }
  if (!value.kelas) {
    error.kelas = "*Kelas wajib diisi";
  }
  if (!value.surat) {
    error.surat = "*Surat wajib diisi";
  }
  return error;
};

export default Validasi;
