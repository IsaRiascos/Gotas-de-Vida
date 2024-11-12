import Header from "../components/Header/Header";
import Cube3D from "./Cube3d";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Header />
            

                {/* Renderizando el cubo 3D */}
                <div className="cube-container">
                    <Cube3D />
                </div>
            
        </>
    );
};

export default Home;

