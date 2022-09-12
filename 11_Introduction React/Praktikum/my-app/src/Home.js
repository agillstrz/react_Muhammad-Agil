import bodyImage from "./assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";

const Home = () => {
  return (
    <div className="container h-100">
      <div className="row align-items-center isi-home">
        <div className="col-lg-4 col-md-12 col-sm-12  col-12">
          <img id="foto-profil" src={bodyImage} />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
          <div className="main-p">
            <p className="sapaan">Hi, my name is </p>
            <p className="nama">Anne Sullivan</p>
            <p className="hobi">I build things for the web</p>
            <p className="tombol">
              <a href="about.html">Get In Touch</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
