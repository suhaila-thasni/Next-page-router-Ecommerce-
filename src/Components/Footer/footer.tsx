



import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
  return (
    <div>

      <footer className={styles.flipkartfooter}>
        <div className={styles.footertop}>

          <div className={styles.footercolumn}>
            <h4>ABOUT</h4>
            <ul>
              <Link href="/contactus" className={styles.footerLink}>Contact Us</Link><br />
              <Link href="/aboutus" className={styles.footerLink}>About Us</Link>
              <li>Careers</li>
              <li>Flipkart Stories</li>
              <li>Press</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          <div className={styles.footercolumn}>
            <h4>GROUP COMPANIES</h4>
            <ul>
              <li>Myntra</li>
              <li>Cleartrip</li>
              <li>Shopsy</li>
            </ul>
          </div>

          <div className={styles.footercolumn}>
            <h4>HELP</h4>
            <ul>
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className={styles.footercolumn}>
            <h4>CONSUMER POLICY</h4>
            <ul>
              <li>Cancellation & Returns</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Grievance Redressal</li>
              <li>EPR Compliance</li>
            </ul>
          </div>

          <div className={`${styles.footercolumn} ${styles.address}`}>
            <h4>Mail Us:</h4>
            <p>
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India
            </p>

            <h4>Social:</h4>
            <div className={styles.socialicons}>
              <span><Image src="/Images/facebook.svg" alt="facebook" width={30} height={30} /></span>
              <span><Image src="/Images/insta.svg" alt="instagram" width={30} height={30} /></span>
              <span><Image src="/Images/youtube.svg" alt="youtube" width={30} height={30} /></span>
            </div>
          </div>

          <div className={`${styles.footercolumn} ${styles.address}`}>
            <h4>Registered Office Address:</h4>
            <p>
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India<br /><br />
              CIN : U51109KA2012PTC066107<br />
              Telephone:
              <a href="tel:044-45614700">044-45614700</a> /
              <a href="tel:044-67415800">044-67415800</a>
            </p>
          </div>

        </div>

        <div className={styles.footerbottom}>
          <div>🛒 Become a Seller</div>
          <div>📢 Advertise</div>
          <div>🎁 Gift Cards</div>
          <div>❓ Help Center</div>
          <div>© 2007-2025 Flipkart.com</div>

          <Image src="/Images/visa.webp" alt="visa" width={40} height={40} />
        </div>

      </footer>

    </div>
  );
}
