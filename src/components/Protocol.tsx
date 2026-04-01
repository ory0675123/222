import { Zap, Activity, Moon, ShieldCheck } from 'lucide-react';

const Protocol: React.FC = () => {
  const steps = [
    {
      title: "인슐린 리셋",
      mechanism: "16:8 간헐적 단식",
      desc: "단순히 굶는 것이 아닙니다. 16시간 동안 인슐린 수치를 바닥으로 떨어뜨려 우리 몸이 '지방을 태우는 모드'로 전환되게 만듭니다.",
      icon: <Zap className="text-orange" size={28} />
    },
    {
      title: "대사량 부스트",
      mechanism: "맞춤형 코어/하체 운동",
      desc: "헬스장에 갈 필요 없습니다. 하체 근육을 깨워 기초대사량을 폭발시키고, 복부 팽창을 잡는 속근육을 타겟팅합니다.",
      icon: <Activity style={{ color: '#10B981' }} size={28} />
    },
    {
      title: "코르티솔 통제",
      mechanism: "수면 및 생활습관 교정",
      desc: "스트레스 호르몬인 코르티솔은 뱃살의 원흉입니다. 7시간 이상의 질 좋은 수분/수면 관리를 통해 대사 효율을 극대화합니다.",
      icon: <Moon style={{ color: '#3B82F6' }} size={28} />
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--bg-dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <ShieldCheck size={20} className="text-orange" />
            <span className="text-orange" style={{ fontWeight: 600 }}>메커니즘 기반 해결책</span>
          </div>
          <h2>3단계 [ET-Zero 프로토콜]</h2>
          <p className="text-gray" style={{ maxWidth: '700px', margin: '0 auto' }}>
            억지로 버티는 다이어트가 아닙니다. <br />
            무너진 호르몬 체계를 바로잡아 내장지방이 스스로 타게 만드는 과학적 시스템입니다.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ 
              backgroundColor: 'var(--secondary)', 
              padding: '3rem 2rem', 
              borderRadius: '2rem', 
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.03)',
              position: 'relative'
            }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
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
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '1.25rem' }}>{step.mechanism}</p>
              <p className="text-gray" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{step.desc}</p>
              
              {i < steps.length - 1 && (
                <div style={{ 
                  display: 'none', // For mobile, hide arrows or adjust
                  position: 'absolute', 
                  right: '-1.5rem', 
                  top: '50%', 
                  color: 'var(--text-gray)',
                  opacity: 0.3
                }}>
                  {/* CSS Triangle or Icon */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Protocol;
