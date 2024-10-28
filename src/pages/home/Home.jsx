import Header from "../components/Header/Header";
import "./Home.css";

const Home = () => {
    return (
    <>
        <Header />
            <div className="container-home">
            <h1>¿Sabias que...?</h1>

        <p>
            ♦ El agua es un recurso vital para la vida en nuestro planeta, pero enfrenta numerosos desafíos medioambientales que amenazan su disponibilidad y calidad. Estos problemas afectan tanto a los ecosistemas acuáticos como a las poblaciones humanas que dependen de este recurso esencial.
            Siendo este impactado por diversas actividades humanas como los son las actividades industriales, el uso excesivo de pesticidas y fertilizanntes
            la gestion inadecuada de residuos y los procesos agricolas por lo tanto, cada dia que pasa, mas fuentes de agua se encuentran contaminadas. 
        </p>

        <p>
            ♦ Algunos de los principales problemas medioambientales relacionados con el agua incluyen:
        </p>
        <p1>
            1. Contaminacion de agua
        </p1>
        
        <p1>
            2. Escazes de agua 
        </p1>
        <p1>
            3. Acidficicacion de oceanos
        </p1>

        <p>
        ♦ Afortunadamente, existen soluciones que se están implementando y desarrollando: Tales como la implementacion de tecnologias de ahorro y reutilizacion de agua,
        educacio y concentizacion sobre el agua entre otras. 
        </p>
    
    
        </div>
    </>

    );
};

export default Home;