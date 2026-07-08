export const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
          <img src="./images/logo.png" alt="no image" />
          <p>
            Welcome to Yash EcomStore, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <img
            src="https://i.postimg.cc/Nj9dgJ98/cards.png"
            alt="no image"
          />
        </div>

        <div className="content_2">
          <h4>SHOPPING</h4>
          <a href="#">Computer Store</a>
          <a href="#">Laptop Store</a>
          <a href="#">Accessories</a>
          <a href="#">Sales and Discount</a>
        </div>

        <div className="content_3">
          <h4>EXPERIENCE</h4>
          <a href="./contact.html">Contact US</a>
          <a href="#" target="_blank" rel="noreferrer">
            Payment Method
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Delivery
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Return and Exchange
          </a>
        </div>

        <div className="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            BE the first to know about new <br />
            Arrivals, sales & promos!
          </p>

          <div className="f-email">
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>

          <hr />
        </div>
      </div>

      <div className="f-design">
        <div className="f-design-txt">
          <p>Design And code by Yash Satpute</p>
        </div>
      </div>
    </footer>
  );
};