import React from 'react';
import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

export default function getLanguageIcon(language) {
    switch (language) {
      case 'html':
        return <FaHtml5 className="logo" style={{ color: 'yellow' }}/>;
      case 'css':
        return <IoLogoCss3 className="logo"  style={{ color: 'aqua' }} />;
        case 'javascript':
            return <TbBrandJavascript className="logo"   style={{ color: '#9400D3' }} />
      default:
        return null;
    }
  };

  