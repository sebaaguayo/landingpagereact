import React from "react";

function Footer() {
  return (
    <div class="container-fluid bg-dark">
      <footer class="d-flex justify-content-center py-3">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg class="bi" width="30" height="24"></svg>
          </a>
          <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
