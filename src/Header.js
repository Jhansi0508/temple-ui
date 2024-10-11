// Header.js
import React from 'react';
import './Header.css'; // Import corresponding CSS file if needed

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRws-kcwRflSkkN-jeJ2EIbpEWy0Qse6yptzw&s" alt="Logo Left" width="100px" height="115px" />
        <h1 className="title">Sri Venkateshwara Swamy Temple</h1>
        <img src="https://i.pinimg.com/564x/7e/f0/39/7ef0394144ee4947d40597fabe34066f.jpg" alt="Logo Right" width="100px" height="115px" />
      </div>
    </header>
  );
}

export default Header;