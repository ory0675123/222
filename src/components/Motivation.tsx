import { Heart, Shield, Trophy } from 'lucide-react';

const Motivation: React.FC = () => {
  const cards = [
    {
      icon: <Heart className="text-red" size={32} />,
      title: "가장으로서의 책임감",
      desc: "당신의 건강은 가족의 행복과 직결됩니다. 아이의 성장을 끝까지 지켜보고, 아내와 건강한 노후를 보낼 자격이 당신에겐 있습니다."
    },
    {
      icon: <Shield className="text-orange" size={32} />,
      title: "생존을 위한 마지막 기회",
      desc: "4050은 내장지방이 혈관 질환으로 폭발하기 직전의 시기입니다. 지금 관리하지 않으면 나중에는 돈으로도 건강을 살 수 없습니다."
    },
    {
      icon: <Trophy style={{ color: '#FACC15' }} size={32} />,
      title: "잃어버린 자존감 회복",
      desc: "축 처진 뱃살 대신 단단한 몸을 가질 때, 당신의 자신감은 20대 시절로 돌아갑니다. 옷차림이 바뀌고 사람들의 시선이 바뀝니다."
    }
  ];

  return (
    <section style={{ 
      background: 'linear-gradient(180deg, var(--bg-dark) 0%, #0f172a 100%)',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>왜 지금 <span className="text-red">ET 탈출</span>이어야 합니까?</h2>
          <p className="text-gray" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            이것은 단순한 다이어트가 아닙니다.<br />
            나와 내 가족의 미래를 지키는 가장 가치 있는 투자입니다.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {cards.map((card, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'rgba(255,255,255,0.03)', 
              padding: '3rem 2rem', 
              borderRadius: '2rem', 
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'transform 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {card.icon}
              </div>
              <h3 style={{ marginBottom: '1.25rem' }}>{card.title}</h3>
              <p className="text-gray" style={{ lineHeight: 1.8 }}>{card.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ 
          marginTop: '5rem', 
          padding: '3rem', 
          backgroundColor: 'var(--secondary)', 
          borderRadius: '2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '4px', 
            height: '100%', 
            backgroundColor: 'var(--accent-orange)' 
          }}></div>
          <p style={{ fontSize: '1.5rem', fontWeight: 700, fontStyle: 'italic', color: 'var(--text-white)' }}>
            "운동할 시간이 없다는 핑계로 건강을 미루는 것은,<br />
            가족에게 짐을 넘기는 것과 같습니다."
          </p>
          <p style={{ marginTop: '1.5rem', color: 'var(--accent-orange)', fontWeight: 600 }}>
            - ET 탈출 솔루션 코치진 일동 -
          </p>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
