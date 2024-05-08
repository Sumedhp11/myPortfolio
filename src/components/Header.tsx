"use client";
import React, { useState } from "react";

import { cn } from "@/utils/cn";
import { Menu, MenuItem } from "./ui/navbar-menu";
import GithubLogo from "@/assets/github-logo.svg";
import LinkedinLogo from "@/assets/linkedin-logo.svg";
import GmailLogo from "@/assets/gmail-logo.svg";

const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const gmailAddress = "sumedhpawar8966@gmail.com";

  const handleGmailClick = () => {
    navigator.clipboard.writeText(gmailAddress).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
      <Menu setActive={setActive}>
        <a href="https://github.com/Sumedhp11">
          <MenuItem
            setActive={setActive}
            active={active}
            src={GithubLogo}
            alt="GitHub Logo"
            classname="bg-white rounded-full"
          />
        </a>
        <a href="https://linkedin.com/in/sumedhp21">
          <MenuItem
            setActive={setActive}
            active={active}
            src={LinkedinLogo}
            alt="LinkedIn Logo"
            classname="rounded-full"
          />
        </a>
        <MenuItem
          setActive={setActive}
          active={active}
          src={GmailLogo}
          alt="Gmail Logo"
          classname="bg-white p-2 rounded-full cursor-pointer"
          onClick={handleGmailClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        />
      </Menu>{" "}
      {copied && (
        <p className="text-center font-semibold text-base">
          {" "}
          Email copied {gmailAddress}
        </p>
      )}
      {showTooltip && (
        <div className="absolute top-1 right-20 px-2 py-1 bg-gray-800 text-white text-xs rounded">
          {gmailAddress}
        </div>
      )}
    </div>
  );
};

export default Header;
