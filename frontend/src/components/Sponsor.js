import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Sponsor.css";

export default function SponsorRegister() {
  const [name, setName] = useState("");
  const location = useLocation(); // Retrieve selected location from previous page (map)
  const [locationInput, setLocationInput] = useState("");
  const selectedLocation = location.state?.location; // Get selected location from state from map.js

  //use effect hook to allow the set location autfill to work along with be able to change the location if needed
  useEffect(() => {
    if (selectedLocation) {
      setLocationInput(selectedLocation.id);
    }
  }, [selectedLocation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/sponsor/create", //go check registerSponsor in backend/routes/sponsorRoutes to make sure names match.js
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            location: locationInput,
          }),
        }
      );
      console.log(response);
      if (response.ok) {
        setName("");
        setLocationInput("");
        alert("Sponsor created successfully!");
      } else if (response.status === 409) {
        alert("Location already sponsored!");
      } else {
        alert("Failed to sponsor, please check information");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="sponsor-form-container">
        <h2 className="New-Sponsor">Register New Sponsor</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="labels">
            <label className="nameLabel-Sponsor">Name:</label>
            <input
              className="NameInput-sponsor"
              list="name-options"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br></br>
            <label className="locationLabel-Sponsor">Location:</label>
            <input
              type="location"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              required
            />
          </div>
          <br></br>
          <div className="Register-buttons">
            {localStorage.getItem("token") ? (
              <button onChange={console.log("hi")}> REGISTER</button>
            ) : (
              <p>You must be logged in to view this button</p>
            )}
          </div>
        </form>

        <br></br>
        <div className="Sponsor-Time">
          <p>
            Sponsorship responsibilities will be held for 1 month, feel free to
            responsor after that.
          </p>
        </div>
        <br></br>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrsXtoBS6GbuRmp_-W0FftkzFOl9FkJrJWQ&s"
          alt="IndyGo Logo"
        />
        <p className="lorem-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam
        </p>
        <div className="sponsor-pic">
          <br></br>
          <p className="lorem-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque consequat nisi id risus malesuada, vitae commodo nulla
            efficitur. Sed at volutpat leo, at fermentum neque. Aliquam erat
            volutpat. Fusce auctor sapien a mauris ullamcorper, a interdum elit
            vehicula. Phasellus in justo sit amet odio sodales vehicula sit amet
            eget magna. Ut vel ligula vitae turpis dignissim lacinia. Curabitur
            sit amet eros ut lacus aliquam blandit. Sed ut arcu purus.
            Suspendisse potenti. Morbi non metus nulla. Donec dictum fringilla
            nisl, eget consectetur felis tempus id. Cras et
          </p>
          <br></br>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrsXtoBS6GbuRmp_-W0FftkzFOl9FkJrJWQ&s"
            alt="IndyGo Logo"
          />
        </div>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          consequat nisi id risus malesuada, vitae commodo nulla efficitur. Sed
          at volutpat leo, at fermentum neque. Aliquam erat volutpat. Fusce
          auctor sapien a mauris ullamcorper, a interdum elit vehicula.
          Phasellus in justo sit amet odio sodales vehicula sit amet eget magna.
          Ut vel ligula vitae turpis dignissim lacinia. Curabitur sit amet eros
          ut lacus aliquam blandit. Sed ut arcu purus. Suspendisse potenti.
          Morbi non metus nulla. Donec dictum fringilla nisl, eget consectetur
          felis tempus id. Cras et viverra turpis. Vestibulum faucibus dui in
          velit vulputate, a cursus risus tristique. Integer scelerisque, metus
          at ultricies pulvinar, orci
        </p>
        <div className="aboutPic">
          <br></br>
          <img
            style={{ width: "30%" }}
            src="https://st2.depositphotos.com/3765139/6173/i/950/depositphotos_61730885-stock-photo-old-bus-retro-style2.jpg"
            alt="IndyGo Bus"
          />
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          consequat nisi id risus malesuada, vitae commodo nulla efficitur. Sed
          at volutpat leo, at fermentum neque. Aliquam erat volutpat. Fusce
          auctor sapien a mauris ullamcorper, a interdum elit vehicula.
          Phasellus in justo sit amet odio sodales vehicula sit amet eget magna.
          Ut vel ligula vitae turpis dignissim lacinia.
        </div>
        <br></br>
        <img
          style={{ width: "30%" }}
          src="https://st2.depositphotos.com/3765139/6173/i/950/depositphotos_61730885-stock-photo-old-bus-retro-style2.jpg"
          alt="IndyGo Bus"
        />
        <br></br>
        <div className="randomParagraph">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque consequat nisi id risus malesuada, vitae commodo nulla
            efficitur. Sed at volutpat leo, at fermentum neque. Aliquam erat
            volutpat. Fusce auctor sapien a mauris ullamcorper, a interdum elit
            vehicula. Phasellus in justo sit amet odio sodales vehicula sit amet
            eget magna. Ut vel ligula vitae turpis dignissim lacinia. Curabitur
            sit amet eros ut lacus aliquam blandit. Sed ut arcu purus.
            Suspendisse potenti. Morbi non metus nulla. Donec dictum fringilla
            nisl, eget consectetur
          </p>
        </div>
        <br></br>
        <div className="contact-pic">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MItdHg7Dft465SwXLUCH5IkW6bwP53V4LduwJQhMDI_-jDbmKhihTQqtIcicppNOoyo&usqp=CAU"
            alt="IndyGo Bus"
          />
        </div>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
      </div>
    </>
  );
}
