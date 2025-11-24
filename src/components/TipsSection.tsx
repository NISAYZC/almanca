const TipsSection = () => {
  const tips = [
    {
      title: "Her gün 10 dakika, ama düzenli",
      description: "Günde sadece 10 dakika ayırmak, haftada bir kez uzun süre çalışmaktan çok daha etkilidir. Düzenli pratik yapmak öğrenmeyi kalıcı hale getirir.",
      icon: "📅"
    },
    {
      title: "Bir kelimeyi ezberlerken onu cümlede kullan",
      description: "Yalnızca kelimeyi ezberlemek yerine, onu bir cümle içinde kullanmayı deneyin. Bu, kelimenin anlamını ve kullanımını daha iyi anlamanıza yardımcı olur.",
      icon: "💬"
    },
    {
      title: "Öğrendiğin cümleleri sesli tekrar et",
      description: "Almanca cümleleri yüksek sesle tekrar etmek, telaffuzunuzu geliştirir ve kelimeleri daha iyi hatırlamanıza yardımcı olur.",
      icon: "🔊"
    },
    {
      title: "Hatalarınızdan öğrenin",
      description: "Hata yapmaktan korkmayın. Her hata, öğrenme sürecinin bir parçasıdır. Oyunlardaki yanlış cevaplarınızı gözden geçirin ve doğru cevapları öğrenin.",
      icon: "📝"
    },
    {
      title: "Günlük hayatınızla bağlantı kurun",
      description: "Öğrendiğiniz kelimeleri günlük hayatınızda kullanmayı deneyin. Örneğin, kampüsteki yerleri Almanca isimleriyle düşünün.",
      icon: "🔗"
    },
    {
      title: "Oyunları tekrar oynayın",
      description: "Aynı oyunları birden fazla kez oynamak, öğrendiklerinizi pekiştirir. Her seferinde daha iyi skorlar elde etmeye çalışın.",
      icon: "🎮"
    }
  ];

  return (
    <section id="tips" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          İpuçları
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {tip.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;

