const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-cream/10">
      <p className="signature text-lg text-cream/60">
        ons ferjani
      </p>
      <p className="font-body text-xs text-cream/30 mt-1">
        © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
