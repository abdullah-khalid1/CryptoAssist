import React from "react";

const MyDetail = ({ name, symbol, price, percentChange }) => {
  return (
    <div class="container-fluid tm-container-content tm-mt-60">
      <div class="row mb-4">
        <h2 class="col-12 tm-text-primary">Photo title goes here</h2>
      </div>
      <div class="row tm-mb-90">
        <div class="col-xl-8 col-lg-7 col-md-6 col-sm-12">
          <img
            src="https://media-cdn.tripadvisor.com/media/vr-splice-j/02/c4/e6/db.jpg"
            alt="Image"
            class="img-fluid"
          />
        </div>
        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
          <div class="tm-bg-gray tm-video-details">
            <div class="text-center mb-5">
              <a href="#" class="btn btn-primary tm-btn-big">
                Download
              </a>
            </div>
            <div class="mb-4 d-flex flex-wrap">
              <div class="mr-4 mb-2">
                <span class="tm-text-gray-dark">Dimension: </span>
                <span class="tm-text-primary">1920x1080</span>
              </div>
              <div class="mr-4 mb-2">
                <span class="tm-text-gray-dark">Format: </span>
                <span class="tm-text-primary">JPG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
