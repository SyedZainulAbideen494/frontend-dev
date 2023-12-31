import "./index.css";
import "./App.css";
import React, { Fragment, useRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from './images/Dropment (2).png'
import nocode from './images/Dropment (7).png'
import step from './images/Step 1.png'

const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4wb48rt', 'template_s9taha1', form.current, 'EZfwWZa84DHq7A2EW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Fragment>
    <div className="header2dropment">
            <header>
              <section>
              <div className="header2textdropment">
                <h1>Build Your Perfect Online Store!</h1>
                <div className="h1dropemnthead2h12">
                <h1>Your Dream Store Awaits: Just a Few Clicks Away!</h1>
                </div>
                </div>
              </section>  
              <div className="header2dropimg">
                <section></section>
              </div>  
            </header>
          </div>
          <div className="ourservicesdropment">
            <span>
            <div className="service1dropemnt">
              <div className="servcie1img">
              <section></section>
              </div>
              <div className="service1text">
                <section>
                  <h2>No code</h2>
                  <h4>No coding skill required, you can choose from a wide range of template to make your online store.</h4>
                </section>
              </div>
          </div>
          </span>
          <span>
          <div className="service2dropemnt">
              <div className="servcie2img">
              <section></section>
              </div>
              <div className="service2text">
                <section>
                  <h2>No Web hosting or domain required</h2>
                  <h4>No web hosting or domain required so you can start for free.</h4>
                </section>
              </div>
          </div>
          </span>
          <span>
          <div className="service3dropemnt">
              <div className="servcie3img">
              <section></section>
              </div>
              <div className="service3text">
                <section>
                  <h2>Easy to use</h2>
                  <h4>With our user friendly interface your can create your store with ease in a few clicks.</h4>
                </section>
              </div>
          </div>
          </span>
        </div>
        <div className="form">
          <h2>Pre register</h2>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br/>
      <input type="text" name="to_name" className="normal"/><br/>
      <label>Email</label><br/>
      <input type="email" name="from_name"  className="normal"/><br/>
      <label>Message</label><br/>
      <textarea name="message"  className="normal"/><br/>
      <input type="submit" value="Send"  className="btnininput"/>
    </form>
    </div>
        <div className="howitworks">
          <div className="stepbystepguideimg">
            <img src={step}/>
          </div>
        </div>
        <div className="aboutdropmentaboutus">
          <div className="aboutus1dropment">
            <div className="abt1dropmenttext">
              <h1>Our Mission</h1>
              <p><h3>At Dropment, we are driven by a singular mission: to empower individuals and businesses of all sizes to effortlessly establish a compelling online presence and thrive in the digital marketplace. Our commitment to this mission is reflected in every aspect of our platform, which enables you to create and manage your online store without the need for domain registration, web hosting, or coding expertise.</h3></p>
            </div>
            <div className="abt1dropmentimg">
              <section></section>
            </div>
          </div>
          <div className="ourvalue">
          <div className="valuemaintexthead">
                <h1>Our Value</h1>
              </div>
            <div className="value1">  
              <div className="value1img">
                <section></section>
              </div>
              <div className="value1txt">
                <h1>Simplicity</h1>
                <p>We believe that technology should be accessible to all. Our platform is designed with simplicity in mind, allowing you to focus on what matters most your products and customers while we handle the technical intricacies.</p>
              </div>
            </div>
            <div className="value2">              
              <div className="value2txt">
                <h1>Empowerment</h1>
                <p>We empower you to take control of your online store, offering intuitive tools and features that put you in the driver's seat. No more reliance on third parties or expensive developers.</p>
              </div>
              <div className="value2img">
                <section></section>
              </div>
            </div>
            <div className="value3">
            <div className="value3img">
                <section></section>
              </div>              
              <div className="value3txt">
                <h1>Innovation</h1>
                <p>We empower you to take control of your online store, offering intuitive tools and features that put you in the driver's seat. No more reliance on third parties or expensive developers.</p>
              </div>         
            </div>
          </div>
          <div className="ourbackgrounddropment">
            <div className="ourbackgorundtext">
              <h1>Our Background</h1>
              <p>Founded in 2022, Dropment emerged from a vision to democratize e-commerce and make it accessible to everyone. With a team of passionate experts in technology, design, and business, we set out to revolutionize the way online stores are built and managed.</p>
            </div>          
          </div>
          <div className="ourapp">
            <div className="ourapptext">
              <h1>Introducing Our App</h1>
              <p>Dropment is your gateway to a world of e-commerce possibilities. Imagine creating a beautifully designed online store within minutes, without the headaches of technical complexities. Our app is meticulously crafted to bring your vision to life, offering:</p>
            </div>
            <div className="ourappblock1">
              <div className="imgblock1ourapp">
                <section></section>
              </div>
              <div className="textourappblock1">
                <h2>User-Friendly Interface</h2>
                <p>Our intuitive app interface guides you through the process, making it easy to set up your store, add products, and customize every detail.</p>
              </div>
            </div>
            <div className="ourappblock2">          
              <div className="textourappblock2">
                <h2>Stunning Templates</h2>
                <p>Choose from a collection of professionally designed templates that align with your brand's aesthetic. Customize them to create a store that truly reflects your unique identity.</p>
              </div>
              <div className="imgblock2ourapp">
                <section></section>
              </div>
            </div>
            <div className="ourappblock3">  
            <div className="imgblock3ourapp">
                <section></section>
            </div>        
              <div className="textourappblock3">
                <h2>Mobile Optimization</h2>
                <p>Your online store will look and perform flawlessly on any device, ensuring a seamless shopping experience for your customers, whether they're browsing on a computer or a smartphone.</p>
              </div>        
            </div>
          </div>
        </div>
        <div className="footer">
          <footer>
            <div className="conatctsdropment">
              <h2>Contact us</h2>
              <ul>
                <li>dropment.saz@gmail.com</li>
                <li>@saz_494</li>
              </ul>
            </div>
          </footer>
        </div>
    </Fragment>
  );
};

export default App