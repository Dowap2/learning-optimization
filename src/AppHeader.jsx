import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function AppHeader(props) {
  const linkStyle = { textDecoration: "none", color: "#000" };
  const LinkComponent = styled.div`
    width: 200px;
    height: 80px;
    float: left;
  `;
  const AppHeaderComponent = styled.div`
    background: #f5f5f5;
    height: 80px;
  `;
  return (
    <AppHeaderComponent>
      <LinkComponent>
        <Link to="/todo" style={linkStyle}>
          TodoList
        </Link>
      </LinkComponent>
      <LinkComponent>
        <Link to="/class" style={linkStyle}>
          ClassComponent
        </Link>
      </LinkComponent>
      <LinkComponent>
        <Link to="/slider" style={linkStyle}>
          Slider
        </Link>
      </LinkComponent>
      {/* <LinkComponent>
        <input
          type="text"
          value={props.id}
          onChange={e => props.setId(e.target.value)}
        />
        <Link to={`/${props.id}`}>ok</Link>
      </LinkComponent> */}
      <LinkComponent>
        <Link to="/dictionary" style={linkStyle}>
          dictionary
        </Link>
      </LinkComponent>
      <LinkComponent>
        <Link to="/img" style={linkStyle}>
          img
        </Link>
      </LinkComponent>
    </AppHeaderComponent>
  );
}
