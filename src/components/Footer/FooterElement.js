
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119, 121);
  display: flex;
  font-size: 14px;

  align-items: center;
  height: 100%;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    color: #0068ff;
    box-shadow: 3px 0px 0px 0px #0068ff;
    background: rgba(226,226,226);
    padding-left: 5px
   }
`;