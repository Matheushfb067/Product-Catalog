import { Instagram, Facebook, Linkedin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto w-full flex flex-col px-4 bg-gray-900 text-white py-5 min-h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div>
          <h1 className="text-blue-400 text-lg font-bold mb-2">Fake-Store</h1>
          <p className="mb-4">
            Your online store with the best products and prices on the market.
          </p>
          <div className="flex flex-row gap-3 mb-4">
            <a
              href="https://www.instagram.com/scoder.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                strokeWidth={1.5}
                size={24}
                className="cursor-pointer hover:text-blue-500"
              />
            </a>
            <a
              href="https://www.facebook.com/share/1GCN7ZjxZA/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                strokeWidth={1.5}
                size={24}
                className="cursor-pointer hover:text-blue-500"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/scoder-tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                strokeWidth={1.5}
                size={24}
                className="cursor-pointer hover:text-blue-500"
              />
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-blue-400 text-lg font-bold mb-4">Contacts</h1>
          <div className="flex items-start gap-2 flex-col">
            <div className="flex flex-row gap-2">
              <Phone />
              <p className="mb-1">+55 (35) 9829-8614</p>
            </div>
            <div className="flex flex-row gap-2">
              <Mail />
              <p>contato@fakestore.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 pt-4 mt-4">
        {" "}
        {/* Linha sutil */}
        <p className="text-lg text-white/80 flex justify-center items-center">
          © 2024 Fake-Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
