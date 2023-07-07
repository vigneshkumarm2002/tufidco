import React,{useState,useEffect} from 'react';
import dashboardIcon from "./../assets/dashboardIcon.svg";
import transactionIcon from "./../assets/transactionIcon.svg";
import scheduleIcon from "./../assets/scheduleIcon.svg";
import userIcon from "./../assets/userIcon.svg";
import settingIcon from "./../assets/settingIcon.svg";
import menuIcon from "./../assets/menu.svg";

const NavContainer = () => {

  const [navsVisible, setNavsVisible] = useState(window.innerWidth >= 750);

  const toggleNavs = () => {
    setNavsVisible(!navsVisible);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setNavsVisible(window.innerWidth >= 768);
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navContainer'>
      <div className='logo'>
      <img onClick={toggleNavs} src={menuIcon} alt='icon' />
      <h1>B<span>oard.</span></h1>
      </div>
      <div className={`navs ${navsVisible ? 'navsVisible' : ''}`}>
        <div className='navList1'>
          <li><img src={dashboardIcon} alt='icon' />Dashboard</li>
          <li><img src={transactionIcon} alt='icon' />Transactions</li>
          <li><img src={scheduleIcon} alt='icon' />Schedules</li>
          <li><img src={userIcon}  alt='icon'/>Users</li>
          <li><img src={settingIcon} alt='icon'/>Settings</li>
        </div>
        <div className='navList2'>
          <li>Help</li>
          <li>Contact Us</li>
        </div>
      </div>
    </div>
  )
}

export default NavContainer;