import '../../index.css';
import servicesBg from '../../assets/servisBg.png';
import Card from '../../components/Card/Card';
const Services = () => {
    return (
        <div className="page-container">
            <div className="header" style={{ backgroundImage: `url(${servicesBg})` }}>
                <h1>Our Services</h1>
            </div>
            <div className="hero">
                <div className="card">
                    <h3>Project Plan</h3>
                    <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                </div>
                <div className="card">
                    <h3>Interior Work</h3>
                    <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                </div>
                <div className="card">
                    <h3>Retail Design</h3>
                    <p>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;

