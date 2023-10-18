import "./Sidebar.css";

export default function Sidebar({ avatar }) {
  function inputChange() {
    console.log("search");
  }

  return (
    <section>
      <div>
        <button type="button" />
        <img src={avatar} alt="фотография профиля" />
      </div>
      <input type="text" onChange={inputChange} placeholder="Serch" />

      <p>main</p>
      <ul>
        <li>
          <p>Home</p>
        </li>
        <li>
          <p>Watch</p>
          <div></div>
        </li>
        <li>
          <p>Community</p>
          <div></div>
        </li>
        <li>
          <p>Help</p>
        </li>
      </ul>
    </section>
  );
}
