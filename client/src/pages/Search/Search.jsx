import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./Search.css"

const Search = () => {
  return (
    <Container fluid className="search-bg">
      <Row className="my-5">
        <Col>
          <div
            id="zillow-large-search-box-widget-container"
            style={{
              width: "432px",
              overflow: "hidden",
              backgroundColor: "#e7f1fd",
              color: "#555",
              font: "normal normal normal 13px verdana,arial,sans-serif",
              lineHeight: "13px",
              margin: "0 auto",
              padding: "0",
              textAlign: "center",
              border: "1px solid #adcfff",
              letterSpacing: "0",
              textTransform: "none",
            }}
          >
            <h2
              style={{
                color: "#d61",
                textAlign: "left",
                fontSize: "20px",
                lineHeight: "20px",
                fontWeight: "normal",
                float: "left",
                width: "200px",
                marginLeft: "10px",
                marginTop: "5px",
                letterSpacing: "0",
                textTransform: "none",
              }}
            >
              Find Homes
            </h2>
            <div style={{ float: "right" }}>
              <a
                href="https://www.zillow.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="Zillow Real Estate Information"
                  style={{ border: "0" }}
                  src="https://www.zillow.com/widgets/GetVersionedResource.htm?path=%2Fstatic%2Fimages%2Fpowered-by-zillow.gif"
                ></img>
              </a>
            </div>
            <iframe
              scrolling="no"
              src="https://www.zillow.com/widgets/search/LargeSearchBoxWidget.htm?did=zillow-large-search-box-iframe-widget&type=iframe&rgname=Fort+Myers+FL&shvi=yes"
              width="430"
              frameborder="0"
              height="400"
              title="zillow"
            ></iframe>
            <table
              id="zillow-tnc-widget-footer-links"
              width="100%"
              style={{
                font: "normal normal normal 10px verdana,arial,sans-serif",
                textAlign: "left",
                lineHeight: "12px",
                margin: "10px 5px",
                padding: "0",
                borderSpacing: "0",
                borderCollapse: "collapse",
              }}
            >
              <tbody style={{ margin: "0", padding: "0" }}>
                <tr style={{ margin: "0", padding: "0" }}>
                  <td
                    style={{
                      fontWeight: "bold",
                      fontSize: "10px",
                      color: "#555",
                      textAlign: "left",
                      margin: "0",
                      padding: "0",
                    }}
                  >
                    QUICK LINKS:
                  </td>
                </tr>
                <tr style={{ margin: "0", padding: "0" }}>
                  <td style={{ margin: "0", padding: "0" }}>
                    <span id="widgetFooterLink" class="regionBasedLink">
                      <a
                        href="https://www.zillow.com/fort-myers-fl/"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "#36b",
                          fontFamily: "verdana,arial,sans-serif",
                          fontSize: "10px",
                          margin: "0 5px 0 0",
                          padding: "0",
                          textDecoration: "none",
                        }}
                      >
                        <span class="region">Fort Myers</span> Real Estate
                        Listing
                      </a>
                    </span>
                  </td>
                  <td style={{ margin: "0", padding: "0" }}>
                    <span id="widgetFooterLink">
                      <a
                        href="https://www.zillow.com/mortgage-rates/"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "#36b",
                          fontFamily: "verdana,arial,sans-serif",
                          fontSize: "10px",
                          margin: "0 5px 0 0",
                          padding: "0",
                          textDecoration: "none",
                        }}
                      >
                        Mortgage Rates
                      </a>
                    </span>
                  </td>
                  <td style={{ margin: "0", padding: "0" }}>
                    <span id="widgetFooterLink">
                      <a
                        href="https://www.zillow.com/refinance/"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "#36b",
                          fontFamily: "verdana,arial,sans-serif",
                          fontSize: "10px",
                          margin: "0 5px 0 0",
                          padding: "0",
                          textDecoration: "none",
                        }}
                      >
                        Refinancing
                      </a>
                    </span>
                  </td>
                </tr>
                <tr style={{ margin: "0", padding: "0" }}>
                  <td style={{ margin: "0", padding: "0" }}>
                    <span id="widgetFooterLink" class="regionBasedLink">
                      <a
                        href="https://www.zillow.com/fort-myers-fl/foreclosures/"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "#36b",
                          fontSize: "10px",
                          margin: "0 5px 0 0",
                          padding: "0",
                          textDecoration: "none",
                        }}
                      >
                        <span class="region">Fort Myers</span> Foreclosures
                      </a>
                    </span>
                  </td>
                  <td style={{ margin: "0", padding: "0" }}>
                    <span id="widgetFooterLink">
                      <a
                        href="https://www.zillow.com/mortgage-calculator/"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "#36b",
                          fontSize: "10px",
                          margin: "0 5px 0 0",
                          padding: "0",
                          textDecoration: "none",
                        }}
                      >
                        Mortgage Calculators
                      </a>
                    </span>
                  </td>
                  <td style={{ margin: "0", padding: "0" }}>
                    <span id="widgetFooterLink">
                      <a
                        href="https://www.zillow.com/mortgage-rates/"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "#36b",
                          fontSize: "10px",
                          margin: "0 5px 0 0",
                          padding: "0",
                          textDecoration: "none",
                        }}
                      >
                        Purchase Loans
                      </a>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
