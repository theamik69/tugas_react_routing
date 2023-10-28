import { useNavigate } from "react-router-dom";

const Sejarah = ({ showBadgeAgain }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    showBadgeAgain();
  };
  
  return (
    <article className="card">
      <h2>Sejarah</h2>
      <p>
        Kata Bandung berasal dari kata bendung atau bendungan karena terbendungnya sungai Citarum oleh lava Gunung Tangkuban Parahu yang lalu membentuk telaga. Legenda yang diceritakan oleh orang-orang tua di Bandung mengatakan bahwa nama
        Bandung diambil dari sebuah kendaraan air yang terdiri dari dua perahu yang diikat berdampingan yang disebut perahu bandung yang digunakan oleh Bupati Bandung, R.A. Wiranatakusumah II, untuk melayari Ci Tarum dalam mencari tempat
        kedudukan kabupaten yang baru untuk menggantikan ibu kota yang lama di Dayeuhkolot.
      </p>

      <p>
        Berdasarkan filosofi Sunda, kata Bandung juga berasal dari kalimat Nga-Bandung-an Banda Indung, yang merupakan kalimat sakral dan luhur karena mengandung nilai ajaran Sunda. Nga-Bandung-an artinya menyaksikan atau bersaksi. Banda
        adalah segala sesuatu yang berada di alam hidup yaitu di bumi dan atmosfer, baik makhluk hidup maupun benda mati. Sinonim dari banda adalah harta. Indung berarti Ibu atau Bumi, disebut juga sebagai Ibu Pertiwi tempat Banda berada.
      </p>

      <button onClick={handleClick}>Home</button>
    </article>
  );
};

export default Sejarah;
