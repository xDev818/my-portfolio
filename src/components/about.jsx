import React from "react";
import myImage from "../assets/img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
       
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
       
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "VB.Net", content: "VB.Net", porcentage: "90%", value: "90" },
        { id: "CSharp", content: "C#", porcentage: "90%", value: "90" },
        {
          id: "ReactJS",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
      
        {
          id: "MySQL",
          content: "My SQL",
          porcentage: "80%",
          value: "80"
        },
    
        {
          id: "SQL_Server",
          content: "SQL Server",
          porcentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "With 22yrs of IT Experience in managing IT both Technical(Hardware and Software Development)."
        },
        {
          id: "second-p-about",
          content:
            " I am a highly analytical front-end developer with expertise in HTML, CSS, JavaScript, and various front-end frameworks. I develop dynamic and responsive interfaces that meet client needs. I am a collaborative and creative front-end developer, experienced in HTML, CSS, JavaScript, and various front-end frameworks. I develop dynamic and responsive interfaces that provide an optimal user experience." + 
            "With a deep understanding of back-end development best practices, I am an innovative developer experienced in Django and Flask. I deliver high-quality products that meet client needs."
        },
        {
          id: "third-p-about",
          content:
            "I also Microsoft Certified ( MCP , MCAD , MCSD ) in .Net Technologies last 2005 and ITIL ( ITIL OSA , ITSM ) last 2018. "
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <p>
                            Programming Langiuages and Skills
                          </p>
                          {/* <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          /> */}
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
