export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ul className="ulFooter">
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Service</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li>&copy; {currentYear} Newsify</li>
      </ul>
    </footer>
  );
}
