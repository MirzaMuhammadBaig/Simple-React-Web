import "./img/about.jpg";
import "./img/blog-1.jpg";
import "./img/blog-2.jpg";
import "./img/feature.jpg";
import "./img/header.jpg";
import "./img/team-1.jpg";
import "./img/team-2.jpg";
import "./img/team-3.jpg";
import "./img/team-4.jpg";
import "./img/testimonial-1.jpg";
import "./img/testimonial-2.jpg";
import "./img/testimonial-3.jpg";
import "./img/testimonial-4.jpg";
import "./img/user.jpg";
import "./css/style.css";
import "./css/style.min.css";
function App() {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row py-2 px-lg-5">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center text-white">
                    <small><i className="fa fa-phone-alt mr-2"></i>+012 345 6789</small>
                    <small className="px-3">|</small>
                    <small><i className="fa fa-envelope mr-2"></i>info@example.com</small>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-white px-2" href="">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="text-white px-2" href="">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="text-white px-2" href="">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="text-white px-2" href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="text-white pl-2" href="">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    


    
    <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" className="navbar-brand ml-lg-3">
                <h1 className="m-0 display-5 text-uppercase text-primary"><i className="fa fa-truck mr-2"></i>Faster</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div className="navbar-nav m-auto py-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="service.html" className="nav-item nav-link">Service</a>
                    <a href="price.html" className="nav-item nav-link">Price</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu rounded-0 m-0">
                            <a href="blog.html" className="dropdown-item">Blog Grid</a>
                            <a href="single.html" className="dropdown-item">Blog Detail</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <a href="" className="btn btn-primary py-2 px-4 d-none d-lg-block">Get A Quote</a>
            </div>
        </nav>
    </div>

    <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
            <h1 className="text-primary mb-4">Safe And Faster</h1>
            <h1 className="text-white display-3 mb-5">Logistics Services</h1>
            <div className="mx-auto" style={{width: "100%", maxWidth: "600px"}}>
                <div className="input-group">
                    <input type="text" className="form-control border-light" 
                    style={{padding: "30px"}} placeholder="Tracking Id"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary px-3">Track And Trace</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 pb-4 pb-lg-0">
                    <img className="img-fluid w-100" src="img/about.jpg" alt=""/>
                    <div className="bg-primary text-dark text-center p-4">
                        <h3 className="m-0">25+ Years Experience</h3>
                    </div>
                </div>
                <div className="col-lg-7">
                    <h6 className="text-primary text-uppercase font-weight-bold">About Us</h6>
                    <h1 className="mb-4">Trusted And Faster Logistic Service Provider</h1>
                    <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                    <div className="d-flex align-items-center pt-2">
                        <button type="button" className="btn-play" data-toggle="modal"
                            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 className="font-weight-bold m-0 ml-4">Play Video</h5>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>        
                        
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    <div className="container-fluid bg-secondary my-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 py-5 py-lg-0">
                    <h6 className="text-primary text-uppercase font-weight-bold">Get A Quote</h6>
                    <h1 className="mb-4">Request A Free Quote</h1>
                    <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                    <div className="row">
                        <div className="col-sm-4">
                            <h1 className="text-primary mb-2" data-toggle="counter-up">225</h1>
                            <h6 className="font-weight-bold mb-4">SKilled Experts</h6>
                        </div>
                        <div className="col-sm-4">
                            <h1 className="text-primary mb-2" data-toggle="counter-up">1050</h1>
                            <h6 className="font-weight-bold mb-4">Happy Clients</h6>
                        </div>
                        <div className="col-sm-4">
                            <h1 className="text-primary mb-2" data-toggle="counter-up">2500</h1>
                            <h6 className="font-weight-bold mb-4">Complete Projects</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="bg-primary py-5 px-4 px-sm-5">
                        <form className="py-5">
                            <div className="form-group">
                                <input type="text" className="form-control border-0 p-4" placeholder="Your Name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required="required" />
                            </div>
                            <div className="form-group">
                                <select className="custom-select border-0 px-4" 
                                style={{height: "47px"}}>
                                    <option value>Select A Service</option>
                                    <option value="1">Service 1</option>
                                    <option value="2">Service 1</option>
                                    <option value="3">Service 1</option>
                                </select>
                            </div>
                            <div>
                                <button className="btn btn-dark btn-block border-0 py-3" type="submit">Get A Quote</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center pb-2">
                <h6 className="text-primary text-uppercase font-weight-bold">Our Services</h6>
                <h1 className="mb-4">Best Logistic Services</h1>
            </div>
            <div className="row pb-3">
                <div className="col-lg-3 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i className="fa fa-2x fa-plane text-dark pr-3"></i>
                        <h6 className="text-white font-weight-medium m-0">Air Freight</h6>
                    </div>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a className="border-bottom text-decoration-none" href="">Read More</a>
                </div>
                <div className="col-lg-3 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i className="fa fa-2x fa-ship text-dark pr-3"></i>
                        <h6 className="text-white font-weight-medium m-0">Ocean Freight</h6>
                    </div>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a className="border-bottom text-decoration-none" href="">Read More</a>
                </div>
                <div className="col-lg-3 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i className="fa fa-2x fa-truck text-dark pr-3"></i>
                        <h6 className="text-white font-weight-medium m-0">Land Transport</h6>
                    </div>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a className="border-bottom text-decoration-none" href="">Read More</a>
                </div>
                <div className="col-lg-3 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i className="fa fa-2x fa-store text-dark pr-3"></i>
                        <h6 className="text-white font-weight-medium m-0">Cargo Storage</h6>
                    </div>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a className="border-bottom text-decoration-none" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid bg-secondary my-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <img className="img-fluid w-100" src="img/feature.jpg" alt=""/>
                </div>
                <div className="col-lg-7 py-5 py-lg-0">
                    <h6 className="text-primary text-uppercase font-weight-bold">Why Choose Us</h6>
                    <h1 className="mb-4">Faster, Safe and Trusted Logistics Services</h1>
                    <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                    <ul className="list-inline">
                        <li><h6><i className="far fa-dot-circle text-primary mr-3"></i>Best In Industry</h6></li>
                        <li><h6><i className="far fa-dot-circle text-primary mr-3"></i>Emergency Services</h6></li>
                        <li><h6><i className="far fa-dot-circle text-primary mr-3"></i>24/7 Customer Support</h6></li>
                    </ul>
                    <a href="" className="btn btn-primary mt-3 py-2 px-4">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default App;
