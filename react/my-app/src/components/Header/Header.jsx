import { useState } from "react";
import styled from "styled-components";
import { Avatar, Button, Dropdown, Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const HeaderStyled = styled(Layout.Header)`
  position: fixed;
  z-index: 99;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #1c233d;
  h1 {
    font-weight: 500;
    font-size: 25px;
    line-height: 32px;
    color: #e5e5e5;
  }
  li {
    display: inline-block;
    padding: 20px;
  }
  .nav-link {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    color: #e5e5e5;
  }

  @media (min-width: 992px) {
    height: 80px;
  }
  .connect-btn {
    width: 93px;
    height: 50px;
    background: blue;
    border-radius: 5px;
    border: none;
    color: white;
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
  const [userAvatar, setUserAvatar] = useState("");

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
            Explore
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            Marketplace
          </Link>
        </li>
        <li>
          <Link to="/view-product" className="nav-link">
            Artist
          </Link>
        </li>
        <li>
          <Link to="/collection" className="nav-link">
            Collection
          </Link>
        </li>
      </ul>
      <div className="header-search">
        <input type="text" placeholder="Search" className="input-search" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <HeaderRightStyled>
        <div className="header-lg">
          {userAvatar ? (
            <UserStyled
              style={{
                paddingRight: 20,
                marginRight: 20,
              }}
            >
              <Avatar size={36} src={userAvatar} />
              <span style={{ marginLeft: 5, color: "#fff" }}>{"Luan"}</span>
            </UserStyled>
          ) : (
            <button
              className="connect-btn"
              onClick={() => {
                setUserAvatar(
                  "https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/v/avatar_2__teaser_poster_1_.jpg"
                );
              }}
            >
              Connect
            </button>
          )}
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
