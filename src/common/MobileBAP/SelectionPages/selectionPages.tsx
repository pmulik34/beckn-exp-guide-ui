import "./selectionPage.css";

function selectionPages() {
  return (
    <div className="selectionPage_wrapper">
      <div className="beckn_logo">
        <img src="/assets/beckn_lg.svg" alt="" />
      </div>
      <div style={{ marginBottom: "23px" }}>
        <div>select what would you like to do next?</div>
      </div>
      <div className="selectionPage_wrapper_innr">
        <a href="https://google.com" target="" rel="noopener noreferrer">
          <div className="Link_wrapper">
            <div className="link_img">
              <img src="/assets/Shop.png" alt="" />
            </div>
            <div style={{ fontSize: "20px" }}>shop for items</div>
            <img src="/assets/arrow_forword_ios_24pxnavArrow.png" alt="" />
          </div>
        </a>
        <a href="https://google.com" target="" rel="noopener noreferrer">
          <div className="Link_wrapper">
            <div className="link_img">
              <img src="/assets/bookRide.png" alt="" />
            </div>
            <div style={{ fontSize: "20px" }}>shop for items</div>
            <img src="/assets/arrow_forword_ios_24pxnavArrow.png" alt="" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default selectionPages;
