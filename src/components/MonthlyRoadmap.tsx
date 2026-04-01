import { TrendingDown, Zap, ShieldCheck, Trophy } from 'lucide-react';

const MonthlyRoadmap: React.FC = () => {
  const steps = [
    {
      week: "1주차",
      title: "독소 배출기",
      desc: "인슐린 수치가 안정화되며 아침에 일어날 때 몸이 눈에 띄게 가벼워집니다. 이유 모를 피로감이 사라지기 시작합니다.",
      icon: <Zap className="text-orange" size={32} />
    },
    {
      week: "2주차",
      title: "라인 변화기",
      desc: "체중계 숫자보다 '눈바디'가 먼저 변합니다. 바지 허리춤에 손가락 두 개가 들어갈 여유가 생기며 내장지방이 본격적으로 연소됩니다.",
      icon: <TrendingDown className="text-red" size={32} />
    },
    {
      week: "3주차",
      title: "활력 증가기",
      desc: "오후 3시만 되면 찾아오던 무기력증이 사라집니다. 혈당 스파이크가 억제되어 업무 집중도가 올라가고 계단을 오를 때 다리가 가볍습니다.",
      icon: <ShieldCheck style={{ color: '#3B82F6' }} size={32} />
    },
    {
      week: "4주차",
      title: "습관 정착기",
      desc: "벨트 구멍이 한 칸 줄어듭니다. 주변에서 '요즘 얼굴 좋아졌다'는 이야기를 듣기 시작하며, 활력 있는 삶이 일상이 됩니다.",
      icon: <Trophy style={{ color: '#FACC15' }} size={32} />
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--bg-dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>당신의 <span className="text-orange">4주 후</span>를 상상해 보십시오</h2>
          <p className="text-gray" style={{ fontSize: '1.125rem' }}>명확한 목표와 올바른 방법만 있다면, 당신의 몸은 반드시 응답합니다.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ 
              backgroundColor: 'var(--secondary)', 
              padding: '2.5rem', 
              borderRadius: '2rem',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.03)',
              position: 'relative',
              transition: 'transform 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                width: '70px', 
                height: '70px', 
                backgroundColor: 'var(--primary)', 
                borderRadius: '50%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                margin: '0 auto 1.5rem',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                {step.icon}
              </div>
              <p style={{ color: 'var(--accent-orange)', fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{step.week}</p>
              <h3 style={{ marginBottom: '1rem' }}>{step.title}</h3>
              <p className="text-gray" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonthlyRoadmap;
