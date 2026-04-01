import { Briefcase, Utensils, Beer, TrendingDown } from 'lucide-react';

const ActionPlan: React.FC = () => {
  const plans = [
    {
      icon: <Briefcase className="text-orange" size={28} />,
      title: "출근길 & 업무 중",
      steps: [
        "믹스 커피를 끊고 아메리카노로 바꾸십시오. (한 달 뱃살 1cm 감량)",
        "엘리베이터 대신 계단으로 3개 층만 걸어 올라가십시오.",
        "하체 근육이 깨어나며 하루 종일 칼로리 연소 효율이 높아집니다."
      ]
    },
    {
      icon: <Utensils style={{ color: '#10B981' }} size={28} />,
      title: "점심시간 (팀원 식사 시)",
      steps: [
        "메뉴 선택권이 없다면 '탄수화물 1/3 남기기' 룰만 지키십시오.",
        "국밥을 먹을 때는 밥을 국에 말지 말고 따로 드십시오.",
        "국물은 젓가락으로 건더기만 건져 드십시오. (나트륨/지방 차단)"
      ]
    },
    {
      icon: <Beer className="text-red" size={28} />,
      title: "저녁 회식 & 술자리",
      steps: [
        "안주 선택: 삼겹살보다는 목살, 치킨보다는 구운 통닭이나 회!",
        "술 한 잔 마실 때마다 반드시 물 한 잔을 마셔 희석하십시오.",
        "볶음밥이나 냉면 등 탄수화물 마무리는 '독'입니다. 절대 피하십시오."
      ]
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>직장인 100% 실전 적용 액션 플랜</h2>
          <p className="text-gray">바쁜 일상에서도 무리 없이 실천할 수 있는 항목들로 구성했습니다.</p>
        </div>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {plans.map((plan, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'var(--primary)', 
              padding: '2.5rem', 
              borderRadius: '1.5rem', 
              display: 'flex', 
              flexDirection: 'column',
              gap: '1.5rem',
              border: '1px solid rgba(255,255,255,0.03)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: 'rgba(255,255,255,0.05)', 
                  borderRadius: '1rem', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center' 
                }}>
                  {plan.icon}
                </div>
                <h3 style={{ marginBottom: 0 }}>{plan.title}</h3>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {plan.steps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <TrendingDown size={18} className="text-gray" style={{ marginTop: '0.25rem' }} />
                    <p style={{ color: 'var(--text-gray)', fontSize: '1rem', lineHeight: 1.5 }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          marginTop: '4rem', 
          textAlign: 'center', 
          padding: '2rem', 
          backgroundColor: 'rgba(249, 115, 22, 0.05)', 
          borderRadius: '1.5rem',
          border: '1px dashed var(--accent-orange)'
        }}>
          <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            "술은 죄가 없지만, 술과 함께 먹는 안주는 <span className="text-red">100% 뱃살</span>로 직행합니다."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActionPlan;
