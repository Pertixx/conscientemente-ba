import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

export default function SharingList() {
  const sharingLinks = [
      { name: 'Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u=', icon: FaFacebook },
      { name: 'Twitter', url: 'https://twitter.com/intent/tweet?url=', icon: FaTwitter },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/shareArticle?url=', icon: FaLinkedin },
      { name: 'WhatsApp', url: 'https://api.whatsapp.com/send?text=', icon: FaWhatsapp },
      { name: 'Email', url: 'mailto:?subject=&body=', icon: MdOutgoingMail },
    ]

  return (
    <div className="flex items-center gap-4">
      {sharingLinks.map((link, index) => (
        <a 
          key={index}
          href={`${link.url}${window.location.href}`}
          className="text-gray-500 hover:text-green-200"
          target="_blank"
        >
          <link.icon size={24} />
        </a>
      ))}
    </div>
  );
}