
import Header from "../../components/Header/Header";
import "./consecuencias.css"
import { useNavigate } from "react-router-dom";

const consecuencias = () => {
    const navigate = useNavigate();
    const handleNextPage = () => {
    navigate('/soluciones');
    };
    return(
        <>
        
        <Header />
            <div className="container-consecuencia">
                <h1>
                    Consecuencias de la contaminacion
                </h1>
                <p1>
                El deterioro de la calidad del agua tiene efectos negativos para el medio ambiente, 
                la salud y la economía global. 
                </p1>
                
                    
                </div>
                <div className="container-2"> 
                <p3>
                    <strong style={{color:"blue"}}> 1. Destruccion de la biodiversidad: </strong>La contaminación hídrica empobrece los ecosistemas acuáticos y facilita la proliferación descontrolada de algas fitoplanctónicas en los lagos —eutrofización—.
                </p3>
                
                </div>
                <div className="container-3 "> 
                <p3
                >
                    <strong style={{color:"blue"}}> 2. Contaminacion de la cadena alimenticia: </strong>La pesca en aguas contaminadas, así como la utilización de aguas residuales en la ganadería y la agricultura, pueden transmitir toxinas a los alimentos que perjudiquen nuestra salud a través de su ingesta.
                </p3>
                </div>
                
                <div className="container-2"> 
                <p3
                >
                    <strong style={{color:"blue"}}> 3. Escazes de agua: </strong>La ONU admite que aún existen miles de millones de personas en el mundo sin acceso a agua potable y saneamiento, sobre todo en zonas rurales.            </p3>
                </div>
                
                <div className="container-3 "> 
                <p3>
                    <strong style={{color:"blue"}}> 4. Enfermedades: </strong>La OMS calcula que unos 2.000 millones de personas beben agua potable contaminada por excrementos, exponiéndose a contraer enfermedades como el cólera, la hepatitis A y la disentería.           </p3>

                </div>
                <div className="container-2"> 
                <p3>
                    <strong style={{color:"blue"}}> 5. Mortalidad Infantil: </strong>Según la ONU, las enfermedades diarreicas vinculadas a la falta de higiene causan la muerte a unos mil niños al día en todo el mundo.</p3>

                
                </div>
                <div className="container-3 "> 
                <p3>
                    <strong style={{color:"blue"}}> 6. Cambio climaticos: </strong>La contaminación de los océanos afecta profundamente su capacidad de absorber dióxido de carbono (CO₂), lo que contribuye al calentamiento global y la alteración de los patrones climáticos en todo el planeta           </p3>
                </div>

                <div className="container-imagen">
                    <p2>
                <img className="Imagenn-reducida" src="https://i.pinimg.com/736x/28/0c/fb/280cfb9ae38cd9b293d274fb9dc58cdb.jpg"/>
                <img className="Imagenn-reducida" src="https://congeo.es/wp-content/uploads/2023/06/eutrofizacion-lagos.jpg"/>
                <img className="Imagenn-reducida" src="https://www.euskadi.eus/contenidos/blog_post/20210313_microplasticos/es_def/images/microplasticos.jpg"/>
                <img className="Imagenn-reducida" src="https://www.iagua.es/sites/default/files/styles/thumbnail-830x455/public/agua_potable_4.jpg?itok=KKzqMy1Z"/>
                <img className="Imagenn-reducida" src="https://i.pinimg.com/736x/71/63/b8/7163b832060cceb0891298d876ad2a1b.jpg"/>
                <img className="Imagenn-reducida" src="https://assets.weforum.org/article/image/responsive_big_webp_s9E0dQE6msgo9Cp_V5Eal1oWb2TkkiQyUR9fzoMNM7w.webp"/>
                <img className="Imagenn-reducida" src="https://ciencia.nasa.gov/wp-content/uploads/sites/2/2024/01/efectos-page-triptych.webp?w=1536&format=webp"/>

                    </p2>




                </div>
                <button className="buutton" onClick={handleNextPage}>Siguiente Pagina → 
                </button>
                
                
                
            
            

        
        
        
        
        </>

    );
};

export default consecuencias; 