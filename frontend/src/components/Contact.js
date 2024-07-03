import React from "react";
import "./Contact.css";


export default function Contact() {
  return (
    <div className="container">
      <h1>
        If you have any questions or concerns please click the Indygo link and
        you will be redirected to their Help Page.
      </h1>
      <br></br>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consequat nisi id risus malesuada, vitae commodo nulla efficitur. Sed at
        volutpat leo, at fermentum neque. Aliquam erat volutpat. Fusce auctor
        sapien a mauris ullamcorper, a interdum elit vehicula. Phasellus in
      </p>
      <div className='IndyContact'>
        <a
          style={{
            color: "blue",
            fontSize: "75px",
          }}
          href="https://www.indygo.net/contact-us/"
        >
          IndyGo CONTACT WEB PAGE LINK!
        </a>
      </div>
      <div className="contact-pic">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MItdHg7Dft465SwXLUCH5IkW6bwP53V4LduwJQhMDI_-jDbmKhihTQqtIcicppNOoyo&usqp=CAU"
          alt="IndyGo Bus"
        />
      </div>
      <br></br>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consequat nisi id risus malesuada, vitae commodo nulla efficitur. Sed at
        volutpat leo, at fermentum neque. Aliquam erat volutpat. Fusce auctor
        sapien a mauris ullamcorper, a interdum elit vehicula. Phasellus in
      </p>
      <br></br>
      <div className="fillerPicture">
        <img
          style={{ width: "50%" }}
          src="https://i.etsystatic.com/8174292/r/il/48a81a/3632435075/il_1588xN.3632435075_26nn.jpg"
          alt="IndyGo Bus"
        />
        <br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
      </div>
    </div>
  );
}
