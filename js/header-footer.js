document.addEventListener("DOMContentLoaded", function () {
  // Header section
  const headerSection = `
<!-- Header Start -->
    <div style="border-bottom: .3rem solid #cf9455;" class="container-fluid">
        <div class="row">
            <div class="col-xl-3 bg-secondary d-none d-xl-block">
                <a href="index.html"
                    class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                    <h1 class="m-0 display-4 text-primary text-uppercase">SLC</h1>
                </a>
            </div>
            <div class="col-xl-9">
                <div class="row bg-white border-bottom d-non d-flex ">
                    <div
                        class="col-md-12 col-12 d-flex  align-items-center flex-wrap justify-content-md-between justify-content-center">
                        <div class="conatiner d-flex flex-wrap">
                            <div class=" d-none d-md-block align-items-center py-2 px-3">
                                <i class="fa fa-envelope text-primary mr-2"></i>
                                <small>info@example.com</small>
                            </div>
                            <div class=" d-none d-md-block align-items-center py-2 px-2">
                                <i class="fa fa-phone-alt text-primary mr-2"></i>
                                <small>+91 9822745980</small>
                            </div>
                        </div>
                        <div class="conatiner d-flex  align-items-center flex-wrap justify-content-center">
                            <div class="d-block d-md-none align-items-center py-2 px-3">
                                <i class="fa fa-envelope text-primary mr-2"></i>
                                <small>info@example.com</small>
                            </div>
                            <div class="d-block d-md-none align-items-center py-2 px-2">
                                <i class="fa fa-phone-alt text-primary mr-2"></i>
                                <small>+91 9822745980</small>
                            </div>
                            <a href="#" class="appointmentfix" data-toggle="modal" data-target="#appointmentModal">Fix
                                An
                                Appointment</a>
                            <div class="d-inline-flex align-items-center p-2">

                                <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                    <i class="fab fa-youtube"></i>
                                </a>
                                <!-- <div class="d-inline-flex align-items-center p-2">
                                <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a class="btn btn-sm btn-outline-primary btn-sm-square mr-2" href="">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </div> -->
                            </div>
                        </div>
                        <!-- <div
                        class="col-md-6 col-12 d-flex align-items-center mt-3 justify-content-md-end justify-content-between">
                       
                        </div>
                    </div> -->
                    </div>
                </div>

                <nav class="navbar navbar-expand-xl bg-white navbar-light p-0">
                    <a href="index.html" class="navbar-brand d-block d-xl-none">
                        <h1 class="m-0 display-4 text-dark text-uppercase">SLC</h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between " id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0 flex-wrap d-flex">
                            <a href="index.html" class="nav-item nav-link ">Home</a>
                            <!-- <a href="about-us.html"  class="nav-item nav-link">About</a>
                            <a href="service.html"  class="nav-item nav-link">Practice</a>
                            <a href="team.html"  class="nav-item nav-link">Attorneys</a>
                            <div  class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                                <div class="dropdown-menu rounded-0 m-0">
                                    <a href="#" class="dropdown-item">Menu Item 1</a>
                                    <a href="#" class="dropdown-item">Menu Item 2</a>
                                    <a href="#" class="dropdown-item">Menu Item 3</a>
                                </div>
                            </div>
                            <a href="contact.html"  class="nav-item nav-link">Contact</a> -->
                            <a class="nav-item nav-link" href=about-us.html>About Us</a>
                            <a class="nav-item nav-link" href=our-practise.html>Our Practise</a>
                            <a class="nav-item nav-link" href=important-documents.html>Imp Deeds</a>
                            <a class="nav-item nav-link" href=important-link.html>Imp Links</a>
                            <a class="nav-item nav-link" href="blogs.html">Blogs</a>
                            <a class="nav-item nav-link" href=case-studies.html>Case Studies</a>
                            <!-- <a  class="nav-item nav-link" href=contact.html>CONTACT US</a> 
                                   <a class="nav-item nav-link" href=career.html>Career</a>-->
                            <a class="nav-item nav-link" href=faq.html>FAQ</a>
                               <a class="nav-item nav-link" href=awards-and-certifications.html>Awards</a>
                            

                     
                        </div>
                        <!-- <a href="" class="btn btn-primary mr-3 d-none d-lg-block">Get A Quote</a> -->
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <!-- Header End -->
    <!-- Link to open the Appointment Modal -->


    <!-- Modal -->
    <div class="modal fade" id="appointmentModal" tabindex="-1" aria-labelledby="appointmentModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h5 class="modal-title" id="appointmentModalLabel">Fix an Appointment <span>*</span></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="modal-body">
                            <!-- Appointment Form -->
                            <form action="AppointMail.aspx" method="post" id="makeappointment"
                                onsubmit="return checkforms1(this);">
                                <!-- Date & Time -->
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="datepicker">Date</label>
                                        <input id="datepicker" name="datepicker" class="form-control" placeholder="Date"
                                            type="text">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="time">Time</label>
                                        <select id="time" name="time" class="form-control">
                                            <option value="None">Time</option>
                                            <option value="12.00 am - 1.00 pm">12.00 am - 1.00 pm</option>
                                            <option value="1.00 pm - 2.00 pm">1.00 pm - 2.00 pm</option>
                                            <option value="2.00 pm - 3.00 pm">2.00 pm - 3.00 pm</option>
                                            <option value="3.00 pm - 4.00 pm">3.00 pm - 4.00 pm</option>
                                            <option value="4.00 pm - 5.00 pm">4.00 pm - 5.00 pm</option>
                                            <option value="5.00 pm - 6.00 pm">5.00 pm - 6.00 pm</option>
                                        </select>
                                    </div>
                                </div>

                                <!-- Name, Email, Phone, and Message -->
                                <div class="form-group">
                                    <label for="txtAppName">Name</label>
                                    <input id="txtAppName" name="txtAppName" class="form-control" placeholder="Name"
                                        type="text">
                                </div>
                                <div class="form-group">
                                    <label for="txtAppEmail">Email Id</label>
                                    <input id="txtAppEmail" name="txtAppEmail" class="form-control"
                                        placeholder="Email Id" type="email">
                                </div>
                                <div class="form-group">
                                    <label for="phone">Mobile No.</label>
                                    <input id="phone" name="phone" class="form-control" placeholder="Mobile No."
                                        maxlength="15" onkeypress="return isNumber(event)" type="text">
                                </div>
                                <div class="form-group">
                                    <label for="msg">Message</label>
                                    <textarea id="msg" name="msg" class="form-control" placeholder="Message"></textarea>
                                </div>

                                <!-- CAPTCHA -->
                                <!-- <div class="form-group">
                <label>Captcha</label>
                <div class='captchabox'>
                  <div id="Captcha_value_a"></div> + <div id="Captcha_value_b"></div>
                  <i class="fa fa-refresh" id="refresh" onclick="random_number()" aria-hidden="true"></i>
                </div>
                <input type="hidden" id="txtCaptcha_modal" />
                <input type="text" name="CaptchaInput" id="CaptchaInput_modal" class="form-control" placeholder="Type the above number" size="15">
              </div> -->

                                <!-- Submit Button -->
                                <div class="form-group text-center">
                                    <button class="btn btn-primary btn-block border-0 py-3" type="submit">Get An
                                        Appointment</button>
                                </div>
                            </form>

                            <!-- Working Hours -->

                        </div>

                    </div>
                    <div class="col-lg-6">
                        <div class="working-hours">
                            <h5>Working Hours</h5>
                            <ul class="list-unstyled">
                                <li><strong>Monday - Friday:</strong> 10.00 am - 09.00 pm</li>
                                <li><strong>Saturday:</strong> 11.00 am - 06.00 pm</li>
                                <li><strong>Sunday:</strong> Closed</li>
                            </ul>
                            <p><b>*</b> Subjected to Confirmation</p>
                            <p><b>*</b> Min. Consultation Fees Rs. 2,000/-</p>
                        </div>
                    </div>
                </div>
                <!-- Modal Body -->
            </div>
        </div>
    </div>
    `;

  document.getElementById("header-placeholder").innerHTML = headerSection;

  // Footer section
  const footerSection = `
             <!-- Footer Start -->
    <div class="container-fluid bg-secondary text-white pt-1 px-sm-3 px-md-5" style="margin-top: 90px;">
        <div class="row mt-5">
            <div class="col-lg-4 col-md-6 mt-3 mt-lg-0">
                <div class="d-flex justify-content-lg-center p-4"
                    style="border-radius: 1rem;background: rgba(256, 256, 256, .05);">
                    <i class="fa fa-2x fa-map-marker-alt text-primary"></i>
                    <div class="ml-3">
                        <h5 class="text-white">Our Office</h5>
                        <p class="m-0">Location, City, Country</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-3 mt-lg-0">
                <div class="d-flex justify-content-lg-center p-4"
                    style="border-radius: 1rem;background: rgba(256, 256, 256, .05);">
                    <i class="fa fa-2x fa-envelope-open text-primary"></i>
                    <div class="ml-3">
                        <h5 class="text-white">Email Us</h5>
                        <p class="m-0">info@example.com</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0 mt-3 mt-lg-0">
                <div class="d-flex justify-content-lg-center p-4"
                    style="border-radius: 1rem;background: rgba(256, 256, 256, .05);">
                    <i class="fa fa-2x fa-phone-alt text-primary"></i>
                    <div class="ml-3">
                        <h5 class="text-white">Call Us</h5>
                        <p class="m-0">+91 9822745980</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <a href="index.html" class="navbar-brand">
                    <h1 class="m-0 mt-n2 display-4 text-primary text-uppercase">SLC</h1>
                </a>
                <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et
                </p>
                <div class="d-flex justify-content-start mt-4">
                    <a class="btn btn-sm btn-outline-light btn-lg-square mr-2" href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-sm btn-outline-light btn-lg-square mr-2" href="">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-sm btn-outline-light btn-lg-square mr-2" href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="btn btn-sm btn-outline-light btn-lg-square mr-2" href="">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="btn btn-sm btn-outline-light btn-lg-square mr-2" href="">
                        <i class="fab fa-youtube"></i>
                    </a>

                </div>
            </div>


            <div class="col-lg-2 col-md-6 mb-5">
                <h4 class="font-weight-semi-bold text-primary mb-4">Explore Links</h4>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Home</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>About</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Services</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Attorney</a>
                    <a class="text-white" href="contact.html"><i class="fa fa-angle-right mr-2"></i>Contact</a>
                    <!-- <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>FAQs</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Help</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Terms</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Privacy</a>
                    <a class="text-white" href="#"><i class="fa fa-angle-right mr-2"></i>Site Map</a> -->
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="font-weight-semi-bold text-primary mb-4">Keep in Touch</h4>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Sat-Mon</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Location, City, Country</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>+91 987657434</a>
                    <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>info@gibf.biz</a>
                    <a class="text-white" href="contact.html"><i class="fa fa-angle-right mr-2"></i>2245687580</a>
               
                </div>
            </div>

            <div class="col-xs-12 col-lg-4 col-md-6">
                <div class="footer footer-four ouickcontact section-title-area123">
                    <h2 class="font-weight-semi-bold text-light mb-4 ">Quick Contact</h2>
                </div> <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4060.263684385!2d75.34791497547161!3d19.863386526782126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba382b6b85a1f%3A0x5d8fbca2210db8d1!2sShelkar%20Law%20Consultancy!5e1!3m2!1sen!2sin!4v1734866687372!5m2!1sen!2sin"  style="border:0;width:100%;height:200px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
            <div class="col-md-8 mt-3">
                <div class="section-title-area123">

                    <h2 class="font-weight-semi-bold text-light mb-4 ">India Operations Through Affiliate offices:
                    </h2>
                </div>
                <p class="mt-3">Mumbai | Delhi | Ahmedabad | Bengaluru | Chennai | Pune | Jamnagar | Jodhpur | Goa |
                    Banaras
                </p>
            </div>
        </div>
        <hr class="bg-light">
        <div class="conatiner text-center">
            © <span>Copyright</span>
            <span>
                <script>
                    document.write(new Date().getFullYear());
                </script>
                . All Rights Reserved
            </span> <br>
            <strong class="px-1 sitename">
                Designed by
                <a href="https://fontchanger.style">Font Changer</a>
            </strong>
            <!-- <p class="m-0 text-white">&copy; <a class="font-weight-bold" href="#">Your Site Name</a>. All Rights
                    Reserved.</p>
                <p class="m-0 text-white">Designed by <a class="font-weight-bold"
                        href="https://freewebsitecode.com">Free Website Code</a></p> -->
        </div>

    </div>
    <!-- Footer End -->
    `;

  document.getElementById("footer-placeholder").innerHTML = footerSection;

  // Mobile menu functionality
  if (typeof $ !== "undefined") {
    $(".mainmenu").slicknav({
      prependTo: "#mobile-menu-wrap",
      allowParentLinks: true,
    });
  }
});
