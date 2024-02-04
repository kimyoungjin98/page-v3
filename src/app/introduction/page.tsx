import Icon from "@/components/Icon";
import Title from "@/components/Title";
import IntroductionCard from "@/components/introduction/Card";
import IntroductionHistoryItem from "@/components/introduction/HistoryItem";

const Introduction = () => {
  return (
    <section className="flex flex-col gap-10 w-full h-full p-6">
      <article className="flex flex-col gap-6">
        <Title emoji="👨‍💻">About Me</Title>
        <div className="grid grid-cols-4 gap-6">
          <IntroductionCard label="Name" icon="mdi:person">
            Kim YoungJin
          </IntroductionCard>
          <IntroductionCard label="Email" icon="ic:baseline-email">
            gyu250@naver.com
          </IntroductionCard>
          <IntroductionCard label="Telephone" icon="ic:baseline-local-phone">
            010-9456-0400
          </IntroductionCard>
          <IntroductionCard label="Address" icon="ic:baseline-location-on">
            Gwangju, South Korea
          </IntroductionCard>

          <IntroductionCard label="Birth" icon="ic:baseline-cake">
            1998.08.02
          </IntroductionCard>
          <IntroductionCard
            label="Position"
            icon="material-symbols:position-bottom-left"
          >
            Front-End
          </IntroductionCard>
          <IntroductionCard
            label="Career"
            icon="material-symbols:event-note-outline"
          >
            2 Years
          </IntroductionCard>
          <IntroductionCard
            label="Education(Attending)"
            icon="material-symbols:school"
          >
            <p className="text-sm truncate">Korea National Open University</p>
          </IntroductionCard>
        </div>
      </article>
      <article className="flex flex-col gap-6">
        <Title emoji="📖">A brief introduction</Title>
        <div className="flex flex-col gap-4">
          <p>- 새로운 기술을 사용하는 것을 좋아합니다.</p>
          <p>- 주 포지션은 프론트엔드 이지만 풀 스택을 지향합니다.</p>
          <p>- 효율적인 설계에 관심이 있습니다. (아키텍처 등)</p>
          <p>- 사용자의 편리함을 위해 UI/UX에 대하여 고민하며 개발합니다.</p>
        </div>
      </article>
      <article className="flex flex-col gap-6">
        <Title emoji="💼">History</Title>
        <div className="flex flex-col gap-2">
          <IntroductionHistoryItem date="2022.03 ~">
            레피소드(주) 프론트엔드 개발자
          </IntroductionHistoryItem>
        </div>
      </article>
      <article className="flex flex-col gap-6">
        <Title emoji="👨‍🎓">Education</Title>
        <div className="flex flex-col gap-2">
          <IntroductionHistoryItem date="2014.03 ~ 2017.02">
            상무고등학교 졸업
          </IntroductionHistoryItem>
          <IntroductionHistoryItem date="2017.03 ~ 2020.09">
            광주보건대학교 보건행정과 중퇴
          </IntroductionHistoryItem>
          <IntroductionHistoryItem date="2021.03 ~ 2021.12">
            한국경영원 인재개발원 Java 웹개발자 양성과정 수료
          </IntroductionHistoryItem>
          <IntroductionHistoryItem date="2023.03 ~">
            한국방송통신대학교 컴퓨터과학과 재학 (2학년 편입)
          </IntroductionHistoryItem>
        </div>
      </article>
      <article className="flex flex-col gap-6">
        <Title emoji="🪖">Military Service</Title>
        <IntroductionHistoryItem date="2018.10 ~ 2020.06">
          대한민국 육군 1군단 701 특공연대 3대대 본부중대 정보과 병장 제대
        </IntroductionHistoryItem>
      </article>
    </section>
  );
};

export default Introduction;
