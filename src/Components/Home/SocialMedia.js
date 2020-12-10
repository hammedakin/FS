import React from "react";

const SocialMedia = () => {
  return (
    <>
      <section class="social">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="twitter">
                <a
                  class="twitter-timeline"
                  data-width="500"
                  data-height="500"
                  data-theme="dark"
                  data-tweet-limit="1"
                  href="https://twitter.com/FireSwitchTech?ref_src=twsrc%5Etfw"
                > 
                  Tweets by FireSwitchTech
                </a>
              </div>
            </div>

            <div class="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0922097675057!2d3.9061924502933314!3d7.455050694595511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed522de783bf%3A0xfd6cec114987cc57!2sFireswitch%20Technology!5e0!3m2!1sen!2sng!4v1607517890431!5m2!1sen!2sng"
                width="100%"
                height="350"
                frameborder="3"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;
