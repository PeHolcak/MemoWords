import { useTranslation } from 'next-i18next';

import Slider from '@components/CMS/Slider';
import SimpleBanner from '@components/CMS/SimpleBanner';
import HomePageLayout from '@components/Layouts/HomePageLayout';
import CardList from '@components/CMS/CardList';
import TabsComponent from '@components/CMS/TabsComponent';

import Section from './Section';
import * as S from './styled';

const HomePage = () => {
  const { t } = useTranslation('common');
  return (
    <HomePageLayout>
      <S.ContentWrapper>
        <S.SectionWrapper>
          <Section size="max" disableTopOffset={true}>
            <SimpleBanner
              header={t('sidebar.appDescription')}
              description="vitae placerat pede sem sit amet enim. Integer vulputate sem a nibh rutrum consequat. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Etiam quis quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis gravida nulla. Aenean fermentum risus id tortor. Duis viverra diam non justo. Etiam neque."
            />
          </Section>
          <Section size="max">
            <SimpleBanner
              header="Lorem ipsum dolor sit amet"
              description="vitae placerat pede sem sit amet enim. Integer vulputate sem a nibh rutrum consequat. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Etiam quis quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec iaculis gravida nulla. Aenean fermentum risus id tortor. Duis viverra diam non justo. Etiam neque."
            />
          </Section>
          <Section size="sm">
            <Slider
              items={[
                {
                  name: 'The particle effect is a stunning new effect for Smart Slider 1.',
                  description:
                    'dadokas sdanjasd adnasjndas dasndas ddsadadokas sdanjasd adnasjndas dasndas ddsa'
                },
                {
                  name: 'test2',
                  description:
                    'This slider was created by using the full effect arsenal, particles covering the area and more. Now, they are available.'
                },
                {
                  name: 'The particle effect is a stunning new effect for Smart Slider 3',
                  description:
                    'This slider was created by using the full effect arsenal, particles covering the area and more. Now, they are available.'
                }
              ]}
            />
          </Section>

          <Section size="sm">
            <CardList />
          </Section>
          <Section size="sm">
            <TabsComponent />
          </Section>
        </S.SectionWrapper>
      </S.ContentWrapper>
    </HomePageLayout>
  );
};

export default HomePage;
