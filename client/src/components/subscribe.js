import React from 'react';


class Subscribe extends React.Component {
   componentDidMount() {
      setTimeout(function () {
         document.querySelector(".loader-wrapper").style = "display: none";
      }, 2000);
   }
   render() {

      return (
         <section>
            <div className="container">
               <div className="row">
                  <div className="col-md-8 offset-md-2">
                     <div className="footer-text">
                        <img src="assets/images/email.png" alt="email" />
                        <h2 className="title text-center md-margin-top">subscribe to <span>newsletter</span></h2>
                        <p>  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                        <form action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda" className="footer-form needs-validation" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                           <div className="form-group">
                              <input type="email" className="form-control" placeholder="enter your email" name="EMAIL" id="mce-EMAIL" required="required" />
                           </div>
                           <div className="form-button">
                              <button type="submit" className="btn btn-custom theme-color" id="mc-submit">send</button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}


export default Subscribe;