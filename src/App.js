// import logo from './logo.svg';
import "./App.css";
import React from "react";

class App extends React.Component {
    cekPrima = () => {
    const dataTambahan = document.getElementById("input1").value;
    const faktorPrima = [];

    for (let i = 1; i <= dataTambahan; i++) {
      if (dataTambahan % i === 0) {
        faktorPrima.push(i);
      }
    }

    if (faktorPrima.length === 2) {
      document.getElementById("container").innerHTML =
        dataTambahan +
        " adalah bilangan prima. Faktor prima: " +
        faktorPrima.join(", ");
    } else {
      document.getElementById("container").innerHTML =
        dataTambahan +
        " bukan bilangan prima. Faktor prima: " +
        faktorPrima.join(", ");
    }
  };

  render() {
    return (
      <>
        <div className="App">
          <div className="container py-5">
            <div className="row">
              {/* Judul App */}
              <div className="col-12 text-center">
                <h1 className="fw-bold">PRIMAKANYA</h1>
                <hr className="w-75 mx-auto" />
                <form
                  id="form1"
                  name="form1"
                  onSubmit={(e) => e.preventDefault()} // Menghentikan perilaku asal dari form
                >
                  <input
                    type="text"
                    id="input1"
                    name="input1"
                    placeholder="Masukkan angka"
                    className="mr-4"
                    style={{ border: "none" }}
                  />
                  <input
                    type="submit"
                    value="Periksa Angka Prima"
                    onClick={this.cekPrima} // Memanggil fungsi cekPrima saat tombol diklik
                  />
                </form>
                <p id="container"></p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
