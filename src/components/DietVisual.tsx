const DietVisual: React.FC = () => {
  const diets = [
    {
      kcal: "1,500kcal",
      title: "강력한 감량",
      description: "탄수화물을 반으로 줄이고, 포만감은 채소로 채우는 식단입니다.",
      menu: ["현미밥 1/2공기", "닭가슴살 또는 생선 한 토막", "산처럼 쌓인 쌈채소", "맑은 두부 국"],
      color: "var(--accent-red)",
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600" // Healthy bowl
    },
    {
      kcal: "1,800kcal",
      title: "표준 감량",
      description: "일반적인 백반집에서 밥을 두 숟갈 정도 남기고, 단백질 반찬을 넉넉히 먹는 수준입니다.",
      menu: ["잡곡밥 2/3공기", "제육볶음(살코기 위주) 1인분", "계란말이 3조각", "나물 반찬 2가지"],
      color: "var(--accent-orange)",
      imageUrl: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=600" // Korean table
    },
    {
      kcal: "2,100kcal",
      title: "유지 및 서서히 감량",
      description: "든든하게 먹되, 국물과 튀김만 피해도 내장지방은 더 쌓이지 않습니다.",
      menu: ["잡곡밥 한 공기", "순두부찌개(건더기 위주)", "고등어구이 반 마리", "배추김치"],
      color: "#10B981",
      imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600" // Hearty meal
    }
  ];

  return (
    <section style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>칼로리별 식사량 체감하기</h2>
          <p className="text-gray">숫자보다 직관적인 식단 예시로 어느 정도 먹어야 하는지 확인하십시오.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {diets.map((diet, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'var(--primary)', 
              borderRadius: '1.5rem', 
              overflow: 'hidden',
              border: `1px solid ${diet.color}30`
            }}>
              <div style={{ 
                backgroundColor: diet.color, 
                padding: '1.5rem', 
                textAlign: 'center',
                color: 'white'
              }}>
                <h3 style={{ marginBottom: '0.25rem', color: 'white' }}>{diet.kcal} 구간</h3>
                <p style={{ fontWeight: 700 }}>{diet.title}</p>
              </div>
              
              <div style={{ padding: '2rem' }}>
                {/* Updated Image Part */}
                <div style={{ 
                  width: '100%', 
                  height: '200px', 
                  backgroundColor: 'var(--secondary)', 
                  borderRadius: '1rem',
                  marginBottom: '1.5rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <img 
                    src={diet.imageUrl} 
                    alt={diet.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>

                <p style={{ fontWeight: 600, marginBottom: '1rem', minHeight: '3em' }}>"{diet.description}"</p>
                
                <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '0.75rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-gray)', marginBottom: '0.75rem' }}>권장 구성:</p>
                  <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', lineHeight: 1.8 }}>
                    {diet.menu.map((item, i) => <li key={i}>• {item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DietVisual;
