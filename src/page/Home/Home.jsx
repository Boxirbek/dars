import '../../index.css';
import homeBg from '../../assets/home.png';

const Home = () => {
    return (
        <div className="page-container">
            <div className="HomeBg" style={{ backgroundImage: `url(${homeBg})` }}>
                <h1>Let's make your <br /> home beautiful together</h1>
                <p>There are many variations of the passages <br /> of lorem Ipsum fromavailable, majority</p>

            </div>
            <div className="hero">
               
            </div>
        </div>
    );
};

export default Home;
