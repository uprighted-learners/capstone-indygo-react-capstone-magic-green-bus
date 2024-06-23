

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Sponsor.css';
import Footer from './Footer';

export default function SponsorRegister() {

  const location = useLocation();// Retrieve selected location from previous page (map)
  const selectedLocation = location.state?.location; // Get selected location from state from map.js

  const [name, setName] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [userId, setUserId] = useState("");

  const [datesOfSponsoring, setDatesOfSponsoring] = useState([]);
  // const [isGuest, setIsGuest] = useState(true);

  //use effect hook to allow the set location autfill to work along with be able to change the location if needed 
  useEffect(() => {
    if (selectedLocation) {
      setLocationInput(selectedLocation.id);
    }
  }, [selectedLocation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(datesOfSponsoring);
    try {
      const response = await fetch(
        'http://localhost:8080/sponsor/create', //go check registerSponsor in backend/routes/sponsorRoutes to make sure names match.js
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            userId,
            location: locationInput,
            datesOfSponsoring,
          }),
        },
      );
      console.log(response);
      if (response.ok) {

        setName("");
        setLocationInput("");

        setDatesOfSponsoring([]);
        setUserId('');
        alert('User created successfully!');
      } else {
        alert('Failed to create user');
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const changeDateArray = (e) => {
    setDatesOfSponsoring((prevDatesOfSponsoring) => [e.target.value]);
  };

  return (
    <div>
      <h2>Register New Sponsor</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>User Id</label>
        <input
          type='text'
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <label>Location:</label>
        <input

          type="location"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}

          required
        />
        <label>Dates of Sponsorship:</label>
        <input
          type='datesOfSponsoring'
          value={datesOfSponsoring}
          onChange={(e) => changeDateArray(e)}
          required
        />
        <button type='submit'>Register</button>
      </form>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
        aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
        illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et
        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias
        excepturi sint occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
        libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
        quo minus id quod maxime placeat facere possimus, omnis voluptas
        assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et
        aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
        voluptates repudiandae sint et molestiae non recusandae. Itaque earum
        rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
        maiores alias consequatur aut perferendis doloribus asperiores repellat.
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
        non numquam eius modi tempora incidunt ut labore et dolore magnam
        aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
        voluptate velit esse quam nihil molestiae consequatur, vel illum qui
        dolorem eum fugiat quo voluptas nulla pariatur? Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
      <div className='sponsor-pic'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrsXtoBS6GbuRmp_-W0FftkzFOl9FkJrJWQ&s'
          alt='IndyGo Logo'
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consequat nisi id risus malesuada, vitae commodo nulla efficitur. Sed at
        volutpat leo, at fermentum neque. Aliquam erat volutpat. Fusce auctor
        sapien a mauris ullamcorper, a interdum elit vehicula. Phasellus in
        justo sit amet odio sodales vehicula sit amet eget magna. Ut vel ligula
        vitae turpis dignissim lacinia. Curabitur sit amet eros ut lacus aliquam
        blandit. Sed ut arcu purus. Suspendisse potenti. Morbi non metus nulla.
        Donec dictum fringilla nisl, eget consectetur felis tempus id. Cras et
        viverra turpis. Vestibulum faucibus dui in velit vulputate, a cursus
        risus tristique. Integer scelerisque, metus at ultricies pulvinar, orci
        libero tristique est, in suscipit ex velit nec dolor. Maecenas tempor,
        nunc non facilisis venenatis, justo lacus convallis erat, at porttitor
        mi magna sit amet eros. Etiam eget ligula sit amet neque blandit
        faucibus a et tortor. Aenean sit amet erat sit amet elit efficitur
        pellentesque. Nam vehicula sapien nec urna efficitur vestibulum. Mauris
        sit amet malesuada turpis. Nullam non urna id justo egestas gravida vel
        ut felis. Suspendisse ultrices, risus id facilisis ullamcorper, libero
        felis varius felis, et cursus dui velit non nulla.
      </p>
      <div className='aboutPic'>
        <img
          style={{ width: '30%' }}
          src='https://st2.depositphotos.com/3765139/6173/i/950/depositphotos_61730885-stock-photo-old-bus-retro-style2.jpg'
          alt='IndyGo Bus'
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        consequat nisi id risus malesuada, vitae commodo nulla efficitur. Sed at
        volutpat leo, at fermentum neque. Aliquam erat volutpat. Fusce auctor
        sapien a mauris ullamcorper, a interdum elit vehicula. Phasellus in
        justo sit amet odio sodales vehicula sit amet eget magna. Ut vel ligula
        vitae turpis dignissim lacinia. Curabitur sit amet eros ut lacus aliquam
        blandit. Sed ut arcu purus. Suspendisse potenti. Morbi non metus nulla.
        Donec dictum fringilla nisl, eget consectetur felis tempus id. Cras et
        viverra turpis. Vestibulum faucibus dui in velit vulputate, a cursus
        risus tristique. Integer scelerisque, metus at ultricies pulvinar, orci
        libero tristique est, in suscipit ex velit nec dolor. Maecenas tempor,
        nunc non facilisis venenatis, justo lacus convallis erat, at porttitor
        mi magna sit amet eros. Etiam eget ligula sit amet neque blandit
        faucibus a et tortor. Aenean sit amet erat sit amet elit efficitur
        pellentesque. Nam vehicula sapien nec urna efficitur vestibulum. Mauris
        sit amet malesuada turpis. Nullam non urna id justo egestas gravida vel
        ut felis. Suspendisse ultrices, risus id facilisis ullamcorper, libero
        felis varius felis, et cursus dui velit non nulla.
      </div>
      <img
        style={{ width: '30%' }}
        src='https://st2.depositphotos.com/3765139/6173/i/950/depositphotos_61730885-stock-photo-old-bus-retro-style2.jpg'
        alt='IndyGo Bus'
      />
      <div className='randomParagraph'>
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
          at ultricies pulvinar, orci libero tristique est, in suscipit ex velit
          nec dolor. Maecenas tempor, nunc non facilisis venenatis, justo lacus
          convallis erat, at porttitor mi magna sit amet eros. Etiam eget ligula
          sit amet neque blandit faucibus a et tortor. Aenean sit amet erat sit
          amet elit efficitur pellentesque. Nam vehicula sapien nec urna
          efficitur vestibulum. Mauris sit amet malesuada turpis. Nullam non
          urna id justo egestas gravida vel ut felis. Suspendisse ultrices,
          risus id facilisis ullamcorper, libero felis varius felis, et cursus
          dui velit non nulla.
        </p>
      </div>
      <div className='contact-pic'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MItdHg7Dft465SwXLUCH5IkW6bwP53V4LduwJQhMDI_-jDbmKhihTQqtIcicppNOoyo&usqp=CAU'
          alt='IndyGo Bus'
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
        aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
        illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et
        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias
        excepturi sint occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
        libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
        quo minus id quod maxime placeat facere possimus, omnis voluptas
        assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et
        aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
        voluptates repudiandae sint et molestiae non recusandae. Itaque earum
        rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
        maiores alias consequatur aut perferendis doloribus asperiores repellat.
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
        non numquam eius modi tempora incidunt ut labore et dolore magnam
        aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
        voluptate velit esse quam nihil molestiae consequatur, vel illum qui
        dolorem eum fugiat quo voluptas nulla pariatur? Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
    </div>
  );
}

