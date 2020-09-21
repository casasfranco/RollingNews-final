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
          nonce="wYuCtVpR"
        ></script>
      </Fragment>

      <Fragment>
        <div
          class="fb-comments"
          data-href="https://web.facebook.com/mariano.gutierrez.elmago/posts/10223238239530487?comment_id=10223238243090576&amp;reply_comment_id=10223243516662412"
          data-numposts="5"
          data-width=""
        ></div>
      </Fragment>
    </div>
  );
};

export default Comentarios;
