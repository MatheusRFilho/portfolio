import Link from 'next/link';
import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const sizeClasses = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

export const SocialLinks = ({ links, size = 'md', className = '' }) => {
  const paddingClass = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`flex items-center justify-between gap-2 ${className}`}>
      <Link
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full shadow-md shadow-gray-200 ${paddingClass} cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300`}
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full shadow-md shadow-gray-200 ${paddingClass} cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300`}
        aria-label="GitHub"
      >
        <FaGithub />
      </Link>
      <Link
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full shadow-md shadow-gray-200 ${paddingClass} cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300`}
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </Link>
      <Link
        href={`mailto:${links.email}?subject=Digite aqui o assunto=&body=Digite aqui o motivo do contato`}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full shadow-md shadow-gray-200 ${paddingClass} cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300`}
        aria-label="Email"
      >
        <AiFillMail />
      </Link>
    </div>
  );
};
