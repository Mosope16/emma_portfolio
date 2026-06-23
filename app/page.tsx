"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  MonitorSmartphone, 
  Palette, 
  PenTool, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin,
  Globe,
  Briefcase,
  MessageCircle,
  ExternalLink
} from "lucide-react";
import styles from "./page.module.css";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {/* Navigation */}
      <nav className={`${styles.navbar} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.logo}>
            O<span className="text-gradient">E.</span>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#about" className={styles.navLink}>About</a></li>
            <li><a href="#skills" className={styles.navLink}>Skills</a></li>
            <li><a href="#services" className={styles.navLink}>Services</a></li>
            <li><a href="#portfolio" className={styles.navLink}>Portfolio</a></li>
            <li><a href="#contact" className={styles.navLink}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero} id="home">
        <div className={styles.heroBg}></div>
        <div className={`container ${styles.grid2}`}>
          <motion.div 
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="heading-lg">
              Website Designer, <br />
              <span className="text-gradient">UI/UX Designer</span> & <br />
              Graphic Designer
            </motion.h1>
            <motion.p variants={fadeInUp} className="subtitle">
              Hi, I&apos;m Ojo Emmanuel. I design modern websites, intuitive user experiences, 
              and impactful visual identities that help brands stand out and grow online.
            </motion.p>
            <motion.div variants={fadeInUp} className={styles.ctaGroup}>
              <a href="#portfolio" className="btn btn-primary">View Portfolio</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={styles.heroImageContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.heroImageGlow}></div>
            <Image 
              src="/picture.png" 
              alt="Ojo Emmanuel" 
              width={500} 
              height={600} 
              className={styles.heroImage}
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding" id="about">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className={`glass ${styles.aboutCard}`}
          >
            <h2 className="heading-md">About Me</h2>
            <div className={styles.aboutText}>
              <p>
                With a background in Computer Science and years of experience in digital design, 
                I specialize in creating user-focused experiences that blend functionality with aesthetics. 
                My mission is to help brands communicate effectively through thoughtful design solutions.
              </p>
              <p style={{ marginTop: "1rem" }}>
                I am passionate about solving complex problems through elegant interfaces and 
                compelling visual narratives. Whether it&apos;s a startup looking to establish its identity 
                or an established business aiming to improve its digital presence, I bring creativity 
                and technical expertise to every project.
              </p>
            </div>
            
            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>Education</h3>
              <div className={styles.educationBox}>
                <div className={styles.educationTitle}>BSc. Computer Science</div>
                <div className={styles.educationDetails}>Ekiti State University • Graduated: 2021</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding" id="skills">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <h2 className="heading-md">My Expertise</h2>
            <p className="subtitle">A blend of technical knowledge and creative skills</p>
          </motion.div>

          <motion.div 
            className="grid-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: <MonitorSmartphone />, title: "UI/UX Design", desc: "User Research, Wireframing, Prototyping" },
              { icon: <Palette />, title: "Graphic Design", desc: "Marketing Materials, Social Media Graphics" },
              { icon: <PenTool />, title: "Brand Identity", desc: "Logo Design, Brand Guidelines, Visual Comm." },
              { icon: <MonitorSmartphone />, title: "Website Design", desc: "Responsive Design, Landing Pages, Portfolios" },
            ].map((skill, index) => (
              <motion.div key={index} variants={fadeInUp} className={`glass ${styles.skillCard}`}>
                <div className={styles.skillIcon}>
                  {skill.icon}
                </div>
                <h3 className={styles.skillTitle}>{skill.title}</h3>
                <p style={{ color: "var(--text-gray)", fontSize: "0.9rem" }}>{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" id="services" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <h2 className="heading-md">Services</h2>
            <p className="subtitle">Comprehensive design solutions for your business</p>
          </motion.div>

          <motion.div 
            className="grid-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Website Design",
                icon: <MonitorSmartphone size={32} />,
                items: ["Custom business websites", "Portfolio websites", "Landing pages"]
              },
              {
                title: "UI/UX Design",
                icon: <PenTool size={32} />,
                items: ["User interface design", "User experience strategy", "Wireframes and prototypes"]
              },
              {
                title: "Brand & Graphics",
                icon: <Palette size={32} />,
                items: ["Brand identity creation", "Custom logo concepts", "Marketing & Social media"]
              }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className={`glass ${styles.serviceCard}`}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <ul className={styles.serviceList}>
                  {service.items.map((item, i) => (
                    <li key={i} className={styles.serviceItem}>
                      <CheckCircle2 size={16} className={styles.serviceItemIcon} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding" id="portfolio">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <h2 className="heading-md">Featured Projects</h2>
            <p className="subtitle">A selection of my recent design work</p>
          </motion.div>

          <motion.div 
            className="grid-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                image: "/ecommerce.png",
                category: "Website Redesign",
                title: "E-commerce Platform",
                desc: "Redesigned an online store to improve user experience and increase conversions. Focused on usability, navigation, and visual appeal.",
                tags: ["UI/UX", "Web Design", "E-commerce"]
              },
              {
                image: "/brand.png",
                category: "Brand Identity",
                title: "Startup Branding",
                desc: "Created a complete logo and branding package for a tech startup. Delivered cohesive visual identity assets and brand guidelines.",
                tags: ["Logo Design", "Branding", "Graphics"]
              },
              {
                image: "/mobile.png",
                category: "Mobile App",
                title: "Productivity App UI",
                desc: "Designed intuitive user interfaces and user flows for a productivity application. Focused on accessibility, simplicity, and user engagement.",
                tags: ["Mobile UI", "UX Research", "Figma"]
              }
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp} className={`glass ${styles.projectCard}`}>
                <div className={styles.projectImageWrapper}>
                  <Image src={project.image} alt={project.title} fill className={styles.projectImage} />
                </div>
                <div className={styles.projectInfo}>
                  <span className={styles.projectCategory}>{project.category}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.desc}</p>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.projectTag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding" id="contact" style={{ background: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <motion.div 
            className={styles.contactWrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles.contactInfo}>
              <div>
                <h2 className="heading-md">Let&apos;s Work Together</h2>
                <p className="subtitle" style={{ marginBottom: "0" }}>
                  Ready to start your next project? Get in touch and let&apos;s create something amazing.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><Mail size={24} /></div>
                  <div>
                    <div className={styles.contactLabel}>Email</div>
                    <a href="mailto:adexrotimi11@gmail.com" className={styles.contactValue}>adexrotimi11@gmail.com</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><Phone size={24} /></div>
                  <div>
                    <div className={styles.contactLabel}>Phone</div>
                    <a href="tel:09045034077" className={styles.contactValue}>09045034077</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}><MapPin size={24} /></div>
                  <div>
                    <div className={styles.contactLabel}>Location</div>
                    <div className={styles.contactValue}>Nigeria</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Follow Me</h3>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}><Globe size={20} /></a>
                  <a href="#" className={styles.socialLink}><Briefcase size={20} /></a>
                  <a href="#" className={styles.socialLink}><MessageCircle size={20} /></a>
                </div>
              </div>
            </motion.div>

            <motion.form 
              variants={fadeInUp} 
              className={`glass ${styles.contactForm}`}
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600" }}>Send a Message</h3>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Name</label>
                <input type="text" className={styles.formInput} placeholder="Your name" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email</label>
                <input type="email" className={styles.formInput} placeholder="Your email address" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Message</label>
                <textarea className={`${styles.formInput} ${styles.formTextarea}`} placeholder="How can I help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "0.5rem" }}>
                Send Message
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerName}>Ojo Emmanuel</div>
          <div className={styles.footerTitle}>Website Designer | UI/UX Designer | Graphic Designer</div>
          <div className={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} Ojo Emmanuel. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
