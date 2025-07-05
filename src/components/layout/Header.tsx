import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { Separator } from "../ui/separator";

export const Header = () => {
  const navItems = [
    { label: "HOME", href: "#" },
    { label: "EVENTS", href: "#events" },
    { label: "ABOUT US", href: "#about" },
  ];

  return (
    <header className="absolute w-full h-[147px] top-0 left-0 z-10">
      <div className="absolute w-full h-[146px] top-0 left-0 bg-white">
        <div className="absolute w-[418px] h-[70px] top-[39px] left-[61px] flex items-center">
          <img
            className="w-[59px] h-[30px] object-cover"
            alt="GDG Logo"
            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=60&h=30&fit=crop"
          />
          <div className="ml-[71px]">
            <div className="font-sans font-normal text-primary text-[28px] tracking-[0.56px]">
              Google Developer Groups
            </div>
            <div className="font-sans font-normal text-primary text-[28px] tracking-[0.56px]">
              Noida
            </div>
          </div>
        </div>

        <NavigationMenu className="absolute top-14 right-[100px]">
          <NavigationMenuList className="flex gap-[126px]">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="font-sans font-medium text-primary hover:text-[#4285f4] transition-colors text-[28px] tracking-[0.56px]"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Separator className="absolute w-full h-0.5 top-[145px] left-0 bg-border" />
    </header>
  );
};