import { Quote, ArrowRight } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      age: "45세",
      job: "영업직",
      name: "김OO 님",
      challenge: "잦은 술자리로 뱃살이 임산부처럼 나왔었습니다.",
      result: "4주 만에 허리둘레 3인치 감소",
      quote: "회식 방어 가이드와 16:8 단식을 병행하니, 사회생활을 하면서도 뱃살이 빠지는 게 신기했습니다."
    },
    {
      age: "52세",
      job: "사무직",
      name: "이OO 님",
      challenge: "무릎이 아파 운동은 엄두도 못 냈습니다.",
      result: "체지방 7kg 감량, ET 체형 탈출",
      quote: "추천해주신 '출퇴근 걷기 루틴'과 식단 조절만으로도 충분했습니다. 몸이 가벼워지니 무릎 통증도 사라졌습니다."
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>함께 변화한 4050 동료들</h2>
          <p className="text-gray">당신과 똑같은 고민을 하던 이들이 이미 증명했습니다.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {stories.map((story, i) => (
            <div key={i} style={{ 
              backgroundColor: 'var(--primary)', 
              padding: '2.5rem', 
              borderRadius: '2rem',
              border: '1px solid rgba(255,255,255,0.05)',
              position: 'relative'
            }}>
              <Quote className="text-orange" size={40} style={{ opacity: 0.1, position: 'absolute', top: '20px', left: '20px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <p style={{ color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.85rem' }}>{story.age} / {story.job}</p>
                  <h3 style={{ fontSize: '1.25rem' }}>{story.name}</h3>
                </div>
                <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '0.5rem 1rem', borderRadius: '100px' }}>
                  <p style={{ color: '#10B981', fontWeight: 700, fontSize: '0.8rem' }}>{story.result}</p>
                </div>
              </div>
              
              <p style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.5 }}>
                "{story.challenge}"
              </p>
              
              <p className="text-gray" style={{ fontStyle: 'italic', lineHeight: 1.7, fontSize: '0.95rem' }}>
                {story.quote}
              </p>

              <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.85rem' }}>
                인터뷰 전문 보기 <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
