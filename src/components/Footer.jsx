import React from 'react'

const Footer = () => {
    return (
        <footer className="row row-cols-3 py-4 my-4 container-fluid">
            <div className="col wrapper container">
                <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                <img  className="brand-img" src="/images/PEDDLE.svg" alt="" />
                </a>
                <p>Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante egestas ullamcorper. Duis id mauris consequat, ultrices ligula at, laoreet mag.</p>
                <p className="text-muted">© 2020PEDDLE</p>
            </div>

            <div className="col-2">
                <h5>Product</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Present</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Laoreet</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Laoreet</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Server</a></li>
                </ul>
            </div>

            <div className="col-2">
                <h5>Engage</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Mauris</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Aenean</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Linsean</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Lingula</a></li>
                </ul>
            </div>

            <div className="col-3">
                <h5>Earn Money</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Ultrices</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Fusce</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;








