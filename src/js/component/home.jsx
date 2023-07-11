//import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
//const Home = () => {
//return (
//<div className="text-center">
//<h1 className="text-center mt-5">Hello Rigo!</h1>
//<p>
//	<img src={rigoImage} />
//</p>
//		<a href="#" className="btn btn-success">
//			If you see this green button... bootstrap is working...
//		</a>
//		<p>
//			Made by{" "}
//			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
//			love!
//		</p>
//	</div>
//	);
//};

import React from "react";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbojumbotron.jsx";
import Footer from "./footer.jsx";
//todo es componente
//un componente es una funcion XD pero  que inicia con Mayuscula
//los componentes se llaman como si fueran una etiqueta HTML
//las fnciones normales las llamamos, return any, y se llaman X()
//si creamos un componente tiene que tener MAYUSCULA!!!
//import nombre funcion from "./component/home.jsx";
function Cimiento() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Jumbotron
            titulo1="Welcome to InnovationAvantGarde"
            parrafo1="Wondering about the future of human kind? Here you will find the best topics on science, music, drugs and more. Remember to sign up to our newsletter regarding more information on the best online journal through the world of avantgarde"
            imagen1="https://img.freepik.com/vector-gratis/fondo-abstracto-lineas-blancas-horizontales-dinamicas_1017-33891.jpg?size=626&ext=jpg&uid=R95930245&ga=GA1.1.444628794.1678494005&semt=sph"
          />
          <div className="col-md-3">
            <Card
              imagen="https://img.freepik.com/vector-gratis/bandera-dia-internacional-contra-uso-indebido-trafico-ilicito-drogas_23-2149414239.jpg?size=626&ext=jpg&ga=GA1.2.444628794.1678494005&semt=popular"
              titulo="Drug Abuse"
              parrafo="Fighting addiction is difficult task for anyone"
            />
          </div>
          <div className="col-md-3">
            <Card
              imagen="https://img.freepik.com/foto-gratis/piedras-zen-apiladas-fondo-arena-arte-concepto-equilibrio_53876-110629.jpg?size=626&ext=jpg&uid=R95930245&ga=GA1.2.444628794.1678494005&semt=sph"
              titulo="The use of Meditation for drug abuse"
              parrafo="When people are frustrated trying"
            />
          </div>
          <div className="col-md-3">
            <Card
              imagen="https://img.freepik.com/vector-gratis/fondo-azul-morado-dia-mundial-contra-cancer_23-2147734364.jpg?size=626&ext=jpg&uid=R95930245&ga=GA1.1.444628794.1678494005&semt=sph"
              titulo="Why do people get Cancer?"
              parrafo="There is a lot of debate about the origin of all the types of Cancer diseases, but when it comes to non-hereditary cancer, we ask ourselves, how is that possible? there's a lot of people who gets cancer by psychomatic consequences."
            />
          </div>
          <div className="col-md-3">
            <Card
              imagen="https://img.freepik.com/vector-gratis/vector-elemento-diseno-ilusion-agujero-gusano-cuadricula-3d_53876-140887.jpg?size=626&ext=jpg&uid=R95930245&ga=GA1.1.444628794.1678494005&semt=ais"
              titulo="Satalite James Webb new discovery"
              parrafo="NASA has publicated a new article about an amazing new research on a event horizon using their greatest Space Telescope"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cimiento;

//se diferencian los  componentes  y las funciones, es que la primera son funciones que retornan HTML
//funciones tienen que ser exportadas para poder utilizadas por otros archivos
//antes module.export, ahora export default "nombre componente"
