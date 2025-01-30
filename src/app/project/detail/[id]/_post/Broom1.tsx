import { TitleSection } from '@/components/Box'

export const broom1Info = {
  title: '해커톤 기획부터 대상까지의 여정',
  subTitle: '광운대학교 해커톤 대상 수상',
  date: '2024.12.17',
  tag: 'BROOM',
}

export const Broom1 = () => {
  return (
    <>
      <TitleSection
        title={broom1Info.title}
        subTitle={broom1Info.subTitle}
        date={broom1Info.date}
      />
    </>
  )
}
