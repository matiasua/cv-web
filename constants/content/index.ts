import { LINKS } from "./links";
import { profile } from "./profile";
import { jobExperiences } from "./jobExperiences";
import { otherExperiences } from "./otherExperiencies";
import { education } from "./education";
import { diplomado } from "../diplomado";
import { socialLinks } from "./socialLinks";
import { skills } from "./skills";

const CONTENT = {
  ...profile,
  jobExperiences,
  otherExperiences,
  education,
  diplomado,
  socialLinks,
  skills,
};

export { LINKS, CONTENT };
