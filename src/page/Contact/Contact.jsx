import '../../index.css';
import projectsBg from '../../assets/servisBg.png';
import bedroomImg from '../../assets/bgOur.png';
import livingRoomImg from '../../assets/ourProjectbg.png';
import Card from '../../components/Card/Card';

const Projects = () => {
    return (
        <div className="page-container">
            <div className="header" style={{ backgroundImage: `url(${projectsBg})` }}>
                <h1>Our Projects</h1>
            </div>
            <div className="hero">
                <Card
                    title="Minimal Bedroom"
                    description="Decor / Architecture"
                    image={bedroomImg}
                />
                <Card
                    title="Luxury Living Room"
                    description="Decor / Architecture"
                    image={livingRoomImg}
                />
            </div>
        </div>
    );
};

export default Projects;