import { CONTENT } from "@/constants/content";
import { JobExperience } from "@/components/common/JobExperience";
import { ContentBlock } from "@/components/common/ContentBlock";

const { otherExperiences, jobExperiences } = CONTENT;

export const PastExperience = () => (
  <>
    <ContentBlock title="Experiencia">
      {jobExperiences.map((position) => (
        <JobExperience key={position.companyName} {...position} />
      ))}
    </ContentBlock>
    <ContentBlock title="">
      {otherExperiences.map((position) => (
        <JobExperience key={position.companyName} {...position} />
      ))}
    </ContentBlock>
  </>
);
