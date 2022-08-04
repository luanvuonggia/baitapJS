import styled from "styled-components";
import { Avatar, Button, Dropdown, Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const HeaderStyled = styled(Layout.Header)`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 60px;
  line-height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #1c233d;
  li {
    display: inline-block;
    font-size: 20px;
    padding: 20px;
  }

  @media (min-width: 992px) {
    height: 80px;
  }
`;

const HeaderRightStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  .header-lg {
    display: none;
  }

  .header-small {
    display: flex;
  }

  @media (min-width: 992px) {
    .header-lg {
      display: flex;
      align-items: center;
    }
    .header-small {
      display: none;
    }
  }
`;

const UserStyled = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-left: 10px;
`;

// eslint-disable-next-line arrow-body-style
const Header = () => {
  const avatar =
    "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/v/avatar_2__teaser_poster_1_.jpg";
  const handleMenuClick = (e) => {
    if (e.key === "logout") {
      //;
    }
  };

  return (
    <HeaderStyled>
      <h1>Devestore</h1>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/view-product" className="nav-link">
            View Product
          </Link>
        </li>
      </ul>
      <div className="header-search">
        <input type="text" placeholder="Search" className="input-search" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <button class="connect-btn">Connect</button>
      <HeaderRightStyled>
        <div className="header-lg">
          <UserStyled
            style={{
              paddingRight: 20,
              marginRight: 20,
            }}
          >
            {avatar ? (
              <Avatar size={36} src={avatar} />
            ) : (
              <Avatar size={36} icon={<UserOutlined />} />
            )}
            <span style={{ marginLeft: 5, color: "#fff" }}>{"Luan"}</span>
          </UserStyled>
        </div>
        <Dropdown
          className="header-small"
          overlay={
            <Menu
              onClick={handleMenuClick}
              items={[
                {
                  label: "Luan",
                  key: "username",
                },
                {
                  type: "divider",
                },
                {
                  label: "logout",
                  key: "logout",
                },
              ]}
            />
          }
          trigger={["click"]}
        >
          <UserStyled>
            {avatar ? (
              <Avatar size={30} src={avatar} />
            ) : (
              <Avatar size={30} icon={<UserOutlined />} />
            )}
          </UserStyled>
        </Dropdown>
      </HeaderRightStyled>
    </HeaderStyled>
  );
};

export default Header;
