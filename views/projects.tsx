import PageSection from "@/components/page-section";
import { PageSectionVariant } from '@/types/PageVariant';
import PageSectionHeader from "@/components/page-section-header";
import { getDictionary } from '@/dictionaries';
import PageSectionContent from "@/components/page-section-content";

export default function Projects() {
  const $t = getDictionary();

  return (
    <PageSection id={$t.projects.id} variant={PageSectionVariant.Secondary}>
      <PageSectionHeader>{$t.projects.heading}</PageSectionHeader>
      <PageSectionContent>
        
      </PageSectionContent>
    </PageSection>
  );
}
