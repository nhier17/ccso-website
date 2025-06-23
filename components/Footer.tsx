import { footerLinks } from '@/constants';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { Input } from './ui/input';
import Image from 'next/image';

const Footer = () => {
  const { quickLinks, contactLinks, socialLinks } = footerLinks;
  return (
    <footer className="bg-muted/50 border-t">
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo.webp" alt="Logo" width={30} height={30} className="rounded-md object-cover"/>
              <div>
                <span className="text-lg font-bold text-primary">CCSO</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming lives through compassion and sustainable community development in South Sudan.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.url}
                  className="hover:text-primary"
                >
                  <Image
                    src={social.icon}
                    alt="Logo"
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
        {quickLinks.map((link) => (
          <li key={link.title}>
            <Link href={link.url} className="text-muted-foreground hover:text-primary">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">Contact</h3>
          <ul className="space-y-2">
        {contactLinks.map((contact, index) => (
       <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
        <Image
        src={contact.icon} 
        alt={contact.title} 
        width={20}
        height={20}
        />
         <span>{contact.title}</span>
        </li>
       ))}
       </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">Newsletter</h3>
          <p className="mb-4 text-sm text-muted-foreground">Stay updated with our latest news and projects.</p>
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
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Christ Compassion Service Organization. All rights reserved.</p>
          <p className="mt-1">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link> • 
            <Link href="/terms" className="hover:text-primary ml-1">Terms of Service</Link>
          </p>
        </div>
    </div>
  </footer>
  )
}

export default Footer