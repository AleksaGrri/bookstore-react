import React, { memo, useState } from "react";
import { ButtonTheme, StyledToggler } from "./style";

export const TogglerTheme = memo(() => {
  const [title, setTitle] = useState<boolean>(false);

  const handleThemeLight = () => {
    setTitle((title) => !title);
  };
  const handleThemeDark = () => {
    setTitle((title) => !title);
  };

  return (
    <StyledToggler>
      {title && (
        <ButtonTheme onClick={handleThemeLight} title={title.toString()}>
          {title && "Light"}
        </ButtonTheme>
      )}
      {!title && (
        <ButtonTheme onClick={handleThemeDark} title={title.toString()}>
          {!title && "Dark"}
        </ButtonTheme>
      )}
    </StyledToggler>
  );
});
