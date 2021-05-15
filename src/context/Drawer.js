import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();
const SidebarToggleContext = createContext();

export const useSidebar = () => {
  return useContext(SidebarContext);
};

export const useSidebarToggle = () => {
  return useContext(SidebarToggleContext);
};

export const SidebarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <SidebarContext.Provider value={open}>
      <SidebarToggleContext.Provider value={toggleOpen}>
        {children}
      </SidebarToggleContext.Provider>
    </SidebarContext.Provider>
  );
};
