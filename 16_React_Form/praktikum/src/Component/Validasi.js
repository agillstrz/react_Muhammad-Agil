const Validasi = (value) => {
  const error = {};
  const notNama = /^[0-9]$/;
  const notHp = /^[a-zA-Z]$/;
  const regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!value.nama) {
    error.nama = "*Nama lengkap wajib diisi";
  }
  if (value.nama && notNama.test(value.nama)) {
    error.nama = "*Nama hanya boleh mengandung huruf";
  }
  if (!value.nohp) {
    error.nohp = "*Nomor wajib diisi";
  }
  if (value.nohp && notHp.test(value.nohp)) {
    error.nohp = "*Nomor tidak sesuai";
  }

  if (!value.email) {
    error.email = "*Email wajib diisi";
  }

  if (value.email && !regexemail.test(value.email)) {
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
