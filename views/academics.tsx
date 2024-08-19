import config from '@/config.json'
import CommendationList from "@/components/academics/commendation-list";
import PageSection, { PageSectionVariant } from "@/components/page-section";
import PageSectionContent from "@/components/page-section-content";
import PageSectionHeader from "@/components/page-section-header";
import { getDictionary } from '@/dictionaries';
import { Academics } from "@/types/academics";
import FocusList from '@/components/academics/focus-list';

async function getAcademicData() {
  const res = await fetch(config.api.me.academics)
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Academics() {
  const academics: Academics = await getAcademicData()
  const $t = getDictionary();

  return (
    <PageSection id={$t.academics.id} variant={PageSectionVariant.Primary}>
      <PageSectionHeader>{$t.academics.heading}</PageSectionHeader>
      <PageSectionContent>
        <h1 className='text-2xl'>{academics.degree}</h1>
        <FocusList focuses={academics.focuses} />
        <CommendationList commendations={academics.commendations || []} />
      </PageSectionContent>
    </PageSection>
  );
}
