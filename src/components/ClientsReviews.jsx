import {useEffect} from 'react';
import "../css/reviews.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import "aos/dist/aos.css"



const ClientsReviews = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);

    return (
        <div data-aos="fade-up" className='container text text-center'>
            <h2 className='title reviewTitle colorblue'>Client <span className='colorpink'>Reviews</span></h2>
            <p className='subtitle start'>I will go above and beyond to make sure my clients are happy, and to be proud of the work I deliver.</p>
            <p className='subtitle end'>Below is what some of my customers have to say about my work.</p>
            <div className="reviews-container">
                <div className="row d-flex justify-content-evenly">
                   <div data-aos="fade-up" className="card col-12 col-sm-5">
                        <div className="review">
                            <a href='https://www.responsivetranslation.com/' target="_blank" rel="noopener noreferrer" className='col-5 img-container' alt="Responsive Translation">
                                <img className='img' src="https://media.licdn.com/dms/image/C510BAQG9CghK6b8zWA/company-logo_200_200/0/1519901250512?e=2147483647&v=beta&t=3f_qNUUfB3sKnH2TqPzeU5YjXJxUFUXE6TuSPuwyumw" alt="Responsive Translation" />
                            </a>
                            <div className='col-7 review-info'>
                                <h4>Sandra Alonso</h4>
                                <p>Responsive Translation</p>
                                <div className='stars-container'>
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                </div>
                                <p>05-26-2020</p>
                            </div>                    
                        </div>
                        <hr />
                        <div className="comment">
                            <p className='text-start'>Silvina is one of our favorite EN into ES translators. We hope we can collaborate together for many many years.</p>
                            <a href="https://www.proz.com/feedback-card/2189278" target="_blank" rel="noopener noreferrer"><button className='btn read-more'>Read More</button></a>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="card col-12 col-sm-5">
                        <div className="review">
                            <a href='https://multilingualconnections.com/' target="_blank" rel="noopener noreferrer" className='col-5 img-container' alt="Multilingual Connections">
                                <img className='img' src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_11a09157d4f71103cf4a2e51037068bf/multilingual-connections.jpg" alt="Multilingual Connections" />
                            </a>
                            <div className='col-7 review-info'>
                                <h4>Andy Hung</h4>
                                <p>Multilingual Connections</p>
                                <div className='stars-container'>
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                </div>
                                <p>06-29-2021</p>
                            </div>                    
                        </div>
                        <hr />
                        <div className="comment">
                            <p className='text-start'>Silvi is a professional. We appreciate the quality translation she delivers.</p>
                            <a href="https://www.proz.com/feedback-card/2189278" target="_blank" rel="noopener noreferrer"><button className='btn read-more'>Read More</button></a>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="card col-12 col-sm-5">
                        <div className="review">
                            <a href='https://multilingualconnections.com/' target="_blank" rel="noopener noreferrer" className='col-5 img-container' alt="Multilingual Connections">
                                <img className='img' src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_11a09157d4f71103cf4a2e51037068bf/multilingual-connections.jpg" alt="Multilingual Connections" />
                            </a>
                            <div className='col-7 review-info'>
                                <h4>Hasan Alkan</h4>
                                <p>Multilingual Connections</p>
                                <div className='stars-container'>
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                </div>
                                <p>04-19-2020</p>
                            </div>                    
                        </div>
                        <hr />
                        <div className="comment">
                            <p className='text-start'>Silvina is a great linguist with attention to detail, promptness and excellent communication skills.</p>
                            <a href="https://www.proz.com/feedback-card/2189278" target="_blank" rel="noopener noreferrer"><button className='btn read-more'>Read More</button></a>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="card col-12 col-sm-5">
                        <div className="review">
                            <a href='https://www.optimational.com/' target="_blank" rel="noopener noreferrer" className='col-5 img-container' alt="Optimational">
                                <img className='img' src="https://optimational.com/wp-content/uploads/2024/06/Optimational-Favicon.webp" alt="Optimational" />
                            </a>
                            <div className='col-7 review-info'>
                                <h4>Ann Mont</h4>
                                <p>Optimational</p>
                                <div className='stars-container'>
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                    <FontAwesomeIcon icon="fa-solid fa-star" className='star' />
                                </div>
                                <p>07-19-2021</p>
                            </div>                    
                        </div>
                        <hr />
                        <div className="comment">
                            <p className='text-start'>Silvina is a professional translation expert who always delivers exceptional quality. We would definitely work with her again.</p>
                            <a href="https://www.proz.com/feedback-card/2189278" target="_blank" rel="noopener noreferrer"><button className='btn read-more'>Read More</button></a>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default ClientsReviews;