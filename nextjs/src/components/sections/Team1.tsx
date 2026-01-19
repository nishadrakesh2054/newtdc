import Link from "next/link";

interface SocialLink {
  href: string;
  icon: string;
}

interface TeamMember {
  id: number;
  name: string;
  job: string;
  image: string;
  imageAlt: string;
  socialLinks: SocialLink[];
  wowDelay: string;
}

const teamMembersData: TeamMember[] = [
  {
    id: 1,
    name: "Chris pad",
    job: "Co - Founder",
    image: "/images/member/team1.jpg",
    imageAlt: "Chris pad - Co Founder",
    socialLinks: [
      { href: "/facebook.com", icon: "icon-facebook" },
      { href: "/twitter.com", icon: "icon-instagram" },
      { href: "/linkedin.com", icon: "icon-linkedin2" },
    ],
    wowDelay: "0.1s",
  },
  {
    id: 2,
    name: "maverick",
    job: "Manager",
    image: "/images/member/team2.jpg",
    imageAlt: "maverick - Manager",
    socialLinks: [
      { href: "/facebook.com", icon: "icon-facebook" },
      { href: "/instagram.com", icon: "icon-instagram" },
      { href: "/youtube.com", icon: "icon-youtube" },
    ],
    wowDelay: "0.3s",
  },
  {
    id: 3,
    name: "Jessica nguyen",
    job: "Coach",
    image: "/images/member/team3.jpg",
    imageAlt: "Jessica nguyen - Coach",
    socialLinks: [
      { href: "/facebook.com", icon: "icon-facebook" },
      { href: "/instagram.com", icon: "icon-instagram" },
      { href: "/youtube.com", icon: "icon-linkedin2" },
    ],
    wowDelay: "0.5s",
  },
  {
    id: 4,
    name: "jenifer nolan",
    job: "Co - Founder",
    image: "/images/member/team4.png",
    imageAlt: "jenifer nolan - Co Founder",
    socialLinks: [
      { href: "/facebook.com", icon: "icon-facebook" },
      { href: "/linkedin.com", icon: "icon-linkedin2" },
      { href: "/instagram.com", icon: "icon-instagram" },
    ],
    wowDelay: "0.7s",
  },
];

export default function Team1() {
  return (
    <div className="tf-widget-team main-content">
      <div className="themeflat-container">
        <div className="team-member">
          <div className="title-box title-small center-title-box">
            <span className="sub-title wow fadeInUp animated">power behind the thunderbolts</span>
            <h2 className="title-section wow fadeInUp animated">our members </h2>
          </div>
          <div className="row team">
            {teamMembersData.map((member) => (
              <div
                key={member.id}
                className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3"
              >
                <div
                  className="team-item wow fadeInUp animated"
                  data-wow-delay={member.wowDelay}
                >
                  <div className="team-image">
                    <img src={member.image} alt={member.imageAlt} />
                    <div className="team-social">
                      <ul>
                        {member.socialLinks.map((social, index) => (
                          <li key={index}>
                            <Link href={social.href}>
                              <i className={social.icon} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <h3 className="name-member">{member.name}</h3>
                  <h4 className="job">{member.job}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

