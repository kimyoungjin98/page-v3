import Title from "@/components/Title";
import IntroductionItem from "@/components/introduction/Item";

interface Item {
  label?: string;
  icon?: string;
  content?: string;
}

const Introduction = () => {
  const introduction: Item[] = [
    { label: "Name", icon: "mdi:person", content: "Kim YoungJin" },
    { label: "Email", icon: "ic:baseline-email", content: "gyu250@naver.com" },
    {
      label: "Telephone",
      icon: "ic:baseline-local-phone",
      content: "010-9456-0400",
    },
    {
      label: "Address",
      icon: "ic:baseline-location-on",
      content: "Gwangju, South Korea",
    },
    { label: "Birth", icon: "ic:baseline-cake", content: "1998.08.02" },
    {
      label: "Position",
      icon: "material-symbols:position-bottom-left",
      content: "Front-End",
    },
    {
      label: "Career",
      icon: "material-symbols:event-note-outline",
      content: "2 Years",
    },
    {
      label: "Education(Attending)",
      icon: "material-symbols:school",
      content: "Korea National Open University",
    },
  ];

  const briefIntroduction: string[] = [
    "새로운 기술을 사용하는 것을 좋아합니다.",
    "주 포지션은 프론트엔드 이지만 풀 스택을 지향합니다.",
    "효율적인 설계에 관심이 있습니다. (아키텍처 등)",
    "사용자의 편의성을 위해 UI/UX에 대하여 고민하며 개발합니다.",
  ];

  const histories: Item[] = [
    { label: "2022.03 ~", content: "레피소드(주) 프론트엔드 개발자" },
  ];

  const educations: Item[] = [
    { label: "2014.03 ~ 2017.02", content: "상무고등학교 졸업" },
    { label: "2017.03 ~ 2020.09", content: "광주보건대학교 보건행정과 중퇴" },
    {
      label: "2021.03 ~ 2021.12",
      content: "한국경영원 인재개발원 Java 웹개발자 양성과정 수료",
    },
    {
      label: "2023.03 ~",
      content: "한국방송통신대학교 컴퓨터과학과 재학 (2학년 편입)",
    },
  ];

  return (
    <section className="flex flex-col lg:grid grid-cols-2 gap-10 w-full h-full p-6">
      <article className="flex flex-col gap-6">
        <Title emoji="👨‍💻">About Me</Title>
        <div className="flex flex-col gap-2">
          {introduction.map((item, index) => (
            <IntroductionItem key={index} label={item.label} icon={item.icon}>
              {item.content}
            </IntroductionItem>
          ))}
        </div>
      </article>
      <article className="flex flex-col gap-6">
        <Title emoji="📖">A brief introduction</Title>
        <div className="flex flex-col gap-2">
          {briefIntroduction.map((item, index) => (
            <IntroductionItem key={index}>{item}</IntroductionItem>
          ))}
        </div>
      </article>
      <article className="flex flex-col gap-6">
        <Title emoji="💼">History</Title>
        <div className="flex flex-col gap-2">
          {histories.map((item, index) => (
            <IntroductionItem key={index} label={item.label}>
              {item.content}
            </IntroductionItem>
          ))}
        </div>
      </article>
      <article className="flex flex-col gap-6">
        <Title emoji="👨‍🎓">Education</Title>
        <div className="flex flex-col gap-2">
          {educations.map((item, index) => (
            <IntroductionItem key={index} label={item.label}>
              {item.content}
            </IntroductionItem>
          ))}
        </div>
      </article>
      <article className="flex flex-col gap-6">
        <Title emoji="🪖">Military Service</Title>
        <IntroductionItem label="2018.10 ~ 2020.06">
          대한민국 육군 1군단 701 특공연대 3대대 본부중대 정보과 병장 제대
        </IntroductionItem>
      </article>
    </section>
  );
};

export default Introduction;
