import PageSection from "@/components/page/page-section";
import { PageSectionVariant } from '@/types/page';
import { getDictionary } from '@/dictionaries';
import config from '@/config.json'
import Timeline from "@/components/career/timeline";
import { Job } from "@/types/job";
import PageSectionContent from "@/components/page/page-section-content";
import PageSectionHeader from "@/components/page/page-section-header";

async function getCareerData() {
  const res = await fetch(config.api.me.career)
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Career() {
  const jobs: Job[] = await getCareerData()
  const $t = getDictionary();

  return (
    <PageSection id={$t.career.id} variant={PageSectionVariant.Secondary}>
      <PageSectionHeader>{$t.career.heading}</PageSectionHeader>
      <PageSectionContent>
        <Timeline events={jobs}></Timeline>
      </PageSectionContent>
    </PageSection>
  );
}
