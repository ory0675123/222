import { Calendar, CheckCircle } from 'lucide-react';

const Roadmap: React.FC = () => {
  const days = [
    { day: "Day 1-2", title: "몸 비우기 (글리코겐 소모)", action: "저녁 식사 후 16시간 이상 공복 유지, 액상과당 전면 차단" },
    { day: "Day 3-4", title: "인슐린 안정화", action: "탄수화물을 평소의 절반으로 줄이고, 단백질과 채소 섭취량 확대" },
    { day: "Day 5-6", title: "지방 연소 가속화", action: "하루 1만 보 걷기 + 5분 스쿼트 추가, 뱃살이 말랑해지는 시기" },
    { day: "Day 7", title: "체형 변화 확인", action: "허리띠 구멍 확인 및 눈바디 측정, 가벼워진 몸을 체감하는 날" }
  ];

  return (
    <section style={{ backgroundColor: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Calendar size={20} className="text-orange" />
            <span className="text-orange" style={{ fontWeight: 600 }}>실천 로드맵</span>
          </div>
          <h2>ET 탈출 7일 마스터 플랜</h2>
          <p className="text-gray">거창한 계획은 필요 없습니다. 딱 일주일만 이대로 따라 해 보십시오.</p>
        </div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Timeline Line */}
          <div style={{ 
            position: 'absolute', 
            left: '30px', 
            top: '0', 
            bottom: '0', 
            width: '2px', 
            backgroundColor: 'rgba(255,255,255,0.05)',
            zIndex: 1 
          }}></div>

          <div style={{ display: 'grid', gap: '2.5rem' }}>
            {days.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 2 }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: 'var(--primary)', 
                  border: '2px solid var(--accent-orange)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  flexShrink: 0,
                  boxShadow: '0 0 20px rgba(249, 115, 22, 0.2)'
                }}>
                  <CheckCircle size={24} className="text-orange" />
                </div>
                
                <div style={{ 
                  backgroundColor: 'var(--secondary)', 
                  padding: '1.5rem 2rem', 
                  borderRadius: '1.5rem', 
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  border: '1px solid rgba(255,255,255,0.03)'
                }}>
                  <p style={{ color: 'var(--accent-orange)', fontWeight: 800, fontSize: '0.85rem' }}>{step.day}</p>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 0 }}>{step.title}</h3>
                  <p className="text-gray" style={{ lineHeight: 1.6 }}>{step.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ 
          marginTop: '4.5rem', 
          textAlign: 'center',
          backgroundColor: 'rgba(249, 115, 22, 0.05)',
          padding: '2rem',
          borderRadius: '1.5rem',
          maxWidth: '600px',
          margin: '4.5rem auto 0'
        }}>
          <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>
            "지금 이 계획을 무시하고 넘기면,<br />
            당신의 뱃살은 내일도, 내년에도 그대로일 것입니다."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
