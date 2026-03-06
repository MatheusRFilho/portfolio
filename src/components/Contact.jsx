import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { MdEmail, MdPhone } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import contact from '../../public/assets/contact.jpg';
import { SectionTitle } from './SectionTitle';
import { SocialLinks } from './SocialLinks';
import aboutData, { socialLinks } from '@/data/social';
import { useApp } from '@/context/AppContext';

const ContactCard = ({ icon, label, value, href, onCopy, copyLabel, copiedLabel, isCopied }) => (
  <a
    href={href}
    target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'}
    rel={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
    className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 dark:border-slate-600 hover:border-primary dark:hover:border-primary hover:shadow-lg transition-all duration-300 group"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">{label}</p>
      <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{value}</p>
    </div>
    {onCopy && (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onCopy();
        }}
        className="flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-primary hover:text-white transition-colors"
      >
        {isCopied ? copiedLabel : copyLabel}
      </button>
    )}
  </a>
);

export const Contact = () => {
  const { t } = useApp();
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const social = aboutData?.social || {};
  const email = social.email || '';
  const phone = social.numero || '';
  const whatsapp = social.whatsapp || '';

  return (
    <div className="w-full px-4 lg:min-h-screen">
      <div className="flex justify-center items-center py-4" id="contact">
        <SectionTitle className="pt-2 mt-8">{t('sections.contact')}</SectionTitle>
      </div>
      <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        <div className="col-span-3 lg:col-span-2 w-full shadow-lg shadow-gray-200 dark:shadow-slate-800 rounded-xl p-4 transition-shadow duration-300 bg-white dark:bg-slate-800">
          <div className="lg:p-4 h-full">
            <div>
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src={contact}
                alt={t('alt.profilePhoto')}
              />
            </div>
            <div className="mt-4">
              <h2 className="py-2 font-semibold text-gray-800 dark:text-gray-200">{aboutData.nome}</h2>
              <p className="text-gray-600 dark:text-gray-400">{t('main.title')}</p>
            </div>
            <div>
              <p className="uppercase pt-4 text-sm text-gray-600 dark:text-gray-400">{t('contact.connect')}</p>
              <div className="flex items-center justify-between py-4">
                <SocialLinks links={socialLinks} size="lg" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 w-full shadow-lg shadow-gray-200 dark:shadow-slate-800 rounded-xl p-6 bg-white dark:bg-slate-800">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{t('contact.title')}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{t('contact.subtitle')}</p>
          <div className="space-y-4">
            {email && (
              <ContactCard
                icon={<MdEmail size={24} />}
                label={t('contact.email')}
                value={email}
                href={`mailto:${email}`}
                onCopy={() => copyToClipboard(email, 'email')}
                copyLabel={t('contact.copy')}
                copiedLabel={t('contact.copied')}
                isCopied={copied === 'email'}
              />
            )}
            {phone && (
              <ContactCard
                icon={<MdPhone size={24} />}
                label={t('contact.phone')}
                value={phone}
                href={`tel:${phone.replace(/\D/g, '')}`}
                onCopy={() => copyToClipboard(phone, 'phone')}
                copyLabel={t('contact.copy')}
                copiedLabel={t('contact.copied')}
                isCopied={copied === 'phone'}
              />
            )}
            {whatsapp && (
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 dark:border-slate-600 hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <SiWhatsapp size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">{t('contact.whatsapp')}</p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">{t('contact.openChat')}</p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center py-8">
        <Link href="/" aria-label={t('contact.backToTop')}>
          <div className="rounded-full shadow-md shadow-gray-200 dark:shadow-slate-800 p-4 cursor-pointer hover:scale-110 hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800">
            <HiOutlineChevronDoubleUp className="text-primary" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};
