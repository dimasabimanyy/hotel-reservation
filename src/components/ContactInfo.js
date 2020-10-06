import React, { useState } from "react";

function ContactInfo() {
  const [info, setInfo] = useState([
    {
      key: 1,
      icon: <i className="fas fa-phone"></i>,
      title: "Phone",
      desc: [{ info: "(+844) 1800 3377 " }, { info: "(+844) 1800 5599" }],
    },
    {
      key: 2,
      icon: <i className="fas fa-map-marked-alt"></i>,
      title: "Address",
      desc: [{ info: "736 Blue Spring Ave.Smithtown, NY 11787" }],
    },
    {
      key: 3,
      icon: <i className="far fa-envelope"></i>,
      title: "Email",
      desc: [
        { info: "support@erioshotel.com" },
        { info: "hello@erioshotel.com" },
      ],
    },
  ]);

  return (
    <section className="contact">
      <div className="contact-info container">
        <div className="contact-info-left">
          <h1>Contact Us</h1>
          <p>
            If you need any help, please contact us or send us an email or go to
            our forum We are sure that you can receive our reply as soon as
            possible.
          </p>
        </div>
        <div className="contact-info-right">
          {info.map((item) => {
            return (
              <div className="box-info" key={item.key}>
                <div>{item.icon}</div>
                <h5>{item.title}</h5>
                <div>
                  {item.desc.map((subItem) => {
                    return <p>{subItem.info}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
