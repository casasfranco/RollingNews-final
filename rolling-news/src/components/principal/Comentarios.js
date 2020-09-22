import React, { Fragment } from "react";

const Comentarios = () => {
  return (
    <div>
      <Fragment>
        <div id="fb-root"></div>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v8.0"
          nonce="RO3I8VMz"
        ></script>
      </Fragment>

      <Fragment>
        <div
          class="fb-comments"
          data-href="https://web.facebook.com/RollingCodeSchool"
          data-numposts="5"
          data-width=""
        ></div>
      </Fragment>
    </div>
  );
};

export default Comentarios;
