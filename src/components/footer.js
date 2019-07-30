import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css'
const FooterPage = () => {
  return (


    <footer class="page-footer font-small cyan darken-3" id="tefy">

  <div class="container">

    <div class="row">

      <div class="col-md-12 py-5">
        <div class="mb-5 flex-center">

          <a class="fb-ic">
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>

          <a class="tw-ic">
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>

          <a class="gplus-ic">
            <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>

         
        </div>
      </div>


    </div>


  </div>
 


  <div class="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://github.com/Miotykanto/" id="anarana"> MIRANTO Tefimampihonona</a>
  </div>


</footer>

  );
}

export default FooterPage;

