'use client';

import { useState } from 'react';

type Scene = 'intro' | 'research' | 'courtroom';

export default function Home() {
  const [currentScene, setCurrentScene] = useState<Scene>('intro');
  const [showEvidence, setShowEvidence] = useState(false);

  const renderScene = () => {
    switch (currentScene) {
      case 'intro':
        return (
          <div className="scene-container">
            <div className="bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-950 dark:to-orange-900 p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-900 dark:text-orange-100 text-center">
                🕌 ताजमहलचे सत्य
              </h1>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
                <h2 className="text-2xl font-bold mb-4 text-orange-800 dark:text-orange-200">
                  पहिला सीन: आग्रा - सत्याची सुरुवात
                </h2>

                <div className="space-y-4 text-gray-800 dark:text-gray-200">
                  <p className="text-lg leading-relaxed">
                    📍 <strong>ठिकाण:</strong> आग्रा, उत्तर प्रदेश
                  </p>

                  <p className="text-lg leading-relaxed">
                    विष्णुदास, एक अनुभवी टूर गाईड, पर्यटकांना ताजमहलच्या समोर उभा राहून
                    'लव्ह सिम्बॉल' (प्रेमाचे प्रतीक) म्हणून कथा सांगत आहे.
                  </p>

                  <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg border-l-4 border-orange-500">
                    <p className="italic text-gray-700 dark:text-gray-300">
                      <strong>पर्यटक:</strong> "विष्णुदास जी, मी ऐकले आहे की ताजमहलच्या
                      खाली 22 खोल्या बंद आहेत. त्यांच्यात काय आहे? आणि काही इतिहासकार
                      म्हणतात की हे मूळतः एक मंदिर होते. हे खरे आहे का?"
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed">
                    हा प्रश्न विष्णुदासच्या मनात खोलवर रुजतो. त्याला आता केवळ पर्यटकांना
                    खुश करणारी कथा सांगायची नाही, तर <strong className="text-orange-700 dark:text-orange-300">सत्य</strong> शोधायचे आहे.
                  </p>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
                    <p className="text-center font-semibold text-yellow-800 dark:text-yellow-200">
                      💭 विष्णुदासच्या मनात प्रश्न: "खरंच काय आहे ताजमहलमागचे सत्य?"
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setCurrentScene('research')}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:scale-105 text-xl"
                >
                  पुढे जा: पुराव्यांचा शोध →
                </button>
              </div>
            </div>
          </div>
        );

      case 'research':
        return (
          <div className="scene-container">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900 p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900 dark:text-blue-100 text-center">
                📚 पुराव्यांचा शोध
              </h1>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
                <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">
                  दुसरा सीन: संशोधन आणि पुरावे
                </h2>

                <div className="space-y-4 text-gray-800 dark:text-gray-200">
                  <p className="text-lg leading-relaxed">
                    विष्णुदास आपल्या घरी अनेक ऐतिहासिक पुस्तके वाचू लागतो:
                  </p>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg space-y-3">
                    <p className="flex items-start">
                      <span className="mr-2">📖</span>
                      <span><strong>पी.एन. ओक</strong> यांचे पुस्तक: "Taj Mahal: The True Story"</span>
                    </p>
                    <p className="flex items-start">
                      <span className="mr-2">📖</span>
                      <span>विविध ऐतिहासिक कागदपत्रे आणि संदर्भ</span>
                    </p>
                    <p className="flex items-start">
                      <span className="mr-2">📖</span>
                      <span>वास्तुशिल्प विश्लेषण अहवाल</span>
                    </p>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() => setShowEvidence(!showEvidence)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transform transition hover:scale-105"
                    >
                      {showEvidence ? '🔼 पुरावे लपवा' : '🔍 पुरावे पहा'}
                    </button>
                  </div>

                  {showEvidence && (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mt-4 space-y-4">
                      <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
                        🔍 विष्णुदासला सापडलेले पुरावे:
                      </h3>

                      <div className="space-y-3 text-gray-800 dark:text-gray-200">
                        <p className="flex items-start">
                          <span className="mr-2 text-2xl">🏛️</span>
                          <span><strong>वास्तुशिल्पीय त्रुटी:</strong> इमारतीमध्ये हिंदू मंदिराच्या
                          वास्तुशिल्पाची चिन्हे - कमळ फुलाचे नमुने, ओम चिन्हे</span>
                        </p>

                        <p className="flex items-start">
                          <span className="mr-2 text-2xl">🚪</span>
                          <span><strong>बंद खोल्या:</strong> 22 खोल्या जी सरकारने बंद केलेल्या
                          आहेत आणि कुणालाही प्रवेश नाही</span>
                        </p>

                        <p className="flex items-start">
                          <span className="mr-2 text-2xl">📜</span>
                          <span><strong>ऐतिहासिक कागदपत्रे:</strong> जयपूरच्या राजाच्या काळातील
                          कागदपत्रे ज्यात "तेजो महालय" चा उल्लेख आहे</span>
                        </p>

                        <p className="flex items-start">
                          <span className="mr-2 text-2xl">🔔</span>
                          <span><strong>गूढ चिन्हे:</strong> इमारतीच्या काही भागात संस्कृत श्लोक
                          आणि हिंदू देवतांची मूर्ती असल्याचे दावे</span>
                        </p>

                        <p className="flex items-start">
                          <span className="mr-2 text-2xl">⚖️</span>
                          <span><strong>कार्बन डेटिंग:</strong> काही भाग शाहजहानच्या काळापेक्षा
                          जुने असल्याचे दावे</span>
                        </p>
                      </div>

                      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg mt-4 border-l-4 border-red-500">
                        <p className="font-semibold text-red-800 dark:text-red-200">
                          💡 विष्णुदासचा निष्कर्ष: "या पुराव्यांवरून हे स्पष्ट होते की ताजमहलचे
                          रहस्य सरकारने लपवले आहे. मला न्यायालयात जाणे आवश्यक आहे!"
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentScene('intro')}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:scale-105 text-xl"
                >
                  ← मागे जा
                </button>
                <button
                  onClick={() => setCurrentScene('courtroom')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:scale-105 text-xl"
                >
                  पुढे जा: कोर्टरूम →
                </button>
              </div>
            </div>
          </div>
        );

      case 'courtroom':
        return (
          <div className="scene-container">
            <div className="bg-gradient-to-br from-red-100 to-red-50 dark:from-red-950 dark:to-red-900 p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-900 dark:text-red-100 text-center">
                ⚖️ न्यायाचे आव्हान
              </h1>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
                <h2 className="text-2xl font-bold mb-4 text-red-800 dark:text-red-200">
                  तिसरा सीन: कोर्टरूममध्ये आव्हान
                </h2>

                <div className="space-y-4 text-gray-800 dark:text-gray-200">
                  <p className="text-lg leading-relaxed">
                    विष्णुदास भारत सरकारच्या पुरातत्व विभाग (ASI) आणि इतर ऐतिहासिक
                    संस्थांना आव्हान देत, ताजमहलचे सत्य उघड करण्यासाठी न्यायालयात धाव घेतो.
                  </p>

                  <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg space-y-4">
                    <h3 className="text-xl font-bold text-red-800 dark:text-red-200">
                      📋 विष्णुदासच्या मागण्या:
                    </h3>

                    <div className="space-y-3">
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                        <p className="font-semibold mb-2">1️⃣ बंद खोल्यांचा प्रवेश</p>
                        <p className="text-sm">22 बंद खोल्यांना तज्ञांचा प्रवेश मिळावा आणि
                        त्यांची वैज्ञानिक तपासणी व्हावी</p>
                      </div>

                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                        <p className="font-semibold mb-2">2️⃣ कार्बन डेटिंग चाचणी</p>
                        <p className="text-sm">ताजमहलच्या विविध भागांची कार्बन डेटिंग चाचणी
                        करून खरे वय ठरवावे</p>
                      </div>

                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                        <p className="font-semibold mb-2">3️⃣ ऐतिहासिक कागदपत्रे सार्वजनिक करणे</p>
                        <p className="text-sm">सरकारकडे असलेली सर्व ऐतिहासिक कागदपत्रे
                        सार्वजनिक करावीत</p>
                      </div>

                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                        <p className="font-semibold mb-2">4️⃣ स्वतंत्र तज्ञ समिती</p>
                        <p className="text-sm">भारतीय आणि आंतरराष्ट्रीय तज्ञांची एक स्वतंत्र
                        समिती नेमावी</p>
                      </div>

                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                        <p className="font-semibold mb-2">5️⃣ पुरातत्व उत्खनन</p>
                        <p className="text-sm">ताजमहलच्या परिसरात वैज्ञानिक पुरातत्व उत्खनन
                        करण्याची परवानगी</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 p-6 rounded-lg mt-6 border-2 border-orange-300">
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-3">
                      ⚖️ न्यायाधीशांचा निर्णय:
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                      "विष्णुदास, तुमच्या मागण्या गंभीर आहेत. हे देशाच्या ऐतिहासिक वारसाशी
                      संबंधित आहे. आम्ही ASI आणि सरकारला नोटीस बजावतो. पुढील सुनावणी
                      30 दिवसांनंतर. सर्व पक्षांनी आपले पुरावे सादर करावेत."
                    </p>
                  </div>

                  <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-lg mt-4">
                    <p className="text-center text-lg font-semibold text-blue-800 dark:text-blue-200">
                      🎬 चित्रपट सुरू राहील...
                    </p>
                    <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
                      विष्णुदासचा सत्याचा शोध अजून सुरूच आहे. न्यायालयात काय होईल?
                      सरकार काय उत्तर देईल? सत्य समोर येईल का?
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentScene('research')}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:scale-105 text-xl"
                >
                  ← मागे जा
                </button>
                <button
                  onClick={() => setCurrentScene('intro')}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:scale-105 text-xl"
                >
                  🔄 सुरुवातीला परत जा
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Progress indicator */}
        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => setCurrentScene('intro')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              currentScene === 'intro'
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-600'
            }`}
          >
            1. आग्रा
          </button>
          <button
            onClick={() => setCurrentScene('research')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              currentScene === 'research'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
            }`}
          >
            2. संशोधन
          </button>
          <button
            onClick={() => setCurrentScene('courtroom')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              currentScene === 'courtroom'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-gray-600'
            }`}
          >
            3. कोर्टरूम
          </button>
        </div>

        {/* Main scene */}
        {renderScene()}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            🎬 विष्णुदासच्या सत्य शोधाची कथा - एक काल्पनिक चित्रपट कथानक
          </p>
          <p className="text-xs mt-2">
            सर्व पात्रे आणि घटना काल्पनिक आहेत
          </p>
        </div>
      </div>
    </main>
  );
}
