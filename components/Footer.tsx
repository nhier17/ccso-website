import { footerLinks } from '@/constants';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { Input } from './ui/input';
import Image from 'next/image';

const Footer = () => {
  const { quickLinks, contactLinks, socialLinks } = footerLinks;
  return (
    <footer className="bg-primary text-light-100 py-12 overflow-hidden mt-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
        {quickLinks.map((link) => (
          <li key={link.title}>
            <Link href={link.url} className="hover:text-primary">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">Contact</h3>
          <ul className="space-y-2">
        {contactLinks.map((contact, index) => (
       <li key={index} className="flex items-center gap-2">
        <Image
        src={contact.icon} 
        alt={contact.title} 
        width={24}
        height={24}
        />
         <span>{contact.title}</span>
        </li>
       ))}
       </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">Follow Us</h3>
          <div className="flex space-x-4">
          {socialLinks.map((social, i) => (
              <Link
                key={i}
                href={social.url}
                className="hover:text-primary"
              >
                <Image
                  src={social.icon}
                  alt="Logo"
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">Newsletter</h3>
          <p className="mb-4">Stay updated with our latest news and projects.</p>
          <div className="flex">
            <Input
              type="email"
              placeholder="Enter your email"
              className="form-input"
            />
            <button className="bg-green-600 hover:bg-green-700 px-6 rounded-r-full">
              <Mail size={20} /> 
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        <p>© 2024 Christ Compassion Service Organization (CCSO). All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer