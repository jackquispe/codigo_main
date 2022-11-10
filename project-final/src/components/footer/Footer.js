import React from "react";
import libro from "../../assets/libro.png";
import logo from "../../assets/logo.svg";



const Footer = () => {

    return(
        <div className="container">
            <div className="bg-dark text-white py-4">
                <div className="container"> 
                    <div className="row ">
                        <div className="text-center mb-5">
                            <img src={logo}/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="text-center">Nuestra Carta</li>
                            
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            
                            <li className="text-center">Terminos y condiciones</li>
                            
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            
                            <li className="text-center">Politica de Privacidad</li>
                        </ul>
                    </div>
                    <div className="row px-5">
                        <div className="p-5 text-center">
                            <p>Queremos invitarlo a compartir con nosotros el inicio de una experiencia distinta en el concepto de cafetería. Inspirado en conservar la calidad y tradición en postres peruanos y en otras delicias con influencia europea. Reaviva la calidez y la magia en un espacio agradable y placentero.</p>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="text-center">
                            <img width="100px" src={libro}/>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <ul className="col-12 col-md-3 list-unstyled">
                            <li className="text-center"><i className="bi bi-facebook"></i></li>
                            
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            
                            <li className="text-center"><i className="bi bi-instagram"></i></li>
                            
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled">
                            
                            <li className="text-center"><i className="bi bi-twitter"></i></li>
                        </ul>
                    </div>
                    <div className="text-center mt-3">
                        <h5>@Todos los derechos Reservados</h5>
                    </div>
                    
                </div>
                

            </div>
        </div>
    );
};

export default Footer;