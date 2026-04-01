const CTA: React.FC = () => {
  return (
    <section style={{ 
      background: 'linear-gradient(180deg, var(--primary) 0%, var(--bg-dark) 100%)',
      paddingBottom: '6rem',
      paddingTop: '6rem'
    }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ 
          backgroundColor: 'var(--secondary)', 
          padding: '4rem 2.5rem', 
          borderRadius: '2rem',
          textAlign: 'center',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
          border: '1px solid rgba(249, 115, 22, 0.2)'
        }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>
            당신의 <span className="text-orange">새로운 인생</span>은<br />
            지금 이 순간부터 시작됩니다
          </h2>
          <p className="text-gray" style={{ marginBottom: '3rem', fontSize: '1.25rem', lineHeight: 1.6 }}>
            위에서 확인한 당신만의 맞춤형 루틴을 잊지 마십시오.<br />
            복잡한 이론보다 중요한 것은 <b>오늘 바로 실천하는 한 걸음</b>입니다.<br />
            내일의 당신이 오늘의 결정을 감사하게 될 것입니다.
          </p>

          <div style={{ 
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: 'rgba(249, 115, 22, 0.1)',
            borderRadius: '1rem',
            border: '1px solid var(--accent-orange)'
          }}>
            <p style={{ color: 'var(--accent-orange)', fontWeight: 700 }}>
              🚀 ET 탈출 골든타임을 놓치지 마십시오!
            </p>
          </div>
        </div>

        <footer style={{ marginTop: '6rem', textAlign: 'center', color: 'var(--text-gray)', fontSize: '0.875rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>© 2026 ET-ESCAPE Solution. All Rights Reserved.</p>
          <p>본 페이지는 중년 남성의 건강 증진을 위해 제작된 정보 제공용 콘텐츠입니다.</p>
        </footer>
      </div>
    </section>
  );
};

export default CTA;
