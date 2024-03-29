import React from "react";

//import stock
import Wyndham from "../assets/projects/wyndham.webp";
import dbpsc from "../assets/projects/dbpsc.webp";
import princetech from "../assets/projects/princetech.webp";
import ach from "../assets/projects/ach.webp";
import synxis from "../assets/projects/synxis.webp";
import orca from "../assets/projects/orca.webp";

import stock from "../assets/img/image1.jpg";
import stock1 from "../assets/img/image2.jpg";
import stock2 from "../assets/img/image3.jpg";
import stock3 from "../assets/img/image4.jpg";
import stock4 from "../assets/img/image5.jpg";
import stock5 from "../assets/img/image6.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">Projects Develop from 2003 - present</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                {/* <a href= "https://www.princetech.com.ph/" > */}
                <a >
                  <div className="work-img">
                    <img src={princetech} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">
                          PrinceTech Enrollment System
                        </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            {">"} Yr. 2003-2005 <br />
                            {">"} Languages : VB6,MS SQL 2005, Crystal Report.{" "}
                            <br />
                            {">"} Caters all State University in the Philippines
                            ( SUC's )
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={princetech}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                {/* <a
                  href={stock2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                {/* <a href="https://corporate.wyndhamhotels.com"> */}
                <a >
                  <div className="work-img">
                    <img src={Wyndham} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Wyndham Property Management</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            {">"} YR : 2007-2009 <br />
                            {">"} Languages : C#, MS SQL 2005, ASP.Net <br />
                            {">"} Applications was used by all Wyndham Networks
                            nationwide.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={Wyndham}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                {/* <a
                  href={stock2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                {/* <a href="https://corporate.wyndhamhotels.com"> */}
                <a >
                  <div className="work-img">
                    <img src={ach} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Automated Clearing House</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            {">"} YR : 2007-2009 <br />
                            {">"} Languages : C#, MS SQL 2005, ASP.Net, Smart CLient Software Factory <br />
                            {">"} Applications was used by all Wyndham Networks
                            nationwide.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a
                  href={stock1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                {/* <a href="https://corporate.wyndhamhotels.com"> */}
                <a >
                  <div className="work-img">
                    <img src={synxis} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Propert Management System</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            {">"} YR : 2007-2009 <br />
                            {">"} Languages : C#, MS SQL 2005, ASP.Net, Smart CLient Software Factory <br />
                            {">"} Applications was used by all selected Wyndham Networks in US.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={synxis}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                {/* data-lightbox="gallery-aguadeluz" */}
                {/* <a href="https://dbpsc.com.ph/"> */}
                <a >
                  <div className="work-img">
                    <img src={dbpsc} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">
                          Dev. Bank of the Phils. Payroll System.{" "}
                        </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            {">"} Yr : 2007-2015 <br />
                            {">"} Languages : C# Windows,MS SQL 2009, Dev
                            Components, Telerek <br />
                            {">"} ( 10,000 ) Employees run on Payroll System
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={dbpsc}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                {/* data-lightbox="gallery-aguadeluz" */}
                {/* <a href="https://orcamining.vercel.app/"> */}
                <a >
                  <div className="work-img">
                    <img src={orca} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">
                          ORCA Construction Material and Mining.{" "}
                        </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            {">"} Yr : 2020-2022 <br />
                            {">"} Languages : React, ReactJS
                             <br />
                            {">"} ORCA Construction and Mining was develop to market company to suitable Investor
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={orca}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>

            {/* <div className="col-md-4">
              <div className="work-box">
               
                <a href="#">
                  <div className="work-img">
                    <img src={orca} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">
                          ORCA Construction Material and Mining.{" "}
                        </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            {">"} Yr : 2020-2022 <br />
                            {">"} Languages : React, ReactJS
                             <br />
                            {">"} ORCA Construction and Mining was develop to market company to suitable Investor
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={orca}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
