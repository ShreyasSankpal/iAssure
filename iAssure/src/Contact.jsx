import React from 'react'
import { faYoutube } from 'react-icons/fa'
function Contact() {
  return (
    <>
    
    <div className='contact'>
      <div className='content'>
    <div className='boldit'>Contact Us</div>
    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p > Et aperiam accusantium ea repellendus fugiat nemo perspiciatis </p>
    
    <button>Home<button>Contact Us</button></button>
    </div>
    <div className='content-r'>

    </div>
    </div>

    <div className='middle'>
      <div className='col-left'>
       <div className='ContactTitle'>
          <h2>Lets Start </h2>
          <h2>Something Great!</h2>
          <p>Proactively customized cross-media schemas rather than high payoff</p>
          <p>the custommer service. Uniquely enable extensible niche</p>

       </div>
       <div className='contactInfo'>
               <div className='iconGroup'><div className='icon'>
               <div className='iconGroup'><div className='icon'>
                <i className='fa-solid fa-location'></i>
                </div>
                <div className='details'>
                
                  <span>Location</span>
                  <span>Akshya Nagar 1st Block 1st Cross,</span> 
                  <span>Rammurthy Nagar,</span>
                  <span> Banglore-560016</span>
                </div>
                </div>
                
                
                <i className='fa-solid fa-phone'></i>
                </div>
                <div className='details'>
                  <span>Phone</span>
                  <span>+84848456465</span>
                </div>
                </div>

                <div className='iconGroup'><div className='icon'>
                <i className='fa-solid fa-envelope'></i>
                </div>
                <div className='details'>
                  <span>Email</span>
                  <span>info@company.com</span>
                </div>
                </div>

                
       </div>
       </div>
       <div className='col-right'>
       <div className='pad'>
        <div className='help'> <h3>Need Help?</h3>
        <p>Proactively fashion world-class leadership vis-a-vis</p>
        <p>enterprise e-services. Great strong leadership.</p>
       <div className='form'>
            <form>
              <div className='inputnames'>
                <input type='text' name='' placeholder='Name'className='inp'></input>
              </div> <br></br>
              
              <div className='inputnames'>
                <input type='email' name='' placeholder='Email'className='inp'></input>
              </div> <br></br>

              <div className='inputnames'>
                <input type='text' name='' placeholder='Subject'className='inp'></input>
              </div> <br></br>

              <div className='inputnames'>
                <textarea placeholder=' Your message'className='inp'></textarea>
              </div> <br></br>

              <div className='inputnames'>
                <button className='inp'>SEND INQUIRY</button>
              </div>
            </form>
       </div>
       </div>
       </div>
       </div>
    </div>
    <div className='map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.652797696705!2d73.9086982750384!3d18.54458568255367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c220a4234a03%3A0xaacdd60fadf55f2c!2siAssure%20International%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1703585550592!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" Loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


    </div>

    <div className='footer'>
           <div className='follow'>
                  <h4>FOLLOW US</h4>
                  <p>linkdln</p><p>Telegram</p><p>Twitter</p>
                  <p>Website: https://company.com</p>
           </div>
          <div className='oservices'>
                  <h4>OUR SERVICES</h4>
                 <p>-Lorem ipsum dolor</p>
                 <p>-Lorem ipsum dolor</p>
                 <p>-Lorem ipsum dolor</p>
                 <p>-Lorem ipsum dolor</p>

          </div>
          <div className='pservices'>
                    <h4>            </h4><br></br>
                 <p>-Lorem ipsum dolor</p>
                 <p>-Lorem ipsum dolor</p>
                 <p>-Lorem ipsum dolor</p>
                 <p>-Lorem ipsum dolor</p>
          </div>
          <div className='touch'>
               <h4>GET IN TOUCH</h4>
               <span>Location</span>
               <span>Akshya Nagar 1st Block 1st Cross,</span> <br></br>
                <span>Rammurthy Nagar,</span><br></br>
                <span> Banglore-560016</span><br></br>
                <hr></hr>
                <span>Phone</span>
                <span>+84848456465</span><br></br>
                <span>Email</span>
                <span>info@company.com</span>

          </div>
    </div>
    <div className='end'>
             <div className='left'> <p>Copyright  2023, iAssuredIT All Rights Reserved</p></div>
             <div className='right'><p>Designed & Developed By iAssured International Technologies Pvt.Ltd</p></div>
             
    </div>
    </> 
  )
}

export default Contact