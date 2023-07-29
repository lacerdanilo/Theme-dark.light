import React, { useContext } from "react";
import Switch from "react-switch";
import { DefaultTheme, ThemeContext } from "styled-components";
import { Container } from "./styled";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useContext<DefaultTheme | undefined>(ThemeContext);
  if (theme) 
  return (
    <Container>
      Hello World
      <Switch
        onChange={toggleTheme}
        checked={theme.title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={theme.colors.secundary}
        onColor={theme.colors.secundary}
      />
    </Container>
  );
};

export default Header;
